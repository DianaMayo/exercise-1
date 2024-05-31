import React, {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Colors from './Colors';
import Color from './Color';
import Form from './Form';
import './App.css';

function App() {
  const [colorList, setColorList] = useState([' red', ' green', ' blue']);
  const addColor = (color) => {
    setColorList(colorList => [color, ...colorList])
  }
  return (
    <div className="App">
      <Routes>
        <Route exact="true" path='/colors'
          element={<Colors colorList={colorList}/>}>
        </Route>
        <Route exact="true" path='/colors/new'
          element={<Form addColor={addColor} />}>
        </Route>
        <Route exact="true" path='/colors/:color'
          element={<Color colorList={colorList}/>}>
        </Route>
        </Routes>
        <Navigate to='/colors' />
    
    </div>
  );
}

export default App;