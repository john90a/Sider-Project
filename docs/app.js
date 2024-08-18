const sideBar = document.getElementById("sidebar");
const closeBtn = document.querySelector(".closeBtn");
const toggleBtn = document.querySelector(".toggleBtn");

toggleBtn.addEventListener("click", function () {
  //if (sideBar.classList.contains("show-sideBar")) {
  //  sideBar.classList.remove("show-slideBar");
  //} else {
  //  sideBar.classList.add("show-slideBar");
  //}
  sideBar.classList.toggle("show-sideBar");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sideBar");
});
