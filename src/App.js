import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavigationBar} from '../src/layout/Layout';
import Routes from './Routes';

export const add = (x,y) => x + y;

function App() {
  return (
    <>
    <Router>
      <NavigationBar/>
      <Routes/>
    </Router>
    </>
  );
}

export default App;
