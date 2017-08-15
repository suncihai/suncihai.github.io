(function() {
    'use strict'

    angular.module("huifengmengyeApp")
        .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');

    	 $stateProvider

    	 .state('home', {
    	 	url:'/',
    	 	templateUrl: 'src/templates/home.html'
    	 })

    	 // experience part
    	 .state('about-us', {
    	 	url: '/about-us',
    	 	templateUrl: 'src/templates/aboutus.html'
    	 })

    	 // projects part
    	 .state('news',{
    	 	url: '/news',
    	 	templateUrl: 'src/templates/news.html'
    	 })

         // projects part
         .state('products',{
            url: '/products',
            templateUrl: 'src/templates/products.html'
         })
        
         // contact part
         .state('contact',{
            url: '/contact',
            templateUrl: 'src/templates/contact.html'
         });
    }
})();
