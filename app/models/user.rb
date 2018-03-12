class User < ApplicationRecord
  after_initialize :ensure_session_token

  validates :email, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, :email, uniqueness: true
  validates :email, email: true

  attr_reader :password

  has_many :questions,
    class_name: :Question,
    foreign_key: :author_id,
    primary_key: :id

  has_many :answers,
    class_name: :Answer,
    foreign_key: :author_id,
    primary_key: :id

  def self.generate_session_token
    begin
      token = SecureRandom::urlsafe_base64(16)
    end while User.exists?(session_token: token)
    token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_name
    name = 'user'
    number = rand(0..999999).to_s
    name += number
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
