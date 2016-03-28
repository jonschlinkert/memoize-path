'use strict';

var memo = require('./');

/**
 * When a string is passed, a function is returned
 */

var cwd = memo(process.cwd());

// use `cwd`
var foo = cwd('foo');
var bar = cwd('bar');
var baz = cwd('baz');

// use `foo`
var qux = foo('a/b/c');
// use `qux`
var fez = qux('x/y/z');

/**
 * Get a memoized path by calling the function
 */

console.log(cwd());
//=> /User/dev/memo-path
console.log(foo());
//=> /User/dev/memo-path/foo
console.log(bar());
//=> /User/dev/memo-path/bar
console.log(baz());
//=> /User/dev/memo-path/baz
console.log(qux());
//=> /User/dev/memo-path/foo/a/b/c
console.log(fez());
//=> /User/dev/memo-path/foo/a/b/c/x/y/z


/**
 * The memoized path is also exposed on the function's `.path` property
 */

console.log(cwd.path);
//=> /User/dev/memo-path
console.log(foo.path);
//=> /User/dev/memo-path/foo
console.log(bar.path);
//=> /User/dev/memo-path/bar
console.log(baz.path);
//=> /User/dev/memo-path/baz
console.log(qux.path);
//=> /User/dev/memo-path/foo/a/b/c
console.log(fez.path);
//=> /User/dev/memo-path/foo/a/b/c/x/y/z
