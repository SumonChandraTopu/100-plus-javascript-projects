const addBtn = document.getElementById("add_btn");
const titleInp = document.getElementById("title_inp");
const noteInp = document.getElementById("note_inp");
const notesContainer = document.getElementById("notes_container");

let notesArr = [];
const notesFetching = () => {
  fetch("http://localhost:3000/notes")
    .then((res) => res.json())
    .then((data) => {
      notesArr = data;
      generateNotes(notesArr.reverse());
    })
    .catch((err) => console.log(err.message));
};

const generateNotes = (notes) => {
  notes.map((note) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const small = document.createElement("small");

    small.addEventListener("click", () => deleteNote(note));
    small.innerText = "Delete";
    small.setAttribute("class", "delete");
    p.innerText = note.note;
    h3.innerText = note.title;
    h3.appendChild(small);
    div.setAttribute("class", "note");
    div.appendChild(h3);
    div.appendChild(p);
    // console.log(div);
    notesContainer.appendChild(div);
  });
};

const createNote = (title, note, e) => {
  e.preventDefault();
  const newNote = {
    id: Date.now() + " ",
    title: title,
    note: note,
  };
  if ((title, note)) {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    })
      .then((data) => generateNotes(data))
      .catch((err) => console.log(err.message));
  } else {
    alert("Please fill the box !!!");
  }
  (title = ""), (note = "");
};

const deleteNote = (note) => {
  // e.preventDefault();
  fetch(`http://localhost:3000/notes/${note.id}`, {
    method: "DELETE",
  }).catch((err) => console.log(err.message));
  // console.log(note.id);
};

window.addEventListener("load", notesFetching);
addBtn.addEventListener("click", (e) =>
  createNote(titleInp.value, noteInp.value, e)
);
