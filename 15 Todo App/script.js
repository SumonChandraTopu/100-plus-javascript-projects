const addBtn = document.getElementById("add");
const inpField = document.getElementById("inp-field");
const ul = document.getElementById("ul");

const handleSubmit = (value) => {
  let li = document.createElement("li");
  li.setAttribute("class", "item");
  const v = (li.innerText = value);
  localStorage.setItem("todos", `${v}`);
  //   ul.appendChild(li);
};

addBtn.addEventListener("click", () => handleSubmit(inpField.value));
