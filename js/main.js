const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function loop() {
  updatePhysics(canvas.width, canvas.height);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let obj of objects) {
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.r, 0, Math.PI * 2);
    ctx.fillStyle = "cyan";
    ctx.fill();
  }

  requestAnimationFrame(loop);
}

loop();
