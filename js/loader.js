// ═══════════════════════════════════════════
// AIRVOX LOADER — 6-Stage Diagonal Split
// Diagonal Line → Split Reveal → Brand → Website
// GSAP Timeline · 2.0s Total + Failsafe
// ═══════════════════════════════════════════

(function() {
  'use strict';

  // Failsafe: site always reveals after 4s no matter what
  const FAILSAFE_MS = 4000;
  let loaderDone = false;

  function revealSite() {
    if (loaderDone) return;
    loaderDone = true;
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.3s ease';
      setTimeout(() => { loader.style.display = 'none'; }, 350);
    }
    document.body.style.overflow = '';
    animateHero();
  }

  setTimeout(revealSite, FAILSAFE_MS);

  // ── Main loader ──
  document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');

    // Set hero initial states (GSAP will animate them in)
    if (document.querySelector('.hero-headline')) {
      gsap.set('.hero-badge', { opacity: 0, y: 28 });
      gsap.set('.hero-headline .line', { opacity: 0, x: -60 });
      gsap.set('.hero-subtext', { opacity: 0, y: 28 });
      gsap.set('.hero-ctas .btn', { opacity: 0, y: 28 });
      gsap.set('.hero-route-line', { opacity: 0 });
      gsap.set('.watch-intro', { opacity: 0 });
    }

    if (!loader) { loaderDone = true; animateHero(); return; }

    // Reduced motion: skip
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      loader.style.display = 'none';
      document.body.style.overflow = '';
      loaderDone = true;
      animateHero();
      return;
    }

    document.body.style.overflow = 'hidden';

    // ── Elements ──
    const dot        = document.getElementById('ldDot');
    const aircraft   = document.getElementById('ldAircraft');
    const ldLine     = document.getElementById('ldLine');
    const ldLineGlow = document.getElementById('ldLineGlow');
    const halfLeft   = document.getElementById('ldHalfLeft');
    const halfRight  = document.getElementById('ldHalfRight');
    const brand      = document.getElementById('ldBrand');
    const brandLogo  = document.getElementById('ldBrandLogo');
    const brandTag   = document.getElementById('ldBrandTagline');
    const brandLine  = document.getElementById('ldBrandLine');
    const stageLabel = document.getElementById('ldStageLabel');
    const ldSvg      = document.querySelector('.ld-svg');

    const W = window.innerWidth;
    const H = window.innerHeight;

    // Aircraft start/end positions (bottom-left to top-right)
    const startX = W * 0.04;
    const startY = H * 0.92;
    const endX   = W * 0.95;
    const endY   = H * 0.05;

    // ── GSAP TIMELINE ──
    const tl = gsap.timeline({
      onComplete: () => {
        if (loaderDone) return;
        loaderDone = true;
        const ld = document.getElementById('loader');
        if (ld) ld.style.display = 'none';
        document.body.style.overflow = '';
        animateHero();
      }
    });

    // ════════════════════════════════════════
    // STAGE 1 (0.0s – 0.3s): ROUTE INITIATED
    // Tiny glowing orange dot appears bottom-left
    // ════════════════════════════════════════
    tl.set(aircraft, { x: startX, y: startY, opacity: 0, scale: 0.6 })
      .to(stageLabel, { opacity: 1, duration: 0.15 }, 0)
      .to(dot, { opacity: 1, scale: 1.2, duration: 0.2, ease: 'power2.out' }, 0.05)
      .to(dot, { scale: 1, duration: 0.1 }, 0.25)

    // ════════════════════════════════════════
    // STAGE 2 (0.3s – 0.8s): ROUTE IN MOTION
    // Dot launches, draws diagonal glowing line
    // Aircraft flies from bottom-left to top-right
    // ════════════════════════════════════════
      .call(() => { if(stageLabel) stageLabel.textContent = 'ROUTE IN MOTION'; }, [], 0.3)
      .to(dot, { opacity: 0, duration: 0.1 }, 0.3)
      .to(aircraft, { opacity: 1, scale: 1, duration: 0.15, ease: 'power2.out' }, 0.3)
      .to([ldLine, ldLineGlow], {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: 'power1.inOut'
      }, 0.3)
      .to(aircraft, {
        x: endX,
        y: endY,
        duration: 0.5,
        ease: 'power1.inOut'
      }, 0.3)

    // ════════════════════════════════════════
    // STAGE 3 (0.8s – 1.2s): CURTAIN OPENS
    // Screen splits along diagonal, halves slide apart
    // Reveals white brand background behind
    // ════════════════════════════════════════
      .call(() => { if(stageLabel) stageLabel.textContent = 'CURTAIN OPENS'; }, [], 0.8)
      // Aircraft exits off-screen
      .to(aircraft, { x: W + 60, y: -60, opacity: 0, duration: 0.2, ease: 'power2.in' }, 0.8)
      // Fade out SVG line and stage label
      .to(ldSvg, { opacity: 0, duration: 0.15 }, 0.85)
      .to(stageLabel, { opacity: 0, duration: 0.1 }, 0.85)
      // Split the two halves apart
      .to(halfLeft, {
        x: '-110%',
        y: '60%',
        duration: 0.4,
        ease: 'power3.inOut'
      }, 0.85)
      .to(halfRight, {
        x: '110%',
        y: '-60%',
        duration: 0.4,
        ease: 'power3.inOut'
      }, 0.85)

    // ════════════════════════════════════════
    // STAGE 4 (1.2s – 1.6s): BRAND REVEAL
    // Logo scales in on white background
    // ════════════════════════════════════════
      .to(brandLogo, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.4)'
      }, 1.2)

    // ════════════════════════════════════════
    // STAGE 5 (1.6s – 1.8s): TAGLINE FADE IN
    // "GLOBAL LOGISTICS SOLUTIONS" + orange line
    // ════════════════════════════════════════
      .to(brandTag, {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out'
      }, 1.6)
      .to(brandLine, {
        opacity: 1,
        scaleX: 1,
        duration: 0.2,
        ease: 'power2.out'
      }, 1.65)

    // ════════════════════════════════════════
    // STAGE 6 (1.8s – 2.0s): WEBSITE REVEAL
    // Entire loader fades out
    // ════════════════════════════════════════
      .to(loader, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.inOut'
      }, 1.8);

  }); // end DOMContentLoaded

  // ── HERO ENTRANCE (all pages) ──
  window.animateHero = function() {
    if (!document.querySelector('.hero-headline')) return;

    if (typeof gsap === 'undefined') {
      // Fallback: just show everything
      document.querySelectorAll('.hero-badge, .hero-headline .line, .hero-subtext, .hero-ctas .btn, .hero-route-line, .watch-intro').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const heroTl = gsap.timeline();
    heroTl
      .to('.hero-badge', { opacity: 1, y: 0, duration: 0.6, delay: 0.1 })
      .to('.hero-headline .line', {
        opacity: 1, x: 0, duration: 0.7,
        stagger: 0.15, ease: 'power3.out'
      }, 0.3)
      .to('.hero-subtext', { opacity: 1, y: 0, duration: 0.6 }, 0.7)
      .to('.hero-ctas .btn', {
        opacity: 1, y: 0, duration: 0.5,
        stagger: 0.1
      }, 0.9)
      .to('.hero-route-line', { opacity: 1, duration: 0.5 }, 1.1)
      .to('.watch-intro', { opacity: 1, duration: 0.5 }, 1.2);
  };

})();
