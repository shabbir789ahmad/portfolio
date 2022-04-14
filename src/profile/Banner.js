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
           <div className="left ">
             <div className="text ">
                 <h2>Hi There, I a`m</h2>
                 <h1>Shabbir Ahmad Shahid</h1>
                 <h3>Full Time<span ref={textRef}> </span></h3>
                
             </div>
             <button className="btn  contact-btn">Contact Now</button>
           </div>
           <div className="right">
               {/* <div className="imgcontainer">
                   
               </div> */}
               <img src="/download-removebg-preview.png" alt="man imag"  className="img"/>
           </div>
       </div>
       </>

    )
}