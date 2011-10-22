jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){


  // Display thumbs 
  jQuery(".all").click(function() {
    if (jQuery("#thumbs").html() == "&nbsp;") {
      jQuery("#posts li").each(function (index, element) {
        var url = jQuery(this).html();
        jQuery("#thumbs").append(
          "<div id='thumb'><a href='" + url + "'><img src='" + jQuery(this).attr("id") + "' /></a></div>"
        ); 
      });
    } else {
      jQuery("#thumbs").html("&nbsp;");
    }
      
  }); 
  

  // Calculate the current/total posts
  jQuery("#total").html(jQuery("#posts li").size());
  jQuery("#current").html(jQuery("#posts").find(".current").index() + 1);

  // Check to hide the prev / next buttons
  current = jQuery("#posts").find('.current');  
  if (current) {
    if (!(current.next().html())) {
      jQuery(".next").fadeTo('slow', .6);
    }
    if (!(current.prev().html())) {
      jQuery(".prev").fadeTo('slow', .6);
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
  
  
  // Displaying post title & navigation
  if (jQuery("#thumbs").size() > 0) {
    jQuery("#article").show();
  }

  
  // Making the list of works looking good
  var collection = '';
  jQuery("#works li").each(function (index, element) {    
    if (collection == jQuery(this).find("#collection").html()) {
      jQuery(this).addClass('hidden');
    }
    collection = jQuery(this).find("#collection").html();
  });  

  // Displaying Works
  jQuery("#menu li.works").click(function() {
    jQuery("#works").show();
  });
  
  
  // Display the background-image
  jQuery('#content').css('background-image', 'url(' + jQuery("#background-image").html() + ')');  
});
