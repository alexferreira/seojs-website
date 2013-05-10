var ApplicationView = Ember.View.extend({
  didInsertElement: function() {
    var evt = document.createEvent('Event');
    evt.initEvent('_htmlReady', true, true);
    document.dispatchEvent(evt);
  }
});

module.exports = ApplicationView;

