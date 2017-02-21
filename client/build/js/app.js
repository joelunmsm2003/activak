



function UserService ($http,$q,$log,$localStorage) {  
    return {
        ingresar: ingresar,
        alumnos: alumnos
    }








}





angular

.module('app', ['ngSanitize','angular-input-stars','rzModule','ui.router','ngStorage','ui.bootstrap','ngAnimate','ngTouch','ngScrollTo','flow','xeditable','ngResource','gettext','ngMap','ngLocale','tmh.dynamicLocale','wyvernzora.un-svg'])
      
.config(routesConfig)

// Aqui se llamn los servicios

.service('UserService', UserService)

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {

	// Aqui se especifica las rutas

	$stateProvider.state('home',{

			url : '/home',
			template: "<homecomponent></homecomponent>",

		});


	host = 'http://localhost'

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

	

angular
  .module('app')
  .component('foootercomponent', {
    templateUrl: '../html/footer/footer.html',
    controller: FooterController
  });



function FooterController($scope,$location){


}

angular
  .module('app')
  .component('formulariocomponent', {
    templateUrl: '../html/formulario/formulario.html',
    controller: FormularioController
  });



function FormularioController($scope,$location,$http){



		// Saca de la URL solo el DNI

		url = $location.url()

		dni = url.split('=')

		var formData = { dni: dni };

		var postData = 'myData='+JSON.stringify(formData);

		$http({

		method : 'POST',
		url : host+'/gestion.php',
		data: postData,
		headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

		}).success(function(res){
		console.log(res);

		}).error(function(error){
		console.log(error);
		});





	

}

angular
  .module('app')
  .component('headercomponent', {
    templateUrl: '../html/header/header.html',
    controller: HeaderController
  });



function HeaderController($scope){


}

angular
  .module('app')
  .component('homecomponent', {
    templateUrl: '../html/home/home.html',
    controller: HomeController

  });





function HomeController($scope,$location,$http){




}
