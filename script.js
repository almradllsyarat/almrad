document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 130;
      if (window.scrollY >= top) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.querySelector("#mainMenu");
      if (menu.classList.contains("show")) {
        document.querySelector(".navbar-toggler").click();
      }
    });
  });
});