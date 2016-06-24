angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('cadastroGeral', {
      url: '/page2',
      templateUrl: 'templates/cadastroGeral.html',
      controller: 'cadastroGeralCtrl'
    })
        
      
    
      
        
    .state('configurações', {
      url: '/page9',
      templateUrl: 'templates/configurações.html',
      controller: 'configuraçõEsCtrl'
    })
        
      
    
      
        
    .state('perfilSurdo', {
      url: '/page3',
      templateUrl: 'templates/perfilSurdo.html',
      controller: 'perfilSurdoCtrl'
    })
        
      
    
      
        
    .state('perfilOuvinte', {
      url: '/page8',
      templateUrl: 'templates/perfilOuvinte.html',
      controller: 'perfilOuvinteCtrl'
    })
        
      
    
      
        
    .state('telaInicialDoSurdo', {
      url: '/page4',
      templateUrl: 'templates/telaInicialDoSurdo.html',
      controller: 'telaInicialDoSurdoCtrl'
    })
        
      
    
      
        
    .state('telaInicialDoOuvinte', {
      url: '/page5',
      templateUrl: 'templates/telaInicialDoOuvinte.html',
      controller: 'telaInicialDoOuvinteCtrl'
    })
        
      
    
    .state('descriçãoDeNecessidades-Surdo', {
      url: '/page6',
      templateUrl: 'templates/descriçãoDeNecessidades-Surdo.html',
      controller: 'descriçãODeNecessidades-SurdoCtrl'
    })
    
    
    
    .state('listaDeSurdos', {
      url: '/page10',
      templateUrl: 'templates/listaDeSurdos.html',
      controller: 'listaDeSurdosCtrl'
    })
        
      
        
    .state('telaDiponibilidade-Ouvinte', {
      url: '/page7',
      templateUrl: 'templates/telaDiponibilidade-Ouvinte.html',
      controller: 'telaDiponibilidade-OuvinteCtrl'
    })
    
    
     .state('notificações', {
      url: '/page11',
      templateUrl: 'templates/notificações.html',
      controller: 'telaDiponibilidade-OuvinteCtrl'
    })
    
    .state('video', {
      url: '/page12',
      templateUrl: 'templates/video.html',
      controller: 'telaDiponibilidade-OuvinteCtrl'
    })
        
      
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});