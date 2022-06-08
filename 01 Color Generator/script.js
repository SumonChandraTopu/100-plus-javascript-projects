const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const codeText = document.getElementById("code-text");
const codeText2 = document.getElementById("code-text2");
const changeBtn = document.getElementById("copy-btn");

/* ============================ Handle the Generate Button ============= */

generateBtn.addEventListener("click", function () {
  const color = getDecimalCode();
  const bgHaxColor = generateHax(color);
  const bgRGBColor = generateRgb(color);
  document.body.style.backgroundColor = `#${bgHaxColor}`;
  codeText2.value = bgRGBColor;
  codeText.value = bgHaxColor;
});

/* ======================= Generate hax & rgb code ======================== */
//  Step 1 --> Get the hax code function and return it into an obj
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

// Step 2 -->  Generate Hexadecimal code
const generateHax = ({ red, green, blue }) => {
  const getHaxCode = (value) => {
    const hax = value.toString(16);
    return hax.length === 1 ? `0${hax}` : hax;
  };
  return `${getHaxCode(red)}${getHaxCode(green)}${getHaxCode(
    blue
  )}`.toUpperCase();
};

//  Step 3 -->  Generate RGB code
const generateRgb = ({ red, green, blue }) => {
  return `rgb(${red}, ${green}, ${blue})`;
};

/* =========================== Handle the Copy Button ========================= */

// -- Copy the color code
let div = null;
changeBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(`#${codeText.value}`);
  if (div !== null) {
    div.remove();
    div = null;
  }
  //  -- Call the Toast message
  generateToastMessage(`#${codeText.value} copied!`);
});

/* ============================== Input field ============================= */

//  -- Color code input field
codeText.addEventListener("keyup", function (e) {
  const colorCode = e.target.value;
  // console.log(color);
  if (colorCode) {
    codeText.value = colorCode.toUpperCase();
    if (isValidHax(colorCode)) {
      document.body.style.backgroundColor = `#${colorCode}`;
    }
  }
});

/* ======================== Check validation of the code ======================== */
/**
 * @param {string} color: ;/
 */
const isValidHax = (color) => {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
};

/* ================================== Toast Message generator ========================== */
// -- Toast message generate
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
