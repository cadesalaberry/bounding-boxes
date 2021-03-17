import { fabric } from "fabric";

/**
 * Spawns a fabric canvas tha allows drawing rectangular selections.
 *
 * @param {string} elementId
 * @param {*} params
 * @returns
 */
export const getSmartCanvas = (elementId, params) => {

  let isDown = false, origX, origY, rectangle;

  const canvas = new fabric.Canvas(elementId, {
    height: params.height,
    width: params.width,
    containerClass: 'canvas',
  })

  canvas.on('mouse:down', function(o){
    var pointer = canvas.getPointer(o.e);

    if (o.target && o.target.selectable) return;

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

/**
 * Computes the biggest rectangle for the selection to fit in.
 *
 * @param {fabric.Point[]} coordinates
 * @returns
 */
export const getPreviewWindowFromCoordinates = (coordinates) => {
  const ys = coordinates.map(o => o.y)
  const xs = coordinates.map(o => o.x)
  const left = Math.min(...xs)
  const right = Math.max(...xs)
  const top = Math.min(...ys)
  const bottom = Math.max(...ys)
  
  return {
    left,
    top,
    width: right - left,
    height: bottom - top,
  }
}

/**
 * Converts an image to a displayable format.
 * 
 * @param {fabric.imageData} imageData
 * @returns
 */
export const getDataUrlFromImageData = (imageData) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL();
}

/**
 * Extract images from rectangle selection.
 * 
 * @param {fabric.Canvas} canvas
 * @param {*} canvasSize
 * @returns
 */
export const getRectanglesFromCanvas = (canvas, { width, height }) => {
  const objects = canvas.getObjects();

  return objects
    .filter(obj => obj.selectable) // Only get user made rectangles
    .map((obj)=> {
    const coordinates = Object.values(obj.aCoords);
    const previewWindow = getPreviewWindowFromCoordinates(coordinates);
    const { left, top, height, width } = previewWindow;
    const imageData = canvas.getContext('2d').getImageData(left, top, width, height);
    const dataUrl = getDataUrlFromImageData(imageData);
    
    // TODO: Adjust the preview window, they do not display the original selection
    console.log(coordinates, previewWindow)
    
    return {
      previewWindow,
      imageData,
      dataUrl,
      _original: obj,
    }
  })
}
