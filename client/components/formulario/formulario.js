angular
  .module('app')
  .component('formulariocomponent', {
    templateUrl: '../html/formulario/formulario.html',
    controller: FormularioController
  });



function FormularioController($scope,$location){

	console.log('URL',$location.url())


	

}
