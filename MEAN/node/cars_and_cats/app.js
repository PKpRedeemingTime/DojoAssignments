var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
     var splitURL = request.url.split('/'),
      firstChunk = splitURL[1];
    switch (firstChunk) {
        case "stylesheets":
            serveCSS(splitURL[2], response);
            break;
        case "images":
            serveJPG(splitURL[2], response);
            break;
        default:
            case "cars":
                if (splitURL[2] == "new") {
                serveHTML("cars_new.html", response);
                } else {
                serveHTML("cars.html", response);
                }
                break;
            case "cats":
                serveHTML("cats.html", response);
                break;
    }
    
    function serveHTML(filename, response){
    fs.readFile(`views/${filename}`, 'utf8', function(error, contents){
        if (error) { return serve404(response) }
        response.writeHead(200, {'Content-type' : 'text/html' });
        response.write(contents);
        response.end();
    });
    }

    function serveCSS(filename, response){
    fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents){
        if (error) { return serve404(response) }
        response.writeHead(200, {'Content-type' : 'text/css' });
        response.write(contents);
        response.end();
    });
    }

    function serveJPG(filename, response){
    fs.readFile(`images/${filename}`, function(error, contents){
        if (error) { return serve404(response) }
        response.writeHead(200, {'Content-type' : 'image/jpg' });
        response.write(contents);
        response.end();
    });
    }

    function serve404(response){
    response.writeHead(404);
    response.end("File not found!");
    }
});
server.listen(6789);
console.log("Running in localhost at port 6789");