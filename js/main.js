window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50) {
    navbar.style.background = 'rgba(78, 42, 132, 0.98)';
    navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
  }
  else {
    navbar.style.background = 'rgba(78, 42, 132, 0.96)';
    navbar.style.boxShadow = 'none';
  }

});

function nextSlide(id) {
  const container = document.getElementById(id);
  const images = container.querySelectorAll(".slides img");

  let activeIndex = [...images].findIndex(img => img.classList.contains("active"));
  if (activeIndex === -1) activeIndex = 0;

  images[activeIndex].classList.remove("active");
  activeIndex = (activeIndex + 1) % images.length;
  images[activeIndex].classList.add("active");
}

function prevSlide(id) {
  const container = document.getElementById(id);
  const images = container.querySelectorAll(".slides img");

  let activeIndex = [...images].findIndex(img => img.classList.contains("active"));
  if (activeIndex === -1) activeIndex = 0;

  images[activeIndex].classList.remove("active");
  activeIndex = (activeIndex - 1 + images.length) % images.length;
  images[activeIndex].classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides");

  slides.forEach(slide => {
    const images = slide.querySelectorAll("img");

    let foundActive = false;

    images.forEach((img, i) => {
      if (img.classList.contains("active")) {
        foundActive = true;
      } else if (!foundActive) {
        // ensure only first is active if none set properly
        if (i === 0) img.classList.add("active");
      }
    });
  });
});
