var root = document.querySelector('body');

const dot = document.querySelector('.cursor');
const dotf = document.querySelector('.cursor_follower');

const dotRadius = dot.clientHeight;

window.addEventListener('mousemove', e => {
  TweenMax.to(dot, 0.5, {
    x: e.pageX - (dotRadius * 0.5), 
    y: e.pageY - (dotRadius * 0.5), 
    ease: Power2.easeOut
  })
  TweenMax.to(dotf, 0.6, {
    x: e.pageX - (dotRadius * 0.2), 
    y: e.pageY - (dotRadius * 0.2), 
    ease: Power0.easeInOut
  })
});

var ham = document.querySelector('.ham');

ham.addEventListener("click", function(e) {
  ham.classList.toggle("active");
});

var nav = document.querySelector("nav");

ham.addEventListener("click", function(e) {
    nav.classList.toggle("visible");
  });

var link = document.querySelector('.link');
var linkm = document.querySelector('.mobile');
var p = document.querySelector('span');
var colr = document.querySelector('.canvas-wrapper');
var color = document.querySelector('.prez');
var prezs = document.querySelector('.prezsecond');
var wrap = document.querySelector('body');
var particle = document.getElementById('particles-js');
var wrapper = document.querySelector('.wrapper');
var king = document.querySelector('.supremeghost');
var scroller = document.querySelector('.scroller');
var clicm = document.querySelector('.clicme');

colr.addEventListener("click", function(e) {
  scroller.classList.toggle("testcolor");
  color.classList.toggle("testcolor");
  p.classList.toggle("testcolor");
  colr.classList.toggle("testcolor");
  link.classList.toggle("byebye");
  linkm.classList.toggle("byebye");
  prezs.classList.toggle("ok");
});

colr.addEventListener("click", function(e) {
  particle.classList.toggle("ghost");
  wrap.classList.toggle("bigwrap");
})

clicm.addEventListener("click", function(e) {
  scroller.classList.toggle("testcolor");
  color.classList.toggle("testcolor");
  p.classList.toggle("testcolor");
  colr.classList.toggle("testcolor");
  link.classList.toggle("byebye");
  linkm.classList.toggle("byebye");
  prezs.classList.toggle("ok");
});

clicm.addEventListener("click", function(e) {
  particle.classList.toggle("ghost");
  wrap.classList.toggle("bigwrap");
})
  
// SLIDER
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});


//BUTTON BUBBLE
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}