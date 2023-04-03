import React from 'react';

function UserInfo(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default UserInfo;