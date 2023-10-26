import React from 'react';
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <header className='nav-container'>
            <Link className="logo" to="/myportfolio">Ag</Link>
            <nav className='nav-menu'>
                <Link to="/aboutMe" className="link">About</Link>
                <Link to="/services" className="link">Services</Link>
                <Link to="/projects" className="link">Projects</Link>
            </nav>
        </header>
    )
}
export default Nav