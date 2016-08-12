'use strict';

const CANVAS = document.querySelector('canvas');
const CTX = CANVAS.getContext('2d');

let monster = {
  NORMAL: 0,
  SCARED: 1,
  state: 0,

  frame0() {
    CTX.fillRect(5, 25, 100, 100);
  },

  frame1() {
    CTX.fillRect(10, 15, 100, 100);
  },

  frame2() {
    CTX.fillRect(10, 15, 100, 100);
  },

  frame3() {
    CTX.fillRect(15, 20, 100, 100);
  },

  frame4() {
    CTX.fillRect(25, 25, 100, 100);
  },

  numberOfFrames: 5,
  currentFrame: 0,

  updateAnimation() {
    if (this.currentFrame < this.numberOfFrames) {
      this.currentFrame++;
    }
  }
}


function loadHandler() {
  updateAnimation();
}

function updateAnimation() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  setTimeout(updateAnimation, 300);
}

window.addEventListener('load', loadHandler, false);
