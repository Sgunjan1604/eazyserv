import React from 'react'
import './css/Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const navbarLinks = {
        public: [
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/contact', label: 'Contact' }
        ],

        customer: [
            { path: '/', label: 'Home' },
            { path: '/services', label: 'Services' },
            { path: '/mybookings', label: 'My Bookings' },
            { path: '/notifications', label: 'Notifications' }
        ],

        worker: [
            { path: '/', label: 'Home' },
            { path: '/services', label: 'Services' },
            { path: '/myjobs', label: 'My Jobs' },
            { path: '/notifications', label: 'Notifications' }
        ]
    }
    const location = useLocation()
    const user = useSelector((state) => state.auth.user)

    const role = user?.role || "public"
    const links = navbarLinks[role]
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
                    {links.map(({ path, label }) => (
                        <li key={path}><Link to={path} className={`navlink ${location.pathname === path ? "active" : ""}`}>{label}</Link></li>
                    ))}
                </ul>
                {role === 'public' ? (
                    <Link to={'/login'} className='primaryBtn'>Login</Link>
                ) : (
                    <Link to={'/profile'}><FontAwesomeIcon icon={faUser} /></Link>
                )}
            </div>
        </nav>
    )

}

export default Navbar
