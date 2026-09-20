const loader = document.getElementById("loader");
const site = document.querySelector(".site");
const count = document.getElementById("loadCount");
const bar = document.getElementById("loadBar");
let n = 0;
const tick = setInterval(() => {
  n += Math.floor(Math.random()*7)+2;
  if(n >= 100){
    n = 100;
    clearInterval(tick);
    setTimeout(() => {
      loader.classList.add("hide");
      site.classList.add("ready");
      document.querySelectorAll(".reveal").forEach((el,i)=>setTimeout(()=>el.classList.add("in"),120+i*90));
    }, 350);
  }
  count.textContent = n;
  bar.style.width = n + "%";
}, 65);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("in"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelector(".menu").addEventListener("click", ()=>{
  document.querySelector(".nav nav").classList.toggle("open");
});
