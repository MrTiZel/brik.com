"use strict";

var input = document.querySelector('.block_footer__input');

if (input.focus) {
  input.value = '';
} else {
  input.value = 'Email Address';
}