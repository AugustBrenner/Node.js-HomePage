// node.js index file

// load modules
var server = require("./server");
var router = router = require("./router");
var requestHandlers = require("./requestHandlers");

// set up request handlers
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

// start server
server.start(router.route, handle);