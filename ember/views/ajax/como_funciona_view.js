var AjaxComoFuncionaView = Ember.View.extend({
  didInsertElement: function() {
    this.$().hide().fadeToggle();
  }
});

module.exports = AjaxComoFuncionaView;

