import React from 'react';
import { Link } from 'react-router-dom';

const UserTag = (props) => {
  return(
    <li>
      <Link to={`/users/${props.user.id}`} >{ props.user.name }</Link>
      {props.user.icon}
    </li>
  );
};

export default UserTag;
