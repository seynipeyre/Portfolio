window.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.container1__box');
  boxes.forEach((box) => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    box.style.setProperty('--lumiere-color', randomColor);
  });
});




// $(document).ready(function() {
//   $('.image-section__image-container').hover(
//     function() {
//       $(this).find('.image-section__image-container__img').addClass('expanded');
//       $(this).find('.image-section__image-container__image-overlay').addClass('expanded');
//     },
//     function() {
//       $(this).find('.image-section__image-container__img').removeClass('expanded');
//       $(this).find('.image-section__image-container__image-overlay').removeClass('expanded');
//     }
//   );

//   $('.image-section__image-overlay .button').click(function(e) {
//     e.preventDefault();
//     var $container = $(this).closest('.image-section__image-container');
//     $container.toggleClass('expanded');
//     $(this).text(function(i, text){
//       return text === "Voir l'image" ? "Réduire" : "Voir l'image";
//     });
//   });
// });










// let menu = document.querySelector("#menu-bars");
// let nav = document.querySelector(".nav");

// menu.addEventListener("click", () => {
//   menu.classList.toggle("fa-times");
//   nav.classList.toggle("active");
// });
