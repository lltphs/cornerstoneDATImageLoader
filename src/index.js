import getImagePromiseFromVirtualSliceCanvas from './getImagePromiseFromVirtualSliceCanvas.js';
import createImage from './createImage.js';
import { loadImage, configure } from './loadImage.js';
import { external } from './externalModules.js';

const cornerstoneDATImageLoader = {
  getImagePromiseFromVirtualSliceCanvas,
  createImage,
  loadImage,
  configure,
  external
};

export {
  getImagePromiseFromVirtualSliceCanvas,
  createImage,
  loadImage,
  configure,
  external
};

export default cornerstoneDATImageLoader;
