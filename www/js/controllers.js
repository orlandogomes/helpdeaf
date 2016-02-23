angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope, $http, getAPIBaseUrl) {

 //Testes Controllers
 

    $scope.enviarForm = function(usuarioForm, usuario) {
    if (usuarioForm.$valid) {
      postarAPI(usuario);
    }
  };
  
      var postarAPI = function(usuario) {
        // Simple GET request example:
        var url = getAPIBaseUrl() + "/inserejson";
        var dados = {
          "dados": usuario,
          "colecao": "Usuarios"
        };
        console.log(dados);
        $http({
          url: url,
          method: 'POST',
          data: dados,
          headers: {
            'content-type': 'application/json'
          }
        });
        $scope.buscaAPI();
      };
    
       
         
          $scope.buscafour = function(param){
            
            //vars da url
            var url = "";
            var key = "";
            var par = window.encodeURIComponent(param);
            //concatenacao da url       
            var url_get = url + key
            //execucao da url
            $http.get(url_get).then(function successCallback(response) {
                console.log(response);
                $scope.result = response.data.response.venues;
                //console.log(response.venues);
              }, function errorCallback(response) {
                alert(JSON.stringify(response));
            });
        };
       
    
    })
   
.controller('cadastroGeralCtrl', function($scope) {


})
   
.controller('configuraçõesCtrl', function($scope) {
    

})
   
.controller('perfilSurdoCtrl', function($scope) {
    
    
})
   
.controller('perfilOuvinteCtrl', function($scope) {

})
   
.controller('telaInicialDoSurdoCtrl', function($scope) {

})
   
.controller('telaInicialDoOuvinteCtrl', function($scope) {

})
   
.controller('descriçãoDeNecessidades-SurdoCtrl', function($scope) {
 
})
   
.controller('telaDiponibilidade-OuvinteCtrl', function($scope, $ionicPopup) {


  $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Ionic Popup',
          template: 'Registro feito com sucesso !'
        });
        confirmPopup.then(function(res) {
          if(res) {
            console.log('You clicked on "OK" button');
          } else {
            console.log('You clicked on "Cancel" button');
          }
        });
      };

})
 