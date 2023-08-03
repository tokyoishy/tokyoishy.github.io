import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx'
import Newsletter from './components/Newsletter.jsx';
import Recent from './components/Recent.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />


      <Recent />

      <Newsletter />

      <Contact />
      <Footer />

    </div>
  );
}

export default App;
