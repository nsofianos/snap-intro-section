window.onload = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".overlay");

  menuToggle.addEventListener("click", () => {
    overlay.classList.toggle("active");
    sidebar.classList.toggle("active");
    sidebar.classList[1]
      ? (hamburger.src = "./images/icon-close-menu.svg")
      : (hamburger.src = "./images/icon-menu.svg");
  });
};
