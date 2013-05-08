// Ember.Handlebars.registerBoundHelper('codeSyntax', function(context,options) {
//   //.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
//   // console.log(options);

//   // return options.fn(this)

//   // str = '<div> ssss </div>'.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

//   // text = Handlebars.Utils.escapeExpression(options);


//   // console.log(    options.data.view   );
//   // return '<div class="highlight">' + options.fn(this) + '</div>';

//   console.log("context:", context);
//   console.log("options:", options);
//   console.log("this:", this);
// });


Handlebars.registerHelper('code', function(options) {
  return Ember.Handlebars.helpers.view.call(this, 'App.CodeView', options);
});