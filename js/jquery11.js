 $(document).ready(function() {
        $('#menu').click(function() {
                $('#menuList').toggle("fast");
        });
        $('.flexslider').flexslider({
    	animation: "slide"
  	});
   });

$('.scroll').click(function() {
	$('body').animate({
		scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70
	)}, 1000);
}); 

$( "#submitButton" ).click(function() {
  $( "#submitButton" ).effect( "highlight" );
});