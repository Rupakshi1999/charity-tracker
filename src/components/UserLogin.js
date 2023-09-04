import React from "react"
import users from "../Users"
import { Formik, Form, Field, ErrorMessage } from "formik";

function Login(props) {
    function onLoginHandler(data) {
        // for (let i = 0; i < users.length; i++) {
        //     if (state.username === "" || state.password === "") {
        //         break
        //     }
        //     if (users[i].username === state.username && state.username) {
        //         console.log(users[i].username, state.username)
        //         if (users[i].password === state.password) {
        //             console.log(users[i].password, users[i].password)
        //             console.log("signed in")
        //         }
        //     }
        // }
        console.log(data)

    }

    function initialValues() {
        return {
            username: "",
            password: ""
        }
    }

    function validate(values) {
        // const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        let errors = {};

        if (values.username === "") {
            errors.username = "username is missing";
        } else if (!usernameRegex.test(values.username)) {
            errors.username = "username must only contain characters and numbers";
        }
        if (values.password === "") {
            errors.password = "Password is missing";
        } else if (values.password.length < 6) {
            errors.password = "Password must be 6 characters at minimum";
        }
        return errors;
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <Formik
                    initialValues={initialValues()}
                    validate={validate.bind(this)}>
                    {
                        props => (
                            <Form onSubmit={onLoginHandler}>
                                <div>
                                    <label>
                                        Username
                                    </label>
                                    <Field type="text" name="username" placeholder="Username" />
                                    <ErrorMessage
                                        component="div"
                                        name="username"
                                        className="invalid-feedback"
                                    />
                                </div>

                                <div>
                                    <label>
                                        Password:
                                    </label>
                                    <Field type="password" name="password" placeholder="Password" />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <button type="submit">Login</button>
                            </Form>
                        )
                    }
                </Formik>
                <button onClick={props.togglepop}>Close</button>
            </div>
        </div>
    )
}

export default Login