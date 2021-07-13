import { loadImage } from './loadImage.js';

export default function (cornerstone) {
  // Register empty prefixes
  cornerstone.registerImageLoader('', loadImage);
}
