$(function(){
//scroll fixed
	var msie6 = $.browser == 'msie' && $.browser.version < 7;
	  //$('#menu').css({'max-height':window.innerHeight , height : $('.lecciones').height()-10});
	  if (!msie6) {
	    var top = $('#menu').offset().top - parseFloat($('#menu').css('margin-top').replace(/auto/, 0));
	    $(window).scroll(function (event) {
	      // what the y position of the scroll is
	      var y = $(this).scrollTop();
	      
	      // whether that's below the form
	      if (y >= top) {
	        // if so, ad the fixed class
	        $('#menu').addClass('fixed');
	      } else {
	        // otherwise remove it
	        $('#menu').removeClass('fixed');
	      }
	    });
	  }  
//scrollTo
	$('#wrapper').localScroll({offset:-153});

//mapa	
	var map;
	map = new GMaps({
        div: '#mapa',
        lat: -18.014498,
        lng: -70.252752,
        zoom: 17
      });
	map.addMarker({
	  lat: -18.014498,
      lng: -70.252752,
	  title: 'Centro Cultural Jorge Basadre Grohman'
	
});
})
