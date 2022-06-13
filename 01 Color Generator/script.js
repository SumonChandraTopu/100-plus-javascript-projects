/**
 * Name: Sumon Chandra Shil
 * Date: 13 June 2022.
 * Description: This is the color picker application with huge dom functionalities
 */

// Globals
let dom = null;

// onload handler
window.onload = () => {
  main();
  // updateColorCodeToDom(defaultColor);
};

function main() {
  const randomColorGeneratorBtn = document.getElementById(
    "random-color-generator"
  );
  randomColorGeneratorBtn.addEventListener(
    "click",
    handleRandomColorGeneratorBtn
  );
}

// Events Handlers

function handleRandomColorGeneratorBtn() {
  const color = getDecimalCode();
  updateColorCodeToDom(color);
}
// DOM functions

/**
 *
 * @param {string} msg
 */
const generateToastMessage = (msg) => {
  div = document.createElement("div");
  div.innerText = msg;
  div.classList = "toast-container toast-animation-slide-in";
  div.addEventListener("click", function () {
    div.classList.remove("toast-animation-slide-in");
    div.classList.add("toast-animation-slide-out");
    div.addEventListener("animationend", function () {
      div.remove();
    });
  });

  document.body.appendChild(div);
};

function updateColorCodeToDom(color) {
  const hexColor = generateHax(color);
  const rgbColor = generateRgb(color);

  document.getElementById("display-color").style.backgroundColor = hexColor;
  document.getElementById("hex-input").value = hexColor;
  document.getElementById("rgb-input").value = rgbColor;
  document.getElementById("red-range").value = color.red;
  document.getElementById("red-range-label").innerText = color.red;
  document.getElementById("green-range").value = color.green;
  document.getElementById("green-range-label").innerText = color.green;
  document.getElementById("blue-range-label").innerTex = color.blue;
  document.getElementById("blue-range").value = color.blue;
}

// Utils

/**
 * Generate and return an object color decimal values
 * @returns {object}
 */
function getDecimalCode() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return {
    red,
    green,
    blue,
  };
}

/**
 * Take a color of three decimal values and return hexadecimal code
 * @param {object} color
 * @returns {string}
 */
const generateHax = ({ red, green, blue }) => {
  const getHaxCode = (value) => {
    const hax = value.toString(16);
    return hax.length === 1 ? `0${hax}` : hax;
  };
  return `#${getHaxCode(red)}${getHaxCode(green)}${getHaxCode(
    blue
  )}`.toUpperCase();
};

/**
 * Take a color of three decimal values and return RGB code
 * @param {object} color
 * @returns {string}
 */
const generateRgb = ({ red, green, blue }) => {
  return `rgb(${red}, ${green}, ${blue})`;
};

/** Convert hexadecimal to decimal colors
 * @param {string} hax:
 * @returns {object}
 */
function haxToDecimalColors(hax) {
  const red = parseInt(hax.slice(0, 2), 16);
  const green = parseInt(hax.slice(2, 4), 16);
  const blue = parseInt(hax.slice(4), 16);
  return {
    red,
    green,
    blue,
  };
}

/**
 * Check the code of input field
 * @param {string} color:
 * @returns {boolean}
 */
const isValidHax = (color) => {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
};

// ==========================================================================================
// ============================================================================================
// =============================================================================================
/* const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const copyBtn2 = document.getElementById("copy-btn2");
const codeText = document.getElementById("code-text");
const codeText2 = document.getElementById("code-text2"); */

/* ============================ Handle the Generate Button ============= */

/* generateBtn.addEventListener("click", function () {
  const color = getDecimalCode();
  const bgHaxColor = generateHax(color);
  const bgRGBColor = generateRgb(color);
  document.body.style.backgroundColor = `#${bgHaxColor}`;
  codeText2.value = bgRGBColor;
  codeText.value = bgHaxColor;
}); */

/* =========================== Handle the Copy Button ========================= */

// Step 1 --> Copy the hax color code
/* copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(`#${codeText.value}`);
  if (div !== null) {
    div.remove();
    div = null;
  }
  //  -- Call the Toast message
  generateToastMessage(`#${codeText.value} copied!`);
});
 */

// Step 2 --> Copy the rgb color code
/* copyBtn2.addEventListener("click", function () {
  const color = getDecimalCode();
  navigator.clipboard.writeText(generateRgb(color));
  if (div !== null) {
    div.remove();
    div = null;
  }
  generateToastMessage(`${generateRgb(color)} copied!`);
}); */

/* ============================== Input field ============================= */

// Step 1 --> Color code input field
/* codeText.addEventListener("keyup", function (e) {
  const colorCode = e.target.value;
  // console.log(color);
  if (colorCode) {
    codeText.value = colorCode.toUpperCase();
    if (isValidHax(colorCode)) {
      document.body.style.backgroundColor = `#${colorCode}`;
      // Update the rgb code in rgb input field
      codeText2.value = haxToRgb(colorCode);
    }
  }
}); */

/* ======================== Check validation of the code ======================== */
