import "./Portfolio.css";

export default function Textarea({name,place}){
    return (
       <>
        <label  className="fw-bold " >{place}</label>
       <textarea name={name} className="form-control border border-secondary shadow" rows="8" placeholder={place}></textarea>
       </>

    )
}