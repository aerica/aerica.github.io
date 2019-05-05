$(function() {
	var galleryImgCont = $('.gallery-img-cont');
	var galleryItem = $('#gallery * .gallery-item-cont');
	var galleryItemLink = $('#gallery * .gallery-btn-cont');
	// alert(galleryItem.length);
	
	$(galleryItem).each(function(x) {
		function changegrayscale(value) {
	  	$(galleryImgCont[x]).css({'filter': 'grayscale('+value+'%)'});
	  }
		
		$(this).hover(function() {
			$(galleryItemLink[x]).css('background-color', 'rgba(0,0,0,0.0)');
			  changegrayscale('0');
		  }, function() {
			// on mouseout, reset the background colour
			$(galleryItemLink[x]).css('background-color', 'rgba(0,0,0,0.75)');
			  changegrayscale('100');
		  });
	});
  
});