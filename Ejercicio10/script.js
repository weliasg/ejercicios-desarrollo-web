document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const categoria = document.getElementById("categoria").value;
    const acepto = document.getElementById("acepto").checked;

    if (!nombre || !email || !telefono || !categoria || !acepto) {
      mostrarMensaje("⚠️ Completa todos los campos y acepta los términos.", true);
      return;
    }

    mostrarMensaje("✅ ¡Registro enviado con éxito!");
    form.reset();
  });

  function mostrarMensaje(texto, error = false) {
    mensaje.textContent = texto;
    mensaje.style.background = error ? "#f8b4b4" : "#b4f8c8";
    mensaje.classList.add("show");
    setTimeout(() => mensaje.classList.remove("show"), 3000);
  }
});
