angular
  .module('app')
  .component('homecomponent', {
    templateUrl: '/calidad/html/home/home.html',
    controller: HomeController

  });





function HomeController($scope,$location,$http){



		url = $location.url()

        console.log('url.....',url.split('&')[0].split('=')[1])

		dni = url.split('&')[0].split('=')[1]

        $scope.base = url.split('&')[1].split('=')[1]




        var formData = { dni: dni };

        var postData = 'myData='+JSON.stringify(formData);


        $http({

        method : 'POST',
        url : '/gestion.php',
        data: postData,
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

        }).success(function(res){

            $scope.agente = res

            console.log('Home',$scope.agente)

        })

        var formData = { base: $scope.base };

        var postData = 'myData='+JSON.stringify(formData);

        $http({

        method : 'POST',
        url : '/base.php',
        data: postData,
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

        }).success(function(res){

            $scope.agentereal = res[0]

            console.log('Sgente real',$scope.agentereal)

        })


        $scope.searchdni =function(data){


                var formData = { dni: data };

                var postData = 'myData='+JSON.stringify(formData);


                $http({

                method : 'POST',
                url : '/dni.php',
                data: postData,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

                }).success(function(res){

                    $scope.registros = res

                    console.log('dnis.....',$scope.registros)

                })


        }

        $scope.go=function(data){

            console.log('pruebas...',data)

               $('#myModal').modal('hide');

            window.location.href='#/home?dni='+data.cliente+'&'+'base='+data.id_orig_base
        }



}
