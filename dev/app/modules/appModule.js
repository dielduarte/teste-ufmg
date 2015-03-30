/**
	*
	* AppModule
	*
	* 
	* Set module app
	*
	* @dependency - ngRoute
	* @dependency - angularUtils.directives.dirPagination
	*
**/
(function() {
    'use strict';

    angular
        .module('app', [ 'ngRoute'
        								,'angularUtils.directives.dirPagination']);
})();