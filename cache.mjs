function SaferCache() {

	var cache = {};

	// Reveal the public API.
	return({
		get: get,
		has: has,
		remove: remove,
		set: set
	});


	// ---
	// PUBLIC METHODS.
	// ---


	function get( key ) {

		if ( has( key ) ) {

			return( cache[ key ] );

		}

	}


	function has( key ) {

		return( cache.hasOwnProperty( key ) );

	}


	function remove( key ) {

		return( delete( cache[ key ] ), this );

	}


	function set( key, value ) {

		return( cache[ key ] = value, this );

	}

}


var saferCache = new SaferCache()
	.set( "foo", "Bar" )
	.set( "hello", "world" )
	.set( "beep", "boop" )
;

console.log( "## Safer Cache ##" );
console.log( saferCache.has( "foo" ) );
console.log( saferCache.has( "meep" ) );
console.log( saferCache.has( "valueOf" ) );
console.log( saferCache.has( "__proto__" ) );