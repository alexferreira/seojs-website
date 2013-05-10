
Ember.TEMPLATES['ajax'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("O que é");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Como funciona");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Benefícios");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Malefícios");
  }

  data.buffer.push("<div class=\"row-fluid\">\n  <div class=\"span3\">\n    <div class=\"well sidebar-nav\">\n      <ul class=\"nav nav-list\">\n        <li class=\"nav-header\">Ajax</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ajax.o_que_e", options) : helperMissing.call(depth0, "linkTo", "ajax.o_que_e", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ajax.como_funciona", options) : helperMissing.call(depth0, "linkTo", "ajax.como_funciona", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ajax.beneficios", options) : helperMissing.call(depth0, "linkTo", "ajax.beneficios", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ajax.maleficios", options) : helperMissing.call(depth0, "linkTo", "ajax.maleficios", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"span9\">\n    <div class=\"row-fluid\">\n      ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES['ajuste'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>O acordo entre o buscador e o servidor</h2>\n\n\n<strong>Com o objetivo de indexar aplicações ricas, surgem algumas perguntas:</strong>\n\n<ul>\n  <li>Quais URL ajax podem ser indexadas?</li>\n  <li>Como exibir a URL?</li>\n  <li>Como poderia funcionár a logística</li>\n</ul>\n\n<p>Pensando nisso teriamos o seguinte acordo entre o web server e os motores de busca.</p>\n\n<p><strong>Web server concorda com</strong></p>\n<ul>\n  <li>Indicar quais URLs serão indexáveis</li>\n  <li>Executar javascript para urls feia (sem user agent sniffing)</li>\n  <li>não encobrir por sempre dando mesmo conteúdo para o navegador e rastreador, independentemente do pedido (ou risco eliminatin, como antes)</li>\n</ul>\n\n\n<p><strong>Os motores de busca concordam com</strong></p>\n<ul>\n  <li>Descobrir urls como antes (sitemaps, hyperlinks)</li>\n  <li>Modificar urls bonitas para urls feias</li>\n  <li>Indexar conteúdo</li>\n  <li>Exibir URLs originais</li>\n</ul>\n\n\n<p>A fim de tornar suas aplicações AJAX rastreáveis​​, o seu site precisa obedecer algumas regras que baseia-se no seguinte:</p>\n\n<ol>\n  <li>O site adota o esquema de rastreamento de AJAX.</li>\n  <li>Para cada URL que tem conteúdo produzido dinamicamente, o servidor fornece um HTML pré-gerado, que é o conteúdo que o usuário vê em seu navegador. Muitas vezes, tais URLs serão URLs AJAX, ou seja, URLs contendo um fragmento de hash, por exemplo www.seusite.com.br/index.html#contato, onde #contato é o fragmento hash. O HTML pré-gerado é todo o conteúdo que aparece na página após a JavaScript ter sido executado.</li>\n  <li>O motor de busca irá indexar o  HTML pré-gerado e servirá suas URLs AJAX originais nos resultados de busca.</li>\n</ol>\n\n<p>A fim de fazer este trabalho, o aplicativo deve usar uma sintaxe específica na URLs AJAX (vamos chamá-los de \"URLs bonita\"). O mecanismo de busca vai modificar temporariamente a \"URLs bonita\" em \"URLs feia\" que será solicitada ao seu servidor. Este pedido de uma \"URL feia\" indica ao servidor que ele não deve retornar a página web que daria para um navegador, mas sim um HTML pré-gerado.</p>\n\n<p>Quando o rastreador obtiver o conteúdo de uma \"URL feia\", ele indexa seu conteúdo, em seguida, exibe a URL original nos resultados da pesquisa. Em outras palavras, os usuários finais vão sempre ver o URL bonita contendo um fragmento hash. O diagrama a seguir resume o acordo:</p>\n\n<img src=\"assets/funcionamento_seo_js.png\" class=\"blockCenter\" width=\"550\" height=\"540\"/>\n");
  
});

Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src=\"assets/seoJs-logo-min.png\" alt=\"SeoJs\" width=\"80\" height=\"30\"/>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Ajax");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Ajuste");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Sobre");
  }

  data.buffer.push("<div class=\"navbar navbar-fixed-top\">\n  <div class=\"navbar-inner\">\n    <div class=\"container\">\n      <button type=\"button\" class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("brand")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      <div class=\"nav-collapse collapse\">\n        <ul class=\"nav\">\n          <li class=\"active\">");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n          <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ajax.o_que_e", options) : helperMissing.call(depth0, "linkTo", "ajax.o_que_e", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n          <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ajuste", options) : helperMissing.call(depth0, "linkTo", "ajuste", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n          <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
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
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Browser e Buscadores, o que vêem?");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Google e Bing");
  }

  data.buffer.push("<div class=\"row-fluid\">\n  <div class=\"span3\">\n    <div class=\"well sidebar-nav\">\n      <ul class=\"nav nav-list\">\n        <li class=\"nav-header\">Home</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index.index", options) : helperMissing.call(depth0, "linkTo", "index.index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index.browser_e_buscadores_o_que_veem", options) : helperMissing.call(depth0, "linkTo", "index.browser_e_buscadores_o_que_veem", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index.google_e_bing", options) : helperMissing.call(depth0, "linkTo", "index.google_e_bing", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"span9\">\n    <div class=\"row-fluid\">\n      ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES['sobre'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>Sobre o Desenvolvedor</h2>\n\n<ul>\n  <li><a href=\"https://www.facebook.com/alexsantosferreira\">Facebook</a></li>\n  <li><a href=\"https://twitter.com/alex_sferreira\">Twitter</a></li>\n  <li><a href=\"https://www.facebook.com/alexsantosferreira\">Google+</a></li>\n  <li><a href=\"https://github.com/alexferreira\">Github</a></li>\n</ul>");
  
});

Ember.TEMPLATES['index/browser_e_buscadores_o_que_veem'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>SeoJs: Demo</title>\n      <meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n      <meta name=\"fragment\" content=\"!\" />\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <link rel=\"stylesheet\" href=\"/assets/application.min.css\">\n    </head>\n    <body>\n      <script type=\"text/javascript\" src=\"/assets/application.min.js\"></script>\n    </body>\n  </html>\n");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>SeoJs: Demo</title>\n      <meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n      <meta name=\"fragment\" content=\"!\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <link rel=\"stylesheet\" href=\"/assets/application.min.css\">\n    </head>\n    <body class=\"ember-application\">\n      <script type=\"text/javascript\" src=\"/assets/application.min.js\"></script>\n\n      <div id=\"ember344\" class=\"ember-view\">\n        <div class=\"navbar navbar-fixed-top\">\n          <div class=\"navbar-inner\">\n            <div class=\"container\">\n              <button type=\"button\" class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a id=\"ember373\" class=\"ember-view brand active\" href=\"#!/\">SeoJs Demo</a>\n              <div class=\"nav-collapse collapse\">\n                <ul class=\"nav\">\n                  <li class=\"active\"><a id=\"ember374\" class=\"ember-view active\" href=\"#!/\">Home</a></li>\n                  <li><a id=\"ember375\" class=\"ember-view\" href=\"#!/ajuste\">Ajuste</a></li>\n                  <li><a id=\"ember378\" class=\"ember-view\" href=\"#!/sobre\">Sobre</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </body>\n  </html>\n");
  }

  data.buffer.push("<ul class=\"breadcrumb\">\n  <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(" <span class=\"divider\">/</span></li>\n  <li class=\"active\">Browser e Buscadores, o que vêem?</li>\n</ul>\n\n<h2>Browser e Buscadores, o que vêem?</h2>\n\n<p>Nos últimos anos, mais e mais a web se tornou preenchida com aplicações ricas em javascript, substituindo páginas HTML estáticas. Isso foi um grande grande passo no desenvolvimento para os usuários, pois torna as aplicações muito mais rápidas e mais ricas.</p>\n\n<p>Mas fazer sua aplicação mais ágil veio com um custo enorme: crawlers não são capazes de ver todo o conteúdo que é criado dinamicamente. Como resultado, as aplicações mais modernas são também aquelas que muitas vezes são as menos indexadas pelos mecanismos de busca. Por exemplo, uma aplicação típica AJAX pode resultar no seguinte HTML a ser visto pelo rastreador:</p>\n\n");
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],hashTypes:hashTypes,data:data};
  if (stack2 = helpers.code) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.code; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  hashTypes = {};
  if (!helpers.code) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n<p>Mas imagine que o que o usuário realmente vê no navegador é muito conteúdo relacionado a filmes e informações sobre eles. Como isso acontece? O navegador executa os application.min.js e cria o HTML que o usuário vê, por exemplo, algo como isto:</p>\n\n\n");
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],hashTypes:hashTypes,data:data};
  if (stack2 = helpers.code) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.code; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  hashTypes = {};
  if (!helpers.code) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n<p>O navendor pode executar JavaScript e produzir conteúdo on the fly, os buscadores não. Para fazer com que o buscador veja o que o usuário vê, o servidor precisará entregar um HTML pré-gerado com o resultado da execução do JavaScript em sua página.</p>\n\n\n<h2>Curiosidade</h2>\n\n<p>Se tiver curiosidade sobre a sua própria aplicação, vá em seu navegador, em seguida, visualize o código fonte (por exemplo, no Chrome, clique com botão direito e selecione \"View Page Source\"). No nosso exemplo, \"View Page Source\" não contêm a palavra \"Ajuste\". Da mesma forma, se seu conteúdo for criado dinamicamente, o código fonte da página não vai incluir o conteúdo que você deseja que os mecanismos de busca veja. Em outras palavras \"View Page Source\" é exatamente o que o buscador vê.</p>\n\n\n<h2>Por que isso é importante?</h2> \n\n<p>É importante porque os resultados da pesquisa são baseados em parte nas palavras que o buscador encontra na página. Se o buscador não consegue encontrar o seu conteúdo, seu site não é indexável.</p>\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES['index/google_e_bing'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>Google e Bing</h2>\n\n<p>Google e Bing ambos utilizam hashbang na URL, é utilizado para informar o motor de busca que a página atual que está sendo acessado na URL contém conteúdo AJAX. Abaixo está um exemplo de um site que contém um hashbang dentro de uma URL:</p>\n\n<p><span class=\"badge badge-inverse\"  data-toggle=\"tooltip\" title=\"URL: Bonita\">http://yourwebsite.com/#!/some/page/with/ajax/content</span></p>\n\n<p>Google agora irá converter esta URL para uma URL especial que foi projetada para ser acessível pelo crawler. O Google irá visitar a URL especial e espera que o conteúdo recuperado seja o conteúdo final.</p>\n\n<p>Em outras palavras, o Google espera ver o mesmo HTML que seria obtido caso a URL fosse acessada pelo browser. Aqui está a URL especial que as consultas do Google / Bing acessam para obter esse conteúdo:</p>\n\n<p><span class=\"badge badge-inverse\"  data-toggle=\"tooltip\" title=\"URL: Feia\">http://yourwebsite.com/?_escaped_fragment_=/some/page/with/ajax/content</span></p>\n\n<p>Então, agora cabe a você para encaminhar esta solicitação para a versão HTML pré-gerada da sua página web.</p>\n\n<p>O principal problema de rastreamento AJAX é que ele depende fortemente de JavaScript, além disso, diferentes navegadores suportam diferentes recursos e funções a execução de JavaScript requer recursos adicionais e isso aumenta os custos para os mecanismos de busca.</p>\n\n<p>Uma possível solução para este problema seria, se os <strong>Crawlers executassem todos javascript da web</strong> o que torna inviável pois:</p>\n<ul>\n  <li>Isto é caro e demorado</li>\n  <li>Apenas os principais motores de busca seriam capazes de fazer isso, e provavelmente apenas parcialmente</li>\n  <li>Indexar seria mais demorado, resultando em piores resultados de pesquisa</li>\n</ul>\n\n<p>Historicamente, as aplicações AJAX têm sido inviáveis para os motores de busca porque o conteúdo AJAX é produzido dinamicamente do lado do cliente pelo navegador e, portanto, não é visível para os indexadores.</p> \n\n<p>Embora existam métodos para lidar com este problema, eles envolvem a manutenção manual regular para manter o conteúdo up-to-date.</p>\n\n<p>Pensando nisso foi criado o <a href=\"#\" data-toggle=\"tooltip\" title=\"Aplicação que facilita a indexação de sites ricos\">SeoJs</a> que executa seu javascript em tempo de rastreamento e do lado servidor</p>\n\n<p>Parece um pouco complicado mas o <strong>SeoJs</strong> permite exatamente isso: ele permite que o servidor web possa entregar aos mecanismos de busca um HTML criado a partir de pedaços de conteúdo estático, bem como pela execução de JavaScript para as páginas do aplicativo, com isso:</p>\n\n<ul>\n  <li>Evitamos os problemas acima</li>\n  <li>Dámos maior controle para os desenvolvedores</li>\n  <li>Isso é feito automaticamente</li>\n  <li>Manutenção contínua inexistente</li>\n</ul>\n\n<p>A compreensão de como fazer uma aplicação rica e indexável pelo Google e Bing praticamente elimina toda e qualquer razão para não usar JavaScript para praticamente qualquer aplicação web.</p> \n\n<p>Antes a maior preocupação era o HTML, mas agora com a SeoJS tornando sua aplicação AJAX indexável, você pode fazer praticamente qualquer coisa :)</p>\n");
  
});

Ember.TEMPLATES['index/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Ajax");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Browser e Buscadores, o que vêem?");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Google e Bing");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Ajuste");
  }

  data.buffer.push("<ul class=\"breadcrumb\">\n  <li class=\"active\">Home</li>\n</ul>\n\n<h1>SeoJs: Indexando Aplicações Ricas</h1>\n\n<img src=\"assets/seoJs-logo.png\" class=\"blockCenter\" width=\"512\" heigth=\"221\"/>\n</br>\n</br>\n<p>Buscando uma melhor experiência do usuário muitos desenvolvedores têm procurado os recursos necessários no AJAX, devido o javascript ser executado no lado do cliente, sua implementação tem acarretado diversos problemas de indexação.</p>\n\n<strong>por que esse problema precisa ser resolvido?</strong>\n<ul>\n  <li>Desde o surgimento da web 2.0: mais e mais conteúdos são criados dinamicamente (~ 69%)</li>\n  <li>Desenvolvedores são desencorajados a criação de aplicativos dinâmicos</li>\n  <li>O progresso da Web é impedido por falta de solução de indexação de sites dinâmicos.</li>\n</ul>\n\n\nMas antes de chegar à solução precisamos entender rapidamente o que é o AJAX, como ele funciona e quais os benefícios e malefícios que sua implementação pode acarretar.</p>\n\nAntes de chegarmos a solução precisamos entender algumas coisas:\n\n<ul>\n  <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ajax.o_que_e", options) : helperMissing.call(depth0, "linkTo", "ajax.o_que_e", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n  <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index.browser_e_buscadores_o_que_veem", options) : helperMissing.call(depth0, "linkTo", "index.browser_e_buscadores_o_que_veem", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n  <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index.google_e_bing", options) : helperMissing.call(depth0, "linkTo", "index.google_e_bing", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n  <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "ajuste", options) : helperMissing.call(depth0, "linkTo", "ajuste", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n</ul>");
  return buffer;
  
});

Ember.TEMPLATES['ajax/beneficios'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>Benefícios</h2>\n\n<p>Uma vez que o AJAX possibilita a troca de informações entre cliente e servidor sem a necessidade de “reload” da página o tempo de carregamento das páginas diminui, pois apenas as informações necessárias são trafegadas.</p>\n\n<p>Não existindo o “reload” a experiência do usuário é aprimorada, diminui-se o tempo de carregamento e diminui-se a sobrecarrega dos servidores com requisições desnecessárias. Além do que, com o AJAX, são possíveis inúmeras implementações que fazem as páginas dinâmicas agirem como poderosos aplicativos da web, fato que através de uma página tradicional não seria possível.</p>\n\n");
  
});

Ember.TEMPLATES['ajax/como_funciona'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>Como funciona?</h2>\n\n<p>Nos sites tradicionais toda vez que o navegador tem que buscar novas informações no servidor e retornar para o cliente é necessário um \"reload\" da tela, mas com o AJAX isto ocorre de forma bem mais eficiente.</p>\n\n<p>Através do AJAX a lógica de processamento fica a cargo na máquina cliente, ou seja, quando o usuário faz uma requisição para o servidor, quem busca e retornar as informações é o JavaScript de forma assíncrona. Desta forma não é necessário o \"reload\" da tela.</p>\n\n\n\n<p>Enquanto em uma aplicação Web clássica o navegador tem que ir buscar as informações no servidor e retornar para o cliente, no Ajax ocorre de forma diferente.</p> \n\nNo carregamento da página, toda a lógica de processamento de dados é passado ao cliente. Quando o usuário faz uma requisição, quem busca e trás essas informações é o JavaScript, de forma assíncrona, não causando assim o chamado \"reload\" na tela. O tratamento dos dados, seu formato e exibição fica toda por conta do script que foi carregado inicialmente quando se acessou a página. O processo inicial de carregamento é mais lento que de uma aplicação comum, pois muitas informações são pré-carregadas. Mas depois, somente os dados são carregados, tornando assim o site mais rápido.\n\n\n<p>Dependendo da quantidade de scripts que passarão pelo processo de carregamento pode parecer mais lento comparado com uma aplicação comum, pois muitas das informações serão pré-carregadas. Após ter sido carrregados os scripts apenas os dados são carregados, tornando assim sua aplicação ainda </p>\n\n\n\n<p>Comparado com uma aplicação comum, o carregamento da sua aplicação pode parecer mais lenta devido a quantidade/tamanho dos scripts que serão carregados na inicialização. Após iniciar sua aplicação apenas os dados serão carregados, tornando sua aplicação ainda mais rápida.</p>\n\n--------------------------------------------------------------------------------------------------------------------\n\n<p>Nos sites tradicionais </p>");
  
});

Ember.TEMPLATES['ajax/maleficios'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>Malefícios</h2>\n\n<p>As implementações tradicionais de AJAX utilizam-se de hash (#) para funcionarem. Porém este símbolo é utilizado como âncora HTML, fazendo com que os mecanismos de busca não compreendam que a utilização deste na verdade não é uma âncora, mas sim a chamada de um novo conteúdo.</p>\n\n<p>Fato que prejudica a indexação de páginas programadas desta forma. Outro problema ocorre no momento do trabalho de Link Building, pois todos os links gerados sempre estarão apontando para página que fica antes da hash, ou seja, tornando quase impossível um trabalho de Link Building direcionado para um conteúdo que só é exibido através da hash.</p>\n\n<p>Para aqueles que não sabem os crawlers não executam JavaScript. Sendo assim, mesmo que o link com a sua hash sejam encontrados, ele não conseguirá acessar o conteúdo, pois este é exibido via Javascript.</p>\n\n<p>O mesmo problema ocorrerá caso o visitante, por algum motivo, não consiga executar JavaScript em seu navegador.</p>\n\n");
  
});

Ember.TEMPLATES['ajax/o_que_e'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>O que é Ajax?</h2>\n\n<p>AJAX é a sigla de Asynchronous JavaScript e XML. AJAX não é uma nova linguagem de programação, mas uma nova forma de utilizar as normas existentes para proporcionar uma melhor experiência do usuário.</p>\n\n<p>AJAX é a arte de trocar dados com um servidor sem a necessidade de recarregar a página inteira, ou seja, recarregamos apenas a parte da página que nos interessa.</p>\n\n\nAJAX é acrônimo em língua inglesa de \"Asynchronous Javascript and XML\", que em português significa \"Javascript e XML Assíncronos\". Designa um conjunto de técnicas para programação e desenvolvimento web que utiliza tecnologias como Javascript e XML para carregar informações de forma assíncrona.\n\nO criador do termo AJAX foi o pesquisador norte-americano Jesse James Garrett. Desde que o modelo AJAX começou a ser utilizado, é visto como uma ferramenta revolucionária, que torna mais agradável a navegação e utilização de serviços diversos na internet.\n\nO desenvolvimento em AJAX permite a criação de páginas mais criativas e com maior interação com o usuário. A sua utilização foi importante para a criação do conceito Web 2.0. que tornou a experiência do usuário mais interessante e proveitosa.\n\nAlguns serviços do Google como o Gmail, Google Earth e Google Maps fazem uso das ferramentas AJAX.\n\nAo usar AJAX no desenvolvimento de serviços para web, a informação é carregada de maneira mais simples e precisa. O usuário não precisa aguardar que a página seja totalmente recarregada quando faz uma requisição, pois o servidor só irá retornar os dados relevantes, reduzindo o tráfego de dados pela rede.");
  
});


