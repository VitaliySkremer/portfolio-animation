gsap.fromTo(".hero__left-wrapper",{
  opacity:0,
  y:100
},{
  opacity:1,
  y:0,
  duration:1,
  ease:"expo"
})

setTimeout(() => {
  gsap.to(".hero__desc",{
    duration:1,
    opacity:1,
    ease:"expo"
  })

  gsap.to(".item__bottom-left",
  {
    opacity:1,
    scale:1,
    duration:1,
    ease:"expo"
  })

}, 700);

setTimeout(() => {
  gsap.to(".item__bottom-right-top",
  {
    opacity:1,
    scale:1,
    duration:1,
    ease:"expo"
  })

}, 900);

setTimeout(() => {
  gsap.to(".item__bottom-right-bottom",
  {
    opacity:1,
    scale:1,
    duration:1,
    ease:"expo"
  })

}, 1100);


setTimeout(() => {
  gsap.to(".hero__right-text",
  {
    opacity:1,
    duration:3,
    ease:"expo"
  })
}, 1200);



