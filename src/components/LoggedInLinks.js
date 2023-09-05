import React from "react"
import CharityForm from "./CharityForm"
import MyDonations from "./MyDonations"
import { Link } from "react-router-dom"
import { logout } from "../authentication"

class LoggedInLinks extends React.Component {
    constructor() {
        super()
        this.state = {
            toggleDonationForm: false
        }
        this.toggleDonationForm = this.toggleDonationForm.bind(this)
    }

    toggleDonationForm() {
        this.setState(prevState => {
            if (prevState.toggleDonationForm) {
                return { toggleDonationForm: false }
            }
            return {
                toggleDonationForm: true
            }
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/* Only show this if someone is logged in */}
                        <Link to="/mydonations">History</Link>
                    </li>
                    <li>
                        {/* Only show this if someone is logged in */}
                        <button onClick={this.toggleDonationForm}>Add Donation</button>
                        {this.state.toggleDonationForm && <CharityForm togglepop={this.toggleDonationForm} />}
                    </li>
                    <li>
                        <button href='#' onClick={() => { logout() }}>Log out</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LoggedInLinks