'use strict';

const CANVAS = document.querySelector('canvas');
const CTX = CANVAS.getContext('2d');

function drawSquare() {
  CTX.fillRect(25,25,100,100);
  CTX.strokeRect(50,50,50,50);
}

drawSquare();
