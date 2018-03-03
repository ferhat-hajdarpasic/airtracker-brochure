jQuery(document).ready(function() {
	if ( jQuery( ".styckynav" ).length ) {
var stickyNavTop2 = jQuery('.styckynav').offset().top;

var stickyNav2 = function(){
var scrollTop2 = jQuery(window).scrollTop();

if (scrollTop2 > stickyNavTop2) {
    jQuery('.styckynav').addClass('customsticky');
} else {
    jQuery('.styckynav').removeClass('customsticky');
}
};

stickyNav2();

jQuery(window).scroll(function() {
  stickyNav2();
});
}

jQuery('#learn_about_hazer a.prettyPhoto > img').removeAttr('alt').removeAttr('title');

if(jQuery('#learn_about_hazer a.prettyPhoto').length > 0){
	var windowWidth=jQuery(window).width()*0.7;
	if(windowWidth<500){
		windowWidth='500';
	}
	var oldhref=jQuery('#learn_about_hazer a.prettyPhoto').attr('href');
	var newhref=oldhref+'?&width='+windowWidth+'&height=auto';
	jQuery('#learn_about_hazer a.prettyPhoto').attr('href', newhref);
console.log(newhref);
}


});