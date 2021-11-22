// Fonctionnalité 1.
let footer = document.querySelector("footer");
console.log(footer);

let clickCounter = 1;
function onFooterClick() {
  console.log(`clic numéro ${clickCounter}`);
  clickCounter++;
}

footer.addEventListener("click", onFooterClick);

//----------------------------------------------------------------------------//
// Fonctionnalité 2.
let navbar = document.querySelector("#navbarHeader");
let navbarTogglerIcon = document.querySelector(".navbar-toggler");
console.log(navbar);
console.log(navbarTogglerIcon);

// let navbarMenuExpanded = false;
function navbarHamburger() {
  navbar.classList.toggle("collapse");
  // if (navbarMenuExpanded === false) {
  //   navbar.classList.remove("collapse");
  //   navbarMenuExpanded = true; 
  // }
  // else {
  //   navbar.classList.add("collapse");
  //   navbarMenuExpanded = false; 
  // }
}

navbarTogglerIcon.addEventListener("click", navbarHamburger);

//----------------------------------------------------------------------------//
// Fonctionnalité 3.
let firstCard = document.querySelectorAll(".col-md-4")[0];

let firstCardEditBtn = document.querySelectorAll(".col-md-4 .btn-outline-secondary")[0];

function firstEgyptianPlague() {
  firstCard.style.color = "red";
}

firstCardEditBtn.addEventListener ("click", firstEgyptianPlague);

//----------------------------------------------------------------------------//
// Fonctionnalité 4.
let secondCard = document.querySelectorAll(".col-md-4")[1];

let secondCardEditBtn = document.querySelectorAll(".col-md-4 .btn-outline-secondary")[1];

let ecology = false;
function captainPlanet() {
  if (ecology === false) {
    secondCard.style.color = "green";
    ecology = true; 
  }
  else {
    secondCard.style.color = "#212529";
        ecology = false; 
  }
}

secondCardEditBtn.addEventListener ("click", captainPlanet);

//----------------------------------------------------------------------------//
// Fonctionnalité 5.

