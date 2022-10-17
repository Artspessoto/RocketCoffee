const menuMobile = document.querySelector("#menuMobile");
let showMenu = false;

function openMenu() {
  const nav = document.querySelector("#navbar");
  const openMenu = document.querySelector(".menuOpen");
  nav.classList.toggle("active");

  if (showMenu == false) {
    openMenu.setAttribute('src', '../assets/menu-buguer-close.svg');
    nav.classList.toggle("enable");
    showMenu = true;
    openMenu.style = `height: 20px`;
  } else {
    openMenu.setAttribute('src', '../assets/menu-buguer-open.svg');
    nav.classList.toggle('disable');
    showMenu = false;
    openMenu.style = `height: 12px`;
  }
}

const links = document.querySelectorAll("nav ul a li");

for (const key of links) {
  key.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

menuMobile.addEventListener("click", openMenu);
