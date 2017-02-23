angular
  .module('app')
  .component('homecomponent', {
    templateUrl: '/calidad/html/home/home.html',
    controller: HomeController

  });





function HomeController($scope,$location,$http){


        console.log('Tipi...')

		url = $location.url()

        console.log('url.....',url.split('&')[0].split('=')[1])

		dni = url.split('&')[0].split('=')[1]

        $scope.base = url.split('&')[1].split('=')[1]




        var formData = { dni: dni };

        var postData = 'myData='+JSON.stringify(formData);


        $http({

        method : 'POST',
        url : host+'/gestion.php',
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
        url : host+'/base.php',
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
                url : host+'/llamadas.php',
                data: postData,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

                }).success(function(res){

                    $scope.registros = res

                    console.log('dnis.....',$scope.registros)

                })


        }

        

        $scope.go=function(data){

            console.log('ererer...',data)

               $('#myModal').modal('hide');

               

               
            window.location.href='http://localhost/calidad/#/home?dni='+data.cliente+'&'+'base='+data.id_orig_base

            location.reload()
        }



}
