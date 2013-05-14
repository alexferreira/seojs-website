jQuery(document).ready(function($) {
  
  // check if element exist
  if (!$.exist) {
    $.extend({
      exist: function(elm) {
        if (typeof elm == null) return false;
        if (typeof elm != "object") elm = $(elm);
        return elm.length ? true : false;
      }
    });
    $.fn.extend({
      exist: function() {
        return $.exist($(this));
      }
    });
  }
});

activeMenu = function(){
  hash = location.hash ? location.hash : "#!/"
  jQuery('li[class=active]').removeClass('active')
  jQuery('a[href="'+hash+'"]').parent().addClass('active')

  sidebadFirstHref = jQuery('.sidebar-nav ul.nav:first > li > a:first').attr('href')
  jQuery('.nav-collapse .nav > li > a[href="'+sidebadFirstHref+'"]').parent().addClass('active')
}