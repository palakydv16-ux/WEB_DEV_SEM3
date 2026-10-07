// dispatchEvent - emit()

import { EventEmitter } from "events";
import http from "http";

const emitter = new EventEmitter();

emitter.on("messageLogged", (arg) => {
    console.log("Listener called", arg);
});

emitter.on("mouseover", () => {
    console.log("Mouseover event triggered");
});

emitter.emit("click");
emitter.emit("mouseover");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("<h1>Welcome to my server</h1>");
        res.end();
    } else {
        res.write("welcome to my server");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
});