import React from 'react';
import {BrowserRouter, Route, Link, NavLink, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Navbar from './Navbar';
import Chips from './Chips';
import Chocolate from './Chocolate';
import Cookies from './Cookies';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<endingMachine />}>
        
        </Route>
        <Route exact path='/chips' element={<Chips/>}>
          
        </Route>
        <Route exact path='/cookies' element={<Cookies/>}>
          
        </Route>
        <Route exact path='/chocolate' element={<Chocolate/>}>
         
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;