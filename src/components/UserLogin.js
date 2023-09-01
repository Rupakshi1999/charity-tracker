import React from "react"
import users from "../Users"

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
        }
        this.onLoginHandler = this.onLoginHandler.bind(this)
        this.onInputFields = this.onInputFields.bind(this)
    }

    onInputFields(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    onLoginHandler() {
        for (let i = 0; i < users.length; i++) {
            if(this.state.username ==="" || this.state.password ===""){
                break
            }
            if (users[i].username === this.state.username && this.state.username) {
                console.log(users[i].username, this.state.username)
                if (users[i].password === this.state.password) {
                    console.log(users[i].password, users[i].password)
                    console.log("signed in")
                }
            }
        }

    }

    render() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <h2>Login</h2>
                    <form onSubmit={this.onLoginHandler}>
                        <label>
                            Username:
                            <input type="text" name="username" value={this.state.username} onChange={this.onInputFields} placeholder="Username"/>
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" value={this.state.password} onChange={this.onInputFields} placeholder="Password"/>
                        </label>
                        <button type="submit">Login</button>
                    </form>
                    <button onClick={this.props.togglepop}>Close</button>
                </div>
            </div>
        )
    }
}

export default Login