const aboutSection = document.getElementById("about");

if (aboutSection) {
  const aboutImg = aboutSection.querySelector(".about-parallax-img");
  const captionTxt = aboutSection.querySelector(".caption-text");
  const prevBtn = aboutSection.querySelector("#aboutPrev");
  const nextBtn = aboutSection.querySelector("#aboutNext");
  const card = aboutSection.querySelector(".about-img-card");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const aboutImages = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
  ];
  const aboutCaptions = [
    "WAREHOUSE OPERATIONS",
    "AIR FREIGHT DIVISION",
    "OCEAN FREIGHT FLEET",
    "SMART WAREHOUSING"
  ];

  let aboutIdx = 0;
  let autoTimer = null;
  let touchStartX = null;
  let fadeTimeout = null;

  aboutImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  function updateParallax() {
    if (!aboutImg) return;
    const rect = aboutSection.getBoundingClientRect();
    const progress = -rect.top / window.innerHeight;
    const move = progress * 40 - 20;
    aboutImg.style.transform = `scale(1.15) translateY(${move}px)`;
  }

  let parallaxTicking = false;
  window.addEventListener("scroll", () => {
    if (!aboutImg) return;
    if (parallaxTicking) return;
    parallaxTicking = true;
    window.requestAnimationFrame(() => {
      updateParallax();
      parallaxTicking = false;
    });
  }, { passive: true });
  updateParallax();

  function setSlide(nextIndex, animate = true) {
    if (!aboutImg || !captionTxt) return;

    aboutIdx = (nextIndex + aboutImages.length) % aboutImages.length;
    const nextSrc = aboutImages[aboutIdx];
    const nextCap = aboutCaptions[aboutIdx];

    if (!animate || prefersReducedMotion) {
      if (fadeTimeout) {
        window.clearTimeout(fadeTimeout);
        fadeTimeout = null;
      }
      aboutImg.style.opacity = "1";
      aboutImg.src = nextSrc;
      captionTxt.textContent = nextCap;
      return;
    }

    if (fadeTimeout) {
      window.clearTimeout(fadeTimeout);
      fadeTimeout = null;
    }
    aboutImg.style.transition = "opacity 0.3s cubic-bezier(0.16,1,0.3,1)";
    aboutImg.style.opacity = "0";

    fadeTimeout = window.setTimeout(() => {
      aboutImg.src = nextSrc;
      captionTxt.textContent = nextCap;
      aboutImg.style.opacity = "1";
      fadeTimeout = null;
    }, 300);
  }

  function stopAuto() {
    if (!autoTimer) return;
    window.clearInterval(autoTimer);
    autoTimer = null;
  }

  function startAuto() {
    if (prefersReducedMotion) return;
    stopAuto();
    autoTimer = window.setInterval(() => setSlide(aboutIdx + 1), 5000);
  }

  function resetAuto() {
    stopAuto();
    startAuto();
  }

  function prev() {
    setSlide(aboutIdx - 1);
    resetAuto();
  }

  function next() {
    setSlide(aboutIdx + 1);
    resetAuto();
  }

  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  card?.addEventListener("mouseenter", stopAuto);
  card?.addEventListener("mouseleave", startAuto);
  card?.addEventListener("focusin", stopAuto);
  card?.addEventListener("focusout", startAuto);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });

  card?.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0]?.clientX ?? null;
  }, { passive: true });

  card?.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX;
    const dx = endX - touchStartX;
    touchStartX = null;
    if (Math.abs(dx) < 40) return;
    if (dx > 0) prev();
    else next();
  });

  setSlide(0, false);
  startAuto();
}
