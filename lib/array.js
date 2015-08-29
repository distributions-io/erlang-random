'use strict';

// MODULES //

var partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( len, k, lambda [, rand] )
*	Creates an array of Erlang distributed random variates.
*
* @param {Number} len - array length
* @param {Number} k - shape parameter
* @param {Number} lambda - rate parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number[]} array filled with Erlang random variates
*/
function random( len, k, lambda, rand ) {
	var out,
		draw,
		i;

	draw = partial( k, lambda, rand );
	// Ensure fast elements...
	if ( len < 64000 ) {
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = draw();
		}
	} else {
		out = [];
		for ( i = 0; i < len; i++ ) {
			out.push( draw() );
		}
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
