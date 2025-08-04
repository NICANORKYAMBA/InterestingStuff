angular.module('chatApp')
.component('authLogin', {
    template: `
        <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            <!-- Animated Background -->
            <div class="absolute inset-0">
                <div class="absolute top-20 right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
            </div>
            
            <!-- Back Button -->
            <div class="absolute top-6 left-6 z-20">
                <a href="#!/" class="flex items-center justify-center w-12 h-12 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300 group">
                    <i class="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                </a>
            </div>
            
            <div class="relative z-10 flex items-center justify-center min-h-screen p-4">
                <div class="w-full max-w-lg">
                    <!-- Header -->
                    <div class="text-center mb-8">
                        <div class="w-20 h-20 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-violet-500/50 animate-pulse">
                            <i class="fas fa-comments text-white text-2xl"></i>
                        </div>
                        <h1 class="text-4xl font-bold text-white mb-3">Welcome Back</h1>
                        <p class="text-slate-400 text-lg">Continue your FlowChat journey</p>
                    </div>

                    <!-- Modern Login Card -->
                    <div class="bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl shadow-black/50 hover:shadow-violet-500/20 transition-all duration-500">
                        <form ng-submit="$ctrl.login()" class="space-y-4">
                            <!-- Email/Username -->
                            <div class="relative">
                                <i class="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                                <input type="text" 
                                       ng-model="$ctrl.credentials.username"
                                       class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                       placeholder="Email or username"
                                       required>
                            </div>
                            
                            <!-- Password -->
                            <div class="relative">
                                <i class="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                                <input ng-type="$ctrl.showPassword ? 'text' : 'password'" 
                                       ng-model="$ctrl.credentials.password"
                                       class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl pl-12 pr-12 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                       placeholder="Password"
                                       required>
                                <button type="button" 
                                        ng-click="$ctrl.togglePassword()"
                                        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
                                    <i class="fas" ng-class="$ctrl.showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                                </button>
                            </div>
                            
                            <!-- Options Row -->
                            <div class="flex items-center justify-between text-sm">
                                <label class="flex items-center text-slate-400 cursor-pointer">
                                    <input type="checkbox" ng-model="$ctrl.rememberMe" class="mr-2 w-4 h-4 rounded bg-slate-800 border-slate-600 text-violet-500">
                                    Remember me
                                </label>
                                <a href="#" class="text-violet-400 hover:text-violet-300 transition-colors">Forgot password?</a>
                            </div>
                            
                            <!-- Sign In Button -->
                            <button type="submit" 
                                    ng-disabled="$ctrl.isLoading"
                                    class="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-violet-500/25 disabled:opacity-50">
                                <span ng-if="!$ctrl.isLoading">Sign In</span>
                                <span ng-if="$ctrl.isLoading" class="flex items-center justify-center">
                                    <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                    Signing in...
                                </span>
                            </button>
                        </form>
                        
                        <!-- Divider -->
                        <div class="relative my-6">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-slate-700/50"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-3 bg-slate-900/80 text-slate-400">Or</span>
                            </div>
                        </div>
                        
                        <!-- Social Login -->
                        <div class="grid grid-cols-2 gap-3 mb-6">
                            <button class="flex items-center justify-center py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 rounded-xl transition-all duration-200">
                                <i class="fab fa-google text-red-400 mr-2"></i>
                                <span class="text-white font-medium">Google</span>
                            </button>
                            <button class="flex items-center justify-center py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 rounded-xl transition-all duration-200">
                                <i class="fab fa-github text-white mr-2"></i>
                                <span class="text-white font-medium">GitHub</span>
                            </button>
                        </div>
                        
                        <!-- Sign Up Link -->
                        <div class="text-center">
                            <span class="text-slate-400">New to FlowChat? </span>
                            <a href="#!/register" class="text-violet-400 hover:text-violet-300 font-medium transition-colors">Create account</a>
                        </div>
                    </div>
                    
                    <!-- Trust Indicators -->
                    <div class="mt-8 text-center">
                        <div class="flex items-center justify-center space-x-8 text-sm">
                            <div class="flex items-center text-slate-400">
                                <div class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <span><strong class="text-white">50K+</strong> users</span>
                            </div>
                            <div class="flex items-center text-slate-400">
                                <div class="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                                <span><strong class="text-white">99.9%</strong> uptime</span>
                            </div>
                            <div class="flex items-center text-slate-400">
                                <div class="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                                <span><strong class="text-white">2M+</strong> messages</span>
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