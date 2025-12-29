import React from 'react'
import { useParams } from 'react-router-dom'
import './css/Workers.css'
const Workers = () => {
    const { slug } = useParams();
    return (

        <section className='workers'>
            <div className="filterBox">
                <button className='primaryBtn'>Filter</button>
                <button className='secondaryBtn'>Sort By</button>
            </div>
            <div className="workersList">
                <div className="workerDetails">
                    <div className="leftDetails">
                        <img src="/static/images/gray-picture-person-with-gray-background.png" alt="" />
                        <div className="workerInfo">
                            <h5 className='workerName'>Rohit Sharma</h5>
                            <p>{slug} - 5 years experience</p>
                            <p>📍 Sector 21, Noida</p>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <div>
                            <p className='rating'>⭐ 4.8 <span>(120 reviews)</span></p>
                            <p className='price'>₹250/hr</p>
                        </div>
                        <div className="buttons">
                            <button className='primaryBtn'>View Details</button>
                            <button className='secondaryBtn'>Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="workersList">
                <div className="workerDetails">
                    <div className="leftDetails">
                        <img src="/static/images/gray-picture-person-with-gray-background.png" alt="" />
                        <div className="workerInfo">
                            <h5 className='workerName'>Rohit Sharma</h5>
                            <p>{slug} - 5 years experience</p>
                            <p>📍 Sector 21, Noida</p>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <div>
                            <p className='rating'>⭐ 4.8 <span>(120 reviews)</span></p>
                            <p className='price'>₹250/hr</p>
                        </div>
                        <div className="buttons">
                            <button className='primaryBtn'>View Details</button>
                            <button className='secondaryBtn'>Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="workersList">
                <div className="workerDetails">
                    <div className="leftDetails">
                        <img src="/static/images/gray-picture-person-with-gray-background.png" alt="" />
                        <div className="workerInfo">
                            <h5 className='workerName'>Rohit Sharma</h5>
                            <p>{slug} - 5 years experience</p>
                            <p>📍 Sector 21, Noida</p>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <div>
                            <p className='rating'>⭐ 4.8 <span>(120 reviews)</span></p>
                            <p className='price'>₹250/hr</p>
                        </div>
                        <div className="buttons">
                            <button className='primaryBtn'>View Details</button>
                            <button className='secondaryBtn'>Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="workersList">
                <div className="workerDetails">
                    <div className="leftDetails">
                        <img src="/static/images/gray-picture-person-with-gray-background.png" alt="" />
                        <div className="workerInfo">
                            <h5 className='workerName'>Rohit Sharma</h5>
                            <p>{slug} - 5 years experience</p>
                            <p>📍 Sector 21, Noida</p>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <div>
                            <p className='rating'>⭐ 4.8 <span>(120 reviews)</span></p>
                            <p className='price'>₹250/hr</p>
                        </div>
                        <div className="buttons">
                            <button className='primaryBtn'>View Details</button>
                            <button className='secondaryBtn'>Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="workersList">
                <div className="workerDetails">
                    <div className="leftDetails">
                        <img src="/static/images/gray-picture-person-with-gray-background.png" alt="" />
                        <div className="workerInfo">
                            <h5 className='workerName'>Rohit Sharma</h5>
                            <p>{slug} - 5 years experience</p>
                            <p>📍 Sector 21, Noida</p>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <div>
                            <p className='rating'>⭐ 4.8 <span>(120 reviews)</span></p>
                            <p className='price'>₹250/hr</p>
                        </div>
                        <div className="buttons">
                            <button className='primaryBtn'>View Details</button>
                            <button className='secondaryBtn'>Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="workersList">
                <div className="workerDetails">
                    <div className="leftDetails">
                        <img src="/static/images/gray-picture-person-with-gray-background.png" alt="" />
                        <div className="workerInfo">
                            <h5 className='workerName'>Rohit Sharma</h5>
                            <p>{slug} - 5 years experience</p>
                            <p>📍 Sector 21, Noida</p>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <div>
                            <p className='rating'>⭐ 4.8 <span>(120 reviews)</span></p>
                            <p className='price'>₹250/hr</p>
                        </div>
                        <div className="buttons">
                            <button className='primaryBtn'>View Details</button>
                            <button className='secondaryBtn'>Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="workersList">
                <div className="workerDetails">
                    <div className="leftDetails">
                        <img src="/static/images/gray-picture-person-with-gray-background.png" alt="" />
                        <div className="workerInfo">
                            <h5 className='workerName'>Rohit Sharma</h5>
                            <p>{slug} - 5 years experience</p>
                            <p>📍 Sector 21, Noida</p>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <div>
                            <p className='rating'>⭐ 4.8 <span>(120 reviews)</span></p>
                            <p className='price'>₹250/hr</p>
                        </div>
                        <div className="buttons">
                            <button className='primaryBtn'>View Details</button>
                            <button className='secondaryBtn'>Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Workers
