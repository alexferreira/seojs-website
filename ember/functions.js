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