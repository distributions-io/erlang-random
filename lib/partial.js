'use strict';

// MODULES //

var prod = require( 'compute-prod' );


// FUNCTIONS //

var ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( k, lambda[, rand] )
*	Partially applies shape parameter `k`
*	and rate parameter `lambda` and returns a function
*	to generate random variables from the Erlang distribution.
*
* @param {Number} k - shape parameter
* @param {Number} lambda - rate parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( k, lambda, rand ) {
	var random;
	if ( rand ) {
		random = rand;
	} else {
		random = Math.random;
	}
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw from a Erlang distribution with shape parameter `k`
	*	and rate parameter `lambda`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var u = new Array( k ),
			uprod,
			val,
			i;

		for ( i = 0; i < k; i++ ) {
			val = rand();
			u[ i ] =  val;
		}
		uprod = prod( u );
		return - (1/lambda) * ln( uprod );
	}; // end FUNCTION draw()
} // end FUNCTION partial()

module.exports = partial;
