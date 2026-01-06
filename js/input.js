// input.js
let draggedBall = null;

canvas.addEventListener("pointerdown", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Check if touching an existing ball
  for (let ball of objects) {
    const dx = x - ball.x;
    const dy = y - ball.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= ball.r) {
      draggedBall = ball;
      return;
    }
  }

  // If no ball touched → spawn new ball
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
