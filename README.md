Erlang Random Variables
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates a [matrix](https://github.com/dstructs/matrix) or array filled with draws from an [Erlang distribution](https://en.wikipedia.org/wiki/Erlang_distribution).


## Installation

``` bash
$ npm install distributions-erlang-random
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var random = require( 'distributions-erlang-random' );
```

#### random( [dims][, opts] )

Creates a [`matrix`](https://github.com/dstructs/matrix) or [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) filled with draws from an [Erlang distribution](https://en.wikipedia.org/wiki/Erlang_distribution). The `dims` argument may either be a positive `integer` specifying a `length` or an `array` of positive `integers` specifying dimensions. If no `dims` argument is supplied,
the function returns a single random draw from an [Erlang distribution](https://en.wikipedia.org/wiki/Erlang_distribution).

``` javascript
var out;

// Set seed
random.seed = 2;

out = random( 5 );
// returns [ ~1.416, ~1.285, ~0.112, ~1.103, ~2.015 ]

out = random( [2,1,2] );
// returns [ [ [~0.842,~0.547] ], [ [~2.095,~0.941] ] ]

```

The function accepts the following `options`:

*	__k__: shape parameter. Default: `1`.
*	__lambda__: rate parameter. Default: `1`.
*	__seed__: positive integer used as a seed to initialize the generator. If not supplied, uniformly distributed random numbers are generated via an underlying generator seedable by setting the `seed` property of the exported function.
*	__dtype__: output data type (see [`matrix`](https://github.com/dstructs/matrix) for a list of acceptable data types). Default: `generic`.

An [Erlang](https://en.wikipedia.org/wiki/Erlang_distribution) distribution is a function of two parameters: Non-negative integer `k`(shape parameter) and positive number `lambda`(rate parameter). By default, `lambda` is equal to `1` and `k` is equal to `1`. To adjust either parameter, set the corresponding option.

``` javascript
var out = random( 5, {
	'k': 6,
	'lambda': 3
});
// returns [ ~0.866, ~2.186, ~0.943, ~2.276, ~1.648 ]

```

To be able to reproduce the generated random variates, set the `seed` option to a positive integer.

``` javascript
var out = random( 3, {
	'seed': 22
});
// returns [ ~1.416, ~0.157, ~0.039 ]

var out = random( 3, {
    'seed': 22
});
// returns [ ~1.416, ~0.157, ~0.039 ]

```

If no `seed` option is supplied, each function call uses a common underlying uniform number generator. A positive-integer seed for this underlying generator can be supplied by setting the seed property of the exported function.

```javascript
random.seed = 11;
var out = random();
// returns ~1.416

var out = random();
// returns ~0.776

random.seed = 11;
var out = random();
// returns ~1.416

var out = random();
// returns ~0.776

```

By default, the output data structure is a generic [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). To output a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix), set the `dtype` option.

``` javascript
var out;

out = random( 5, {
	'dtype': 'float32'
});
// returns Float32Array( [~0.152,~0.864,4.34,~2.135,~1.611] )

out = random( [3,2], {
	'dtype': 'float64'
});
/*
	[ ~0.087 ~2.398
	  ~1.467 ~0.771
	  ~0.258 ~0.694 ]
*/

```

__Notes__:
*	Currently, for more than `2` dimensions, the function outputs a __generic__ `array` and ignores any specified `dtype`.

	``` javascript
	var out = random( [2,1,3], {
		'dtype': 'float32'
	});
	// returns [ [ [~0.144,~0.161,~0.061] ], [ [~0.695,~1.225,~0.760] ] ]

	```

## Examples

``` javascript
var random = require( 'distributions-erlang-random' ),
	out;

// Set seed
random.seed = 23;

// Plain arrays...

// 1x10:
out = random( 10 );

// 2x1x3:
out = random( [2,1,3] );

// 5x5x5:
out = random( [5,5,5] );

// Typed arrays...
out = random( 10, {
	'dtype': 'float32'
});

// Matrices...
out = random( [3,2], {
	'dtype': 'float64'
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/distributions-erlang-random.svg
[npm-url]: https://npmjs.org/package/distributions-erlang-random

[travis-image]: http://img.shields.io/travis/distributions-io/erlang-random/master.svg
[travis-url]: https://travis-ci.org/distributions-io/erlang-random

[codecov-image]: https://img.shields.io/codecov/c/github/distributions-io/erlang-random/master.svg
[codecov-url]: https://codecov.io/github/distributions-io/erlang-random?branch=master

[dependencies-image]: http://img.shields.io/david/distributions-io/erlang-random.svg
[dependencies-url]: https://david-dm.org/distributions-io/erlang-random

[dev-dependencies-image]: http://img.shields.io/david/dev/distributions-io/erlang-random.svg
[dev-dependencies-url]: https://david-dm.org/dev/distributions-io/erlang-random

[github-issues-image]: http://img.shields.io/github/issues/distributions-io/erlang-random.svg
[github-issues-url]: https://github.com/distributions-io/erlang-random/issues
