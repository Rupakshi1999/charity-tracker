import React from "react"
import { Link } from "react-router-dom"
import Login from "./UserLogin"

class LoggedOutLinks extends React.Component {
    constructor() {
        super()
        this.state = {
            toggleloginWindow: false
        }
        this.toggleLoginForm = this.toggleLoginForm.bind(this)
    }

    toggleLoginForm() {
        console.log("toggle pop called")
        this.setState(prevState => {
            if (prevState.toggleloginWindow) {
                return { toggleloginWindow: false }
            }
            return {
                toggleloginWindow: true
            }
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <button onClick={this.toggleLoginForm}>Log in</button>
                        {console.log(this.state)}
                        {this.state.toggleloginWindow && <Login togglepop={this.toggleLoginForm} />}
                    </li>
                    {/* Only show this if someone is not logged in */}
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LoggedOutLinks