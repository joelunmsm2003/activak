angular
  .module('app')
  .component('tipificacioncomponent', {
    templateUrl: '../html/tipificacion/tipificacion.html',
    controller: TipificacionController

  });





function TipificacionController($scope,$location,$http){


          // Saca de la URL solo el DNI

    url = $location.url()

    $scope.base = url.split('&')[1].split('=')[1]

    console.log('base..',$scope.base)



    $scope.tipifica =function(tipo,data,base){

      console.log('tipifica..',tipo,data)

      $scope.tip = {}

      if (tipo=='contacto'){

        $scope.tip['contacto'] = data
      } 

      if (tipo=='accion'){

        $scope.tip['accion'] = data
      } 

      if (tipo=='estado'){

        $scope.tip['estado'] = data
      } 

      console.log($scope.tip)

 
            var formData = { tipifica: $scope.tip ,base:base};

            var postData = 'myData='+JSON.stringify(formData);

            $http({

            method : 'POST',
            url : '/tipifica.php',
            data: postData,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

            }).success(function(res){

            

            })


    }


    $scope.setobservacion = function(data){


      console.log('obs',data)

            var formData = { observacion: data ,base:$scope.base};

            var postData = 'myData='+JSON.stringify(formData);

            $http({

            method : 'POST',
            url : '/observacion.php',
            data: postData,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

            }).success(function(res){

            

            })



    }

    




          $http.get(host+"/contacto.php/").success(function(data) {

            console.log('contacto',data)

            $scope.contacto = data

          });



        $scope.selected =function(data){

          

          $scope.tipifica('accion',data,$scope.base)

            var formData = { accion: data };

                      var postData = 'myData='+JSON.stringify(formData);

                      $http({

                          method : 'POST',
                          url : '/estados.php',
                          data: postData,
                          headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

                      }).success(function(res){

                          $scope.estados = res

                          console.log('accion',res)

                      })


        }


            $scope.traeacciones =function(data){

                      

                      $scope.tipifica('contacto',data,$scope.base)

                      var formData = { contacto: data };

                      var postData = 'myData='+JSON.stringify(formData);

                      $http({

                          method : 'POST',
                          url : '/accion.php',
                          data: postData,
                          headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

                      }).success(function(data){

                          console.log('acciones',data)

                          $scope.listaaciones = data

                      })

            } 

            $scope.setestado = function(data){

              $scope.tipifica('estado',data,$scope.base)
            }

   







}
