$(function() {
 $('#maself-dsc').hover(function() {
	 $('#maself').css('transform', 'scale(1.03)');
	 $('#maself-dsc').css('opacity', '1');
 }, function() {
	 // on mouseout, reset the background colour
	 $('#maself-dsc').css('opacity', '0');
	 $('#maself').css('transform', 'scale(1)');
 });
});

$(function() {
 $('#MP').hover(function() {
	 $('#MP').css('transform', 'scale(1.1)');
	 $('#MP-dsc').css('opacity', '1');
	 $('#MP-tag').css('font-weight', '600');
 }, function() {
	 // on mouseout, reset the background colour
	 $('#MP-dsc').css('opacity', '0');
	 $('#MP').css('transform', 'scale(1)');
	 $('#MP-tag').css('font-weight', '400');
 });
});

$(function() {
 $('#GW').hover(function() {
	 $('#GW').css('transform', 'scale(1.1)');
	 $('#GW-dsc').css('opacity', '1');
	 $('#GW-tag').css('font-weight', '600');

 }, function() {
	 // on mouseout, reset the background colour
	 $('#GW-dsc').css('opacity', '0');
	 $('#GW').css('transform', 'scale(1)');
	 $('#GW-tag').css('font-weight', '400');

 });
});

//$(function() {
// $('#NS').hover(function() {
//	 $('#NS').css('transform', 'scale(1.1)');
//	 $('#NS-dsc').css('opacity', '1');
//	 $('#NS-tag').css('font-weight', '600');
//
// }, function() {
//	 // on mouseout, reset the background colour
//	 $('#NS-dsc').css('opacity', '0');
//	 $('#NS').css('transform', 'scale(1)');
//	 $('#NS-tag').css('font-weight', '400');
// });
//});

$(function() {
 $('#FK').hover(function() {
	 $('#FK').css('transform', 'scale(1.1)');
	 $('#FK-dsc').css('opacity', '1');
	 $('#FK-tag').css('font-weight', '600');
 }, function() {
	 // on mouseout, reset the background colour
	 $('#FK-dsc').css('opacity', '0');
	 $('#FK').css('transform', 'scale(1)');
	 $('#FK-tag').css('font-weight', '400');
 });
});

$(function() {
	$('#VL').hover(function() {
	 $('#VL').css('transform', 'scale(1.1)');
	 $('#VL-dsc').css('opacity', '1');
	 $('#VL-tag').css('font-weight', '600');
	}, function() {
	 // on mouseout, reset the background colour
	 $('#VL-dsc').css('opacity', '0');
	 $('#VL').css('transform', 'scale(1)');
	 $('#VL-tag').css('font-weight', '400');
	});
 });

$(function() {
 $('#IL').hover(function() {
	 $('#IL').css('transform', 'scale(1.1)');
	 $('#IL-dsc').css('opacity', '1');
	 $('#IL-tag').css('font-weight', '600');
 }, function() {
	 // on mouseout, reset the background colour
	 $('#IL-dsc').css('opacity', '0');
	 $('#IL').css('transform', 'scale(1)');
	 $('#IL-tag').css('font-weight', '400');
 });
});

$(function() {
 $('#BLG').hover(function() {
	 $('#BLG').css('transform', 'scale(1.1)');
	 $('#BLG-dsc').css('opacity', '1');
	 $('#BLG-tag').css('font-weight', '600');
 }, function() {
	 // on mouseout, reset the background colour
	 $('#BLG-dsc').css('opacity', '0');
	 $('#BLG').css('transform', 'scale(1)');
	 $('#BLG-tag').css('font-weight', '400');
 });
});


// CAROUSEL_MPillus:
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides_MPillus(n) {
  showSlides(slideIndex += n);
}

function currentSlide_MPillus(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_MPillus");
  var dots = document.getElementsByClassName("dot_MPillus");
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

// CAROUSEL_MPpics:
var slideIndex_MPpics = 1;
showSlides_MPpics(slideIndex_MPpics);

function plusSlides_MPpics(n) {
  showSlides_MPpics(slideIndex_MPpics += n);
}

function currentSlide_MPpics(n) {
  showSlides_MPpics(slideIndex_MPpics = n);
}

function showSlides_MPpics(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_MPpics");
  var dots = document.getElementsByClassName("dot_MPpics");
  if (n > slides.length) {slideIndex_MPpics = 1} 
  if (n < 1) {slideIndex_MPpics = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_MPpics-1].style.display = "block"; 
  dots[slideIndex_MPpics-1].className += " active";
}


// CAROUSEL_BPi:
var slideIndex_BPi = 1;
showSlides_BPi(slideIndex_BPi);

function plusSlides_BPi(n) {
  showSlides_BPi(slideIndex_BPi += n);
}

function currentSlide_BPi(n) {
  showSlides_BPi(slideIndex_BPi = n);
}

function showSlides_BPi(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_BPi");
  var dots = document.getElementsByClassName("dot_BPi");
  if (n > slides.length) {slideIndex_BPi = 1} 
  if (n < 1) {slideIndex_BPi = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_BPi-1].style.display = "block"; 
  dots[slideIndex_BPi-1].className += " active";
}


// CAROUSEL_BPb:
var slideIndex_BPb = 1;
showSlides_BPb(slideIndex_BPb);

function plusSlides_BPb(n) {
  showSlides_BPb(slideIndex_BPb += n);
}

function currentSlide_BPb(n) {
  showSlides_BPb(slideIndex_BPb = n);
}

function showSlides_BPb(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_BPb");
  var dots = document.getElementsByClassName("dot_BPb");
  if (n > slides.length) {slideIndex_BPb = 1} 
  if (n < 1) {slideIndex_BPb = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_BPb-1].style.display = "block"; 
  dots[slideIndex_BPb-1].className += " active";
}



// CAROUSEL_BPl:
var slideIndex_BPl = 1;
showSlides_BPl(slideIndex_BPl);

function plusSlides_BPl(n) {
  showSlides_BPl(slideIndex_BPl += n);
}

function currentSlide_BPl(n) {
  showSlides_BPl(slideIndex_BPl = n);
}

function showSlides_BPl(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_BPl");
  var dots = document.getElementsByClassName("dot_BPl");
  if (n > slides.length) {slideIndex_BPl = 1} 
  if (n < 1) {slideIndex_BPl = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_BPl-1].style.display = "block"; 
  dots[slideIndex_BPl-1].className += " active";
}


// CAROUSEL_BPhs:
var slideIndex_BPhs = 1;
showSlides_BPhs(slideIndex_BPhs);

function plusSlides_BPhs(n) {
  showSlides_BPhs(slideIndex_BPhs += n);
}

function currentSlide_BPhs(n) {
  showSlides_BPhs(slideIndex_BPhs = n);
}

function showSlides_BPhs(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_BPhs");
  var dots = document.getElementsByClassName("dot_BPhs");
  if (n > slides.length) {slideIndex_BPhs = 1} 
  if (n < 1) {slideIndex_BPhs = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_BPhs-1].style.display = "block"; 
  dots[slideIndex_BPhs-1].className += " active";
}


// CAROUSEL_BPfs:
var slideIndex_BPfs = 1;
showSlides_BPfs(slideIndex_BPfs);

function plusSlides_BPfs(n) {
  showSlides_BPfs(slideIndex_BPfs += n);
}

function currentSlide_BPfs(n) {
  showSlides_BPfs(slideIndex_BPfs = n);
}

function showSlides_BPfs(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_BPfs");
  var dots = document.getElementsByClassName("dot_BPfs");
  if (n > slides.length) {slideIndex_BPfs = 1} 
  if (n < 1) {slideIndex_BPfs = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_BPfs-1].style.display = "block"; 
  dots[slideIndex_BPfs-1].className += " active";
}

// CAROUSEL_ILmic:
var slideIndex_ILmic = 1;
showSlides_ILmic(slideIndex_ILmic);

function plusSlides_ILmic(n) {
  showSlides_ILmic(slideIndex_ILmic += n);
}

function currentSlide_ILmic(n) {
  showSlides_ILmic(slideIndex_ILmic = n);
}

function showSlides_ILmic(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_ILmic");
  var dots = document.getElementsByClassName("dot_ILmic");
  if (n > slides.length) {slideIndex_ILmic = 1} 
  if (n < 1) {slideIndex_ILmic = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_ILmic-1].style.display = "block"; 
  dots[slideIndex_ILmic-1].className += " active";
}

// CAROUSEL_ILana:
var slideIndex_ILana = 1;
showSlides_ILana(slideIndex_ILana);

function plusSlides_ILana(n) {
  showSlides_ILana(slideIndex_ILana += n);
}

function currentSlide_ILana(n) {
  showSlides_ILana(slideIndex_ILana = n);
}

function showSlides_ILana(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_ILana");
  var dots = document.getElementsByClassName("dot_ILana");
  if (n > slides.length) {slideIndex_ILana = 1} 
  if (n < 1) {slideIndex_ILana = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_ILana-1].style.display = "block"; 
  dots[slideIndex_ILana-1].className += " active";
}