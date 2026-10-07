// Simulate DOM-like event handling in Node.js using EventEmitter
// addEventListener() -> .on()
// dispatchEvent() -> .emit()

const EventEmitter = require('events');

// Create EventEmitter object
const emitter = new EventEmitter();

// Click event listener
emitter.on('click', (name) => {
    console.log(`Click event triggered by ${name}`);
});

// Mouseover event listener
emitter.on('mouseover', () => {
    console.log('Mouseover event triggered');
});

// Trigger click event
emitter.emit('click', 'nirjara');

// Trigger mouseover event
emitter.emit('mouseover');