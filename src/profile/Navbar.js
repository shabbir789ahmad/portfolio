import "./Navbar.css";
import { useState } from "react";
export default function Navbar(){

  const [hide,setHide]=useState(false);

  const show=()=>{
    alert('fff')
  }
    return (
        <nav>
          <label className="logo">  DevStack</label>
      
            
            <label htmlFor="check" className="checkbtn" onClick={()=>show()}>  <i className="fas fa-bars"></i></label>
      <ul className="list list2">
        <li><a className="active"  href="#banner">Home</a></li>
        <li><a  href="#portfolio">Project</a></li>
        <li><a href="#service">Services </a></li>
        <li><a href="#feedback">Feedback</a></li>
        <li><a href="#contact"> Contact</a></li>
      </ul>
    </nav>

    )
}
