
  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }

  function closeMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("active");
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const navLinks = document.getElementById("navLinks");
  const menuIcon = document.querySelector(".menu-icon");

  const isClickInsideMenu = navLinks.contains(event.target);
  const isClickOnIcon = menuIcon.contains(event.target);

  if (!isClickInsideMenu && !isClickOnIcon) {
    navLinks.classList.remove("active");
  }
});

const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

const currentYear = new Date().getFullYear();
  document.getElementById('year').textContent = currentYear;

