/* ═══════════════════════════════════════════
   PARTICLES — Hero + About Section
   ═══════════════════════════════════════════ */

/* Hero particles */
(function generateParticles(){
  const container=document.getElementById('particles');
  if(!container) return;
  for(let i=0;i<35;i++){
    const p=document.createElement('div');
    p.classList.add('particle');
    const isOrange=Math.random()>0.5;
    p.style.cssText=`
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      background:${isOrange?'rgba(255,107,0,0.4)':'rgba(248,250,252,0.15)'};
      width:${1+Math.random()*2}px;
      height:${1+Math.random()*2}px;
      animation-duration:${6+Math.random()*10}s;
      animation-delay:${Math.random()*6}s;
    `;
    container.appendChild(p);
  }
})();

/* About section particles */
(function generateAboutParticles(){
  const container=document.getElementById('aboutParticles');
  if(!container) return;
  for(let i=0;i<20;i++){
    const p=document.createElement('div');
    p.classList.add('a-particle');
    const isOrange=Math.random()>0.4;
    p.style.cssText=`
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      background:${isOrange?'rgba(255,107,0,0.3)':'rgba(248,250,252,0.1)'};
      width:${1+Math.random()*2}px;
      height:${1+Math.random()*2}px;
      animation-duration:${8+Math.random()*14}s;
      animation-delay:${Math.random()*8}s;
    `;
    container.appendChild(p);
  }
})();
