document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("main-nav--open");
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    const isClickInsideNav = mainNav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnToggle &&
      mainNav.classList.contains("main-nav--open")
    ) {
      mainNav.classList.remove("main-nav--open");
    }
  });
});
