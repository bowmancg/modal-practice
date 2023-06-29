import React, { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UsersList';

const App = (props) => {
  const [usersList, setUsersList] = useState([])
  const data = [
    {
      id: 'e1',
      username: 'Test Name',
      age: 23,
    }
  ]

  const [users, setUsers] = useState(data)

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: username, age: age, id: Math.random().toString()}]
    })
  }

  return (
    <div className="App">
      <header>
        
      </header>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
