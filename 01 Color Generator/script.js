const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const codeText = document.getElementById("code-text");
const changeBtn = document.getElementById("copy-btn");
//  Generate RGB color code
const generateRGB = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const RGBColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = RGBColor;
  codeText.innerText = RGBColor;
};

// Generate Hexadecimal code method  1
const haxGenerator = () => {
  const newColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + newColor;
  codeText.innerText = "#" + newColor;
};

// Generate Hexadecimal code method  2
const generateHax = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  // Handle copy button
  const haxColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  document.body.style.backgroundColor = haxColor;
  codeText.value = haxColor;
};

let div = null;
// Copy the color code
changeBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(codeText.value);
  if (div !== null) {
    div.remove();
    div = null;
  }
  // Generate Toast message
  generateToastMessage(`${codeText.value} copied!`);
});
codeText.addEventListener("keyup", function (e) {
  const color = e.target.value;
  // console.log(color);
  if (color && isValidHax(color)) {
    document.body.style.backgroundColor = color;
  }
});
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

// Type the input field and update the code
/**
 * @param {string} color: ;/
 */
const isValidHax = (color) => {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;
  color.substring(1);
  return /^[0-9A-Fa-f]{6}/i.test(color);
};
generateBtn.addEventListener("click", function () {
  // haxGenerator();
  // generateRGB();
  generateHax();
});
