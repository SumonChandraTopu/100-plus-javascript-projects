const btn = document.getElementById("btn");
const feed = document.getElementById("feed");
const handleWithAJEX = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      const countries = JSON.parse(this.response);
      countries.forEach((country) => {
        const cart = document.createElement("div");
        cart.innerText = country?.name?.common;
        feed.appendChild(cart);
      });
    } else {
      console.log("Failed");
    }
  };
  xhr.send();
};

const handleWithFetch = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      data.map((country) => {
        const li = document.createElement("li");
        li.innerText = country.name.common;
        feed.appendChild(li);
      });
    });
};

btn.addEventListener("click", () => handleWithFetch());
// btn.addEventListener("click", handleWithAJEX());
