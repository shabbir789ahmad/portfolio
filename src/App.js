import logo from './logo.svg';

import './App.css';
import Navbar from './profile/Navbar';
import Banner from './profile/Banner';
import Portfolio from './profile/Portfolio';
import Works from './profile/Works';
import Testimonial from './profile/Testimonial';
import Contact from './profile/Contact';
import {BrowserRouter, Routes ,Route} from "react-router-dom";
function App() {
  return (
  <>
   <div className="app">
   <Navbar/>
   <div className="section">
      <Banner />
      <Portfolio />
      {/* <Works /> */}
      <Testimonial />
      <Contact />
   </div>
   </div>
 
  </>
  );
}

export default App;
