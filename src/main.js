'use strict';

const CANVAS = document.querySelector('canvas');
const CTX = CANVAS.getContext('2d');

let monster = {
  NORMAL: 0,
  SCARED: 1,
  state: 0
}

function drawSquare() {
  CTX.fillRect(25,25,100,100);
  CTX.strokeRect(50,50,50,50);
}

document.addEventListener('keydown', keydownHandler, false);
document.addEventListener('keyup', keyupHandler, false);

drawSquare();
