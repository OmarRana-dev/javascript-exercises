const helloWorld = require('./helloWorld-solution');

describe('Hello World', function () {
  test('says "Hello, world!"', function () {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
