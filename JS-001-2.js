const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const h = 10; 
const w = 10; 
const a = canvas.width / w; 

let grid = Array.from({ length: h }, () => Array(w).fill(false));

function drawGrid() {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      ctx.fillStyle = grid[y][x] ? '#000' : '#fff';
      ctx.fillRect(x * a, y * a, a, a);
      ctx.strokeStyle = '#000';
      ctx.strokeRect(x * a, y * a, a, a);
    }
  }
}

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const col = Math.floor(mouseX / a);
  const row = Math.floor(mouseY / a);

  if (row >= 0 && row < h && col >= 0 && col < w) {
    grid[row][col] = !grid[row][col];
    drawGrid();
  }
});

drawGrid();
