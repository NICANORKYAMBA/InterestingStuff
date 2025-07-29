angular.module('chatApp')
.component('authLogin', {
    template: `
        <div class="min-h-[600px] flex items-center justify-center">
            <div class="glass-card p-8 w-full max-w-md">
                <!-- Header -->
                <div class="text-center mb-8">
                    <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-user-circle text-white text-2xl"></i>
                    </div>
                    <h2 class="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                    <p class="text-white/70">Sign in to your ChatFlow account</p>
                </div>
                
                <!-- Login Form -->
                <form ng-submit="$ctrl.login()" class="space-y-6">
                    <div>
                        <label class="block text-white/80 text-sm font-semibold mb-2">
                            <i class="fas fa-user mr-2"></i>Username
                        </label>
                        <input type="text" 
                               ng-model="$ctrl.credentials.username"
                               class="glass-input w-full"
                               placeholder="Enter your username"
                               required>
                    </div>
                    
                    <div>
                        <label class="block text-white/80 text-sm font-semibold mb-2">
                            <i class="fas fa-lock mr-2"></i>Password
                        </label>
                        <div class="relative">
                            <input ng-type="$ctrl.showPassword ? 'text' : 'password'" 
                                   ng-model="$ctrl.credentials.password"
                                   class="glass-input w-full pr-12"
                                   placeholder="Enter your password"
                                   required>
                            <button type="button" 
                                    ng-click="$ctrl.togglePassword()"
                                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors">
                                <i class="fas" ng-class="$ctrl.showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Remember Me -->
                    <div class="flex items-center justify-between">
                        <label class="flex items-center text-white/80 text-sm">
                            <input type="checkbox" 
                                   ng-model="$ctrl.rememberMe"
                                   class="mr-2 rounded bg-white/10 border-white/20 text-purple-600 focus:ring-purple-500">
                            Remember me
                        </label>
                        <a href="#" class="text-purple-400 hover:text-purple-300 text-sm font-medium">
                            Forgot password?
                        </a>
                    </div>
                    
                    <!-- Login Button -->
                    <button type="submit" 
                            ng-disabled="$ctrl.isLoading"
                            class="btn-primary w-full relative">
                        <span ng-if="!$ctrl.isLoading">
                            <i class="fas fa-sign-in-alt mr-2"></i>Sign In
                        </span>
                        <span ng-if="$ctrl.isLoading" class="flex items-center justify-center">
                            <i class="fas fa-spinner fa-spin mr-2"></i>Signing in...
                        </span>
                    </button>
                </form>
                
                <!-- Divider -->
                <div class="my-6 flex items-center">
                    <div class="flex-1 border-t border-white/20"></div>
                    <span class="px-4 text-white/60 text-sm">or</span>
                    <div class="flex-1 border-t border-white/20"></div>
                </div>
                
                <!-- Social Login -->
                <div class="space-y-3">
                    <button class="btn-secondary w-full">
                        <i class="fab fa-google mr-2"></i>Continue with Google
                    </button>
                    <button class="btn-secondary w-full">
                        <i class="fab fa-github mr-2"></i>Continue with GitHub
                    </button>
                </div>
                
                <!-- Sign Up Link -->
                <div class="mt-6 text-center">
                    <span class="text-white/70">Don't have an account? </span>
                    <a href="#" class="text-purple-400 hover:text-purple-300 font-medium">
                        Sign up here
                    </a>
                </div>
                
                <!-- Service Status -->
                <div class="mt-8 p-4 bg-black/20 rounded-lg border border-white/10">
                    <h4 class="text-white font-semibold mb-3 flex items-center">
                        <i class="fas fa-server mr-2 text-green-400"></i>
                        Service Status
                    </h4>
                    <div class="space-y-2 text-sm">
                        <div class="flex justify-between items-center">
                            <span class="text-white/70">User Service:</span>
                            <span class="flex items-center text-green-400">
                                <div class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                {{$ctrl.serviceStatus.user}}
                            </span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-white/70">Chat Service:</span>
                            <span class="flex items-center text-green-400">
                                <div class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                {{$ctrl.serviceStatus.chat}}
                            </span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-white/70">Analytics Service:</span>
                            <span class="flex items-center text-green-400">
                                <div class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                {{$ctrl.serviceStatus.analytics}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($timeout, $location) {
        const ctrl = this;
        
        ctrl.credentials = {
            username: '',
            password: ''
        };
        
        ctrl.showPassword = false;
        ctrl.rememberMe = false;
        ctrl.isLoading = false;
        
        ctrl.serviceStatus = {
            user: 'Online',
            chat: 'Online',
            analytics: 'Online'
        };
        
        ctrl.togglePassword = function() {
            ctrl.showPassword = !ctrl.showPassword;
        };
        
        ctrl.login = function() {
            if (!ctrl.credentials.username || !ctrl.credentials.password) {
                return;
            }
            
            ctrl.isLoading = true;
            
            // Simulate API call
            $timeout(() => {
                ctrl.isLoading = false;
                console.log('Login attempt:', ctrl.credentials.username);
                
                // Simulate successful login
                if (ctrl.credentials.username && ctrl.credentials.password) {
                    // Redirect to chat
                    $location.path('/');
                }
            }, 2000);
        };
        
        // Simulate service health checks
        ctrl.checkServiceHealth = function() {
            // This would normally make HTTP requests to each service
            console.log('Checking service health...');
        };
        
        // Initialize
        ctrl.checkServiceHealth();
    }
});