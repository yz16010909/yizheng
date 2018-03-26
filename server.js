var http = require('http');
http.createServer(function(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    res.write("来自node的问候，下午好！");
    res.end();
}).listen(8080, '10.43.10.153');
