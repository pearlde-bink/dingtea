const navbar = document.querySelector(".navbar__container");
const dropMenu = document.querySelector(".dropdown-menu");
const navbarLogo = document.querySelector(".navbar__logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#343434";
    navbar.style.width = "100%";
    dropMenu.style.backgroundColor = "#343434";
    navbarLogo.style.transform = "scale(.8) translateY(0px)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbarLogo.style.transform = "scale(1) translateY(10px)";
  }
});
