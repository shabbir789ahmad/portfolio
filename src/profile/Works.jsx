import "./Works.css";
import { useState } from "react";
export default function Works(){
    const [currentSlide,setCurrentSlide]=useState(0);
    const data=[
      {
         img:"/download.jfif",
         title:'Title',
         text:"This Is Dummy Text You Can Change This Text With Your Original Product Detail text",
        },
        {
            img:"/download.jfif",
            title:'title2',
            text:"This Is Dummy Text You Can Change This Text With Your Original Product Detail text",
           },
           {
            img:"/download.jfif",
            title:'title3',
            text:"This Is Dummy Text You Can Change This Text With Your Original Product Detail text",
           }

    ];
    const handleClick=(way)=>{
        way==="left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1:0);
    }
    return (
       <>
       <div className="works" id="service">
           <p className="arrow" onClick={()=>handleClick("left")}>
           </p>
           
          <div className="slider" style={{transform: `translateX(-${currentSlide*100}vw)` }}>
           {data.map(ds=>(
           <div className=" card_width">
                    <div className="item">
                     <div className="left">
                         <div className="left_container">
                         <div className="left_image">
                             <img src={ds.img} alt="image" />
                         </div>
                         <h2>{ds.title}</h2>
                         <p>{ds.text}</p>
                         <span>Products</span>
                         </div>
                     </div>
                     <div className="right">
                         <img src={ds.img} alt="image" />
                     </div>
                    </div>
               
           </div>
           
           ))};
           </div>
           <p className="arrow2" onClick={()=>handleClick("")}></p>
       </div>
       </>

    )
}
