const hamburger = document.querySelector(".hamburger svg");
const sideNav = document.querySelector(".close");
const close = document.querySelector(".close svg");

hamburger.addEventListener("click", () => {
  sideNav.style.clipPath = "circle(141.5% at 100% 100%)";
});
close.addEventListener("click", () => {
  sideNav.style.clipPath = "circle(0.0% at 100% 100%)";
});
