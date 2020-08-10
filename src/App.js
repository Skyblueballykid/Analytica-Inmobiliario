import React from 'react';
import './App.css';
import AppLayout from './components/applayout';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppLayout>

      </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
