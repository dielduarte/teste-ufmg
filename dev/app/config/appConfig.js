/**
	*
	* appConfig.js
	*
	*
	*	This file contens all config for app
	* routes, httpProviders and others..
	* 
	* @dependency - $routeProvider
	* @dependency - paginationTemplateProvider
	*
**/

(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

		//inject dependencies for config function
		config.$inject = [ '$routeProvider'
											,'paginationTemplateProvider'];
 		
 		//config function 
		function config($routeProvider, paginationTemplateProvider) {

			//Routes config
			$routeProvider.
				when('/', {
					templateUrl: 'views/index.html'
				}).
				otherwise({
	        redirectTo: '/'
	      });

			//Pagination config template path 
	    paginationTemplateProvider.setPath('dirPagination.tpl.html');

		}


})();