jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){

  // Display collections in works
  var year = 0;
  var collection = '';
  jQuery("#content ul li").each(function (index, element) {
    if (year == jQuery(this).attr("id")) {
      jQuery(this).find("#year").css('opacity', '0');
    }
    year = jQuery(this).attr("id");
    
    if (collection == jQuery(this).find("#collection").html()) {
      jQuery(this).addClass('hidden');
    }
    collection = jQuery(this).find("#collection").html();
  });

  
  // Display the background-image
  jQuery('body').css('background-image', 'url(' + jQuery("#background-image").html() + ')');
  
});
