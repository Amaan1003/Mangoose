// Preloader Script
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    
    // Fade out preloader after loading
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }, 4000); // Adjust timing as needed
  });