'use strict';

const CANVAS = document.querySelector('canvas');
const CTX = CANVAS.getContext('2d');

let monster = {
  NORMAL: 0,
  SCARED: 1,
  state: 0
}

function drawSquare() {
  CTX.fillRect(25, 25, 100, 100);
  CTX.strokeRect(50, 50, 50, 50);
}

function drawSlimSquare() {
  CTX.fillRect(15, 15, 100, 100);
}

function keydownHandler(e) {
  becomeScared();
  console.log('scared');
}

function becomeScared() {
  monster.state = monster.SCARED;
  setTimeout(becomeNormal, 1000);
  render();
}

function becomeNormal() {
  monster.state = monster.NORMAL;
  render();
}

function render() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  switch (monster.state) {
    case monster.NORMAL:
      drawSquare();
      break;
    case monster.SCARED:
      drawSlimSquare();
      break;
  }
}

document.addEventListener('keydown', keydownHandler, false);
