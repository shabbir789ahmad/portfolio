import "./Testimonial.css";
import Comment from './Comment'
export default function Testimonial(){

    const comment=[


        {
          id:'1',
          tag:"Very Good Product",
          img:'/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp',
          comment:'this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen '
        },
        {
          id:'1',
          tag:"Realy Liked This Product",
          img:'/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp',
          comment:'this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen '
        },
        {
          id:'1',
          tag:"Amazing Product",
          img:'/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp',
          comment:'this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen '
        },
        {
          id:'1',
          tag:"Amazing Product",
          img:'/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp',
          comment:'this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen '
        }

]
    return (
       <>
         
          {/* what people say */}
 <div className="container p-0" id="feedback">
 
   

   <div className="test_monial_items">
   <h1>Testimonial</h1>
     <div className="row">
       {comment.map(data=>(
            
           <Comment tag={data.tag} comment={data.comment} img={data.img} />

       ))}
       
     </div>
   </div>
 </div>
          
       </>

    )
}