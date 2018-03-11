import React from 'react';
import { Link } from 'react-router-dom';

// USER STORE NOT UPDATING AFTER QUESTION CREATION CHECK REDUCER!
const UserTag = (props) => {
  return(
    <div className='question-user-tag'>
      <Link className='user-tag-name' to={`/users/${props.user.id}`} >{ props.user.name }</Link>
    </div>
  );
};

export default UserTag;
