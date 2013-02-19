
var assert = require('better-assert')
  , once = require('..');

describe('once(fn)', function(){
  describe('without a receiver', function(){
    it('should invoke the function only once', function(){
      var calls = 0;

      function hey() {
        ++calls;
      }

      var fn = once(hey);
      fn();
      fn();
      fn();
      fn();
      assert(1 == calls);
    })

    it('should pass arguments', function(){
      var args = [];

      function hey(name) {
        args.push(name);
      }

      var fn = once(hey);
      fn('tobi');
      fn('loki');
      assert(1 == args.length);
      assert('tobi' == args[0]);
    })
  })

  describe('with a receiver', function(){
    it('should invoke once per receiver', function(){
      var calls = [];

      function print() {
        calls.push(this.name);
      }

      var tobi = { name: 'tobi', print: once(print) };
      var loki = { name: 'loki', print: once(print) };

      tobi.print();
      tobi.print();
      tobi.print();
      loki.print();
      loki.print();
      loki.print();

      assert(2 == calls.length);
      assert('tobi' == calls[0]);
      assert('loki' == calls[1]);
    })
  })
})
