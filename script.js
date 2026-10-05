const navbar=document.getElementById('navbar');
const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
const heroVisual=document.querySelector('.hero-visual');

window.addEventListener('scroll',()=>{
  navbar.classList.toggle('scrolled',window.scrollY>20);
  if(heroVisual && window.innerWidth>800){
    const shift=Math.min(window.scrollY*0.07,42);
    heroVisual.style.setProperty('--parallax',`${shift}px`);
  }
},{passive:true});
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('open')));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
