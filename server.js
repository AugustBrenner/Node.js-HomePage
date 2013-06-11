// node.js server file

//required modules
var http = require("http");
var url = require("url");


// start function to export
function start(route, handle) {

    // set up the http request/response procedure
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        request.setEncoding("utf8");

        // POST data listener
        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("Recieved POST data chunk '"+ postDataChunk + "'.");
        });

        // end of POST data listener
        request.addListener("end", function(){
            route(handle, pathname, response, postData);
        });
    }

    // create the server
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

// export the start function
exports.start = start;