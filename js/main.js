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

  // Lightbox for carousel figures
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img src="" alt="">';
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector("img");
  const closeBtn = overlay.querySelector(".lightbox-close");

  function openLightbox(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || "";
    overlay.classList.add("open");
  }

  function closeLightbox() {
    overlay.classList.remove("open");
    overlayImg.src = "";
  }

  document.querySelectorAll(".slides img, .attached-image img").forEach(img => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLightbox();
  });

  closeBtn.addEventListener("click", closeLightbox);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});
