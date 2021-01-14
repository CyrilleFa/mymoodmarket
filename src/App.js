import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slogan from './components/Homepage/Slogan';
import Slider from './components/Homepage/Slider';
import How from './components/Homepage/HowItWorks';
import Contact from './components/Contact';
import Team from './components/Team';
import Library from './components/Library';
import ProductList from './components/Products/ProductList';
import ProductDetails from './components/Products/ProductDetails';

import './normalize.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Slogan />
          <How />
          <Slider />
        </Route>
        <Route exact path='/products'>
          <ProductList />
        </Route>
        <Route path='/products/:product' component={ProductDetails} />
        <Route path='/library' component={Library} />

        <Route path='/contact' component={Contact} />
        <Route path='/team' component={Team} />
        <Route path='/who-are-we'></Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
