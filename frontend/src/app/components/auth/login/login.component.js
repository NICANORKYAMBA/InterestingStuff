angular.module('chatApp')
.component('authLogin', {
    template: `
        <div class="max-w-md mx-auto">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            
            <form ng-submit="$ctrl.login()">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input type="text" 
                           ng-model="$ctrl.credentials.username"
                           class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                           required>
                </div>
                
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input type="password" 
                           ng-model="$ctrl.credentials.password"
                           class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                           required>
                </div>
                
                <button type="submit" 
                        class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Login
                </button>
            </form>
            
            <div class="mt-4 text-center">
                <span class="text-gray-600">Service Status:</span>
                <span ng-class="$ctrl.serviceStatus ? 'text-green-600' : 'text-red-600'">
                    {{$ctrl.serviceStatus ? 'Connected' : 'Disconnected'}}
                </span>
            </div>
        </div>
    `,
    controller: function() {
        this.credentials = {
            username: '',
            password: ''
        };
        
        this.serviceStatus = false;
        
        this.login = function() {
            console.log('Login attempt:', this.credentials.username);
            // Will connect to user-service later
        };
    }
});