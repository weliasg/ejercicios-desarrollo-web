document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("panel");
  const panelContenido = document.getElementById("panelContenido");
  const cerrarPanel = document.getElementById("cerrarPanel");

  // Abrir panel
  document.querySelectorAll(".principal, .secundaria, .rapida").forEach(item => {
    item.addEventListener("click", () => {
      const texto = item.getAttribute("data-full");
      panelContenido.innerHTML = `<p>${texto}</p>`;
      panel.classList.add("open");
    });
  });

  // Cerrar panel
  cerrarPanel.addEventListener("click", () => {
    panel.classList.remove("open");
  });

  // Filtro categorías
  const btns = document.querySelectorAll(".cat-btn");
  const noticias = document.querySelectorAll("[data-cat]");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-cat");
      noticias.forEach(noticia => {
        noticia.style.display = (cat === "all" || noticia.dataset.cat === cat) ? "" : "none";
      });
    });
  });
});
