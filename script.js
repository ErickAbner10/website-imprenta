const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

prevButton.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

// Mostrar la primera imagen al cargar la página
showSlide(currentSlide);
