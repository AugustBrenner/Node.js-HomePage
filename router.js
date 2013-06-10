// node.js router module

// router function
function route(handle, pathname) {

    console.log("About to route a request for " + pathname);

    if(typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }
}

// export the rout function
exports.route = route;