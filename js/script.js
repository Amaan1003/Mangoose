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
