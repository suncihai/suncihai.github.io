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

    	 // about-us part
    	 .state('about-us', {
    	 	url: '/about-us',
    	 	templateUrl: 'src/templates/aboutus.html'
    	 })

    	 // news part
    	 .state('news',{
    	 	url: '/news',
    	 	templateUrl: 'src/templates/news.html'
    	 })

         // products part
         .state('products',{
            url: '/products',
            templateUrl: 'src/templates/products.html'
         })
         
         //jobs part
         .state('jobs',{
            url: '/jobs',
            templateUrl: 'src/templates/jobs.html'
         })
        
         // contact part
         .state('contact',{
            url: '/contact',
            templateUrl: 'src/templates/contact.html'
         });
    }
})();
