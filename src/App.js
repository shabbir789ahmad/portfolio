

import './App.css';
import Navbar from './profile/Navbar';
import Banner from './profile/Banner';
import Portfolio from './profile/Portfolio';

import Testimonial from './profile/Testimonial';
import Contact from './profile/Contact';

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
