import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slogan from './components/Slogan';
import Slider from './components/Slider';
import How from './components/HowItWorks';

import './App.css';
import './normalize.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Slogan />
      <How />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
