const inpField = document.getElementById("input-field");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.innerText = "Downloading File...";
  fetchFile(inpField.value);
});

const fetchFile = (url) => {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      //   console.log(file);
      let tempUrl = URL.createObjectURL(file);
      console.log(tempUrl);
      let a = document.createElement("a");
      a.href = tempUrl;
      a.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(tempUrl);
      btn.innerText = "Download File";
    })
    .catch(() => {
      btn.innerText = "Download File";
      alert("Fail to download");
    });
};
