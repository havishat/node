var fs = require('fs');
http = require('path');
//var temp = request.url

module.exports = function (request, response){
    console.log("welcome")
    var temp = request.url
    	if(request.url === '/') {
            fs.readFile('./index.html', 'utf8', function(errors, contents) {
                response.write(contents);
                response.end();
            });
    // }  else if(request.url === "/favicon.ico") {
    //        console.log("hello")
    //        fs.readFile('./cats2.jpg', function(errors, contents) {
    //        // response.writeHead(200, {'Content-type': 'image/jpg'});
    //         response.write(contents);
    //         response.end();
    //         });
    } else {
        //if (`.${temp}.html`) {
        console.log("cars")
        fs.readFile(`.${temp}.html`, 'utf8', function(errors, contents) {
        console.log(errors)
        if(!errors) {
            response.write(contents);
            response.end();
        } else {
            response.writeHead(404);
            response.end("File not found!");
        }
        });
    } 

}