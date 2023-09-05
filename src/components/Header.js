import React from "react"
import LoggedInLinks from "./LoggedInLinks"
import LoggedOutLinks from "./LoggedOutLinks"
import '../App.css'
import { Link } from "react-router-dom"
import mylogo from "../logos/MyLogo.jpeg"
import { useAuth } from "../authentication"

const Header = () => {
  const [logged] = useAuth()
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">
          <img src={mylogo} alt="Logo Fruit Platter" />
        </Link>
      </div>
      <nav className="main-nav">
        {logged ? <LoggedInLinks /> : <LoggedOutLinks />
        }
      </nav>
    </header>
  )
}

export default Header