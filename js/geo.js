// $(document).ready(function () {
//   lightbox.option({
//     albumLabel: 'Image %1 of %2',
//     alwaysShowNavOnTouchDevices: false,
//     fadeDuration: 600,
//     fitImagesInViewport: true,
//     imageFadeDuration: 600,
//     maxWidth: 800,
//     maxHeight: 600,
//     positionFromTop: 50,
//     resizeDuration: 700,
//     showImageNumberLabel: true,
//     wrapAround: false, 
//     disable<a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>ing:false,
     
//     )}
// });
    // w3schools how to js slideshow
    
let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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