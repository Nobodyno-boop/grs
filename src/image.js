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
 * @param {string[]} colors
 * @param {number?} angle
 * @returns
 */
exports.createImage = (w, h, colors, angle = 45) => {
  let radians = angle * (Math.PI / 180);
  let sin = Math.sin(radians);
  let cos = Math.cos(radians);
  let lineLength = Math.abs(w * sin + Math.abs(w * cos));
  let center = [w / 2, h / 2];

  let coord = [
    center[0] - cos * 0.51 * lineLength,
    center[1] - sin * 0.51 * lineLength,
    center[0] + cos * 0.51 * lineLength,
    center[1] + sin * 0.51 * lineLength,
  ];

  let canvas = createCanvas(w, h);
  let ctx = canvas.getContext("2d");

  let gradient = ctx.createLinearGradient(...coord);

  colors.forEach((color, index) => {
    color = addHexSymbol(color);
    // Thanks to Entarielle for this quick Math.
    let average = index / (colors.length - 1);
    gradient.addColorStop(average, color);
  });

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);

  return canvas.toBuffer();
};
