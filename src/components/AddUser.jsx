import React, { useState } from "react";
import './AddUser.css'
import Button from "./UI/Button";
import Card from "./UI/Card";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Helpers/Wrapper";

const AddUser = (props) => {
    const [enteredUser, setEnteredUser] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const userNameChangeHandler = (event) => {
        setEnteredUser(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    // const saveUserDataHandler = (enteredUserData) => {
    //     const userData = {
    //         ...enteredUserData,
    //         id: Math.random().toString()
    //     }
    //     props.onAddUser(userData)
    // }

    const submitHandler = (event) => {
        event.preventDefault()
        if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Enter a valid name and age.'
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Enter a valid age.'
            })
            return
        }
        console.log(enteredUser, enteredAge)
        props.onAddUser(enteredUser, enteredAge)
        setEnteredUser('')
        setEnteredAge('')
    }

    const errorHandler = () => {
        setError(null)
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
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
        </Wrapper>
    )
}

export default AddUser