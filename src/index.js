import getImagePromiseFromVirtualSliceCanvas from './getImagePromiseFromVirtualSliceCanvas.js';
import createImage from './createImage.js';
import { loadImage } from './loadImage.js';

const cornerstoneDATImageLoader = {
  getImagePromiseFromVirtualSliceCanvas,
  createImage,
  loadImage
};

export {
  getImagePromiseFromVirtualSliceCanvas,
  createImage,
  loadImage
};

export default cornerstoneDATImageLoader;
