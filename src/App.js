import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppLayout from './components/applayout';
import Home from './pages/home';
import Chart from './pages/chart';
import Map from './pages/map';
import About from './pages/about';

function App() {
  return (
      <BrowserRouter>
      <AppLayout>
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/map" component={Map} />
        <Route path="/chart" component={Chart} />
        <Route path="/about" component={About} />

        <Redirect from="/" to="/home" />
        </Switch>
      </AppLayout>
      </BrowserRouter>
  );
}

export default App;
