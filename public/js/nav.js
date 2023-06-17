function toggleSubMenu(event) {
    event.preventDefault();
    const subMenu = event.target.nextElementSibling;
    subMenu.classList.toggle("active");
    const hiddenLink = event.target.parentNode.querySelector(".menus__links__hidden-link");
    hiddenLink.classList.toggle("hidden");
  }
  