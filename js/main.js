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
  const images = container.querySelectorAll("img");

  let activeIndex = [...images].findIndex(img => img.classList.contains("active"));

  images[activeIndex].classList.remove("active");

  activeIndex = (activeIndex + 1) % images.length;

  images[activeIndex].classList.add("active");
}

function prevSlide(id) {
  const container = document.getElementById(id);
  const images = container.querySelectorAll("img");

  let activeIndex = [...images].findIndex(img => img.classList.contains("active"));

  images[activeIndex].classList.remove("active");

  activeIndex = (activeIndex - 1 + images.length) % images.length;

  images[activeIndex].classList.add("active");
}


