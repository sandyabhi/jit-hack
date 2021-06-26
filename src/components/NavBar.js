import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <a className="active"><Link to="/">Home</Link></a>
            <a className="active"><Link to="/more">More</Link></a>
            <a className="active"><Link to="/about">About</Link></a>
        </div>
    )
}

export default NavBar
