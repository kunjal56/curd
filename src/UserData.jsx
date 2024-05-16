import React, { useState } from 'react';

function UserData() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing user
      const updatedUsers = [...users];
      updatedUsers[editIndex] = { name, age };
      setUsers(updatedUsers);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new user
      setUsers([...users, { name, age }]);
    }

    setName('');
    setAge('');
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleEdit = (index) => {
    const userToEdit = users[index];
    setName(userToEdit.name);
    setAge(userToEdit.age);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>Input Data:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>

      <h2>Users List:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserData;
