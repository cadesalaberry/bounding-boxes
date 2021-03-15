import logo from './fruits.jpg';
import './App.css';

import React, { useState } from 'react';
import { getSmartCanvas, getRectanglesFromCanvas } from './SmartCanvas';
import SelectionItem from './SelectionItem';

import {
  Button,
  MobileStepper,
  Typography,
  Paper,
} from '@material-ui/core';

import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons';

function App() {
  const [canvas, setCanvas] = useState(null);
  const [selection, setSelection] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const setupCanvas = () => {
    const image = document.getElementById('image');
    const { height, width } = window.getComputedStyle(image)

    const parsedWidth = parseInt(width);
    const parsedHeight = parseInt(height);

    const _canvas = getSmartCanvas('canvas', {
      height: parsedHeight,
      width: parsedWidth,
    });

    
    setImageHeight(parsedHeight);
    setImageWidth(parsedWidth);
    setCanvas(_canvas);
    
    console.log(_canvas)
    _canvas.lowerCanvasEl.getContext('2d').drawImage(image, 0, 0, width, height)
  }

  const getRectangles = () => {
    return getRectanglesFromCanvas(canvas, {
      height: imageHeight,
      width: imageWidth,
    });
  }

  const handleNext = () => {
    const selection = getRectangles();
    console.log(canvas, selection)

    setSelection(selection)

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <div className="App">
      <Paper square elevation={0} className="header">
        <Typography>Isolate the zones</Typography>
      </Paper>
      <img id="image" src={logo} className="s-image"
           alt="logo"
           onLoad={setupCanvas} />
      <canvas className="canvas" id="canvas" />
      <div>
        {selection.map((selectedItem, i) => {
          return (<SelectionItem selectedItem={selectedItem} key={i} position={i}></SelectionItem>)
        })}
      </div>
      <MobileStepper
        steps={3}
        style={{ width: imageWidth }}
        position="static"
        variant="text"
        className="stepper"
        activeStep={activeStep}
        nextButton={
          <Button size="small" variant="contained" color="primary" onClick={handleNext} disabled={activeStep === 2}>
            Next
            {<KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" variant="contained" color="primary" onClick={handleBack} disabled={activeStep === 0}>
            {<KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default App;
