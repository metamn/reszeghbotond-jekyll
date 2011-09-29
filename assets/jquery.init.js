jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){

  // Display the background-image
  jQuery('body').css('background-image', 'url(' + jQuery("#background-image").html() + ')');
  
});
