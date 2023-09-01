import React from "react"
import Login from "./UserLogin"
import CharityForm from "./CharityForm"
import '../App.css'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      toggleloginWindow: false,
      toggleDonationForm:false
    }
    this.togglepop = this.togglepop.bind(this)
    this.toggleDonationForm = this.toggleDonationForm.bind(this)
  }

  togglepop() {
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
        <div className="logo">Charity tracker</div>
        <nav className="main-nav">
          <ul>
            <button onClick={this.togglepop}>Log in</button>
            {this.state.toggleloginWindow && <Login togglepop={this.togglepop} />}
            {/* <li><a href="#">Home</a></li> */}
            <button onClick={this.toggleDonationForm}>Donation</button>
            {this.state.toggleDonationForm && <CharityForm togglepop={this.toggleDonationForm} />}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header