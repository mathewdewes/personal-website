import React from "react";
import NavBar from "./Components/NavBar";
import { HashRouter,Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import ProfileImage from "./images/profile-img.jpg";
import BeachImage from "./images/beach.jpg";
import Projects from "./Components/Projects";
import DropDown from "./Components/DropDown";





export default function App(){
const [hamburger, setHamburger] = React.useState(true);



React.useEffect(()=>{
    function handleResize() {
        if (window.innerWidth > 900){
            setHamburger(true)
        }
}
  
      window.addEventListener('resize', handleResize)

},[]);

function handleClick(event){
    if (event.target.name !=="link"){
        setHamburger(!hamburger);
    }
    
   
}

return(
            <HashRouter> 
            <header>
           <NavBar toggleActive={handleClick} showButton={hamburger} toggleMenu={handleClick}/>
          {!hamburger&&<DropDown  toggle={handleClick}/>}
    
           </header>
           
           <Routes>
           <Route path="/" element={<Home link={handleClick} image={ProfileImage}/>}/>
           <Route path="/about" element={<About image={BeachImage}/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/projects" element={<Projects/>}/>
           </Routes>
         
        <footer>
            Copyright, 2023
            </footer>
        </HashRouter>

    
    )

}
