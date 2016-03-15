var ws = require("nodejs-websocket");

var str = '';
var server = ws.createServer(function (conn) {
    conn.sendText(str);
    conn.on("text", function (msg) {
        str = msg;
        server.connections.forEach(function (conn) {
            conn.sendText(msg);
        });
        conn.sendText(msg);
    });
}).listen(8001);
