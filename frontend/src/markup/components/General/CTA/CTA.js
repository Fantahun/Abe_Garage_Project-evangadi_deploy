import React from 'react'
import vban1 from './../../../../assets/images/vban1.jpg'
import vban2 from './../../../../assets/images/vban2.jpg'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className="cta-section">
    <div className="auto-container">
        <div className="wrapper-box">
            <div className="left-column">
                <h3>Schedule Your Appointment Today</h3>
                <div className="text">Your Automotive Repair & Maintenance Service Specialist</div>
            </div>
            <div className="right-column">
                <div className="phone">1800.456.7890</div>
                <div className="btn"><Link to="/contact" className="theme-btn btn-style-one"><span>Appointment</span><i
                            className="flaticon-right"></i></Link></div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CTA