// main.js
window.canvas = document.getElementById("game");
window.ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.5;
const bounce = 0.8;

function updatePhysics() {
  for (let ball of objects) {
    ball.vy += gravity;

    ball.x += ball.vx;
    ball.y += ball.vy;

    // Floor
    if (ball.y + ball.r > canvas.height) {
      ball.y = canvas.height - ball.r;
      ball.vy *= -bounce;
    }

    // Walls
    if (ball.x - ball.r < 0 || ball.x + ball.r > canvas.width) {
      ball.vx *= -bounce;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let ball of objects) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fillStyle = "cyan";
    ctx.fill();
  }
}

function loop() {
  updatePhysics();
  draw();
  requestAnimationFrame(loop);
}

loop();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
