var AjaxBeneficiosView = Ember.View.extend({
  didInsertElement: function() {
    this.$().hide().fadeToggle();
  }
});

module.exports = AjaxBeneficiosView;

