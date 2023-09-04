import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
// Use formick with class components

function SignUp() {

    function initialValues() {
        return {
            email: "",
            username: "",
            password: "",
            confirmPassword: ""
        }
    }

    function validate(values) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        let errors = {};

        if (values.username === "") {
            errors.username = "username is missing";
        } else if (!usernameRegex.test(values.username)) {
            errors.username = "username must only contain characters and numbers";
        } else if (values.username.length > 25) {
            errors.password = "username length must be less than 25 characters";
        }

        if (values.email === "") {
            errors.email = "Email is missing";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email";
        }
        if (values.password === "") {
            errors.password = "Password is missing";
        } else if (values.password.length < 6) {
            errors.password = "Password must be 6 characters at minimum";
        }
        if (values.confirmpassword === "") {
            errors.confirmPassword = "Confirm Password is missing";
        } else if (values.confirmpassword !== values.password) {
            errors.confirmPassword = "Confirm Password must match passport";
        }
        return errors;
    }

    function submitSignUp(data) {
        console.log(data);
    }
    return (
        <div className="sign-up">
            <Formik
                initialValues={initialValues()}
                validate={validate.bind(this)}>
                {
                    props => (
                        <Form onSubmit={submitSignUp}>
                            <div>
                                <label>
                                    Email:
                                </label>
                                <Field type="text" name="email" placeholder="Email" />
                                <ErrorMessage
                                    component="div"
                                    name="email"
                                    className="invalid-feedback"
                                />
                            </div>
                            <br></br>
                            <div>
                                <label>
                                    User name:
                                </label>
                                <Field type="text" name="username" placeholder="User name" />
                                <ErrorMessage
                                    component="div"
                                    name="username"
                                    className="invalid-feedback"
                                />
                            </div>
                            <br></br>
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
                            <br></br>
                            <div>
                                <label>
                                    Confirm:
                                </label>
                                <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
                                <ErrorMessage
                                    component="div"
                                    name="confirmPassword"
                                    className="invalid-feedback"
                                />
                            </div>
                            <br></br>
                            <label>
                                <button type="submit" className="button-primary">Sign Up</button>
                            </label>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default SignUp