
Ember.TEMPLATES['ajuste'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>Um ajuste entre o buscador e o servidor</h2>\n\n<p>A fim de tornar suas aplicações AJAX rastreáveis​​, o seu site precisa obedecer a um novo acordo. Este ajuste baseia-se no seguinte:</p>\n\n<ol>\n  <li>O site adota o esquema de rastreamento de AJAX.</li>\n  <li>Para cada URL que tem conteúdo produzido dinamicamente, o servidor fornece um snapshot do HTML, que é o conteúdo que o usuário vê em seu navegador. Muitas vezes, tais URLs serão URLs AJAX, ou seja, URLs contendo um fragmento de hash, por exemplo www.seusite.com.br/index.html#contato, onde #contato é o fragmento hash. O snapshot de HTML é todo o conteúdo que aparece na página após a JavaScript ter sido executado.</li>\n  <li>O motor de busca irá indexar o snapshot de HTML e servirá suas URLs AJAX originais nos resultados de busca.</li>\n</ol>\n\n<p>A fim de fazer este trabalho, o aplicativo deve usar uma sintaxe específica na URLs AJAX (vamos chamá-los de \"URLs bonita\"). O mecanismo de busca vai modificar temporariamente a \"URLs bonita\" em \"URLs feia\" e pedirá esta a seu servidor. Este pedido de uma \"URL feia\" indica ao servidor que ele não deve retornar a página web regular, daria para um navegador, mas sim um instantâneo HTML. Quando o rastreador obteve o índice para o URL feio modificado, ele indexa seu conteúdo, em seguida, exibe a URL bem original nos resultados da pesquisa. Em outras palavras, os usuários finais vão sempre ver o URL bonita contendo um fragmento hash. O diagrama a seguir resume o acordo:</p>\n\n<img src=\"/images/funcionamento_ajax_seo.png\" class=\"blockCenter\">\n");
  
});

Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Ajuste");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Sobre");
  }

  data.buffer.push("<div class=\"navbar navbar-fixed-top\">\n  <div class=\"navbar-inner\">\n    <div class=\"container\">\n      <button type=\"button\" class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"brand\" href=\"#\">Ajax-Seo Demo</a>\n      <div class=\"nav-collapse collapse\">\n        <ul class=\"nav\">\n          <li class=\"active\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n          <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ajuste", options) : helperMissing.call(depth0, "linkTo", "ajuste", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n          <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "sobre", options) : helperMissing.call(depth0, "linkTo", "sobre", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row-fluid\">\n    ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES['index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Ajax-Seo</h1>\n\n\n\n<h2>O que o usuário vê, o que o mecanismo de busca vê</h2>\n\n<p>Nos últimos anos, mais e mais a web se tornou preenchida com aplicações ricas em javascript, substituindo páginas HTML estáticas. Este é um grande grande passo no desenvolvimento para os usuários, pois torna as aplicações muito mais rápidas e mais ricas.</p>\n\n<p>Mas fazer sua aplicação mais ágil veio com um custo enorme: crawlers não são capazes de ver todo o conteúdo que é criado dinamicamente. Como resultado, as aplicações mais modernas são também aquelas que muitas vezes são as menos indexadas pelos mecanismos de busca. Por exemplo, uma aplicação típica AJAX pode resultar na seguinte a ser visto pelo rastreador:</p>\n\n<p>O navendor pode executar JavaScript e produzir conteúdo on the fly, os mecanismos de busca não. Para fazer com que o buscador veja o que o usuário vê, o servidor precisará entregar um snapshot do HTML com o resultado da execução do JavaScript em sua página.</p>\n\n<p>Parece um pouco complicado mas o <strong>Ajax-Seo</strong> permite exatamente isso: ele permite que o servidor web possa entregar aos mecanismos de busca um HTML criado a partir de pedaços de conteúdo estático, bem como pela execução de JavaScript para as páginas do aplicativo. Isso é o que chamamos de um snapshot do HTML.</p>\n\n<p><a href=\"#\" class=\"btn btn-primary btn-large\">Veja mais»</a></p>");
  
});

Ember.TEMPLATES['sobre'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>sobre</h2>\n\n");
  
});


