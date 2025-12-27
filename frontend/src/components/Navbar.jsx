import React from 'react'
import './css/Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const location = useLocation()
    const user = useSelector((state) => state.auth.user)
    if (!user) {
        return (
            <nav className='navbar'>
                <div className="leftNav">
                    <h3>EazyServ</h3>
                    <div className="searchBar">
                        <input type="search" name='search' placeholder='What service do you need?' />
                    </div>
                </div>
                <div className="rightNav">
                    <ul className='navlinks'>
                        <li><Link to="/" className={`navlink ${location.pathname === '/' ? "active" : ""}`}>Home</Link></li>
                        <li><Link to="/about" className={`navlink ${location.pathname === '/about' ? "active" : ""}`}>About</Link></li>
                        <li><Link to="/services" className={`navlink ${location.pathname === '/services' ? "active" : ""}`}>Services</Link></li>
                        <li><Link to="/contact" className={`navlink ${location.pathname === '/contact' ? "active" : ""}`}>Contact</Link></li>
                    </ul>
                    <Link to={'/login'} className='primaryBtn'>Login</Link>
                </div>
            </nav>
        )
    }
    if (user.role === "customer") {
        return (
            <nav className='navbar customerNavbar'>
                <div className="leftNav">
                    <h3>EazyServ</h3>
                    <div className="searchBar">
                        <input type="search" name='search' placeholder='What service do you need?' />
                    </div>
                </div>
                <div className="rightNav">
                    <ul className='navlinks'>
                        <li><Link to="/" className={`navlink ${location.pathname === '/' ? "active" : ""}`}>Home</Link></li>
                        <li><Link to="/services" className={`navlink ${location.pathname === '/services' ? "active" : ""}`}>Services</Link></li>
                        <li><Link to="/mybookings" className={`navlink ${location.pathname === '/mybookings' ? "active" : ""}`}>My Bookings</Link></li>
                        <li><Link to="/notifications" className={`navlink ${location.pathname === '/notifications' ? "active" : ""}`}>Notifications</Link></li>
                    </ul>
                    <Link to={'/profile'}><FontAwesomeIcon icon={faUser} /></Link>
                </div>
            </nav>
        )
    }
    if (user.role === "worker") {
        return (
            <nav className='navbar workerNavbar'>
                <div className="leftNav">
                    <h3>EazyServ</h3>
                    <div className="searchBar">
                        <input type="search" name='search' placeholder='What service do you need?' />
                    </div>
                </div>
                <div className="rightNav">
                    <ul className='navlinks'>
                        <li><Link to="/" className={`navlink ${location.pathname === '/' ? "active" : ""}`}>Home</Link></li>
                        <li><Link to="/services" className={`navlink ${location.pathname === '/services' ? "active" : ""}`}>Services</Link></li>
                        <li><Link to="/myjobs" className={`navlink ${location.pathname === '/about' ? "active" : ""}`}>My Jobs</Link></li>
                        <li><Link to="/notifications" className={`navlink ${location.pathname === '/notifications' ? "active" : ""}`}>Notifications</Link></li>
                    </ul>
                    <Link to={'/profile'}><FontAwesomeIcon icon={faUser} /></Link>
                </div>
            </nav>
        )
    }
}

export default Navbar
