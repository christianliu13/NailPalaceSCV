import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Services from './Routes/Services';
import GiftCards from './Routes/GiftCards';

const Router = () => (
  <Switch>
    <Route path ="/NailPalaceSCV/Home" exact component ={Home} />
    <Route path ="/NailPalaceSCV/Home" component ={Home} />
    <Route path ="/NailPalaceSCV/About" component ={About} />
    <Route path ="/NailPalaceSCV/Services" component ={Services} />
    <Route path ="/NailPalaceSCV/GiftCards" component ={GiftCards} />
    <Route path ="/NailPalaceSCV/Contact" component ={Contact} />
  </Switch>
);

export default Router;