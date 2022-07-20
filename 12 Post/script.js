const postBtn = document.getElementById("post-btn");
const postInp = document.getElementById("post-inp");
const postContainer = document.getElementById("posts-container");

let postArray = [];
const postFetching = () => {
  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      postArray = data;
      generatePostArray(postArray.reverse());
    })
    .catch((err) => console.log(err.message));
};

const generatePostArray = (posts) => {
  posts.map((post) => {
    const div = document.createElement("div");
    div.setAttribute("class", "post");
    const p = document.createElement("p");
    p.setAttribute("class", "post-desc");
    p.innerHTML = post.desc;
    div.appendChild(p);
    postContainer.appendChild(div);
  });
};
function createPost(e) {
  e.preventDefault();
  if (postInp.value) {
    const newValue = {
      id: Date.now() + " ",
      desc: postInp.value,
      completed: false,
    };
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newValue),
    })
      .then((data) => postFetching(data))
      .catch((err) => console.log(err.message));
  } else {
    alert("Provide a valid value!!");
  }
}
window.addEventListener("load", postFetching);
postBtn.addEventListener("click", (e) => createPost(e));
