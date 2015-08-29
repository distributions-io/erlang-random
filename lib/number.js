'use strict';

// MODULES //

var prod = require( 'compute-prod' );


// FUNCTIONS //

var ln = Math.log;


// GENERATE ERLANG RANDOM VARIATES //

/**
* FUNCTION random( k, lambda[, rand] )
*	Generates a random draw from a Erlang distribution with shape parameter `k`
*	and rate parameter `lambda`.
*
* @param {Number} k - shape parameter
* @param {Number} lambda - rate parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( k, lambda, rand ) {
	var u = new Array( k ),
		uprod,
		crand,
		val,
		i;

	crand = rand ? rand : Math.random;
	for ( i = 0; i < k; i++ ) {
		val = crand();
		u[ i ] = val;
	}
	uprod = prod( u );
	return - (1/lambda) * ln( uprod );
}

module.exports = random;
