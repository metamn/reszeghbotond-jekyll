jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){

  // Hide unnecessary elements on single post page
  if (jQuery("#posts").size()) {
    jQuery("#header").fadeTo(2000, 0);
    jQuery("#nav").fadeTo(2000, 0);
  }
  
  // Show unnecesary elements on mouseover on single post page
  jQuery("#header, #nav").hover(
    function () {
      jQuery(this).fadeTo(1000, 1);
    },
    function () {
      if (jQuery("#posts").size()) {
        jQuery(this).fadeTo(500, 0);
      }      
    }
  );

  // Calculate the current/total posts
  jQuery("#total").html(jQuery("#posts li").size());
  jQuery("#current").html(jQuery("#posts").find(".current").index() + 1);

  // Check to hide the prev / next buttons
  current = jQuery("#posts").find('.current');  
  if (current) {
    if (!(current.next().html())) {
      jQuery(".next").fadeTo('slow', .1);
    }
    if (!(current.prev().html())) {
      jQuery(".prev").fadeTo('slow', .1);
    }
  }

  // Navigate to prev and next posts
  function navigate(elem) {
    if (elem) {
      window.location.href = elem.html();
    }
  }
  
  jQuery(".prev").click(function() {
    navigate(jQuery("#posts").find('.current').prev());
  });
  
  jQuery(".next").click(function() {
    navigate(jQuery("#posts").find('.current').next());
  });



  // Displaying the list of works  
  var year = 0;
  var collection = '';
  jQuery("#content #works li").each(function (index, element) {
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
