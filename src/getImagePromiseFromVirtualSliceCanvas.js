/**
 * Convert array buffer to image. Returns a promise that resolves to an Image object for the bytes in arrayBuffer
 *
 * @returns {Promise} Promise that resolves to an Image object
 */
export default function () {
  return new Promise((resolve, reject) => {
    const canvas = document.getElementById('vs');
    const image = new Image();
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = canvas.toDataURL();

    image.src = imageUrl;
    image.onload = () => {
      resolve(image);
      urlCreator.revokeObjectURL(imageUrl);
    };

    image.onerror = (error) => {
      urlCreator.revokeObjectURL(imageUrl);
      reject(error);
    };
  });
}
