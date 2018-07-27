import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Services from './Routes/Services';
import GiftCards from './Routes/GiftCards';

const Router = () => (
  <Switch>
    <Route path ="/" exact component ={Home} />
    <Route path ="/Home" component ={Home} />
    <Route path ="/About" component ={About} />
    <Route path ="/Services" component ={Services} />
    <Route path ="/GiftCards" component ={GiftCards} />
    <Route path ="/Contact" component ={Contact} />
  </Switch>
);

export default Router;