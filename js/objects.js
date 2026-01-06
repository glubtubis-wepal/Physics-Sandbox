// objects.js
window.objects = [];

window.createBall = function (x, y) {
  objects.push({
    x: x,
    y: y,
    r: 15,
    vx: 0,
    vy: 0
  });
};
