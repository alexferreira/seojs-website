var IndexView = Ember.View.extend({
  didInsertElement: function() {
    this.$().hide().fadeToggle();
  }
});

module.exports = IndexView;

