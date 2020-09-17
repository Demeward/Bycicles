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
    menu.classList.toggle('main-nav--closed');
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

  window.addEventListener('DOMContentLoaded', function () {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    function mask() {
      var matrix = '+7 (___) ___-__-__';
      var m = 0;
      var def = matrix.replace(/\D/g, '');
      var val = input.value.replace(/\D/g, '');
      if (def.length >= val.length) {
        val = def;
      }
      input.value = matrix.replace(/./g, function (a) {

        if (/[_\d]/.test(a) && m < val.length) {
          return val.charAt(m++);
        } else if (m >= val.length) {
          return '';
        } else {
          return a;
        }
      });
      if (event.type === 'blur') {
        if (input.value.length === 2) {
          input.value = '';
        }
      } else {
        setCursorPosition(input.value.length, input);
      }
    }
    var input = document.querySelector('[name="tel"]');
    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
  });
})();
