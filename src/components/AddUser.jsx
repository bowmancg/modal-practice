import React, { useState } from "react";

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
        <div>

        </div>
    )
}

export default AddUser