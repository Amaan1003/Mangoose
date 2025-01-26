const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-list li");

menuButton.addEventListener("click", () => {
  // Toggle menu overlay and list
  const isActive = menuOverlay.classList.contains("active");

  menuOverlay.classList.toggle("active");
  menuList.classList.toggle("active");

  // Reset animations for menu items when opening
  if (!isActive) {
    menuItems.forEach((item, index) => {
      item.style.animation = "none";
      setTimeout(() => {
        item.style.animation = "";
      }, 0);
    });
  }

  // Change button text dynamically
  menuButton.innerHTML = isActive
    ? 'MENU <span>&#9660;</span>'
    : 'CLOSE <span>&#9650;</span>';
});


const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function autoSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Reset to the first slide
  }
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(autoSlide, 3000);


// Select the red dot element
const redDot = document.getElementById("red-dot");

// Mouse move event
document.addEventListener("mousemove", (event) => {
  // Show the dot
  redDot.style.display = "block";

  // Update the position of the dot considering scroll offsets
  redDot.style.left = `${event.clientX + window.scrollX}px`;
  redDot.style.top = `${event.clientY + window.scrollY}px`;
});

// Touch event for mobile
document.addEventListener("touchstart", (event) => {
  const touch = event.touches[0];

  // Show the dot
  redDot.style.display = "block";

  // Update the position of the dot considering scroll offsets
  redDot.style.left = `${touch.clientX + window.scrollX}px`;
  redDot.style.top = `${touch.clientY + window.scrollY}px`;
});

// pupup offer
function closePopup() {
  document.querySelector(".triangle-popup").style.display = "none";
}
