// node.js request handlers module

// request handler functions
function start() {
    console.log("Request handler 'start' was called.");
}
function upload() {
    console.log("Request handler 'upload' was called.");
}

// export request handler functions
exports.start = start;
exports.upload = upload;