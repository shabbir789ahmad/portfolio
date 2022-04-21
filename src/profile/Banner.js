import "./Banner.css";
import {init} from 'ityped';
import { useEffect,useRef } from "react";
export default function Banner(){
    const textRef=useRef();
    useEffect(()=>{
     init(textRef.current,{
         showCursor:true,
         backDelay:1500,
         strings:["Developer","Freelancer","Content Creater"]
     })
    },[]);
    return (
       <>
       <div className="banner1" id="banner">
           <div className="row">
               <div className="col-12 col-sm-6 ">
               <div className="text ">
                 <h4>Hi There, I a`m</h4>
                 <h1>Shabbir Ahmad Shahid</h1>
                 <h3>Full Time<span ref={textRef}> </span></h3>
                
             </div>
             <a href="#contact" className="contact_button"> <button className="btn  contact-btn" >Contact Now</button></a>
               </div>
          
         
           <div className="col-12 col-sm-6 ">
               
               <img src="/IMG_20220420_040806.jpg" alt="man imag"  className="img"/>
           </div>
           </div>
       </div>
       </>

    )
}
