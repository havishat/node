const http = require('http');
const fs = require('fs');

const static_contents = require(`./static.js`);

server = http.createServer(function (request, respond){
    static_contents(request, respond);
});

server.listen(8000);
console.log("running in localhost at post 8000");