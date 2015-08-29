'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( dims, dt, k, lambda[, rand] )
*	Creates a matrix of Erlang distributed random variates.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @param {Number} k - shape parameter
* @param {Number} lambda - rate parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Matrix} matrix filled with Erlang random variates
*/
function random( dims, dt, k, lambda, rand ) {
	var out,
		draw,
		i;

	draw = partial( k, lambda, rand );
	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
