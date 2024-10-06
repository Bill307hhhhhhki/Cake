const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Sample Cake Element
let cake = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 200,
  height: 150,
  color: "pink"
};

// Drawing the cake
function drawCake() {
  ctx.fillStyle = cake.color;
  ctx.fillRect(cake.x - cake.width / 2, cake.y - cake.height / 2, cake.width, cake.height);
}

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCake();
  requestAnimationFrame(gameLoop);
}

gameLoop();

// Registering service worker for offline support
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log("Service Worker Registered"));
}
