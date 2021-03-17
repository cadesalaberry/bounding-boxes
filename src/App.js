
import { fabric } from "fabric";
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  Button,
  MobileStepper,
  Typography,
  Paper,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons';

import { getSmartCanvas, getRectanglesFromCanvas } from './SmartCanvas';
import SelectionItem from './SelectionItem';

import logo from './fruits.jpg';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bottomAppBar: {
    top: 'auto',
    bottom: 0,
  },
  title: {
    flexGrow: 1,
  },
  panelsContainer: {
    width: '100vw',
    overflow: 'hidden',
  },
  panels: {
    transition: 'transform .3s',
    width: '200vw',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '2.5vw',
    gridGap: '5vw',
    '& > *': {
      height: '80vh',
      overflow: 'scroll',
    },
  },
  imageWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '75vh',
    objectFit: 'contain',
    opacity: 0,
  },
  canvasWrapper: {
    position: 'absolute',
    top: 0,
  },
}));

function App() {
  const classes = useStyles();

  const [canvas, setCanvas] = useState(null);
  const [selection, setSelection] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const setupCanvas = () => {
    const image = document.getElementById('image');
    const { height, width } = window.getComputedStyle(image)

    const parsedWidth = width.replace('px', '');
    const parsedHeight = height.replace('px', '');

    const _canvas = getSmartCanvas('canvas', {
      height: parsedHeight,
      width: parsedWidth,
    });

    
    setImageHeight(parsedHeight);
    setImageWidth(parsedWidth);
    setCanvas(_canvas);
    
    window.theCanvas = _canvas
    window.theImage = image

    console.log('Drawing image onto canvas', parsedWidth, parsedHeight)

    const fImage = new fabric.Image(image, {
      originX: 'left',
      originY: 'top',
      top: 0,
      left: 0,
      selectable: false,
    })

    fImage.scaleToHeight(parsedHeight);
    fImage.scaleToWidth(parsedWidth);

    _canvas.add(fImage)
  }

  const getRectangles = () => {
    return getRectanglesFromCanvas(canvas, {
      height: imageHeight,
      width: imageWidth,
    });
  }

  const handleNext = () => {
    const selection = getRectangles();

    setSelection(selection)

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });


  return (
    <ThemeProvider className="App" theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {activeStep ? 'Categorize your selection' : 'Isolate objects'}
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.panelsContainer}>
        <div className={classes.panels} style={{
          transform: `translateX(-${100 * activeStep}vw)`
        }}>
          <Paper elevation={3}>
            <div className={classes.imageWrapper}>
              <img id="image" src={logo} className={classes.image}
                  alt="logo"
                  onLoad={setupCanvas} />
              <div className={classes.canvasWrapper}>
                <canvas className={classes.canvas} id="canvas" />
              </div>
            </div>
          </Paper>

          <div>
            {selection.map((selectedItem, i) => {
              return (<SelectionItem selectedItem={selectedItem} key={i} position={i}></SelectionItem>)
            })}
          </div>
        </div>
      </div>

      <AppBar position="fixed" color="primary" className={classes.bottomAppBar}>
        <Toolbar>
          <MobileStepper
            steps={2}
            variant="text"
            color="primary"
            activeStep={activeStep}
            nextButton={
              <Button size="small" variant="contained" color="primary" onClick={handleNext} disabled={1 <= activeStep}>
                Next
                {<KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" variant="contained" color="primary" onClick={handleBack} disabled={activeStep <= 0}>
                {<KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
