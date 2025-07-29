angular.module('chatApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<chat-room></chat-room>'
        })
        .when('/login', {
            template: '<auth-login></auth-login>'
        })
        .when('/analytics', {
            template: '<analytics-dashboard></analytics-dashboard>'
        })
        .otherwise({
            redirectTo: '/'
        });
}])
.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.apiUrl = {
        chat: 'http://localhost:3001',
        user: 'http://localhost:3002',
        analytics: 'http://localhost:3003'
    };
    
    $rootScope.$location = $location;
    
    // Dynamic copyright year
    $rootScope.currentYear = new Date().getFullYear();
    
    // Global loading state
    $rootScope.isLoading = false;
    
    // Global user state
    $rootScope.currentUser = {
        username: 'Demo User',
        avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=8b5cf6&color=fff'
    };
}]);