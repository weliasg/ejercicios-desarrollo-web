document.addEventListener("DOMContentLoaded", () => {
  const storeButtons = document.querySelectorAll(".store-btn");
  const toast = document.getElementById("toast");

  storeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const platform = btn.getAttribute("data-platform");
      showToast(`Redirigiendo a ${platform}...`);
    });
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
  }
});
