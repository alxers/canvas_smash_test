'use strict';

const CANVAS = document.querySelector('canvas');
const CTX = CANVAS.getContext('2d');

let monster = {
  NORMAL: 0,
  SCARED: 1,
  state: 0,

  frame1() {
    CTX.fillRect(5, 25, 100, 100);
  },

  frame2() {
    CTX.fillRect(10, 15, 100, 100);
  },

  frame3() {
    CTX.fillRect(10, 15, 100, 100);
  },

  frame4() {
    CTX.fillRect(15, 20, 100, 100);
  },

  frame5() {
    CTX.fillRect(25, 25, 100, 100);
  },

  numberOfFrames: [frame1, frame2, frame3, frame4, frame5],
  currentFrame: 0,

  updateAnimation() {
    if (this.currentFrame < this.numberOfFrames) {
      this.currentFrame++;
      numberOfFrames.map((frame)=> frame());
    }
  }
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

function loadHandler() {
  updateAnimation();
}

function updateAnimation() {
  setTimeout(updateAnimation, 300);
  monster.updateAnimation();
  render();
}

document.addEventListener('load', loadHandler, false);
