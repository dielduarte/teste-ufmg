/**
	*
	* apiFactory
	*
	* 
	* Set apiFactory
	*
	* @dependency - $http
	*
**/

(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('apiFactory', apiFactory);

		//inject dependencies
		apiFactory.$inject = ['$http'];
					
		/*
		|
		| @AUTHOR Magdiel Duarte
		| @DATE 29/03/2015
		|	
		| function apiFactory()
		|
		*/

		function apiFactory($http){

			var	BASE_API = 'http://jsonplaceholder.typicode.com/'
			,	api = {}  		  	
			;

			/*
			|
			| @AUTHOR Magdiel Duarte
			| @DATE 29/03/2015
			|	
			| function getUsers
			| this function return http.get instance for get user
			|	@PARAM - userID - user id 
			|
			*/		

			api.getUsers = function(userId) {
				return $http.get(BASE_API + 'users?id=' + userId);
			};

			/*
			|
			| @AUTHOR Magdiel Duarte
			| @DATE 29/03/2015
			|	
			| function getUsers
			| this function return http.get instance for get posts for the current user
			|	@PARAM - userID - user id 
			|
			*/	
			api.getPosts = function(userId) {
				return $http.get(BASE_API + 'posts?userId=' + userId);
			};

			return api;
		};

})();