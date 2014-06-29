var express = require('express');
var app = express();
var url = require('url');
var db = require('./js/handleDB');
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.all('*', function (req, res) {
    var path = url.parse(req.url).pathname;
    if(path=="/")
    {
        res.render("index.html");
    }
    else  if (path == "/add") {
        var status = url.parse(req.url, true).query;
        db.add_status(status, res);
    }
});
app.listen(3000, function () {
    console.log("I am running at port 3000");
});