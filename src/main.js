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

function keydownHandler(e) {
  monster.state = monster.SCARED
  render();
}

function keyupHandler(e) {
  monster.state = monster.NORMAL;
  render();
}

document.addEventListener('keydown', keydownHandler, false);
document.addEventListener('keyup', keyupHandler, false);

drawSquare();
