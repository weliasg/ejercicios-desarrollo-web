document.addEventListener("DOMContentLoaded", () => {
  // Animación al hacer scroll
  const fadeElems = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  fadeElems.forEach(el => observer.observe(el));

  // Botones con alerta
  const btns = document.querySelectorAll(".btn-sec, .btn");
  btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Has hecho clic en: "${btn.textContent}"`);
    });
  });

  // Simulación de carga dinámica
  setTimeout(() => {
    const contenido = document.querySelector(".contenido");
    const nuevo = document.createElement("article");
    nuevo.classList.add("fade-in");
    nuevo.innerHTML = `
      <img src="https://picsum.photos/800/400?random=4" alt="Nuevo artículo">
      <h2>Nuevo artículo cargado</h2>
      <p>Este artículo se cargó dinámicamente para mostrar interactividad y animación.</p>
      <a href="#" class="btn-sec">Leer más</a>
    `;
    contenido.appendChild(nuevo);
    observer.observe(nuevo);
  }, 3000);
});
