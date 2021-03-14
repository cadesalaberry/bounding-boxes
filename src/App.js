import logo from './fruits.jpg';
import './App.css';

import React, { useState, useEffect } from 'react';

import { Button } from '@material-ui/core';
import { fabric } from "fabric";

function App() {
  const [canvas, setCanvas] = useState('');

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'pink'
    })
  )

  return (
    <div className="App">
      <img src={logo} className="s-image" alt="logo" />
      <canvas id="canvas" />
    </div>
  );
}

export default App;
