import React from 'react';
import MemberContainer from './MemberContainer';
import '../css/About.css';
import searchImage from "../../src/search-image.jpeg";


const About = () => {
    return (
        <div className='about-container'>
            <h2 className='subtitle'>About this App</h2>
            <div className='about-intro-container'>
                <img className='about-item' src={searchImage} alt="search image" />
                <p className='about-item'>Planning for a trip or vacation can be thrilling, but deciding on the best time to visit your destination can also be stressful. You may be puzzled by the expensive ticket prices during certain periods, only to find out that there is a local holiday celebrated during that time. Our application can help you identify these holidays before you book your trip, allowing you to plan accordingly. You can either avoid the high season or even aim to experience the local culture by traveling during the holiday.</p>
            </div>
            <div className='about-member-container'>
                <MemberContainer />
            </div>
        </div>
    )
}

export default About;