import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavigationBar} from '../src/layout/Layout';
import Routes from './Routes';


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
