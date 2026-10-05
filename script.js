// CASAS BAJAS - comportamiento mínimo compartido

document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Entrada suave, una sola vez, para el titular de portada
  const reveal = document.querySelectorAll(".reveal");
  if (reveal.length) {
    reveal.forEach((el, i) => {
      setTimeout(() => el.classList.add("is-visible"), 80 * i);
    });
  }
});
