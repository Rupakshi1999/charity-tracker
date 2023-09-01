import React, {useState} from 'react'
 import { Formik } from 'formik';
// Use formick with class components

class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            username:"",
            email:"",
            password:"",
            confirmpassword:""
        }
        this.onInputFields = this.onInputFields.bind(this)
    }

    onInputFields(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    submitSignUp() {
        console.log("form submitted")
    }


    render() {
        return (
            <div className="sign-up">
                <form onSubmit={this.submitSignUp}>
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.onInputFields} placeholder="Email" />
                    </label>
                    <br></br>
                    <label>
                        User name:
                        <input type="text" name="username" value={this.state.username} onChange={this.onInputFields} placeholder="User name" />
                    </label>
                    <br></br>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.onInputFields} placeholder="Password" />
                    </label>
                    <br></br>
                    <label>
                        Confirm:
                        <input type="password" name="confirmPassword" value={this.state.confirmpassword} onChange={this.onInputFields} placeholder="Confirm Password" />
                    </label>
                    <br></br>
                    <label>
                    <button type="submit" className="button-primary">Sign Up</button>
                    </label>
                </form>
            </div>
        )
    }
}

export default SignUp