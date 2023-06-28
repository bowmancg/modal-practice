import React, { useState } from "react";
import './AddUser.css'
import Button from "./Button";

const AddUser = (props) => {
    const [enteredUser, setEnteredUser] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

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

    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Username</label>
                <input type="text" value={enteredUser} />
            </div>
            <div>
                <label>Age</label>
                <input type="text" value={enteredAge} />
            </div>
            <div>
                <Button type="submit">Add</Button>
            </div>
        </form>
    )
}

export default AddUser