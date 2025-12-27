import React from 'react'
import './css/About.css'
const About = () => {
    return (
        <div className="aboutPage">
            <section className="whoWeAre">
                <div className="left">
                    <h2>Who We Are</h2>
                    <p>We are a trusted home service platform built to simplify everyday life. Our platform connects users with verified and skilled professionals — from electricians and plumbers to interior designers and cleaners — ensuring reliability, safety, and complete satisfaction.<br />
                    The aim is to remove the hassle of searching for dependable service providers by bringing all essential household services together in one secure and easy-to-use place. Whether it’s urgent repairs, routine maintenance, or deep cleaning, every task is handled with care and professionalism.</p>
                </div>
                <div className="right">
                    <img src="/static\images\pexels-energepic-com-27411-175039.jpg" alt="" />
                </div>
            </section>
            <section className='whatWeDo whoWeAre'>
                <div className="right">
                    <img src="\static\images\Plumbers-911-What-to-Do-If-Your-Bathroom-Sink-is-Clogged-scaled.jpg" alt="" />
                </div>
                <div className="left">
                    <h2>What We Do</h2>
                    <p>We provide a one-stop solution for all household service needs by connecting users with trusted and experienced professionals. From quick fixes to complete home improvements, our platform makes booking reliable services fast, simple, and transparent.<br />
                    Users can browse services, choose skilled professionals, schedule appointments, and get the job done with confidence. Every service provider on our platform is carefully verified to ensure quality, safety, and professionalism.<br />
                    Whether it’s electrical work, plumbing, home cleaning, painting, or interior services, we focus on delivering hassle-free experiences and dependable results—so you can spend less time worrying and more time enjoying your home.</p>
                </div>
            </section>
            <section className="aboutWCU">
                <div className="head">
                    <h1>Why Choose Us?</h1>
                    <p>Your safety and satisfaction are our top priorities. Here’s what makes our services dependable.</p>
                </div>
                <div className="wcuRow">
                    <div className="wcuBox">
                        <h2>🛡️</h2>
                        <h5>Verified Professionals</h5>
                        <p>Every professional undergoes a complete verification process to ensure safety, trust, and reliability in every service provided.</p>
                    </div>
                    <div className="wcuBox">
                        <h2>⭐</h2>
                        <h5>Quality Service</h5>
                        <p>We ensure consistent quality through ratings, feedback, and regular performance reviews for all professionals.</p>
                    </div>
                    <div className="wcuBox">
                        <h2>🔒</h2>
                        <h5>Verified Professionals</h5>
                        <p>Every professional undergoes a complete verification process to ensure safety, trust, and reliability in every service provided.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
