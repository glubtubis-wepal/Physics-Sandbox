const gravity = 0.4;
const bounce = 0.8;

function updatePhysics(width, height) {
  for (let obj of objects) {
    obj.vy += gravity;
    obj.x += obj.vx;
    obj.y += obj.vy;

    // Floor collision
    if (obj.y + obj.r > height) {
      obj.y = height - obj.r;
      obj.vy *= -bounce;
    }

    // Walls
    if (obj.x - obj.r < 0 || obj.x + obj.r > width) {
      obj.vx *= -bounce;
    }
  }
}
