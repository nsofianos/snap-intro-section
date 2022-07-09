window.onload = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".overlay");
  const submenuToggle = document.querySelectorAll(".submenu-toggle");
  const subMenu = document.querySelectorAll(".sub-menu");

  menuToggle.addEventListener("click", () => {
    overlay.classList.toggle("active");
    sidebar.classList.toggle("active");
    hamburger.src =
      (sidebar.classList[1] && "./images/icon-close-menu.svg") ||
      "./images/icon-menu.svg";
    subMenu.forEach((menu) => menu.classList.remove("active"));
  });

  submenuToggle.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      //reverse arrow icon, toggle active class
      const arrowIcon = toggle.childNodes[1];
      arrowIcon.src =
        (toggle.nextElementSibling.classList.contains("active") &&
          "./images/icon-arrow-down.svg") ||
        "./images/icon-arrow-up.svg";
      toggle.nextElementSibling.classList.toggle("active");
    });
  });
};
