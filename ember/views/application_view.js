var ApplicationView = Ember.View.extend({
  didInsertElement: function() {
    var evt = document.createEvent('Event');
    evt.initEvent('_htmlReady', true, true);
    document.dispatchEvent(evt);
    jQuery('[data-toggle=tooltip]').tooltip()

    jQuery('a[data-toggle=popover]').popover({trigger:'hover'})
  }
});

module.exports = ApplicationView;

