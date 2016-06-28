// router code lives here

/* ShopApp has three main routes: 
1. / (root) - for displaying the home page
2. /product/:id - for displaying individual product details
3. /cart - for displaying products in the users cart
4. /checkout 
*/

shopApp.config(function ($routeProvider) {
  // TODO: define routes

  $routeProvider
  .when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'shopHomeController'
	})
  .when('/products/:id', {
  		templateUrl: 'templates/product.html',
  		controller: 'shopProductDetailsController'
  	})
  .when('/cart', {
      templateUrl: 'templates/cart.html',
      controller: 'shopCartController'
    })
  .when('/checkout', {
      templateUrl: 'templates/checkout.html',
      controller: 'shopCheckoutController'
    })
  // leave the cart and checkout as TODOs for now
  .otherwise({
		redirectTo: '/home'
	});

});