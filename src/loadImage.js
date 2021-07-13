import getImagePromiseFromVirtualSliceCanvas from './getImagePromiseFromVirtualSliceCanvas.js';
import createImage from './createImage.js';

//
// This is a cornerstone image loader specific for DAT
//


// Loads an image given an arbitrary id
export function loadImage (imageId) {

  const promise = new Promise((resolve, reject) => {
    const imagePromise = getImagePromiseFromVirtualSliceCanvas();

    imagePromise.then((image) => {
      const imageObject = createImage(image, imageId);

      resolve(imageObject);
    }, reject);
  });

  const cancelFn = () => {};

  return {
    promise,
    cancelFn
  };
}
