const canvas = document.getElementById("game");

canvas.addEventListener("click", e => {
  createBall(e.clientX, e.clientY);
});

document.getElementById("spawn").onclick = () => {
  createBall(Math.random() * canvas.width, 0);
};

document.getElementById("reset").onclick = () => {
  objects.length = 0;
};
