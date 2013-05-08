var IndexGoogleEBingView = Ember.View.extend({
  didInsertElement: function() {
    this.$().hide().fadeToggle();
  }
});

module.exports = IndexGoogleEBingView;

