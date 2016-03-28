# memoize-path [![NPM version](https://img.shields.io/npm/v/memoize-path.svg?style=flat)](https://www.npmjs.com/package/memoize-path) [![NPM downloads](https://img.shields.io/npm/dm/memoize-path.svg?style=flat)](https://npmjs.org/package/memoize-path) [![Build Status](https://img.shields.io/travis/jonschlinkert/memoize-path.svg?style=flat)](https://travis-ci.org/jonschlinkert/memoize-path)

> Easily create reusable, stackable file paths from memoized path segments.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install memoize-path --save
```

## Usage

A function is returned when a string is passed on the arguments. Otherwise the memoized value is returned either when the function is called (the memoized value is also exposed on the function's `.path` property);

**Example**

```js
var memo = require('memoize-path');

var cwd = memo(process.cwd());
// cwd is a function, since a string was passed
var foo = cwd('foo');
var bar = cwd('bar');
var baz = cwd('baz');

var qux = foo('a/b/c');
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
```

## Related projects

You might also be interested in these projects:

* [is-absolute](https://www.npmjs.com/package/is-absolute): Returns true if a file path is absolute. | [homepage](https://github.com/jonschlinkert/is-absolute)
* [is-relative](https://www.npmjs.com/package/is-relative): Returns `true` if the path appears to be relative. | [homepage](https://github.com/jonschlinkert/is-relative)
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. Just… [more](https://www.npmjs.com/package/micromatch) | [homepage](https://github.com/jonschlinkert/micromatch)
* [relative](https://www.npmjs.com/package/relative): Get the relative filepath from path A to path B. Calculates from file-to-directory, file-to-file, directory-to-file,… [more](https://www.npmjs.com/package/relative) | [homepage](https://github.com/jonschlinkert/relative)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/memoize-path/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/memoize-path/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v, on March 27, 2016._