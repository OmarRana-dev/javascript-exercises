const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World! to user"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
