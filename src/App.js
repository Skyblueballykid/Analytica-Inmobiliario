import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppLayout from './components/applayout';
import Home from './pages/home';
import Analysis from './pages/analysis'
import { Chart1, Chart3, Chart4, Chart5, Chart8 } from './pages/chart';
import { Map1, Map2, Map3 } from './pages/map';
import About from './pages/about';
import SearchTable from './pages/table';
import Contact from './pages/contact';
import Service from './pages/service';

function App() {
  return (
      <BrowserRouter>
      <AppLayout>
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
        <Route path="/table" component={SearchTable} />
        <Route path="/analysis" component={Analysis}/>
        <Route path="/map1" component={Map1} />
        <Route path="/map2" component={Map2} />
        <Route path="/map3" component={Map3} />
        <Route path="/chart1" component={Chart1} />
        <Route path="/chart3" component={Chart3} />
        <Route path="/chart4" component={Chart4} />
        <Route path="/chart5" component={Chart5} />
        <Route path="/chart8" component={Chart8} />
        <Route path="/about" component={About} />

        <Redirect from="/" to="/home" />
        </Switch>
      </AppLayout>
      </BrowserRouter>
  );
}

export default App;
