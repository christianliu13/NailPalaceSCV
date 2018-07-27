import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import About from './About/About';
import Services from './Services/Services';
import GiftCards from './GiftCards/GiftCards';

const Router = () => (
  <Switch>
    <Route path ="/NailPalaceSCV/" exact component ={Home} />
    <Route path ="/NailPalaceSCV/About" component ={About} />
    <Route path ="/NailPalaceSCV/Services" component ={Services} />
    <Route path ="/NailPalaceSCV/GiftCards" component ={GiftCards} />
    <Route path ="/NailPalaceSCV/Contact" component ={Contact} />
  </Switch>
);

export default Router;