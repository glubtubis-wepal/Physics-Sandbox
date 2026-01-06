const objects = [];

function createBall(x, y) {
  objects.push({
    x,
    y,
    vx: 0,
    vy: 0,
    r: 15,
    mass: 1
  });
}
