const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  alert("your device has been hacked !");
});
const n_btn = document.getElementById("n_btn");
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
n_btn.addEventListener("click", function () {
  nav.classList.toggle("exp");
  n_btn.classList.toggle("rotate");
  menu.classList.toggle("showmenu");
});
const password = document.getElementById("password");
const show = document.getElementById("show");
show.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
show.addEventListener("click", function () {
  show.classList.toggle("fanted");
});
