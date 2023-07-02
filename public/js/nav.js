function toggleSubMenu(event) {
  event.preventDefault();
  const subMenu = event.target.nextElementSibling;
  subMenu.classList.toggle("active");
  event.target.classList.toggle("hidden-link");
}



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
  
  
  