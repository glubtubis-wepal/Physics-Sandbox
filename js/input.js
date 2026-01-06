// input.js
let draggedBall = null;

canvas.addEventListener("pointerdown", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Try to grab a ball
  for (let ball of objects) {
    const dx = x - ball.x;
    const dy = y - ball.y;
    if (Math.sqrt(dx * dx + dy * dy) <= ball.r) {
      draggedBall = ball;
      return;
    }
  }

  // Otherwise spawn a new one
  createBall(x, y);
});

canvas.addEventListener("pointermove", (e) => {
  if (!draggedBall) return;

  const rect = canvas.getBoundingClientRect();
  draggedBall.x = e.clientX - rect.left;
  draggedBall.y = e.clientY - rect.top;

  draggedBall.vx = 0;
  draggedBall.vy = 0;
});

canvas.addEventListener("pointerup", () => {
  draggedBall = null;
});

canvas.addEventListener("pointercancel", () => {
  draggedBall = null;
});
