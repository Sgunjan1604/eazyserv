import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './css/CustomerHome.css'
const CustomerHome = () => {
          const categories = [
    {
      "name": "Electrician",
      "desc": "Certified electricians for wiring, fittings, and quick electrical repairs at home."
    },
    {
      "name": "Plumber",
      "desc": "Expert plumbers for leak repairs, pipe fitting, and bathroom installations."
    },
    {
      "name": "Cleaning",
      "desc": "Professional home, kitchen, and deep cleaning services for a spotless living space."
    },
    {
      "name": "AC & Appliance Repair",
      "desc": "Reliable technicians to fix ACs, refrigerators, washing machines, and more."
    },
  ]
    const user = useSelector((state) => state.auth.user)
    return (
        <div className='home customerHome'>
            <section className="homeHero">
                <div className="leftHero">
                    <div className="heroHead">
                        <h3>Hello, {user.name.split(" ")[0]} 👋</h3>
                        <p>Here are your recent bookings and quick actions.</p>
                    </div>
                    <div className="heroBtns">
                        <Link to={'/services'} className="primaryBtn">Book a Service</Link>
                        <Link to={'/mybookings'} className="secondaryBtn">View My Bookings</Link>
                    </div>
                    <div className="heroSearchBar">
                        <input type="search" placeholder='What Service do you need?' />
                    </div>
                </div>
                <div className="rightHero">
                    <img src="/static/images/istockphoto-1363376686-612x612.jpg" alt="" />
                </div>
            </section>

            {/* RECENT BOOKINGS */}
            <section className="recentBookings">
                <h2>Recent Bookings</h2>
                <div className="bookingItems">
                    <div className="bookingItem">
                        <div className="bookingInfo">
                            <span className="icon">🔌</span>
                            <div>
                                <h3>Electricians</h3>
                                <p>2 Nov 2025</p>
                            </div>
                        </div>
                        <div className="statusBox">
                            <span className="status completed">✅ Completed</span>
                            <Link to={'/mybookings/bookingid'} className="linkBtn">View Details</Link>
                        </div>
                    </div>
                    <div className="bookingItem">
                        <div className="bookingInfo">
                            <span className="icon">🧹</span>
                            <div>
                                <h3>Cleaning</h3>
                                <p>2 Nov 2025</p>
                            </div>
                        </div>
                        <div className="statusBox">
                            <span className="status ongoing">🔄 Ongoing</span>
                            <Link to={'/mybookings/bookingid'} className="linkBtn">View Details</Link>
                        </div>
                    </div>
                    <div className="bookingItem">
                        <div className="bookingInfo">
                            <span className="icon">🛠️</span>
                            <div>
                                <h3>Plumbers</h3>
                                <p>2 Nov 2025</p>
                            </div>
                        </div>
                        <div className="statusBox">
                            <span className="status cancelled">❌ Canceled</span>
                            <Link to={'/mybookings/bookingid'} className="linkBtn">View Details</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* RECOMMENDED SERVICES */}
            <section className="recommended serviceSection">
                <h1>Recommended Services</h1>
                <div className="categoriesGrid">
                    {categories.map((category, index) => (
                        <div key={index} className="categoryBox">
                            <img src={`/static/images/services/${category.name}.jpg`} alt="" />
                            <div className="aboutCategory">
                                <h3>{category.name}</h3>
                                <p>{category.desc}</p>
                            </div>
                            <button className="primaryBtn">Book Now</button>
                        </div>
                    ))
                    }
                </div>
                <Link to={'/services'}>Explore All Services &rarr;</Link>
            </section>
        </div>
    )
}

export default CustomerHome
