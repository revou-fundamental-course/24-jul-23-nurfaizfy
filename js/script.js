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
    if (x.classList.contains("responsive")) {
      x.classList.remove("responsive");
    } else {
      x.classList.add("responsive");
    }
}

/* Sticky navigation */
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop + 0.1;

function stickyNavbar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Form validation */
function validateForm() {
  var err = document.getElementById("error-text");
  err.innerHTML = "";
  err.style.display = "none";

  var name = document.getElementById("name-field").value;
  var email = document.getElementById("email-field").value;
  var msg = document.getElementById("message-field").value;

  if (name == "") {
    err.innerHTML = "*Nama tidak boleh kosong";
    err.style.display = "block";
    return false;
  }

  if (email == "") {
    err.innerHTML = "*Email tidak boleh kosong";
    err.style.display = "block";
    return false;
  }

  if (msg.length < 10) {
    err.innerHTML = "*Pesan berisi minimal 10 huruf";
    err.style.display = "block";
    return false;
  }

  document.getElementById("contact-form").style.display = "none";
  document.getElementById("message-send").style.display = "block";

  return false;
}