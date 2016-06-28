// TODO: create a data service that provides a store and a shopping cart
// that will be shared with all the views

shopApp.factory('DataService', function($resource){

	// your code

	var products = $resource('/products').query();

	var cart = new Cart("AngularStore");

	return {
		products: products,
		cart: cart
	};


});

