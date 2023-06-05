import React from "react";






export default function Home(props) {
    return (
        <div className="home pages container">
            <div className="home__content">
                <h1>Mathew Dewes</h1>
                <p>Welcome to my personal website which I built in React. Feel free to navigate to the page you desire. Thank you for taking the time to view. To learn more about me head over to <span></span> about!</p>
                <div>
                   
                </div>

                

                <div className="home__work">
                    <hr />
                    <h2>Work history</h2>
                    <p><strong>Inward goods Coordinator</strong><br />Glasscorp Ltd</p>
                    <ul>
                        <li>Oversee and coordinate daily stock movement of inward goods with data entry being proficient with the use of invoicing and receipting using Microsoft Excel</li>
                        <li>Despatch and delivery of products with customer service skills gained by first hand client engagement</li>

                    </ul>
                    <hr />

                    <p><strong>Warehouse operator</strong><br />Bon Accord Products </p>
                    <ul>
                        <li>Lead manufacturing operator responsible for the formulation of beverage products</li>
                        <li>Stock inventory control</li>
                        <li>Quality assurance</li>
                    </ul>
                </div>
            </div>
            <img className="home__image" src={props.image} alt="" />
            <div className="home__education pages">
                <hr />
                <h2>Education</h2>
                <p><strong>Yoobee College of Creative Innovation</strong><br />Diploma in Web and UX Design</p>
                <p className="dates">- 2023</p>
                <ul>
                    <li>UX Design</li>
                    <li>Foundation Coding</li>
                    <li>Application Development</li>
                    <li>Content Management system (CMS)</li>
                </ul>
                <hr />
                <p> <strong>Udemy</strong><br />The Complete 2022 Web Development Bootcamp</p>
                <p className="dates">2021 - 2022</p>
                <ul>
                    <li>HTML, CSS & Javascript</li>
                    <li>Bootstrap</li>
                    <li>Node.JS & Express</li>
                    <li>Git & Github</li>
                    <li>Databasing(NoSQL)</li>
                    <li>React</li>
                    <li>Web3 DApp Development</li>
                </ul>
                <hr />
                <p><strong>The University of Auckland</strong><br />Lean Six Sigma Yellow Belt</p>
                <p className="dates">Mar 2019</p>
                <ul>
                    <li>Excutive Education (Sponsored by Bon Accord Products Ltd)</li>
                </ul>
                <hr />
                <p><strong>The Design School, Gisborne</strong><br />Graphic Design Course</p>
                <p className="dates">Jun 2016 - Dec 2016</p>
                <hr />
                <p><strong>Gisborne Boys High School, Gisborne</strong><br />NCEA Level 1-3</p>
                <p className="dates">2016</p>
                <ul>
                    <li>Design Visual Technology course - Endorsed with excellence</li>
                </ul>

            </div>
         

        </div>
    )
}
