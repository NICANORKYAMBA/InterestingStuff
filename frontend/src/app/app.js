angular.module('chatApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<landing-page></landing-page>'
        })
        .when('/home', {
            template: '<home-page></home-page>'
        })
        .when('/chat', {
            template: '<chat-room></chat-room>'
        })
        .when('/login', {
            template: '<auth-login></auth-login>'
        })
        .when('/register', {
            template: '<auth-register></auth-register>'
        })
        .when('/analytics', {
            template: '<analytics-dashboard></analytics-dashboard>'
        })
        .when('/profile', {
            template: '<user-profile></user-profile>'
        })
        .when('/status', {
            template: '<system-status></system-status>'
        })
        .when('/media', {
            template: '<media-manager></media-manager>'
        })
        .when('/admin', {
            template: '<admin-panel></admin-panel>'
        })
        .when('/docs', {
            template: '<api-docs></api-docs>'
        })
        .when('/monitoring', {
            template: '<monitoring-dashboard></monitoring-dashboard>'
        })
        .when('/security', {
            template: '<security-center></security-center>'
        })
        .when('/deployment', {
            template: '<deployment-pipeline></deployment-pipeline>'
        })
        .when('/database', {
            template: '<database-manager></database-manager>'
        })
        .when('/notifications', {
            template: '<notification-center></notification-center>'
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
    
    // Navigation state
    $rootScope.showAdminMenu = false;
    $rootScope.showQuickMenu = false;
}]);