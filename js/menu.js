var tl = gsap.timeline({paused:true});
var tlHeader = gsap.timeline({paused:true});
var tlMenu = gsap.timeline({paused:true});
var tlNav = gsap.timeline({paused:true});
var tlcases = gsap.timeline({paused:true});
var tlpartners= gsap.timeline({paused:true});
var tlsocial = gsap.timeline({paused:true});

tl.fromTo(".menu",{
  display:"none",
},{
  display:"flex",
});

tlHeader.fromTo(".menu__top",{
  opacity:0,
  y:-100
},{
  opacity:1,
  y:0,
  duration:.5,
  ease:"sine"
});
tlMenu.fromTo(".menu__main",{
      opacity:0,
    },{
      opacity:1,
      duration:.5,
      ease:"sine"
});
tlNav.fromTo(".menu__nav",{
      opacity:0,
      y:50
    },{
      opacity:1,
      y:0,
      duration:.5,
      ease:"sine"
});
tlcases.fromTo(".menu__cases",{
      opacity:0,
      y:50
    },{
      opacity:1,
      y:0,
      duration:.5,
      ease:"sine"
});
tlpartners.fromTo(".menu__partners",{
      opacity:0,
      y:50
    },{
      opacity:1,
      y:0,
      duration:.5,
      ease:"sine"
});
tlsocial.fromTo(".menu__social-list",{
      opacity:0,
      y:50
    },{
      opacity:1,
      y:0,
      duration:.5,
      ease:"sine"
  })

window.addEventListener("DOMContentLoaded", function(){
  document.querySelector(".header__burger-btn").addEventListener("click", function(){
    tl.play();
    tlHeader.play();
    setTimeout(() => {
      tlMenu.play();
    }, 300);
    tlNav.play();
    setTimeout(() => {
      tlcases.play();
      tlpartners.play();
      tlsocial.play();
    }, 600);
  })

  document.querySelector(".menu__close").addEventListener("click", function(){
    tlcases.reverse();
    tlpartners.reverse();
    tlsocial.reverse();
    setTimeout(() => {
      tlNav.reverse();
    }, 300);
    tlMenu.reverse();
    tlHeader.reverse();
    tl.reverse();
  })
})