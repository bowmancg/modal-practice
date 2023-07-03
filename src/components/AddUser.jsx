import React, { useState, useRef } from "react";
import './AddUser.css'
import Button from "./UI/Button";
import Card from "./UI/Card";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [error, setError] = useState()

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredUser = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
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
        nameInputRef.current.value = '' // DO NOT DO THIS!
        ageInputRef.current.value = ''  // DO NOT DO THIS!
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
                        <input id="username" type="text" ref={nameInputRef} />
                    </div>
                    <div>
                        <label htmlFor="age">Age (Years)</label>
                        <input id="age" type="text" ref={ageInputRef} />
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