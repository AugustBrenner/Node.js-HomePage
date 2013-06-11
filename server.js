// node.js server file

//required modules
var http = require("http");
var url = require("url");


// start function to export
function start(route, handle) {

    // set up the http request/response procedure
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response);
    }

    // create the server
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

// export the start function
exports.start = start;