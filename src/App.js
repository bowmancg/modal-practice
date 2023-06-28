import React, { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import Card from './components/Card';

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
      <Card>
      <AddUser onSaveUserData={saveUserDataHandler} onAddUser={addUserHandler} />
      </Card>
    </div>
  );
}

export default App;
