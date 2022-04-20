import "./Navbar.css";

export default function Navbar(){
    return (
        <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo"><img src="/profile-pic (2).png"  alt="logo" /><DevStack</label>
      <ul>
        <li><a className="active"  href="#banner">Home</a></li>
        <li><a  href="#portfolio">Project</a></li>
        <li><a href="#service">Services </a></li>
        <li><a href="#feedback">Feedback</a></li>
        <li><a href="#contact"> Contact</a></li>
      </ul>
    </nav>

    )
}
