import React, { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import Card from './components/Card';

const App = (props) => {
  const [users, setUsers] = useState({})

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
      <Card className=''>
      <AddUser onSaveUserData={saveUserDataHandler} onAddUser={addUserHandler} />
      </Card>
    </div>
  );
}

export default App;
