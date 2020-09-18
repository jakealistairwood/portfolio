"use strict";

var hamburgerMenu = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
hamburgerMenu.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});
hamburgerMenu();