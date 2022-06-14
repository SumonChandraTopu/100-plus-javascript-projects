/**
 * Name: Sumon Chandra Shil
 * Date: 13 June 2022.
 * Description: This is the color picker application with huge dom functionalities
 */

//============================ Globals =====================
let toastContainer = null;
const defaultColor = {
  red: 246,
  green: 221,
  blue: 249,
};

//================================== onload handler ==========================
window.onload = () => {
  main();
  updateColorCodeToDom(defaultColor);
};

// ==================================== Main functions ============================
function main() {
  // References
  const redRange = document.getElementById("red-range");
  const greenRange = document.getElementById("green-range");
  const blueRange = document.getElementById("blue-range");
  const hexInput = document.getElementById("hex-input");
  const copyBtn = document.getElementById("copy-to-clipboard");

  copyBtn.addEventListener("click", copyToClipboard);

  // Handle Events
  const randomColorGeneratorBtn = document.getElementById(
    "random-color-generator"
  );
  randomColorGeneratorBtn.addEventListener(
    "click",
    handleRandomColorGeneratorBtn
  );
  hexInput.addEventListener("keyup", handleInputField);

  redRange.addEventListener(
    "change",
    handleRanges(redRange, greenRange, blueRange)
  );
  greenRange.addEventListener(
    "change",
    handleRanges(redRange, greenRange, blueRange)
  );
  blueRange.addEventListener(
    "change",
    handleRanges(redRange, greenRange, blueRange)
  );
}

//============================================ Events Handlers =======================================

function handleRandomColorGeneratorBtn() {
  const color = getDecimalCode();
  updateColorCodeToDom(color);
}
function handleInputField(e) {
  const colorCode = e.target.value;
  if (colorCode) {
    this.value = colorCode.toUpperCase();
    if (isValidHax(colorCode)) {
      const color = haxToDecimalColors(colorCode);
      updateColorCodeToDom(color);
    }
  }
}

function handleRanges(redRange, greenRange, blueRange) {
  return function () {
    const color = {
      red: parseInt(redRange.value),
      green: parseInt(greenRange.value),
      blue: parseInt(blueRange.value),
    };
    updateColorCodeToDom(color);
  };
}

/*-- Copy to Clipboard --*/
function copyToClipboard() {
  const colorModes = document.getElementsByName("color-mode");
  const mode = getCheckedRadios(colorModes);
  if (mode === null) {
    throw new Error("Invalid radio input");
  }
  if (toastContainer !== null) {
    toastContainer.remove();
    toastContainer = null;
  }
  if (mode === "hex") {
    const hexColorCode = document.getElementById("hex-input").value;
    if (hexColorCode && isValidHax(hexColorCode)) {
      navigator.clipboard.writeText(`#${hexColorCode}`);
      generateToastMessage(`#${hexColorCode} Copied`);
    } else {
      alert("Invalid Hex code");
    }
  } else {
    const rgbColorCode = document.getElementById("rgb-input").value;
    if (rgbColorCode) {
      navigator.clipboard.writeText(`rgb${rgbColorCode}`);
      generateToastMessage(`rgb${rgbColorCode}`);
    } else {
      alert("Invalid RGB code");
    }
  }
}
//==================================================== DOM functions ====================

/**
 * Generate the copied toast message in the DOM
 * @param {string} msg
 */
const generateToastMessage = (msg) => {
  toastContainer = document.createElement("div");
  toastContainer.innerText = msg;
  toastContainer.classList = "toast-container toast-animation-slide-in";
  toastContainer.addEventListener("click", function () {
    toastContainer.classList.remove("toast-animation-slide-in");
    toastContainer.classList.add("toast-animation-slide-out");
    toastContainer.addEventListener("animationend", function () {
      toastContainer.remove();
    });
  });

  document.body.appendChild(toastContainer);
};
/**
 * Update the functionalities in the DOM
 * @param {object} color
 */
function updateColorCodeToDom(color) {
  const hexColor = generateHax(color);
  const rgbColor = generateRgb(color);

  document.getElementById(
    "display-color"
  ).style.backgroundColor = `#${hexColor}`;
  document.getElementById("hex-input").value = hexColor;
  document.getElementById("rgb-input").value = rgbColor;
  document.getElementById("red-range").value = color.red;
  document.getElementById("red-range-label").innerText = color.red;
  document.getElementById("green-range").value = color.green;
  document.getElementById("green-range-label").innerText = color.green;
  document.getElementById("blue-range-label").innerText = color.blue;
  document.getElementById("blue-range").value = color.blue;
}

/**
 * Find the checked element from a list of radio buttons
 * @param {Array} nodes
 * @returns {string / null}
 */
function getCheckedRadios(nodes) {
  let checkedValue = null;
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      checkedValue = nodes[i].value;
      break;
    }
  }
  return checkedValue;
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
  return `${getHaxCode(red)}${getHaxCode(green)}${getHaxCode(
    blue
  )}`.toUpperCase();
};

/**
 * Take a color of three decimal values and return RGB code
 * @param {object} color
 * @returns {string}
 */
const generateRgb = ({ red, green, blue }) => {
  return `(${red}, ${green}, ${blue})`;
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
