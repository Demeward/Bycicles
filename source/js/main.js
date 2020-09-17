'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var menuButton = document.querySelector('.main-nav__toggle');
  var menu = document.querySelector('.main-nav');

  header.classList.remove('page-header--no-js');
  menu.classList.remove('main-nav--no-js');
  menuButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.toggle('main-nav--closed');
  });

  var getToAnchor = function (event, anchor) {
    event.preventDefault();

    var blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  var anchors = document.querySelectorAll('a[href*="#"]');


  for (var i = 0; i < anchors.length; i++) {
    (function () {
      var anchor = anchors[i];
      anchor.addEventListener('click', function () {
        getToAnchor(event, anchor);
      });
    })();
  }
})();
