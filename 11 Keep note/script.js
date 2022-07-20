const addBtn = document.getElementById("add_btn");
const titleInp = document.getElementById("title_inp");
const noteInp = document.getElementById("note_inp");
const notesContainer = document.getElementById("notes_container");

const submitNote = (title, note, e) => {
  e.preventDefault();
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  if (title && note) {
    p.innerText = note;
    h3.innerText = title;
    div.setAttribute("class", "note");
    div.appendChild(h3);
    div.appendChild(p);
    // console.log(div);
    notesContainer.appendChild(div);
  } else {
    alert("Add title and note !!");
  }
  noteInp.value = "";
  titleInp.value = "";
};

addBtn.addEventListener("click", (e) =>
  submitNote(titleInp.value, noteInp.value, e)
);
