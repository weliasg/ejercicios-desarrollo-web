document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000);
});
