jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){

  // Check to hide the prev / next buttons
  current = jQuery("#posts").find('.current');  
  if (current) {
    if (!(current.next().html())) {
      jQuery("#navigation .next").addClass('inactive');
    }
    if (!(current.prev().html())) {
      jQuery("#navigation .prev").addClass('inactive');
    }
  }

  // Navigato to prev and next posts
  function navigate(elem) {
    if (elem) {
      window.location.href = elem.html();
    }
  }
  
  jQuery("#navigation .prev").click(function() {
    navigate(jQuery("#posts").find('.current').prev());
  });
  
  jQuery("#navigation .next").click(function() {
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
