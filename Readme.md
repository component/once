
# once

  Make a function or method callable only once. Useful for initialization methods
  that may be lazily invoked from several locations, but must only be called once,
  otherwise the method is a noop.

## Installation

    $ component install component/once

## API

```js
var once = require('once');

Foo.prototype.setup = once(function(){
  // expensive stuff here
});
```

## License

  MIT
