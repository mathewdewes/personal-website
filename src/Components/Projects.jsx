import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import Project2 from "../images/project2.png";
import Project1 from "../images/eden-noodle.jpg";
import { Link } from "react-router-dom";

export default function Projects() {
    function linkGithub(e) {
        window.location.href = "https://github.com/mathewdewes";
        e.preventDefault();

    }

    return (
        <div className="projects pages container">
            <div className="projects__container">
                <h1>My Projects</h1>
                <p>Below are my projects that I’ve recently completed. The first consists of an application I designed for a local business and the second is a react app that allows you to set a to do list.</p>
                <div className="projects__card-div">
                    <div className="projects__card">
                        {<img src={Project1} alt="" />}
                        <h2>Eden Noodle assessment</h2>
                        <form method="get" action="https://drive.google.com/file/d/1QvtIni1hRn8LA2KeWsOW7MQTn4i_C-GK/view?usp=sharing">
                            <button>Preview</button>
                        </form>
                        { }

                    </div>
                    <div className="projects__card">
                        {<img src={Project2} alt="" />}
                        <h2>KiwiGo rentals</h2>
                        <form method="get" action="https://github.com/mathewdewes">
                            <button>Preview</button>
                        </form>
                        { }
                    </div>

                </div>
                <p>Check out the source code to my website on GitHub. Link below</p>
                <div className="projects__github">
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                    <Link to="#" onClick={linkGithub}><h2 className="projects__link">GitHub</h2></Link>



                </div>


            </div>




        </div>
    )
}