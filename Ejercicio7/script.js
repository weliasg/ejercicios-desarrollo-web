document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCotizacion");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const detalle = document.getElementById("detalle").value.trim();

    if (!nombre || !email || !detalle) {
      showToast("Por favor completa todos los campos");
      return;
    }

    if (!validateEmail(email)) {
      showToast("Ingresa un correo válido");
      return;
    }

    showToast("¡Solicitud enviada! Nos pondremos en contacto pronto.");
    form.reset();
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
});
