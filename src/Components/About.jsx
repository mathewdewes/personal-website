import React from "react";

export default function About(props) {
    return (
        <div className="about pages container">
            <div className="about__content">
                <h1>About me</h1>
                <p> My name is Mathew. I am a young upcoming web developer looking to find my first opportunity towards becoming a front end developer. For the past year I have dedicated as much time as I can towards learning everything there is to know about web development and in the process I have found a real passion in creating web applications. After working in warehousing for several years and gaining many useful skills along the way I have made the decision to pursue my new found joy and fully commit myself towards achieving my current goal of becoming a full stack web developer. My current strengths lie in React, Javascript and UX design following databases and api’s. I am currently undergoing a Diploma in Web and UX Design as well as a Python Pro course which I am striving to achieve.
                    To whomever this message finds, are there any opportunities that you are willing to give me towards entering this industry. I am looking for full time employment but more than happy to work part time and or voluntary to show my potential. I cannot express all that I need to say on this website so feel free to contact me on my contact me page.
                </p>
            </div>
            <img className="about__image" src={props.image} alt="" />
            <div className="about__skills">
                <hr />
                <h2>Skills and Attributes</h2>
                <ul>
                    <li>Adaptable</li>
                    <li>Collaborative</li>
                    <li>Resilient</li>
                    <li>Open minded</li>
                    <li>Honest and accountable</li>
                    <li>Diligent</li>
                </ul>
                <hr />
                <h2>Certifications and awards</h2>
                <ul>
                    <li>Lean Six Sigma Yellow Belt</li>
                    <li>Pathways to the Future Trust (Nominated by Bon Accord Products Ltd)</li>
                </ul>
                <p></p>
            </div>
        </div>
    )
}