import React from 'react';
import useResources from './useResources';

const UserList = () => {
  const users = useResources('users');

  return (
    <ul>
      {users.map(users => (
        <li key={users.id}>{users.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
