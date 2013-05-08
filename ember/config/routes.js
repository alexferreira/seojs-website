var App = require('../app');

App.Router.map(function() {

  this.resource('index', { path: '/' }, function() {
    this.route('index', {path : '/'});
    this.route('google_e_bing', {path : '/google_e_bing'});
    this.route('browser_e_buscadores_o_que_veem', {path : '/browser_e_buscadores_o_que_veem'});
  });

  this.resource('ajax', { path: '/ajax' }, function() {
    this.route('o_que_e', {path : '/o_que_e'});
    this.route('como_funciona', {path : '/como_funciona'});
    this.route('beneficios', {path : '/beneficios'});
    this.route('maleficios', {path : '/maleficios'});
  });

  this.route('ajuste');
  this.route('sobre');
  
});

(function() {

var get = Ember.get, set = Ember.set;

Ember.Location.registerImplementation('hashbang', Ember.HashLocation.extend({   

  getURL: function() {
    return get(this, 'location').hash.substr(2);
  },

  setURL: function(path) {
    get(this, 'location').hash = "!"+path;
    set(this, 'lastSetURL', "!"+path);
  },

  onUpdateURL: function(callback) {
    var self = this;
    var guid = Ember.guidFor(this);

    Ember.$(window).bind('hashchange.ember-location-'+guid, function() {
      Ember.run(function() {
        var path = location.hash.substr(2);
        if (get(self, 'lastSetURL') === path) { return; }
        set(self, 'lastSetURL', null);
        callback(location.hash.substr(2));
      });
    });
  },

  formatURL: function(url) {
    return '#!'+url;
  }

  })
);

})();

App.Router.reopen({
  location: 'hashbang'
});