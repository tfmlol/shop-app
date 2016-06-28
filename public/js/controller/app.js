// our controllers go here

var shopApp = angular.module('shopApp', ['ngRoute', 'ngResource', 'angularPayments']);

// you need to generate your own test Publishable keys from Stripe
// stripe.com

shopApp.config(function() {
    window.Stripe.setPublishableKey('<insert_your_key_here>');
});


shopApp.controller('shopHomeController', function($routeParams, DataService){
	// constants
	// $scope.headerSrc = 'templates/header.html';

	var self = this;

	self.headerSrc = 'templates/header.html';

	self.products = DataService.products;

	self.cart = DataService.cart;

	// TODO: uncomment these following lines fetch product data from server
	
	var allProducts = self.products;

	// TODO: Define the controller function, getCategory that returns all products in a particular category
	self.getCategory = function(category_name){
		//temp variable to store matching results
		var filteredProducts = [];
		
		if(!category_name){
			filteredProducts = allProducts;
		} else {
			for(var i = 0; i < allProducts.length;i++) {
					//TODO: what if products have more than 1 category??????
				if(allProducts[i].categories[0] === category_name) {
					filteredProducts.push(allProducts[i]);
				}
			}
		}
		//set the shown products to the filtered ones
		self.products = filteredProducts;			
		
	}

});


shopApp.controller('shopProductDetailsController', function($routeParams, DataService){

	var self = this;
	self.currentProduct = null;
	self.products = DataService.products;

	// TODO: Define the controller function, getProduct that returns a specific product object for an id
	self.getProduct = function(id){
		//loop through products and find matching id! same as category function
		for (var i =0; i < self.products.length; i++){
			console.log(self.products[i].id);
			if (self.products[i].id == id){
				self.currentProduct = self.products[i];
			}
		}

	};

	self.currentProduct = self.products[$routeParams.id];

});

shopApp.controller('shopCartController', function(DataService){

	var self = this;

	self.cart = DataService.cart;

	self.products = DataService.products;

	function getCartProducts(){
		p = []
		console.log('list of cart products....');
		console.log(self.cart.items);

		for (var i=0; i < self.cart.items.length; i++){
			var item = self.cart.items[i];

			console.log(item.product_id);
			product = self.products[item.product_id];
			p.push[product];
		}
		console.log(p)
		return p;
	}

	self.cartProducts = getCartProducts();
	
});

shopApp.controller('shopCheckoutController', function($scope, DataService){

	$scope.products = DataService.products;
	$scope.cart = DataService.cart;

	$scope.stripeCallback = function (code, result) {
    if (result.error) {
	        window.alert('it failed! error: ' + result.error.message);
	    } else {
	        window.alert('success! token: ' + result.id);
	    }
	};
});

