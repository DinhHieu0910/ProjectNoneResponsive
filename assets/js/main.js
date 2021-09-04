// Fix bug js
window.onload = function(){ 
  
    var modal = document.getElementById("modal-user");
    var modal_overlay = document.getElementsByClassName("modal_overlay");
    var open = document.getElementById("modal-user_open");
    var close = document.getElementsByClassName("modal-user_close")[0];
    var register = document.getElementById("modal-register");
    var login = document.getElementById("modal-login");
    var switch_login = document.getElementById("login-switch");
    var switch_register = document.getElementById("register-switch");
    var login_close = document.getElementById("login-close")

    // Get the icon [shop bag] that opens the modal user
    open.onclick = function() {
        modal.style.display = "flex";
        register.style.display = "block";
        login.style.display = "none";
      }

    // Get the button [TRỞ LẠI] that close the modal user

    close.onclick = function() {
        modal.style.display = "none";
    }

    login_close.onclick = function() {
      modal.style.display = "none";
  }

    // When the user clicks anywhere outside of the modal, close it
    // But it's not working, fix it later
    window.onclick = function(event) {
      if (event.target == modal_overlay) {
        modal.style.display = "none";
      }
    }

    // Switch to login modal
    switch_login.onclick = function() {
        register.style.display = "none";
        login.style.display = "block";
    }
    
    // Switch to register modal
    switch_register.onclick = function() {
        register.style.display = "block";
        login.style.display = "none";
    }
};

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}