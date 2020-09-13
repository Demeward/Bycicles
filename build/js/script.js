'use strict';
var menuButton = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.main-nav');

menu.classList.remove('main-nav--no-js');
menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  menu.classList.toggle('main-nav--closed');
});
