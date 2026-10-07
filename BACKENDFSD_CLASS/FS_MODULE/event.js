const EventEmitter = require('events');

const event = new EventEmitter();

event.on("greet", () => {
    console.log("this is event emitter");
});

event.emit("greet");