window.onload = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".overlay");
  const featuresToggle = document.querySelector(".features-toggle");
  const features = document.querySelector(".features");
  const subMenu = document.querySelectorAll(".sub-menu");

  menuToggle.addEventListener("click", () => {
    overlay.classList.toggle("active");
    sidebar.classList.toggle("active");
    sidebar.classList[1]
      ? (hamburger.src = "./images/icon-close-menu.svg")
      : (hamburger.src = "./images/icon-menu.svg");
    subMenu.forEach((menu) => menu.classList.remove("active"));
  });

  featuresToggle.addEventListener("click", () => {
    features.classList.toggle("active");
  });
};
