// Enhanced mobile JS
const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");
const body = document.body;

menuButton.addEventListener("click", () => {
  const isActive = menuOverlay.classList.toggle("active");
  body.classList.toggle("menu-open");
  
  // Update button text
  menuButton.innerHTML = isActive 
    ? 'CLOSE <span class="dropdown-arrow">&#9650;</span>'
    : 'MENU <span class="dropdown-arrow">&#9660;</span>';
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuOverlay.contains(e.target) && !menuButton.contains(e.target)) {
    menuOverlay.classList.remove("active");
    body.classList.remove("menu-open");
    menuButton.innerHTML = 'MENU <span class="dropdown-arrow">&#9660;</span>';
  }
});

// Close menu on scroll
window.addEventListener("scroll", () => {
  if (menuOverlay.classList.contains("active")) {
    menuOverlay.classList.remove("active");
    body.classList.remove("menu-open");
    menuButton.innerHTML = 'MENU <span class="dropdown-arrow">&#9660;</span>';
  }
});

// Better touch handling
menuOverlay.addEventListener("touchstart", (e) => e.stopPropagation());




const cursorDot = document.getElementById('cursor-dot');
let posX = 0;
let posY = 0;
let mouseX = 0;
let mouseY = 0;
const smoothness = 0.15;

function updatePosition(e) {
  if (e instanceof TouchEvent) {
    if (e.touches.length > 0) {
      mouseX = e.touches[0].pageX;
      mouseY = e.touches[0].pageY;
    }
  } else {
    mouseX = e.pageX;
    mouseY = e.pageY;
  }
  cursorDot.style.display = 'block';
}

function animate() {
  // Calculate new position with smooth interpolation
  const dx = mouseX - posX;
  const dy = mouseY - posY;
  
  posX += dx * smoothness;
  posY += dy * smoothness;

  // Update dot position with scroll consideration
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  requestAnimationFrame(animate);
}

// Event listeners
document.addEventListener('mousemove', updatePosition);
document.addEventListener('touchmove', updatePosition);
document.addEventListener('touchstart', updatePosition);

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
  cursorDot.style.display = 'none';
});

// Start animation loop
animate();

// Add click effect
document.addEventListener('click', () => {
  cursorDot.classList.add('active');
  setTimeout(() => cursorDot.classList.remove('active'), 200);
});

// Handle scroll/resize
window.addEventListener('scroll', () => {
  // Reset position to prevent offset issues
  posX = mouseX;
  posY = mouseY;
});

// Initialize position on load
window.addEventListener('load', () => {
  cursorDot.style.left = `${window.innerWidth/2}px`;
  cursorDot.style.top = `${window.innerHeight/2}px`;
});

// Popup Offer
function closePopup() {
  const popup = document.querySelector(".triangle-popup");
  popup.style.opacity = "0";
  popup.style.transform = "translateY(20px)";
  setTimeout(() => {
    popup.style.display = "none";
  }, 300); // Match the fade-out duration
}

// JavaScript for additional interactions
document.addEventListener('DOMContentLoaded', () => {
  // Parallax effect
  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX) / 30;
    const y = (window.innerHeight - e.pageY) / 30;
    document.querySelector('.hero-content').style.transform = 
      `translate(${x}px, ${y}px)`;
  });

  // Scroll animation trigger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  });

  document.querySelectorAll('.animated-subtitle, .main-title').forEach(el => {
    observer.observe(el);
  });
});