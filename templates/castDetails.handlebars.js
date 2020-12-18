(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['castDetails'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "Actor:";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":80}}})) != null ? stack1 : "")
    + "\r\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"seat") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":78}}})) != null ? stack1 : "")
    + "\r\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"words") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":81}}})) != null ? stack1 : "")
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div>";
  stack1 = ((helper = (helper = lookupProperty(helpers,"makeBold") || (depth0 != null ? lookupProperty(depth0,"makeBold") : depth0)) != null ? helper : alias2),(options={"name":"makeBold","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":26},"end":{"line":9,"column":58}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"makeBold")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":59},"end":{"line":9,"column":67}}}) : helper)))
    + "</div>";
},"5":function(container,depth0,helpers,partials,data) {
    return "House:";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div>";
  stack1 = ((helper = (helper = lookupProperty(helpers,"makeBold") || (depth0 != null ? lookupProperty(depth0,"makeBold") : depth0)) != null ? helper : alias2),(options={"name":"makeBold","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":25},"end":{"line":10,"column":56}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"makeBold")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"seat") || (depth0 != null ? lookupProperty(depth0,"seat") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seat","hash":{},"data":data,"loc":{"start":{"line":10,"column":57},"end":{"line":10,"column":65}}}) : helper)))
    + "</div>";
},"8":function(container,depth0,helpers,partials,data) {
    return "Seat:";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div>";
  stack1 = ((helper = (helper = lookupProperty(helpers,"makeBold") || (depth0 != null ? lookupProperty(depth0,"makeBold") : depth0)) != null ? helper : alias2),(options={"name":"makeBold","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":26},"end":{"line":11,"column":58}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"makeBold")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"words") || (depth0 != null ? lookupProperty(depth0,"words") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"words","hash":{},"data":data,"loc":{"start":{"line":11,"column":59},"end":{"line":11,"column":68}}}) : helper)))
    + "</div>";
},"11":function(container,depth0,helpers,partials,data) {
    return "Words:";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.hooks.blockHelperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div>";
  stack1 = ((helper = (helper = lookupProperty(helpers,"makeBold") || (depth0 != null ? lookupProperty(depth0,"makeBold") : depth0)) != null ? helper : alias2),(options={"name":"makeBold","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":30},"end":{"line":13,"column":68}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"makeBold")) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helper = (helper = lookupProperty(helpers,"toLower") || (depth0 != null ? lookupProperty(depth0,"toLower") : depth0)) != null ? helper : alias2),(options={"name":"toLower","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":69},"end":{"line":13,"column":105}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"toLower")) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"14":function(container,depth0,helpers,partials,data) {
    return "Whereabouts:";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"location","hash":{},"data":data,"loc":{"start":{"line":13,"column":81},"end":{"line":13,"column":93}}}) : helper)));
},"18":function(container,depth0,helpers,partials,data) {
    return "<div>Whereabouts are unknown..</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div class=\"characters-content bg-light\">\r\n    <div class=\"media p-3  border-bottom border-dark\">\r\n    <img src=\"images/"
    + alias4(((helper = (helper = lookupProperty(helpers,"shortCode") || (depth0 != null ? lookupProperty(depth0,"shortCode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shortCode","hash":{},"data":data,"loc":{"start":{"line":3,"column":21},"end":{"line":3,"column":34}}}) : helper)))
    + ".jpg\" class=\"mr-3 align-self-top\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":73},"end":{"line":3,"column":81}}}) : helper)))
    + "\" />\r\n    <div class=\"media-body\">\r\n        <h5 class=\"mt-0 mb-1\">"
    + alias4((lookupProperty(helpers,"upper")||(depth0 && lookupProperty(depth0,"upper"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"upper","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":44}}}))
    + "</h5>\r\n\r\n        <div>";
  stack1 = ((helper = (helper = lookupProperty(helpers,"makeBold") || (depth0 != null ? lookupProperty(depth0,"makeBold") : depth0)) != null ? helper : alias2),(options={"name":"makeBold","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":13},"end":{"line":7,"column":45}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"makeBold")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"actor") || (depth0 != null ? lookupProperty(depth0,"actor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actor","hash":{},"data":data,"loc":{"start":{"line":7,"column":46},"end":{"line":7,"column":55}}}) : helper)))
    + "</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"house") : depth0),{"name":"with","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":12,"column":17}}})) != null ? stack1 : "")
    + "        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"location") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":118}}})) != null ? stack1 : "")
    + "\r\n        "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"location") : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":75}}})) != null ? stack1 : "")
    + "\r\n        <a href=\"index.html\" class=\"btn btn-secondary float-right\">Back</a>\r\n    </div>\r\n</div>\r\n    <div class=\"p-3 border-top border-dark\">\r\n        <p><strong>Bio: </strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"bio") || (depth0 != null ? lookupProperty(depth0,"bio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bio","hash":{},"data":data,"loc":{"start":{"line":19,"column":33},"end":{"line":19,"column":40}}}) : helper)))
    + "</p>\r\n    </div>\r\n</div>";
},"useData":true});
})();