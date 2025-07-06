const s1 = document.createElement('div');
s1.style.width = '100px';
s1.style.height = '100px';
s1.style.backgroundColor = 'black';
s1.style.border = '2px  solid black';
document.body.appendChild(s1);

s1.addEventListener('click', () => {
  s1.style.backgroundColor = 
    s1.style.backgroundColor === 'black' ? 'white' : 'black';
});