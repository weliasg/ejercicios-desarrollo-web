document.addEventListener("DOMContentLoaded", () => {
  const platos = document.querySelectorAll(".plato");
  const descripcionDiv = document.getElementById("descripcionPlato");

  platos.forEach(plato => {
    plato.addEventListener("click", () => {
      descripcionDiv.textContent = plato.getAttribute("data-desc");
      descripcionDiv.style.display = "block";
    });
  });

  const form = document.getElementById("reservaForm");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (!nombre || !email || !fecha || !hora) {
      mensaje.textContent = "Veuillez remplir tous les champs.";
      mensaje.style.color = "red";
      mensaje.style.display = "block";
      return;
    }

    mensaje.textContent = "Réservation confirmée. Merci!";
    mensaje.style.color = "green";
    mensaje.style.display = "block";
    form.reset();
  });
});
