const emojis = document.querySelectorAll(".fa-regular");
const stars = document.querySelectorAll(".fa-solid");
const colorArr = ["red", "orange", "lightblue", "lightgreen", "green"];
// updateRating(0);
stars.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    updateRating(index);
  });
});
const updateRating = (index) => {
  stars.forEach((icon, ind) => {
    if (ind < index + 1) {
      icon.classList.add("active");
    } else {
      icon.classList.remove("active");
    }
  });
  emojis.forEach((emoji) => {
    emoji.style.transform = `translateX(-${index * 50}px)`;
    emoji.style.color = `colorArr.forEach(color => )`;
  });
};
