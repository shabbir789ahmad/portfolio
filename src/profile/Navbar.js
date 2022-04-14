import "./Navbar.css";

export default function Navbar(){
    return (
        <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">DevStack</label>
      <ul>
        <li><a className="active"  href="#banner">Home</a></li>
        <li><a  href="#portfolio">About</a></li>
        <li><a href="#works">Services </a></li>
        <li><a href="#testimo">Contact</a></li>
        <li><a href="#contact">Feedback</a></li>
      </ul>
    </nav>

    )
}