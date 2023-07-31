/* Slider */
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 5000;
var timer = setInterval(changeSlide, interval);

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) { // reset
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
    }
  
    currentImg = (currentImg + 1) % imgs.length; // update the index number

    if (n != undefined) {
        clearInterval(timer);
        timer = setInterval(changeSlide, interval);
        currentImg = n;
    }
  
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}

/* Toggle mobile navigation */
function toggleNavbar() {
  var x = document.getElementById("navbar");
    /*if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }*/
    if (x.classList.contains("responsive")) {
      x.classList.remove("responsive");
    } else {
      x.classList.add("responsive");
    }
}

/* Sticky navigation */
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}