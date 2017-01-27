angular
  .module('app')
  .component('newusercomponent', {
    templateUrl: '../html/newuser/newuser.html',
    controller: NewuserController
  });



function NewuserController($scope,KineService){


	

	$scope.newuser = function(data){

		console.log('gfgfgf',data)

	}

	$scope.createuser = function(data){

		console.log(data)

		KineService.crear(data)

	}



	KineService.distritos().then(function(data) {

           $scope.distritos = data
        
    })

    KineService.listar().then(function(data) {

           console.log(data)
        
    })

}
