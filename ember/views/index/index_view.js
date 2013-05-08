var IndexIndexView = Ember.View.extend({
  didInsertElement: function() {
    this.$().hide().fadeToggle();
  }
});

module.exports = IndexIndexView;

