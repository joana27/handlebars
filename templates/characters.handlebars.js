(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['characters'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "    <img src=\"images/"
    + alias4(((helper = (helper = lookupProperty(helpers,"shortCode") || (depth0 != null ? lookupProperty(depth0,"shortCode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shortCode","hash":{},"data":data,"loc":{"start":{"line":3,"column":21},"end":{"line":3,"column":34}}}) : helper)))
    + ".jpg\" class=\"mr-3 align-self-top\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":73},"end":{"line":3,"column":81}}}) : helper)))
    + "\"/>\r\n    <div class=\"media-body\">\r\n        <h5 class=\"mt-0 mb-1\">"
    + alias4((lookupProperty(helpers,"upper")||(depth0 && lookupProperty(depth0,"upper"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"upper","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":44}}}))
    + "</h5>\r\n    \r\n    <div>";
  stack1 = ((helper = (helper = lookupProperty(helpers,"makeBold") || (depth0 != null ? lookupProperty(depth0,"makeBold") : depth0)) != null ? helper : alias2),(options={"name":"makeBold","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":9},"end":{"line":7,"column":41}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"makeBold")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"actor") || (depth0 != null ? lookupProperty(depth0,"actor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actor","hash":{},"data":data,"loc":{"start":{"line":7,"column":42},"end":{"line":7,"column":51}}}) : helper)))
    + "</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"house") : depth0),{"name":"with","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"location") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":114}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"location") : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":71}}})) != null ? stack1 : "")
    + "\r\n			<a href=\"cast-details.html?id="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":15,"column":33},"end":{"line":15,"column":43}}}) : helper)))
    + "\" class=\"btn btn-secondary float-right\">View details</a>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "Actor:";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":76}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"seat") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":10,"column":74}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"words") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":11,"column":77}}})) != null ? stack1 : "")
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div>";
  stack1 = ((helper = (helper = lookupProperty(helpers,"makeBold") || (depth0 != null ? lookupProperty(depth0,"makeBold") : depth0)) != null ? helper : alias2),(options={"name":"makeBold","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":22},"end":{"line":9,"column":54}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"makeBold")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":55},"end":{"line":9,"column":63}}}) : helper)))
    + "</div>";
},"6":function(container,depth0,helpers,partials,data) {
    return "House:";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div>";
  stack1 = ((helper = (helper = lookupProperty(helpers,"makeBold") || (depth0 != null ? lookupProperty(depth0,"makeBold") : depth0)) != null ? helper : alias2),(options={"name":"makeBold","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":21},"end":{"line":10,"column":52}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"makeBold")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"seat") || (depth0 != null ? lookupProperty(depth0,"seat") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seat","hash":{},"data":data,"loc":{"start":{"line":10,"column":53},"end":{"line":10,"column":61}}}) : helper)))
    + "</div>";
},"9":function(container,depth0,helpers,partials,data) {
    return "Seat:";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div>";
  stack1 = ((helper = (helper = lookupProperty(helpers,"makeBold") || (depth0 != null ? lookupProperty(depth0,"makeBold") : depth0)) != null ? helper : alias2),(options={"name":"makeBold","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":22},"end":{"line":11,"column":54}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"makeBold")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"words") || (depth0 != null ? lookupProperty(depth0,"words") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"words","hash":{},"data":data,"loc":{"start":{"line":11,"column":55},"end":{"line":11,"column":64}}}) : helper)))
    + "</div>";
},"12":function(container,depth0,helpers,partials,data) {
    return "Words:";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.hooks.blockHelperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div>";
  stack1 = ((helper = (helper = lookupProperty(helpers,"makeBold") || (depth0 != null ? lookupProperty(depth0,"makeBold") : depth0)) != null ? helper : alias2),(options={"name":"makeBold","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":26},"end":{"line":13,"column":64}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"makeBold")) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helper = (helper = lookupProperty(helpers,"toLower") || (depth0 != null ? lookupProperty(depth0,"toLower") : depth0)) != null ? helper : alias2),(options={"name":"toLower","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":65},"end":{"line":13,"column":101}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"toLower")) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"15":function(container,depth0,helpers,partials,data) {
    return "Whereabouts:";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"location","hash":{},"data":data,"loc":{"start":{"line":13,"column":77},"end":{"line":13,"column":89}}}) : helper)));
},"19":function(container,depth0,helpers,partials,data) {
    return "<div>Whereabouts are unknown..</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"characters-content\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"list")||(depth0 && lookupProperty(depth0,"list"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"characters") : depth0),{"name":"list","hash":{"class":"list-unstyled list-group"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});
})();