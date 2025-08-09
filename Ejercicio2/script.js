document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById("cartCount");
  const toast = document.getElementById("toast");
  let count = 0;

  document.querySelectorAll(".producto .btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const producto = btn.closest(".producto");
      const nombre = producto.dataset.nombre;
      const precio = producto.dataset.precio;

      count++;
      cartCount.textContent = count;

      showToast(`"${nombre}" añadido - $${precio}`);
    });
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }
});
