/*!
 * memoize-path <https://github.com/jonschlinkert/memoize-path>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var path = require('path');

module.exports = function create(dir) {
  dir = dir || process.cwd();

  return (function(cwd) {
    var current;

    function memo(str) {
      if (typeof str === 'string') {
        var dir = path.resolve(cwd, str);
        var fn = create(dir);
        fn.parent = cwd;
        fn.path = dir;
        return fn;
      }
      return path.resolve(cwd);
    }

    Object.defineProperty(memo, 'path', {
      configurable: true,
      enumerable: true,
      set: function(val) {
        current = val;
      },
      get: function() {
        return path.resolve(current || cwd);
      }
    });
    return memo;
  }(dir));
};
