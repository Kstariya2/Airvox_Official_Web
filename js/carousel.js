/* ═══════════════════════════════════════════
   CAROUSEL — About Section Image Slider
   ═══════════════════════════════════════════ */
(function initCarousel() {
  const carousel = document.getElementById('aboutCarousel');
  if (!carousel) return;

  const track = document.getElementById('carouselTrack') || carousel.querySelector('.carousel-track');
  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;

  const dotsContainer = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  let current = 0;
  let autoTimer;

  /* Build navigation dots */
  let dots = [];
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('c-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });
    dots = dotsContainer.querySelectorAll('.c-dot');
  }

  function goTo(index) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');

    current = (index + slides.length) % slides.length;

    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
    resetAuto();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  function resetAuto() {
    clearInterval(autoTimer);
    if (slides.length > 1) {
      autoTimer = setInterval(() => goTo(current + 1), 4000);
    }
  }

  resetAuto();
})();
