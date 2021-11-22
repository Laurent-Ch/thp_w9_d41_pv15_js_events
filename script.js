// Fonctionnalité 1.
let footer = document.querySelector("footer");
console.log(footer);

let clickCounter = 1;
function onFooterClick() {
  console.log(`clic numéro ${clickCounter}`);
  clickCounter++;
}

footer.addEventListener("click", onFooterClick);

// Fonctionnalité 2.
let navbar = document.querySelector("#navbarHeader");
let navbarTogglerIcon = document.querySelector(".navbar-toggler");
console.log(navbar);
console.log(navbarTogglerIcon);

let navbarMenuExpanded = false;
function navbarHamburger() {
  if (navbarMenuExpanded === false) {
    navbar.classList.remove("collapse");
    navbarMenuExpanded = true; 
  }
  else {
    navbar.classList.add("collapse");
    navbarMenuExpanded = false; 
  }
}

navbarTogglerIcon.addEventListener("click", navbarHamburger);
