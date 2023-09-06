import React from "react"
import LoggedInLinks from "./LoggedInLinks"
import LoggedOutLinks from "./LoggedOutLinks"
import '../App.css'
import { Link, useNavigate } from "react-router-dom"
import mylogo from "../logos/MyLogo.jpeg"
import { useAuth } from "../authentication"

const Header = () => {
  const [logged] = useAuth()
  const navigate = useNavigate()

  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">
          <img src={mylogo} alt="Logo Fruit Platter" />
        </Link>
      </div>
      <nav className="main-nav">
        {logged ? <LoggedInLinks logoutRedirect = {navigate}/> : <LoggedOutLinks />
        }
      </nav>
    </header>
  )
}

export default Header