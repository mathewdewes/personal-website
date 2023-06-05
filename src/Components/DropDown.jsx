import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function DropDown(props){
    const path = useLocation().pathname;

    return(
        <div className='dropDown'>
        <Link className={path ==="/"?"active":undefined } onClick={props.toggle} to="/" name="home">HOME</Link>
        <Link className={path ==="/about"?"active":undefined}  onClick={props.toggle} name="about" to="/about">ABOUT</Link>
        <Link className={path ==="/projects"?"active":undefined}  onClick={props.toggle}name="projects" to="/projects">PROJECTS</Link>
        <Link className={path ==="/contact"?"active":undefined}  onClick={props.toggle}name="contact" to="/contact">CONTACT</Link>
        </div>
    )
    }
