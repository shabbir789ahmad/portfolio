export default function Comment({tag,comment,img}){

    return (

        <>
            <div className="col-md-6 col-lg-3 col-12 col-sm-4 mt-4">
         <div className="card shadow">
           <div className="card-body  card_style">
             <i className="fas fa-comment"></i>
             <h4>{tag}</h4>
             <p>{comment} </p>
            <div className="user_detail">
              <img src={img} />
              <div className="name_city">
              <h6>Shabbir Ahmad</h6>
              <p>Lahore, Pakistan</p>
              </div>
            </div>
           </div>
         </div>
       </div>
        </>
    );
}