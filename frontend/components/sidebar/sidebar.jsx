import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
        <Link to='/questions/ask' >Ask Question</Link>
    </div>
  );
};

// {/* <Route exact path='/questions/:questionId' component={FrontSidebar} /> */}
// {/* <Route exact path='/questions' component={QuestionsSidebar} /> */}
// {/* <Route exact path='/' component={FrontSidebar} /> */}
export default Sidebar;
