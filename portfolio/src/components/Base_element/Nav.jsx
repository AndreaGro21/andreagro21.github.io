import React from 'react';
import { Link } from 'react-router-dom'
function Nav (){
return (
    <nav className='nav-container'>
        <Link to="/"> <img /></Link>
            <div className='nav-menu'>
                <Link to="/" className="link">Accueil</Link>
                <Link to="/AboutMe" className="link">About</Link>
            </div>
</nav>
)
}
export default Nav