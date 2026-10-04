/* ═══════════════════════════════════════════
   REVEAL — Scroll-triggered Animations
   ═══════════════════════════════════════════ */
const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));


/* Story section visual trigger */
const storySection = document.querySelector(".story-section");

if (storySection) {
  const storyObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        storySection.classList.add("in-view");
        storyObserver.unobserve(storySection);
      }
    },
    {
      threshold: 0.2
    }
  );

  storyObserver.observe(storySection);
}
