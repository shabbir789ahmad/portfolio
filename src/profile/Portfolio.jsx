import { useState,useEffect } from "react";
import "./Portfolio.css";
import PortfolioList from './PortfolioList';
import {all,featured,react,laravel} from "./Data";
import Card from "./Card";
export default function Portfolio(){
    const [selected, setSelected]=useState("featured");
    const [data, setData]=useState([]);
    const list=[
      {
        id:'featured',
        title:'Featured',
      },
      {
        id:'all',
        title:'All',
      },
      {
        id:'react',
        title:'React',
      },
      {
        id:'laravel',
        title:'Laravel',
      },
    ];
    useEffect(()=>{
      
      switch(selected){
        case "all":
          setData(all);
          break;
         case "featured":
           setData(featured);
           break; 
           case "react":
           setData(react);
           break;
           case "laravel":
           setData(laravel);
           break;
           default:
             setData(featured)
      }
    },[selected]);
    return (
       <>
       <div className="portfolio " id="portfolio">
           <h1>Portfolio</h1>
           <ul className="navpills">
               {list.map(item=>(
                   <PortfolioList title={item.title} id={item.id} active={selected===item.id} setSelected={setSelected}/>
               ))}
               
           </ul>
           <div className="container1 ">
              
                   {data.map(it=>(
                  
                   <Card id={it.id} title={it.title} img={it.img}/>
                      
             ))},
               
              
              
               
           </div>
       </div>
       </>

    )
}
