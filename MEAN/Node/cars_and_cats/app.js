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
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars") {
         fs.readFile('views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/cats") {
         fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/cars/new") {
         fs.readFile('views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end(
                 `<div class="formOne">
                     <form class="" action="/cars" method="post">
                         <fieldset>
                             <legend>Add car image:</legend>
                             <input type="text" name="" value="">
                             <input type="submit" name="submit" value="Upload">
                         </fieldset>
                     </form>
                  </div>
                 `
             );
         });
    }
    // CSS
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents);
             response.end();
        })
    }

    else if(request.url === '/images/mustang_shelby_GT50.jpeg'){
     // notice we won't include the utf8 encoding
        fs.readFile('./images/mustang_shelby_GT50.jpeg', function(errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpeg'});
             response.write(contents);
             response.end();
        })
    }
    else if(request.url === '/images/cat.jpeg'){
     // notice we won't include the utf8 encoding
        fs.readFile('./images/cat.jpeg', function(errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpeg'});
             response.write(contents);
             response.end();
        })
    }
    else if(request.url === '/images/HD_softail_deluxe_2005.jpg'){
      // notice we won't include the utf8 encoding
        fs.readFile('./images/HD_softail_deluxe_2005.jpg',function(errors,contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/mc_larren_p1.jpeg'){
      // notice we won't include the utf8 encoding
        fs.readFile('./images/mc_larren_p1.jpeg',function(errors,contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
