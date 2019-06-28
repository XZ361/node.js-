var http = require('http');
var sd = require('silly-datetime');

var app = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text-html,charset=utf-8" });
    var d = sd.format(new Date(), 'YYYY-MM-DD');
    res.write('hello, nodejs! ' + d);
    res.end();
});

app.listen(8001, '127.0.0.1');