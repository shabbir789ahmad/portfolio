import "./About.css";
import Button from './Button';
import SocialLink from './SocialLink';
export default function About(){
    
    return (
       <>
       <div className="About " id="About">
           <div className="row " >
               <div className="col-md-6 col-12 ">
               <img src="/IMG_20220420_040806.jpg" alt="man imag"  width="95%" className="rounded about_image"   />
               </div>
               <div className="col-md-6 col-12">
                   <div className="about_text">
                   <SocialLink />
                   <h1 className="mt-4"> About Me</h1>
                   <p>This is me <strong>Shabbir Ahmad Shaid</strong> From Lahoe Pakistan. I work as Fullstack Developer on Fiverr, Upwork</p>
                   <p className="detail"> I`m passionate Fullstack Developer working as full time since 2020. i build websites with js(react js , jquery),html ,css as frontend Technologies and php (laravel framework) sql for backend Technoloies,
                       if you need Professional , Modern and Responsive Websites then you are at right place  </p>

                       <Button />

                       </div>
               </div>
           </div>
       </div>
       </>

    )
}
