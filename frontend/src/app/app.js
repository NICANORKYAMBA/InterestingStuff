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
.run(['$rootScope', function($rootScope) {
    $rootScope.apiUrl = {
        chat: 'http://localhost:3001',
        user: 'http://localhost:3002',
        analytics: 'http://localhost:3003'
    };
}]);