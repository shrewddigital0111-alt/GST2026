// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

navToggle.addEventListener("click", function () {
  const isOpen = navMobile.style.display === "flex";
  navMobile.style.display = isOpen ? "none" : "flex";
});

// Close mobile nav when link clicked
navMobile.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMobile.style.display = "none";
  });
});