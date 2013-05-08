var CodeView = Ember.View.extend({
  tagName: "textarea",
  attributeBindings: ['name'],
  name: 'code',
  didInsertElement: function(){
    var mixedMode = {
        name: "htmlmixed",
        scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
                       mode: null},
                      {matches: /(text|application)\/(x-)?vb(a|script)/i,
                       mode: "vbscript"}]
      };

      config = {
        mode: mixedMode, 
        tabMode: "indent", 
        readOnly: true, 
        tabSize: 4, 
        lineNumbers: true, 
        viewportMargin: Infinity, 
        theme: 'blackboard'
      };

      CodeMirror.fromTextArea(document.getElementById(this.elementId), config);

      // CodeMirror.runMode(document.getElementById(this.elementId), "application/xml",
      //            document.getElementById('teste'));
  }
});

module.exports = CodeView;

