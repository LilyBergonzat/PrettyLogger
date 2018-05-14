# Pretty Logger
A simple tool to create nice and colorful logs.

# Installation
For pretty much everyone
```
npm install --save @elian-wonhalf/pretty-logger
```

For nerds :]
```
npm i -S @elian-wonhalf/pretty-logger
```

# Usage
It's pretty straightforward.

```js
var Logger = require("@elian-wonhalf/pretty-logger");

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
```

# Contribution
Make pull requests or open issues :) !