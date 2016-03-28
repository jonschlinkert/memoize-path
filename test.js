'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var memoPath = require('./');

describe('memoized path', function () {
  it('should expose a function', function () {
    assert.equal(typeof memoPath, 'function');
  });

  it('should return a function', function () {
    assert.equal(typeof memoPath('foo'), 'function');
  });

  it('should continue returning a function when a string is passed', function () {
    var foo = memoPath('foo');
    var bar = foo('bar');
    var baz = bar('baz');
    var qux = baz('qux');
    assert.equal(typeof qux, 'function');
  });

  it('should return a memoized filepath when called with no arguments', function () {
    var foo = memoPath('foo');
    var bar = foo('bar');
    var baz = bar('baz');
    var qux = baz('qux');

    assert.equal(foo(), path.resolve('foo'));
    assert.equal(bar(), path.resolve('foo/bar'));
    assert.equal(baz(), path.resolve('foo/bar/baz'));
    assert.equal(qux(), path.resolve('foo/bar/baz/qux'));
  });

  it('should expose the memoized filepath on the `.path` property', function () {
    var foo = memoPath('foo');
    var bar = foo('bar');
    var baz = bar('baz');
    var qux = baz('qux');

    assert.equal(foo.path, path.resolve('foo'));
    assert.equal(bar.path, path.resolve('foo/bar'));
    assert.equal(baz.path, path.resolve('foo/bar/baz'));
    assert.equal(qux.path, path.resolve('foo/bar/baz/qux'));
  });

  it('should return process.cwd', function () {
    var memo = memoPath();
    assert.equal(memo(), process.cwd());
    assert.equal(memo.path, process.cwd());
  });

  it('should return a file path when called', function () {
    var src = memoPath('foo');
    assert.equal(src(), path.resolve('foo'));
  });
});
