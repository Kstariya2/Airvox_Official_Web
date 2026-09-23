/* ═══════════════════════════════════════════
   SERVICES PAGE — Animations (GSAP entrance + IO scroll)
   All animations: transform + opacity only (GPU-accelerated)
   ═══════════════════════════════════════════ */

(function(){
  /* ── GSAP Hero Entrance Sequence ── */
  if(!document.getElementById('svc-hero')) return;

  window.addEventListener('DOMContentLoaded',()=>{
    if(typeof gsap==='undefined') return;

    const tl=gsap.timeline({defaults:{ease:'power3.out'}});

    tl.to('.svc-breadcrumb',{opacity:1,y:0,duration:0.5},0.1);
    tl.to('.svc-badge',{opacity:1,duration:0.4},0.2);
    tl.to('.svc-line-1',{opacity:1,y:0,duration:0.7},0.3);
    tl.to('.svc-line-2',{opacity:1,y:0,duration:0.7},0.45);
    tl.to('.svc-subtext',{opacity:1,y:0,duration:0.6},0.6);
    tl.to('.svc-scroll-hint',{opacity:1,duration:0.4},0.9);
  });

  /* ── IntersectionObserver: Intro Strip ── */
  const stripObs=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        stripObs.unobserve(entry.target);
      }
    });
  },{threshold:0.2});
  document.querySelectorAll('.svc-reveal').forEach(el=>stripObs.observe(el));

  /* ── IntersectionObserver: Service Cards (stagger) ── */
  const cardObs=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        /* Get index within grid for stagger */
        const grid=entry.target.closest('.svc-grid');
        if(grid){
          const cards=grid.querySelectorAll('.svc-card-reveal');
          let idx=Array.from(cards).indexOf(entry.target);
          entry.target.style.transitionDelay=(idx*0.08)+'s';
        }
        entry.target.classList.add('visible');
        /* Clean up will-change after animation */
        entry.target.addEventListener('transitionend',function cleanup(){
          entry.target.style.willChange='auto';
          entry.target.style.transitionDelay='0s';
          entry.target.removeEventListener('transitionend',cleanup);
        },{once:true});
        cardObs.unobserve(entry.target);
      }
    });
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.svc-card-reveal').forEach(el=>cardObs.observe(el));
})();
