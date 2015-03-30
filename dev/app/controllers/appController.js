/**
	*
	* AppController
	* 
	* @dependency - apiFactory
	* @dependency - loadFactory
	*
**/

(function(){
	'use strict'
	angular
		.module('app')
		.controller('appController', appController);

		//inject dependency	
		appController.$inject = [	'apiFactory'
														, 'loadFactory'];

		/**
			*
			* appController
			*
			* 
			* @dependency - apiFactory
			* @dependency - loadFactory
			*
		**/

		function appController(apiFactory, loadFactory) {
			var vm = this;

			//Set public variables 

				vm.name = ''
			;	vm.username = ''
			; vm.phone = ''
			; vm.email = ''
			; vm.site = ''
			; vm.company = ''
			; vm.address = ''
			; vm.next = next
			; vm.prev = prev
			; vm.showNext = 1
			; vm.seePosts = 0
			; vm.posts = ''
			; vm.steps = 0
			;	vm.currentUserId = 1
			;

			/*
			|
			| @AUTHOR Magdiel Duarte
			| @DATE 29/03/2015
			|	
			| function getPosts()
			| This function get all posts the current user
			|
			*/

			function getPosts(id) {
				apiFactory.getPosts(id).
				success(function(data) {
					vm.posts = data;
				}).
				error(function(data) {
					console.log(data);
				});		
			};
			
			/*
			|
			| @AUTHOR Magdiel Duarte
			| @DATE 29/03/2015
			|	
			| function getUser()
			| This function get all informations the current user
			|
			*/

			function getUser(id) {
				//load init
				loadFactory.loadBodyStart();
				
				//get informations the current user
				apiFactory.getUsers(id).
					success(function(data) {

						//hide next link if id == 10
						if(id == 10)
							vm.showNext = 0;
						else
							vm.showNext = 1;
						
						// if data is not empty
						// set two way databind
						if(data.length > 0) {
								vm.name = data[0].name	
							; vm.username = '@' + data[0].username
							; vm.phone = data[0].phone
							; vm.email = data[0].email
							; vm.site = data[0].website
							; vm.company = data[0].company.name
							; vm.address = data[0].address.street + ', '
													 + data[0].address.suite
							; vm.city  = data[0].address.city + ' - '
												 + data[0].address.zipcode
							; vm.currentUserId = data[0].id
							;

							//get all posts the current user
							getPosts(vm.currentUserId);

							//load stop
							loadFactory.loadBodyStop();
						}

					}).
					error(function(data) {
						console.log(data);
					});
			};

			//call getUser function in firts instance app controller
			getUser(vm.currentUserId);

			/*
			|
			| @AUTHOR Magdiel Duarte
			| @DATE 29/03/2015
			|	
			| function next()
			| This function call getUser function for get next user
			|
			*/	

			function next(){
				getUser(vm.currentUserId + 1);
			};

			/*
			|
			| @AUTHOR Magdiel Duarte
			| @DATE 29/03/2015
			|	
			| function next()
			| This function call getUser function for get previous user
			|
			*/	

			function prev() {
				getUser(vm.currentUserId - 1);
			};




		}; // end appController

})();