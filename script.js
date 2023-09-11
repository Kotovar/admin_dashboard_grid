let button = document.getElementById("hamb");
let sidebar = document.getElementById("sidebar");

button.addEventListener("click", function () {
  sidebar.classList.toggle("show");
  console.log(sidebar.classList);
});
