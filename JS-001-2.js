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
  
  console.log(mouseX,mouseY);

  const col = Math.floor(mouseX / a);
  const row = Math.floor(mouseY / a);
  
  console.log(col,row);

  if (row >= 0 && row < h && col >= 0 && col < w) {
    grid[row][col] = !grid[row][col];
    drawGrid();
  }
});

drawGrid();


const button = document.getElementById('button1');

button.addEventListener('click', function() {
  let newx = [];
  let newy = [];
  let k = 0;

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) { 
      let sum = 0;  
      if (grid[(w + x-1)%w][(h + y-1)%h] === true) {
        sum = sum+1;
      }
      if (grid[(w + x-1)%w][(h + y)%h] === true) {
        sum = sum+1;
      }
      if (grid[(w + x-1)%w][(h + y+1)%h] === true) {
        sum = sum+1;
      }
      if (grid[(w + x)%w][(h + y-1)%h] === true) {
        sum = sum+1;
      }
      if (grid[(w + x)%w][(h + y+1)%h] === true) {
        sum = sum+1;
      }
      if (grid[(w + x+1)%w][(h + y-1)%h] === true) {
        sum = sum+1;
      }
      if (grid[(w + x+1)%w][(h + y)%h] === true) {
        sum = sum+1;
      }
      if (grid[(w + x+1)%w][(h + y+1)%h] === true) {
        sum = sum+1;
      }

      if (grid[x][y] === true){
        if ((sum>=2)&(sum<=3)){
          newx[k] = x;
          newy[k] = y;
          k++;
        }
      } else {
      if (sum === 3){
        newx[k] = x;
        newy[k] = y;
        k++;
      }
    }     
    }
  }  
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) { 
        grid[x][y] = false;
    }
  }
  for (let i = 0; i < k; i++){
    grid[newx[i]][newy[i]] = true;
  }
  drawGrid();
  console.log('Кнопка была нажата!');
});


