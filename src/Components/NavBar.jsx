import React from "react";
import { Link, useLocation } from "react-router-dom";


export default function NavBar(props){
    const path = useLocation().pathname;

    
return(
       <nav className="navbar">
        <Link id={"1"} key={1} onClick={props.toggleActive} className={path ==="/" ?"active":undefined} name="home" to="/">HOME</Link>
        <Link id={"2"} key={2} onClick={props.toggleActive} className={path ==="/about" ?"active":undefined}  name="about" to="/about">ABOUT</Link>
        <Link id={"3"} key={3} onClick={props.toggleActive} className={path ==="/projects" ?"active":undefined}  name="projects" to="/projects">PROJECTS</Link>
        <Link id={"4"} key={4} onClick={props.toggleActive} className={path ==="/contact" ?"active":undefined}  name="contact" to="/contact">CONTACT</Link>
        <button name="hamburger" onClick={props.toggleMenu} className={props.showButton?"hamburger":"hamburger is-active"}>
            <div className="bar"></div>
        </button>
 
     
        
        </nav>
    )
}   