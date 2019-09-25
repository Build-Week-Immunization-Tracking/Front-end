import React from 'react';

const User = props => {
  const { user, deleteUser, changeUserToEdit } = props;

  return (
    <div>
      <h2>{user.firstName}</h2>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <button onClick={() => changeUserToEdit(user)}>Edit</button>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  )
}

export default User;