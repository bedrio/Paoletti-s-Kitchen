function closeCoupon(){
  document.getElementById('modal').style.display = 'none';
  if(typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 0;
    }
  }
}
function popUp(){
  if (sessionStorage.clickcount != undefined){
    document.getElementById('modal').style.display = 'none';
  } else {
    document.getElementById('modal').style.display = 'block';
  }
}



    var fhiwimg = document.getElementById("firsthiwimg");
    var fhiwtxt = document.getElementById("firsthiwtxt");
    var fhiwarrow = document.getElementById("fhiwarrow");
    var fhiwclose = document.getElementById("fhiwclose");

    function fhiwFunc(){
    if (fhiwtxt.style.display != "block") {
      fhiwtxt.style.display = "block";
      fhiwarrow.style.display = "none";
      fhiwclose.style.display = "block";
    }else {
      fhiwtxt.style.display = "none";
      fhiwarrow.style.display = "block";
      fhiwclose.style.display = "none";
    }
  }



    var shiwimg = document.getElementById("secondhiwimg");
    var shiwtxt = document.getElementById("secondhiwtxt");
    var shiwarrow = document.getElementById("shiwarrow");
    var shiwclose = document.getElementById("shiwclose");

    function shiwFunc(){
    if (shiwtxt.style.display != "block") {
      shiwtxt.style.display = "block";
      shiwarrow.style.display = "none";
      shiwclose.style.display = "block";
    }else {
      shiwtxt.style.display = "none";
      shiwarrow.style.display = "block";
      shiwclose.style.display = "none";
    }
  }



    var thiwimg = document.getElementById("thirdhiwimg");
    var thiwtxt = document.getElementById("thirdhiwtxt");
    var thiwarrow = document.getElementById("thiwarrow");
    var thiwclose = document.getElementById("thiwclose");

    function thiwFunc(){
    if (thiwtxt.style.display != "block") {
      thiwtxt.style.display = "block";
      thiwarrow.style.display = "none";
      thiwclose.style.display = "block";
    }else {
      thiwtxt.style.display = "none";
      thiwarrow.style.display = "block";
      thiwclose.style.display = "none";
    }
  }



  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

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




  function thankspopup() {
      alert("Thank you for signing up for our newsletter!");
      event.preventDefault();
  }
