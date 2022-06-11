import "./Banner.css";
import Button from './Button';
import SocialLink from './SocialLink';
export default function Banner(){
   
    return (
       <>
       <div className="banner" id="banner">
           <div className="row">
               <div className="col-12 col-sm-12 col-md-6  ">
               <div className="text ">

                   <SocialLink />
                 <p>I a`m Developer</p>
                 <h1>Shabbir Ahmad Shahid</h1>
                 <h3>Web Developer , <span >Contant Create</span> and Graphic Designer</h3>
                 <Button />
             </div>
            
               </div>
          
         
           <div className="col-0 d-none d-md-block  col-sm-0 col-md-6 ">
               
               <img src="/IMG_20220420_040806.jpg" alt="man imag"   className="header_image"/>
           </div>
           </div>
       </div>
       </>

    )
}
