'use strict';

const CANVAS = document.querySelector('canvas');
const CTX = CANVAS.getContext('2d');

let monster = {
  NORMAL: 0,
  SCARED: 1,
  state: 0
}

function squareFrame1() {
  CTX.fillRect(5, 25, 100, 100);
}

function squareFrame2() {
  CTX.fillRect(10, 15, 100, 100);
}

function squareFrame3() {
  CTX.fillRect(15, 20, 100, 100);
}

function squareFrame4() {
  CTX.fillRect(15, 20, 100, 100);
}

function squareFrame5() {
  CTX.fillRect(25, 25, 100, 100);
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
