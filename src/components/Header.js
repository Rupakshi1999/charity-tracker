import React from "react"
import Login from "./UserLogin"
import CharityForm from "./CharityForm"
import '../App.css'
import { Link } from "react-router-dom"
import mylogo from "../logos/MyLogo.jpeg"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      toggleloginWindow: false,
      toggleDonationForm: false
    }
    this.togglepop = this.togglepop.bind(this)
    this.toggleDonationForm = this.toggleDonationForm.bind(this)
  }

  togglepop() {
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
      <header className="site-header">
        <div className="logo">
          <Link to="/">
            <img src={mylogo} alt="Logo Fruit Platter" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <button onClick={this.togglepop}>Log in</button>
              {this.state.toggleloginWindow && <Login togglepop={this.togglepop} />}
            </li>
            {/* Only show this if someone is not logged in */}
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              {/* Only show this if someone is logged in */}
              <button onClick={this.toggleDonationForm}>Donation</button>
              {this.state.toggleDonationForm && <CharityForm togglepop={this.toggleDonationForm} />}
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header