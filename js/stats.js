/* ═══════════════════════════════════════════
   STATS — Counter + Bar Fill Animations
   ═══════════════════════════════════════════ */

/* Stats counter animation */
const counterObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el=entry.target;
      const target=parseInt(el.dataset.target);
      const duration=2000;
      const start=performance.now();
      const animate=(now)=>{
        const elapsed=now-start;
        const progress=Math.min(elapsed/duration,1);
        const eased=1-Math.pow(1-progress,3);
        el.textContent=Math.floor(eased*target)+(el.dataset.target==='98'?'%':'+');
        if(progress<1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      counterObserver.unobserve(el);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.stat-number[data-target]').forEach(el=>counterObserver.observe(el));

/* Stat bar fill animation */
const barObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.width=entry.target.dataset.width;
      barObserver.unobserve(entry.target);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.stat-bar-fill').forEach(el=>barObserver.observe(el));
