angular.module('chatApp')
.component('authLogin', {
    template: `
        <div class="h-full flex items-center justify-center p-6">
            <div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left Side - Login Form -->
                <div class="card-modern p-8 lg:p-12">
                    <div class="text-center mb-8">
                        <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-500/25">
                            <i class="fas fa-user-circle text-white text-2xl"></i>
                        </div>
                        <h2 class="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                        <p class="text-slate-400">Sign in to your FlowChat account</p>
                    </div>
                    
                    <form ng-submit="$ctrl.login()" class="space-y-6">
                        <div>
                            <label class="block text-white text-sm font-medium mb-2">Email or Username</label>
                            <input type="text" 
                                   ng-model="$ctrl.credentials.username"
                                   class="input-modern w-full"
                                   placeholder="Enter your email or username"
                                   required>
                        </div>
                        
                        <div>
                            <label class="block text-white text-sm font-medium mb-2">Password</label>
                            <div class="relative">
                                <input ng-type="$ctrl.showPassword ? 'text' : 'password'" 
                                       ng-model="$ctrl.credentials.password"
                                       class="input-modern w-full pr-12"
                                       placeholder="Enter your password"
                                       required>
                                <button type="button" 
                                        ng-click="$ctrl.togglePassword()"
                                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
                                    <i class="fas" ng-class="$ctrl.showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <label class="flex items-center text-slate-400 cursor-pointer">
                                <input type="checkbox" 
                                       ng-model="$ctrl.rememberMe"
                                       class="mr-2 rounded bg-slate-800 border-slate-600 text-violet-500 focus:ring-violet-500">
                                <span class="text-sm">Remember me</span>
                            </label>
                            <a href="#" class="text-violet-400 hover:text-violet-300 text-sm transition-colors">
                                Forgot password?
                            </a>
                        </div>
                        
                        <button type="submit" 
                                ng-disabled="$ctrl.isLoading"
                                class="btn-primary w-full">
                            <span ng-if="!$ctrl.isLoading">
                                <i class="fas fa-sign-in-alt mr-2"></i>Sign In
                            </span>
                            <span ng-if="$ctrl.isLoading" class="flex items-center justify-center">
                                <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                Signing in...
                            </span>
                        </button>
                    </form>
                    
                    <div class="mt-8">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-slate-700"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-2 bg-slate-900 text-slate-400">Or continue with</span>
                            </div>
                        </div>
                        
                        <div class="mt-6 grid grid-cols-2 gap-3">
                            <button class="btn-secondary flex items-center justify-center">
                                <i class="fab fa-google text-red-400 mr-2"></i>
                                Google
                            </button>
                            <button class="btn-secondary flex items-center justify-center">
                                <i class="fab fa-github text-white mr-2"></i>
                                GitHub
                            </button>
                        </div>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <span class="text-slate-400">Don't have an account? </span>
                        <a href="#" class="text-violet-400 hover:text-violet-300 font-medium transition-colors">
                            Sign up
                        </a>
                    </div>
                </div>
                
                <!-- Right Side - System Status -->
                <div class="space-y-6">
                    <div class="card-modern p-8">
                        <div class="flex items-center space-x-3 mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                                <i class="fas fa-server text-white"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-bold text-lg">System Status</h3>
                                <p class="text-emerald-400 text-sm">All Systems Operational</p>
                            </div>
                        </div>
                        
                        <div class="space-y-4">
                            <div ng-repeat="service in $ctrl.services" 
                                 class="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 rounded-lg flex items-center justify-center"
                                         ng-class="service.bgClass">
                                        <i class="fas text-white" ng-class="service.icon"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-white font-medium">{{service.name}}</h4>
                                        <p class="text-slate-400 text-sm">{{service.description}}</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="flex items-center space-x-2 mb-1">
                                        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                        <span class="text-emerald-400 text-sm font-medium">Online</span>
                                    </div>
                                    <p class="text-slate-400 text-xs">{{service.uptime}} uptime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card-modern p-8">
                        <h3 class="text-white font-bold text-lg mb-4">Performance Metrics</h3>
                        <div class="grid grid-cols-2 gap-6">
                            <div class="text-center">
                                <div class="text-2xl font-bold text-white">{{$ctrl.metrics.responseTime}}ms</div>
                                <div class="text-slate-400 text-sm">Response Time</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-white">{{$ctrl.metrics.uptime}}%</div>
                                <div class="text-slate-400 text-sm">Uptime</div>
                            </div>
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
        
        ctrl.services = [
            {
                name: 'User Service',
                description: 'Authentication & profiles',
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                uptime: '99.9%'
            },
            {
                name: 'Chat Service',
                description: 'Real-time messaging',
                icon: 'fa-comments',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                uptime: '99.8%'
            },
            {
                name: 'Analytics Service',
                description: 'Data & insights',
                icon: 'fa-chart-line',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                uptime: '99.7%'
            }
        ];
        
        ctrl.metrics = {
            responseTime: 142,
            uptime: 99.9
        };
        
        ctrl.togglePassword = function() {
            ctrl.showPassword = !ctrl.showPassword;
        };
        
        ctrl.login = function() {
            if (!ctrl.credentials.username || !ctrl.credentials.password) {
                return;
            }
            
            ctrl.isLoading = true;
            
            $timeout(() => {
                ctrl.isLoading = false;
                $location.path('/');
            }, 2000);
        };
    }
});