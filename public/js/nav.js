// function toggleSubMenu(event) {
//   event.preventDefault();
//   const subMenu = event.target.nextElementSibling;
//   subMenu.classList.toggle("active");
//   event.target.classList.toggle("hidden-link");
// }


// function toggleSubMenu(event) {
//   event.preventDefault();
//   const subMenu = event.target.nextElementSibling;

//   // Vérifiez si le sous-menu est déjà visible
//   const isSubMenuVisible = subMenu.classList.contains("active");

//   // Fermez tous les sous-menus ouverts
//   const allSubMenus = document.querySelectorAll(".submenu");
//   allSubMenus.forEach((menu) => {
//     menu.classList.remove("active");
//   });

//   // Si le sous-menu n'est pas visible, ouvrez-le
//   if (!isSubMenuVisible) {
//     subMenu.classList.add("active");
//   }
// }

// // Utilisez l'événement "touchstart" au lieu de "click"
// const subMenuLink = document.querySelector(".menus__links__link-wrapper__cta1");
// subMenuLink.addEventListener("touchstart", toggleSubMenu);


function toggleSubMenu(event) {
  event.preventDefault();
  const subMenu = event.target.nextElementSibling;

  // Vérifiez si le sous-menu est déjà visible
  const isSubMenuVisible = subMenu.classList.contains("active");

  // Fermez tous les sous-menus ouverts
  const allSubMenus = document.querySelectorAll(".submenu");
  allSubMenus.forEach((menu) => {
    menu.classList.remove("active");
  });

  // Si le sous-menu n'est pas visible, ouvrez-le
  if (!isSubMenuVisible) {
    subMenu.classList.add("active");
  }
}

// Utilisez l'événement "click"
const subMenuLink = document.querySelector(".menus__links__link-wrapper__cta1");
subMenuLink.addEventListener("click", toggleSubMenu);



// document.addEventListener("DOMContentLoaded", function() {
//   const projetLink = document.getElementById("projet-link");
//   projetLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     toggleSubMenu("projet-link");
//   });
// });



$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('.navbar-collapse').toggleClass('show');
  });
});
  
  
  