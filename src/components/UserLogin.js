import React from "react"
import users from "../Users"

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            id: "",
            password: "",
            loggedIn: false
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
            if (users[i].id === this.state.id) {
                console.log(users[i].id, this.state.id)
                if (users[i].password === this.state.password) {
                    console.log(users[i].password, users[i].password)
                    this.setState({ loggedIn: true })
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
                            Email:
                            <input type="text" name="id" value={this.state.id} onChange={this.onInputFields} placeholder="Email"/>
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" value={this.state.password} onChange={this.onInputFields} placeholder="Password"/>
                        </label>
                        <button type="submit" onClick={this.onLoginHandler}>Login</button>
                    </form>
                    <button onClick={this.props.togglepop}>Close</button>
                </div>
            </div>
        )
    }
}

export default Login