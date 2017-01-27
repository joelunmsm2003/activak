function KineService ($http,$q,$log,$localStorage) {  
    return {
        crear: crear,
        distritos:distritos
    }



    function crear(data){

        console.log('ingresar...',data)

        var defered = $q.defer();
        var promise = defered.promise;

        $http({

        url: host+"kine/",
        data: data,
        method: 'POST'
        }).
        success(function(data) {

        console.log(data)

        $localStorage.token = data.token;

        return promise;

        })

    }


    function distritos() {

            var def = $q.defer();

            $http.get(host+'distritos/').success(function(data) {

                    def.resolve(data);
                })
               
            return def.promise;
        }

    function listar() {

            var def = $q.defer();

            $http.get(host+'kines/').success(function(data) {

                    def.resolve(data);
                })
               
            return def.promise;
        }



}



