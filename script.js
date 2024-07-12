document.getElementById('chicken').addEventListener('click', function() {
  this.classList.add('pecking');
  
  // Tocar o som de bicar
  const peckSound = document.getElementById('peck-sound');
  peckSound.currentTime = 0; // Rewind to the start
  peckSound.play();
  
  // Criar chuva de milho
  createCornRain();
  
  setTimeout(() => {
    this.classList.remove('pecking');
  }, 500);
});

function createCornRain() {
  const body = document.body;
  for (let i = 0; i < 100; i++) {
    const corn = document.createElement('img');
    corn.src = 'milho.jpeg';
    corn.className = 'corn';
    corn.style.left = Math.random() * 100 + 'vw';
    corn.style.animationDuration = Math.random() * 2 + 3 + 's';
    body.appendChild(corn);
    
    // Remover o milho após a animação
    setTimeout(() => {
      corn.remove();
    }, 5000);
  }
}
