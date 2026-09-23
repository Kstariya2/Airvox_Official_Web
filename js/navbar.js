/* ═══════════════════════════════════════════
   NAVBAR — Scroll, Hamburger, Dots, Active Link
   ═══════════════════════════════════════════ */

/* Navbar scroll effect */
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  if(navbar) navbar.classList.toggle('scrolled',window.scrollY>60);
});

/* Hamburger menu */
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
if(hamburger && mobileMenu){
  hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow=mobileMenu.classList.contains('active')?'hidden':'';
  });
  mobileMenu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click',()=>{
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow='';
    });
  });
}

/* Section dots click navigation */
document.querySelectorAll('.section-dots .dot').forEach(dot=>{
  dot.addEventListener('click',()=>{
    const target=document.getElementById(dot.dataset.section);
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

/* Active nav link highlight on scroll */
const sections=document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(sec=>{
    const top=sec.offsetTop-200;
    if(scrollY>=top) current=sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')==='#'+current);
  });
  document.querySelectorAll('.section-dots .dot').forEach(d=>{
    d.classList.toggle('active',d.dataset.section===current);
  });
});
