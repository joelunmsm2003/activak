angular
  .module('app')
  .component('formulariocomponent', {
    templateUrl: '/calidad/html/formulario/formulario.html',
    controller: FormularioController
  });



function FormularioController($scope,$location,$http){



		// Saca de la URL solo el DNI


		url = $location.url()

        console.log('url.....',url.split('&')[0].split('=')[1])

		dni = url.split('&')[0].split('=')[1]




        var formData = { dni: dni };

        var postData = 'myData='+JSON.stringify(formData);


        $http({

        method : 'POST',
        url : host+'/gestion.php',
        data: postData,
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

        }).success(function(res){

            console.log('Cliente',res);

            $scope.agente = res[0]



        })






	

}
