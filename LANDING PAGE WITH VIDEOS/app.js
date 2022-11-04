const btns = document.querySelectorAll(".sliddes");
const videos = document.querySelectorAll(".image");
const desc = document.querySelectorAll(".content");
var slides= function(touch){
    btns.forEach((btn)=>{
         btn.classList.remove("active");
    });
    videos.forEach((img)=>{
         img.classList.remove("active");
    });
    desc.forEach((word)=>{
         word.classList.remove("active");
    });
    btns[touch].classList.add("active");
    videos[touch].classList.add("active");
    desc[touch].classList.add("active");
}
btns.forEach((btn,x)=>{
    btn.addEventListener("click",()=>{
        slides(x); 
    });
});
const navlinks = document.querySelectorAll(".nav")
const head = document.querySelector(".wrapper");
const menu = document.querySelector(".hamburger");
function doings(){
    menu.addEventListener("click",()=>{
    head.classList.toggle("active")
});
navlinks.forEach((nav)=>{
     nav.addEventListener("click",()=>{
        head.classList.remove("active");
    });
});
}
doings()

  const topLink = document.querySelector(".topp");
  
  window.addEventListener("scroll",()=>{
      if(window.pageYOffset>100){
        topLink .classList.add("active");
      }else{
        topLink .classList.remove("active");
      }
  })


