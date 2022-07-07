const container = document.getElementById("container");
text = container.querySelector("h2");
const onDrag = ({ movementX, movementY }) => {
  console.log("Something");
  let getStyle = window.getComputedStyle(container);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  container.style.left = `${left + movementX}px`;
  container.style.top = `${top + movementY}px`;
};
text.addEventListener("mousedown", () => {
  text.addEventListener("mousemove", onDrag);
});
