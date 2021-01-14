import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slogan from './components/Homepage/Slogan';
import Slider from './components/Homepage/Slider';
import How from './components/Homepage/HowItWorks';
import Contact from './components/Contact';
import ProductList from './components/Products/ProductList';

import './normalize.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Slogan />
      <ProductList />
      <How />
      <Slider />
      <Switch>
        <Route exact path='/'></Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/who-are-we'></Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
