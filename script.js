// Musik Latar
const audio = document.getElementById('background-music');
audio.volume = 0.4;

// Kanvas Bintang
const starCanvas = document.getElementById('starCanvas');
const starCtx = starCanvas.getContext('2d');
starCanvas.width = window.innerWidth;
starCanvas.height = window.innerHeight;

let stars = [];

class Star {
  constructor() {
    this.x = Math.random() * starCanvas.width;
    this.y = Math.random() * starCanvas.height;
    this.size = Math.random() * 1.5;
    this.opacity = Math.random();
    this.speed = Math.random() * 0.02;
  }
  update() {
    this.opacity += this.speed;
    if (this.opacity > 1 || this.opacity < 0) {
      this.speed *= -1;
    }
  }
  draw() {
    starCtx.beginPath();
    starCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    starCtx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    starCtx.fill();
  }
}

function initStars() {
  stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push(new Star());
  }
}

function animateStars() {
  starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
  stars.forEach((star) => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animateStars);
}

// Kanvas Partikel Glowing
const particleCanvas = document.getElementById('particleCanvas');
const particleCtx = particleCanvas.getContext('2d');
particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * particleCanvas.width;
    this.y = Math.random() * particleCanvas.height;
    this.size = Math.random() * 5 + 1;
    this.color = `rgba(255, 255, 0, 0.7)`;
    this.speedX = (Math.random() - 0.5) * 2;
    this.speedY = (Math.random() - 0.5) * 2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > particleCanvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > particleCanvas.height) this.speedY *= -1;
  }
  draw() {
    particleCtx.beginPath();
    particleCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    particleCtx.fillStyle = this.color;
    particleCtx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}

// Resize Listener
window.addEventListener('resize', () => {
  starCanvas.width = window.innerWidth;
  starCanvas.height = window.innerHeight;
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
  initStars();
  initParticles();
});

initStars();
animateStars();
initParticles();
animateParticles();