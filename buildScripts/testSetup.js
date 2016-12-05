// this file is not transpile, so must be use CommonJS and es5.

// reguster babel to tranpalide our files befire test runs.
require('babel-register');

// disable webpack features that mocha does not undestand.
require.extensions['.css'] = function (){};
