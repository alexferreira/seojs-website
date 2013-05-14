var ApplicationController = Ember.Controller.extend({
  currentPathChanged: function() {
    var page, title;

    // window.location gets updated later in the current run loop, so we will
    // wait until the next run loop to inspect its value and make the call
    // to track the page view and load functions
    Ember.run.next(function() {
      // Track the page in Google Analytics
      if (!Ember.isNone(ga)) {
        page = window.location.hash.length > 0 ? window.location.hash.substring(2) : window.location.pathname;
        title = jQuery(document).attr('title');

        ga('send', 'pageview', { 'page': page, 'title': jQuery(document).attr('title') });
      }

      // Load functions
      jQuery('[data-toggle=tooltip]').tooltip()
      jQuery('a[data-toggle=popover]').popover({trigger:'hover'})
      
      // External links
      jQuery("a[href^='http']").attr('target','_blank');

      // Marks the active menu
      activeMenu();

    });
  }.observes('currentPath')
});

module.exports = ApplicationController;
