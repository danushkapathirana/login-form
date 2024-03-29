import React, { useEffect, useReducer, useState } from "react"

import Card from "../UI/Card/Card"
import Button from "../UI/Button/Button"

import classes from "./Login.module.css"

const emailReducer = (state, action) => {
    if(action.type === "INPUT_VALUE") {
        return {value: action.value, isValid: action.value.includes("@")}
    }

    if(action.type === "INPUT_BLUR") {
        return {value: state.value, isValid: state.value.includes("@")}
    }
    return {value: state.value, isValid: null}
}

const passwordReducer = (state, action) => {
    if(action.type === "INPUT_VALUE") {
        return {value: action.value, isValid: action.value.trim().length > 6}
    }

    if(action.type === "INPUT_BLUR") {
        return {value: state.value, isValid: state.value.trim().length > 6}
    }
    return {value: state.value, isValid: null}
}

const Login = (props) => {
    const[emailState, dispatchEmail] = useReducer(emailReducer, {value: "", isValid: null})
    const[passwordState, dispatchPassword] = useReducer(passwordReducer, {value: "", isValid: null})
    const[formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        // check form validation after every one second not every key stroke, think http request
        const formValidTimer = setTimeout(() => {
            setFormIsValid(emailState.isValid && passwordState.isValid)
        }, 1000)

        // cleanup function
        return () => {
            clearTimeout(formValidTimer)
        }
    }, [setFormIsValid, emailState.isValid, passwordState.isValid])

    const emailChangeHandler = (event) => {
        dispatchEmail({type: "INPUT_VALUE", value: event.target.value})
    }

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: "INPUT_VALUE", value: event.target.value})
    }

    const validateEmailHandler = () => {
        dispatchEmail({type: "INPUT_BLUR"})
    }

    const validatePasswordHandler = () => {
        dispatchPassword({type: "INPUT_BLUR"})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onLogin(emailState.value, passwordState.value)
    }

    return(
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>

                <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>

                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>Login</Button>
                </div>
            </form>
        </Card>
    )
}

export default Login


/**
 * note
 * 
 * cleanup function runs before every new side effect function execution (except for the first time) and before the component is unmounted
 * for the dependency array; add what you are using inside the useEffect
 */
