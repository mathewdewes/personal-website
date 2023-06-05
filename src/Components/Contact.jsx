import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const phoneLogo = <FontAwesomeIcon icon={faPhone} />
const envelope =<FontAwesomeIcon icon={faEnvelope} />



export default function Contact(){


    function linkEmail(e){
    window.location.href = "mailto:mathewdewes@hotmail.com";
    e.preventDefault();

    }
    return(
        <div className="contact pages container">
            <div className="contact__content">
            <h1>Conact Me</h1>
            <p>I am on the verge of gaining as much knowledge as I can to achieve my goals. For I may not know as much as people who have been in this field longer than me, I am content and willing to put in the time and effort to add value to anyone inclined to give me an opportunity.
</p>
          <div className="contact__details">
             <p><span className="contact__icons">{phoneLogo}</span><span className="phone">0220199006</span> </p>
            <p><span className="contact__icons">{envelope}</span> <Link to="#" onClick={linkEmail}><span className="email">mathewdewes@hotmail.com</span></Link></p>
          </div>
           
            </div>
            
        </div>
    )
}