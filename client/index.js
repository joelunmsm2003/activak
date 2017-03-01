
angular

.module('app', ['ui.router','ngStorage','ui.bootstrap','gettext'])
      
.config(routesConfig)

// Aqui se llamn los servicios

.service('UserService', UserService)

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {

	// Aqui se especifica las rutas

	$stateProvider.state('home',{

			url : '/home',
			template: "<homecomponent></homecomponent>",

		
		})
		.state('reporte',{
			url : '/reporte',
			template: "<reportecomponent></reportecomponent>",

		})


	host = 'http://localhost/calidad/controllers'

	host_primary = 'http//localhost'

	//$locationProvider.html5Mode(true);

	$httpProvider.defaults.useXDomain = true;
	$httpProvider.defaults.withCredentials = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$httpProvider.defaults.headers.common["Accept"] = "application/json";
	$httpProvider.defaults.headers.common["Content-Type"] = "application/json";


	/*

	$httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
	return {
	    'request': function (config) {
	        config.headers = config.headers || {};
	        if ($localStorage.token) {
	            config.headers.Authorization = 'Bearer ' + $localStorage.token;
	        }
	        return config;
	    },
	    'responseError': function(response) {
	        if(response.status === 401 || response.status === 403) {

	            $location.path('/signin');
	        }
	        return $q.reject(response);
	    }
	};
	}]);
	*/


}

	
