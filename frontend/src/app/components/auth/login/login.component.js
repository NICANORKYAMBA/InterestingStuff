angular.module('chatApp')
.component('authLogin', {
    template: `
        <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            <!-- Animated Background -->
            <div class="absolute inset-0">
                <div class="absolute top-20 right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
            </div>
            
            <div class="relative z-10 flex items-center justify-center min-h-screen p-6">
                <div class="w-full max-w-md">
                    <!-- Back to Landing -->
                    <div class="mb-6">
                        <a href="#!/" class="inline-flex items-center text-slate-400 hover:text-white transition-colors group">
                            <i class="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>Back to Home
                        </a>
                    </div>

                    <!-- Login Form -->
                    <div class="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                        <div class="text-center mb-8">
                            <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-500/25 animate-float">
                                <i class="fas fa-sign-in-alt text-white text-xl"></i>
                            </div>
                            <h2 class="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                            <p class="text-slate-400">Sign in to continue to FlowChat</p>
                        </div>
                    
                        <form ng-submit="$ctrl.login()" class="space-y-5">
                            <div>
                                <label class="block text-slate-300 text-sm font-medium mb-2">Email or Username</label>
                                <input type="text" 
                                       ng-model="$ctrl.credentials.username"
                                       class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                       placeholder="Enter your email or username"
                                       required>
                            </div>
                            
                            <div>
                                <label class="block text-slate-300 text-sm font-medium mb-2">Password</label>
                                <div class="relative">
                                    <input ng-type="$ctrl.showPassword ? 'text' : 'password'" 
                                           ng-model="$ctrl.credentials.password"
                                           class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 pr-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
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
                                           class="mr-2 w-4 h-4 rounded bg-slate-800 border-slate-600 text-violet-500 focus:ring-violet-500">
                                    <span class="text-sm">Remember me</span>
                                </label>
                                <a href="#" class="text-violet-400 hover:text-violet-300 text-sm transition-colors underline">
                                    Forgot password?
                                </a>
                            </div>
                            
                            <button type="submit" 
                                    ng-disabled="$ctrl.isLoading"
                                    class="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed">
                                <span ng-if="!$ctrl.isLoading">
                                    <i class="fas fa-sign-in-alt mr-2"></i>Sign In
                                </span>
                                <span ng-if="$ctrl.isLoading" class="flex items-center justify-center">
                                    <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                    Signing in...
                                </span>
                            </button>
                        </form>
                    
                        <div class="mt-6">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-slate-700/50"></div>
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="px-3 bg-slate-900/80 text-slate-400">Or continue with</span>
                                </div>
                            </div>
                            
                            <div class="mt-6 grid grid-cols-2 gap-3">
                                <button class="flex items-center justify-center px-4 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-slate-500 rounded-xl transition-all duration-200">
                                    <i class="fab fa-google text-red-400 mr-2"></i>
                                    <span class="text-white font-medium">Google</span>
                                </button>
                                <button class="flex items-center justify-center px-4 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-slate-500 rounded-xl transition-all duration-200">
                                    <i class="fab fa-github text-white mr-2"></i>
                                    <span class="text-white font-medium">GitHub</span>
                                </button>
                            </div>
                        </div>
                        
                        <div class="mt-8 text-center">
                            <span class="text-slate-400">Don't have an account? </span>
                            <a href="#!/register" class="text-violet-400 hover:text-violet-300 font-medium transition-colors underline">
                                Sign up
                            </a>
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
                
                // Simulate role-based redirect
                const userRole = $rootScope.userRole || 'member';
                
                if (userRole === 'admin') {
                    $location.path('/admin');
                } else if (userRole === 'manager') {
                    $location.path('/analytics');
                } else {
                    $location.path('/home');
                }
            }, 2000);
        };
    }
});