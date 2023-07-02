import React, { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UsersList';
import Navbar from './components/UI/Navbar';

const App = (props) => {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: username, age: age, id: Math.random().toString() }]
    })
  }

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
