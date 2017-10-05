var fs = require('fs'),
http = require('http'),
port = 7077;

var server = http.createServer(function server(req, res){
// Figure out which file the HTTP request is looking for
var file;
var type;

switch (req.url) {
case "/":
  file = 'views/index.html'
  tpye = "html"
  break;
case "/cars":
    file = 'views/car.html'
    type = "html"
    break;
case "/cats":
    console.log("cats")
    file = 'views/cat.html'
    type = "html"
    break;
case '/cars/new':
    file = 'views/carsnew.html'
    type = "html"
    break;
case "/img1":
    file = 'images/cars3.jpg'
    type = "jpg"
    break;
case "/img2":
    file = 'images/cats2.jpg'
    type = "jpg"
    break;
case "/css":
    file = 'stylesheets/main.css'
    type = "css"
    console.log('css1')
    break;
default:
  file = null;
  break;
}
// Send file or error to browser
if (file !== null) {
    if (type === "html") {
// First argument uses string interpolation
        fs.readFile(`${file}`, 'utf8', function(err, contents){
            if (err) { console.log(err); }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
        });
    } else if (type === "jpg") {
        console.log("hello")
        fs.readFile(`${file}`, function(err, contents){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (type === "css"){
        console.log('css2')
        fs.readFile(`${file}`, function(err, contents) {
            res.writeHead(200, {'Content-type': 'text/css'});
            res.write(contents);
            res.end();
        })
    }
    else {
        res.writeHead(404);
        res.end("File not found!");
    }
}
  else { 
        res.writeHead(404);
        res.end("File not found!");
    }
    });

server.listen(port, function(){
console.log("Running on port: ", port);
});