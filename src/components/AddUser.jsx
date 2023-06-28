import React, { useState } from "react";
import './AddUser.css'
import Button from "./UI/Button";

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
        const userData = {
            name: enteredUser,
            age: +enteredAge,
        }
        saveUserDataHandler(userData)
        setEnteredUser('')
        setEnteredUser('')
    }
    return (
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
    )
}

export default AddUser