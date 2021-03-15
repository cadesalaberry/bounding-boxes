import { fabric } from "fabric";
// eslint-disable-next-line no-unused-vars
import { Canvas, Point } from "fabric";

export function getSmartCanvas(elementId, params) {

  let isDown = false, origX, origY, rectangle;

  const canvas = new fabric.Canvas(elementId, {
    height: params.height,
    width: params.width,
    containerClass: 'canvas',
    // backgroundColor: 'pink'
  })

  canvas.on('mouse:down', function(o){
    var pointer = canvas.getPointer(o.e);

    if (o.target) return;
    console.log(o)
    isDown = true;
    origX = pointer.x;
    origY = pointer.y;
    
    rectangle = new fabric.Rect({
      left: origX,
      top: origY,
      fill: 'transparent',
      stroke: 'red',
      strokeWidth: 3,
  })
    
    canvas.add(rectangle);
  });

  canvas.on('mouse:move', function(o){
    if (!isDown) return;

    var pointer = canvas.getPointer(o.e);
    if(origX>pointer.x){
        rectangle.set({ left: Math.abs(pointer.x) });
    }
    if(origY>pointer.y){
        rectangle.set({ top: Math.abs(pointer.y) });
    }
    
    rectangle.set({ width: Math.abs(origX - pointer.x) });
    rectangle.set({ height: Math.abs(origY - pointer.y) });
    canvas.renderAll();
  });

  canvas.on('mouse:up', function(o){
    isDown = false;
  });

  return canvas;
}


export const getNormalizedCoordinates = (item) => {

}

export const getPreviewWindowFromCoordinates = (coordinates) => {
  const left = Math.min(...coordinates.map(o => o.x))
  const right = Math.max(...coordinates.map(o => o.x))
  const top = Math.min(...coordinates.map(o => o.y))
  const bottom = Math.max(...coordinates.map(o => o.y))
  
  return {
    left,
    top,
    width: right - left,
    height: top - bottom,
  }
}

export const getDataUrlFromImageData = (imageData) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  ctx.putImageData(imageData, 0, 0);

  const image = new Image();
  return canvas.toDataURL();
}

/**
 * 
 * @param {fabric.Canvas} canvas 
 * @param {*} canvasSize 
 * @returns 
 */
export const getRectanglesFromCanvas = (canvas, { width, height }) => {
  const objects = canvas.getObjects();

  return objects.map((obj)=> {
    const coordinates = Object.values(obj.aCoords);
    const previewWindow = getPreviewWindowFromCoordinates(coordinates);
    const { left, top, height, width } = previewWindow;
    const imageData = canvas.upperCanvasEl.getContext('2d').getImageData(left, top, width, height);
    const dataUrl = getDataUrlFromImageData(imageData);
    
    console.log(coordinates, previewWindow)
    
    return {
      previewWindow,
      imageData,
      dataUrl,
      _original: obj,
    }
  })
}
