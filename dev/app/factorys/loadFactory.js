/**
	*
	* loadFactory.js
	*
	* @author Diel Duarte
	* 
	* this file contens loadFactory
	*
	* @notdependency
	*
**/
(function(){
	'use strict';

	angular
		.module('app')
		.factory('loadFactory', loadFactory);

		/**
			*
			* loadFactory
			*
			* @author Diel Duarte
			* 
			*
		**/

		function loadFactory() {
			return {
					start: start
				,	stop: stop
				,	loadBodyStart: loadBodyStart
				, loadBodyStop: loadBodyStop
			};

			var spinner;

			/**
				*
				* function start()
				*
				* @author Diel Duarte
				* 
				*	start spinner js
				*
				*
			**/

			function start(selector) {
				spinner = new Spinner().spin(document.querySelector(selector));
			}

			/**
				*
				* function stop()
				*
				* @author Diel Duarte
				* 
				*	stop spinner js
				*
				*
			**/

			function stop() {
				spinner.stop();
			}

			/**
				*
				* function loadBodyStart()
				*
				* @author Diel Duarte
				* 
				*	init load in body
				*
				*
			**/

			function loadBodyStart() {
				// pego o elemento load
				var load = document.getElementById('load');
				
				//adiciono load-block para a section load
				load.classList.add('load-block');
				
				//inicio o load
				start('#load');
			};


			/**
				*
				* function loadBodyStop()
				*
				* @author Diel Duarte
				* 
				*	stop load in body
				*
				*
			**/

			function loadBodyStop() {
				//fecho o load
				stop();
				// pego o load
				var load = document.getElementById('load');
				//retiro o elemento load
				load.classList.remove('load-block');
			};

		}; // end loadFactory

})();  