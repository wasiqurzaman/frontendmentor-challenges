const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".btn-mobile-nav");

menuBtn.addEventListener("click", function (e) {
  navBar.classList.toggle("nav-open");
});