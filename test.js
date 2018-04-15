const Logger = require('./Logger');

Logger.info('This is an info log!');
Logger.error('This is an error log!');
Logger.warning('This is a warning log!');
Logger.notice('This is a notice log!');

const exception = new Error('This is an exception');

Logger.exception(exception);

// Thanks to Colen from StackOverflow for this one!
// https://stackoverflow.com/questions/2710967/how-do-i-store-complex-objects-in-javascript
const complexObject = [
    {"name": "Jim's Ford Focus", "color": "white", isDamaged: true, wheels: 4},
    {"name": "Bob's Suzuki Swift", "color": "green", isDamaged: false, wheels: 4},
    {"name": "Alex's Harley Davidson", "color": "black", isDamaged: false, wheels: 2}
];

Logger.debug(complexObject);

// And for the small finale
Logger.info('Everything is ok');