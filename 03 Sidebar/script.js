// --> References

const showBtn = document.getElementById("show-sidebar-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

showBtn.addEventListener("click", function () {
  sidebar.style.right = "0";
  sidebar.style.display = "block";
  sidebar.style.opacity = 1;
  document.body.addEventListener("click", function () {
    sidebar.style.right = "-600px";
  });
});
closeBtn.addEventListener();
