window.onload = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("is-active");
    sidebar.classList[1]
      ? (hamburger.src = "./images/icon-close-menu.svg")
      : (hamburger.src = "./images/icon-menu.svg");
  });
};
