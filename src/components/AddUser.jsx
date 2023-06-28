import React, { useState } from "react";
import './AddUser.css'
import Button from "./UI/Button";
import Card from "./UI/Card";

const AddUser = (props) => {
    const [enteredUser, setEnteredUser] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const userNameChangeHandler = (event) => {
        setEnteredUser(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        props.onAddUser(userData)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
            return
        }
        if (+enteredAge < 1) {
            return
        }
        console.log(enteredUser, enteredAge)
        const userData = {
            username: enteredUser,
            age: +enteredAge,
        }
        saveUserDataHandler(userData)
        setEnteredUser('')
        setEnteredAge('')
    }
    return (
        <Card>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUser} onChange={userNameChangeHandler} />
            </div>
            <div>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="text" value={enteredAge} onChange={ageChangeHandler} />
            </div>
            <div>
                <Button type="submit">Add</Button>
            </div>
        </form>
        </Card>
    )
}

export default AddUser