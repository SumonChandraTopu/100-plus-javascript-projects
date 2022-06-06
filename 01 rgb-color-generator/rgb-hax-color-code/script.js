const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const codeText = document.getElementById("code-text");
const changeBtn = document.getElementById("copy-btn");
//  Generate RGB color
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
// Change the color code
changeBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(codeText.value);
});

generateBtn.addEventListener("click", function () {
  // haxGenerator();
  // generateRGB();
  generateHax();
});
