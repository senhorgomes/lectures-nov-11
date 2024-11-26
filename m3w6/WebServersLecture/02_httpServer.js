//HTTP Server
// Hyper Text Transfer Protocol
// HTTPS 
// Hyper Text Transfer Protocol Secure

const http = require('http');

const server = http.createServer((request, response)=> {
    // We actually just need to send a response code
    // 200 -> ok
    // 300 -> Redirect
    // 400 -> Client error
    // 500 -> Server error

    // We're not handling any requests
    // reddit.com/path
    // its own path
    // facebook.com/profile
    // facebook.com/login
    // facebook.com/register
    console.log(request.url);
    if(request.url === "/login"){
        return response.end("<h1>Welcome to your login page!</h1>");
    }
    if(request.url === "/"){
        return response.end("<h1>This is our index page</h1>");
    }
    // Error handling
    // What if the path doesn't exist?
    const object = {key: "value"}
    console.log(JSON.stringify(object))
    response.end(JSON.stringify(object));
});

server.listen(3000, () => {
    console.log("I am listening!");
});

