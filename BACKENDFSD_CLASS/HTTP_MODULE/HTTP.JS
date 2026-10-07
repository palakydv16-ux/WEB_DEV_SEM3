// Create my own server using HTTP module

const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<h1>Hello CSE 24</h1>");

    res.write("Welcome to my server");

    res.end();
});

server.listen(8000, () => {

    console.log("Server is running on port 8000");

});