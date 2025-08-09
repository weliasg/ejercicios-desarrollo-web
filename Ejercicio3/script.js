document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showToast("Por favor completa todos los campos");
      return;
    }

    if (!validateEmail(email)) {
      showToast("Ingresa un correo válido");
      return;
    }

    showToast("¡Gracias por tu mensaje!");
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
