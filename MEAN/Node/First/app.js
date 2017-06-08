// Setting up a basic server:
// Let's make a new folder called node_server and in it make a file called app.js. Here's what goes in app.js:

// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");

// HTML	{'Content-Type': 'text/html'}
// CSS	{'Content-Type': 'text/css'}
// Javascript	{'Content-Type': 'text/javascript'}
// png/jpeg/gif	{'Content-Type': 'image/*'} (* is the image format, ie png or jpeg etc)
