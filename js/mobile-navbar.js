
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".list");

  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    navList.classList.toggle("active");
  });
});
