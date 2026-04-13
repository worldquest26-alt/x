function toggleMenu(){
const nav=document.getElementById('navLinks');
const overlay=document.getElementById('overlay');

nav.classList.toggle('active');
overlay.classList.toggle('active');
}

function callNow(){
window.location.href='tel:+14354332337';
}

/* REVIEWS SLIDER */
let i=0;
const slider=document.getElementById('slider');

if(slider){
setInterval(()=>{
i=(i+1)%3;
slider.style.transform=`translateX(-${i*100}%)`;
},3000);
}

/* SCROLL REVEAL */
const reveals=document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-80){
el.classList.add('active');
}
});
});