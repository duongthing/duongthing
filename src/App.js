import React from 'react';
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className='all'>
      {/* <video >
        <source src={video}></source>
      </video> */}
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>
    </div>
  );
}

export default App;
