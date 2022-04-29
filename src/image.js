const { createCanvas } = require("canvas");
// Based on https://github.com/miqlar/minimal-gradient-image-generator/blob/master/script.js

/**
 * Add '#' to a string color when is needed
 *
 *
 * ```js
 *
 * let color1 = addHexSymbol("fca5a5") // #fca5a5
 * let color2 = addHexSymbol("#fca5a5") // #fca5a5
 * ```
 * @param {string} str
 */
const addHexSymbol = (str) => {
  return !str.startsWith("#") ? "#" + str : str;
};

/**
 *
 * @param {number} w
 * @param {number} h
 * @param {string} c1
 * @param {string} c2
 * @param {number?} angle
 * @returns
 */
exports.createImage = (w, h, c1, c2, angle = 35) => {
  let radians = angle * (Math.PI / 180);
  let sin = Math.sin(radians);
  let cos = Math.cos(radians);
  let lineLength = Math.abs(w * sin + Math.abs(w * cos));
  let center = [w / 2, h / 2];
  // 0.78
  let coord = [
    center[0] - cos * 0.51 * lineLength,
    center[1] - sin * 0.51 * lineLength,
    center[0] + cos * 0.51 * lineLength,
    center[1] + sin * 0.51 * lineLength,
  ];

  let canvas = createCanvas(w, h);
  let ctx = canvas.getContext("2d");

  let gradient = ctx.createLinearGradient(...coord);

  gradient.addColorStop(0, addHexSymbol(c1));
  gradient.addColorStop(1, addHexSymbol(c2));

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);

  return canvas.toBuffer();
};
