import React from 'react';
import { Link } from 'react-router-dom';

// add protected routes to question_counter, ask_questions
const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <Link to='/questions/ask' >Ask Question</Link>
    </div>
  );
};

export default Sidebar;
