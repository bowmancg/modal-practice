import React, { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UsersList';

const App = (props) => {
  const data = [
    {
      id: 'e1',
      username: 'Test Name',
      age: 23,
    }
  ]

  const [users, setUsers] = useState(data)

  const addUserHandler = (user) => {
    setUsers((prevUser) => {
      return [user, ...prevUser]
    })
  }

  const saveUserDataHandler = () => {
    props.onSaveUserData()
  }
  return (
    <div className="App">
      <header>
        
      </header>
      <AddUser onSaveUserData={saveUserDataHandler} onAddUser={addUserHandler} />
      <UserList users={[]} />
    </div>
  );
}

export default App;
