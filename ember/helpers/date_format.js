Ember.Handlebars.registerBoundHelper('dateFormat',function(context, block) {
  if (window.moment && context && moment(context).isValid()) {
    var f = block.hash.format || "MMM Do, YYYY";
    return moment(context).format(f);
  }else{
    return context;  // moment plugin is not available, context does not have a truthy value, or context is not a valid date
  }
});
