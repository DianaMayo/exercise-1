import React from 'react';
import defaultProps from './defaultProps';
import {Routes, Route, Navigate} from 'react-router-dom';
import DogList from './dogList';
import DogDetails from './dogDetails';


import './App.css';

function App() {
  const dogs = defaultProps.dogs;
  return (
    <div className='App'>
      <DogList />
      <Routes>
        <Route exact="true" path="/dogs" element={<DogList dogs={dogs} />}>
        </Route>
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />}> 
        </Route> 
      </Routes>
      <Navigate />
    </div>
  );
}

export default App;




