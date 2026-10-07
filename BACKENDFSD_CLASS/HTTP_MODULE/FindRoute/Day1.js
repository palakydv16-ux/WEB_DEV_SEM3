//Practice routing using http module

import http from 'http';
const server=http.createServer((req,res)=>{
    req.writeHead(200,{"content-Type":"text/html"});
    if(req.url==="/"){
        res.end("<h1>Hello Cse 24</h1>");
    }else if(req.url==="/about"){
        res.end("<h1>Hello Cse 24</h1>");
    }else if(req.url==="/contact"){
res.end("<h1>Hello Cse 24</h1>");
    }else{
        req.writeHead(404,{"conetent-Type":"text/html"})
        res.end("404 is not found");
    }
    

    
})
server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})