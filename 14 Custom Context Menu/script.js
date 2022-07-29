const container = document.getElementById("container");
const main = document.querySelector("main");
const shareMenu = document.getElementById("share-menu");
main.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  let x = e.offsetX;
  let y = e.offsetY;
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  let cmHeight = container.offsetHeight;
  let cmWidth = container.offsetWidth;
  if (x > winWidth - cmWidth - shareMenu.offsetWidth) {
    shareMenu.style.left = "-14rem";
    // shareMenu.style.left = "-9rem";
  } else {
    shareMenu.style.left = "";
    shareMenu.style.right = "-14rem";
  }
  x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight : y;
  container.style.left = `${x}px`;
  container.style.top = `${y}px`;
  container.style.display = "block";
});
window.addEventListener("click", function () {
  container.style.display = "none";
});
