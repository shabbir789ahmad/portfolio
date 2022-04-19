import "./Portfolio.css";

export default function Input({lable,name,type,place}){
    return (
       <>
        <label  className="fw-bold " >{place}</label>
        <input type={type} name={name} className="form-control border border-secondary py-4 shadow" placeholder={place} />
       </>

    )
}