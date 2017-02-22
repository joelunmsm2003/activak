angular
  .module('app')
  .component('llamadascomponent', {
    templateUrl: '/calidad/html/llamadas/llamadas.html',
    controller: LlamadasController

  });





function LlamadasController($scope,$location,$http){


        // Saca de la URL solo el DNI

        url = $location.url()

        console.log('url.....',url.split('&')[0].split('=')[1])

        dni = url.split('&')[0].split('=')[1]




        var formData = { dni: dni };

        var postData = 'myData='+JSON.stringify(formData);


        $http({

        method : 'POST',
        url : '/gestion.php',
        data: postData,
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

        }).success(function(res){

            console.log('user....',res);

            console.log('id....',res.id)

            $scope.agente = res


                var formData = { id: res.id };

                var postData = 'myData='+JSON.stringify(formData);

                $http({

                method : 'POST',
                url : '/llamadas.php',
                data: postData,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

                }).success(function(res){

                console.log('llamadas..heheh..',res);

                $scope.llamadas = res


                })


        })


}