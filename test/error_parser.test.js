var expect = chai.expect;
var error_parser = require('../src/error_parser');
var StackFrame = require('stackframe');

describe('Stack', function() {
  it('returns the stack, error message and error name', function() {
    var error = new Error('the message');
    error.name = 'MyError';

    var stack = new error_parser.Stack(error);
    expect(stack.message).to.equal('the message');
    expect(stack.name).to.equal('MyError');

    var stackArray = stack.stack;
    expect(stackArray.constructor.name).to.equal('Array');
  });
});

describe('Frame', function() {
  it('returns an Object instance with correct data', function() {
    var stackFrame = new StackFrame('function', [1,2], 'filename.js', 10, 4);

    var frame = new error_parser.Frame(stackFrame);

    expect(frame.url).to.equal('filename.js');
    expect(frame.line).to.equal(10);
    expect(frame.func).to.equal('function');
    expect(frame.column).to.equal(4);
    expect(frame.args).to.eql([1,2]);
    expect(frame.context).to.be.null;
  });
});
