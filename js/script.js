


var firebaseConfig = {
    apiKey: "AIzaSyAs7Xtk1nuibI0ry_dHdWwa516-QZuA5jI",
    authDomain: "handlebars-517dc.firebaseapp.com",
    projectId: "handlebars-517dc",
    storageBucket: "handlebars-517dc.appspot.com",
    messagingSenderId: "362263264982",
    appId: "1:362263264982:web:e7cc38fb85fd832a031377",
    measurementId: "G-2D17TS9H4C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Block Helpers
Handlebars.registerHelper('toLower', function (options) {
    return options.fn(this).toLowerCase();
})
Handlebars.registerHelper('makeBold', function (options) {
    return new Handlebars.SafeString("<strong>" + options.fn(this) + "</strong>");
})
Handlebars.registerHelper('list', function (context, options) {
    var attr = Object.keys(options.hash)
        .map(function (key) {
            return key + '="' + options.hash[key] + '"';
        });
    var ret = "<ul " + attr + ">";
    var data;

    if(options.data){
        data = Handlebars.createFrame(options.data);
    }

    for (var i = 0, j = context.length; i < j; i++) {

        if (data) {
            data.index = i;
          }
        ret = ret + "<li class='media mb-2 p-2 bg-light'>" + options.fn(context[i],{data:data}) + "</li>";

    }
    return ret + "</ul>";
})
// Expression Helper
Handlebars.registerHelper('upper', function (options) {
    return options.toUpperCase();

})
Handlebars.registerHelper("isdefined", function (value) {
    return value !== undefined;
})
Handlebars.registerHelper("formatPhoneNumber", function (property) {
    if (property) {
        var phone = property.toString();
        return "(" + phone.substr(0, 3) + ")" + phone.substr(3, 3) + "-" + phone.substr(4, 6);
    }
})


// Database
var db = firebase.database().ref();
var url_string = window.location.href,
    url = new URL(url_string),
    id = url.searchParams.get("id");

db.on("value", function (snap) {
    if (document.body.classList.contains('page-cast-details')) {
        var templateCast = Handlebars.templates.castDetails,
            contextCast = snap.val().characters[id],
            html = templateCast(contextCast);
    } else {
        var template = Handlebars.templates.characters,
            context = snap.val(),
            html = template(context);
    }
    document.getElementById("content").innerHTML += html;
});




