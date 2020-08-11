import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppLayout from './components/applayout';
import Home from './pages/home';
import Analysis from './pages/analysis'
import { Chart1, Chart2, Chart3, Chart4 } from './pages/chart';
import {Map1, Map2} from './pages/map';
import About from './pages/about';
import Contact from './pages/contact';
import Rent from './pages/rent';
import Sale from './pages/sale';
import Service from './pages/service';

function App() {
  return (
      <BrowserRouter>
      <AppLayout>
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/sale" component={Sale} />
        <Route path="/rent" component={Rent} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
        
        <Route path="/analysis" component={Analysis}/>
        <Route path="/map1" component={Map1} />
        <Route path="/map2" component={Map2} />
        <Route path="/chart1" component={Chart1} />
        <Route path="/chart2" component={Chart2} />
        <Route path="/chart3" component={Chart3} />
        <Route path="/chart4" component={Chart4} />
        <Route path="/about" component={About} />

        <Redirect from="/" to="/home" />
        </Switch>
      </AppLayout>
      </BrowserRouter>
  );
}

export default App;
