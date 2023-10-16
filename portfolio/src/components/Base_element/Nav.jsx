import React from 'react';
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <nav className='nav-container'>
            <Link className="logo" to="/"> Ag</Link>
            <div className='nav-menu'>
                <Link to="/projects" className="link">Projects</Link>
                <Link to="/services" className="link">Services</Link>
                <Link to="/aboutMe" className="link">About</Link>
            </div>
        </nav>
    )
}
export default Nav