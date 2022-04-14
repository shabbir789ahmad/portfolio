import "./Portfolio.css";

export default function Card({id,title,img}){
    return (
       <>
        <div className="item item_hover">
                  <div className="card shadow">
                    <div className="card-body w-100 p-0">
                      <img src={img} />
                      <h5 className="mt-2">{title}</h5>
                      <p className="mb-0">hffffghfttjhkh</p>         
                     </div>
                  </div>
               </div>
       </>

    )
}