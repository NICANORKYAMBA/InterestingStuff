angular.module('chatApp')
.component('authLogin', {
    template: `
        <div class="min-h-[800px] flex items-center justify-center">
            <div class="glass-card-modern p-12 w-full max-w-lg relative overflow-hidden">
                <!-- Animated Background Elements -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl"></div>
                
                <!-- Header -->
                <div class="text-center mb-10 relative z-10">
                    <div class="relative inline-block mb-6">
                        <div class="w-20 h-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-cyan-500/25 animate-glow">
                            <i class="fas fa-fingerprint text-white text-3xl"></i>
                        </div>
                        <div class="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                            <i class="fas fa-check text-white text-sm"></i>
                        </div>
                    </div>
                    <h2 class="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
                        Welcome Back
                    </h2>
                    <p class="text-gray-300 text-lg">Sign in to your NexusChat account</p>
                </div>
                
                <!-- Login Form -->
                <form ng-submit="$ctrl.login()" class="space-y-8 relative z-10">
                    <div class="space-y-6">
                        <div class="relative">
                            <label class="block text-white/90 text-sm font-semibold mb-3">
                                <i class="fas fa-user mr-2 text-cyan-400"></i>Username or Email
                            </label>
                            <input type="text" 
                                   ng-model="$ctrl.credentials.username"
                                   class="glass-input-modern w-full text-lg"
                                   placeholder="Enter your username"
                                   required>
                            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                        
                        <div class="relative">
                            <label class="block text-white/90 text-sm font-semibold mb-3">
                                <i class="fas fa-lock mr-2 text-purple-400"></i>Password
                            </label>
                            <div class="relative">
                                <input ng-type="$ctrl.showPassword ? 'text' : 'password'" 
                                       ng-model="$ctrl.credentials.password"
                                       class="glass-input-modern w-full text-lg pr-16"
                                       placeholder="Enter your password"
                                       required>
                                <button type="button" 
                                        ng-click="$ctrl.togglePassword()"
                                        class="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300">
                                    <i class="fas text-white" ng-class="$ctrl.showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Options -->
                    <div class="flex items-center justify-between">
                        <label class="flex items-center text-white/80 cursor-pointer group">
                            <div class="relative">
                                <input type="checkbox" 
                                       ng-model="$ctrl.rememberMe"
                                       class="sr-only">
                                <div class="w-5 h-5 bg-white/10 border-2 border-white/30 rounded-lg group-hover:border-cyan-400/50 transition-colors"
                                     ng-class="{'bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-500': $ctrl.rememberMe}">
                                    <i ng-if="$ctrl.rememberMe" class="fas fa-check text-white text-xs absolute top-0.5 left-0.5"></i>
                                </div>
                            </div>
                            <span class="ml-3 text-sm font-medium">Remember me</span>
                        </label>
                        <a href="#" class="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">
                            Forgot password?
                        </a>
                    </div>
                    
                    <!-- Login Button -->
                    <button type="submit" 
                            ng-disabled="$ctrl.isLoading"
                            class="btn-primary-modern w-full text-lg font-bold relative overflow-hidden">
                        <span ng-if="!$ctrl.isLoading" class="flex items-center justify-center">
                            <i class="fas fa-rocket mr-3"></i>Launch Into NexusChat
                        </span>
                        <span ng-if="$ctrl.isLoading" class="flex items-center justify-center">
                            <div class="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                            Authenticating<span class="loading-dots">...</span>
                        </span>
                    </button>
                </form>
                
                <!-- Divider -->
                <div class="my-8 flex items-center relative z-10">
                    <div class="flex-1 border-t border-white/20"></div>
                    <span class="px-6 text-white/60 text-sm font-medium bg-gradient-to-r from-transparent via-black/50 to-transparent">
                        or continue with
                    </span>
                    <div class="flex-1 border-t border-white/20"></div>
                </div>
                
                <!-- Social Login -->
                <div class="grid grid-cols-2 gap-4 relative z-10">
                    <button class="flex items-center justify-center space-x-3 py-4 px-6 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-2xl transition-all duration-300 backdrop-blur-xl group">
                        <i class="fab fa-google text-xl text-red-400 group-hover:scale-110 transition-transform"></i>
                        <span class="text-white font-medium">Google</span>
                    </button>
                    <button class="flex items-center justify-center space-x-3 py-4 px-6 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-2xl transition-all duration-300 backdrop-blur-xl group">
                        <i class="fab fa-github text-xl text-gray-300 group-hover:scale-110 transition-transform"></i>
                        <span class="text-white font-medium">GitHub</span>
                    </button>
                </div>
                
                <!-- Sign Up Link -->
                <div class="mt-8 text-center relative z-10">
                    <span class="text-gray-300">Don't have an account? </span>
                    <a href="#" class="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                        Create one now
                    </a>
                </div>
            </div>
            
            <!-- Service Status Panel -->
            <div class="ml-8 glass-card-modern p-8 w-80 h-fit">
                <div class="flex items-center space-x-3 mb-6">
                    <div class="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                        <i class="fas fa-server text-white text-xl"></i>
                    </div>
                    <div>
                        <h3 class="text-white font-bold text-lg">System Status</h3>
                        <p class="text-green-400 text-sm font-medium">All Systems Operational</p>
                    </div>
                </div>
                
                <div class="space-y-4">
                    <div ng-repeat="service in $ctrl.services" 
                         class="flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-xl flex items-center justify-center"
                                 ng-class="service.gradient">
                                <i class="fas text-white" ng-class="service.icon"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold text-sm">{{service.name}}</h4>
                                <p class="text-gray-400 text-xs">{{service.description}}</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span class="text-green-400 text-xs font-bold">{{service.uptime}}</span>
                        </div>
                    </div>
                </div>
                
                <!-- Performance Metrics -->
                <div class="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
                    <h4 class="text-cyan-400 font-semibold mb-3 flex items-center">
                        <i class="fas fa-tachometer-alt mr-2"></i>
                        Performance
                    </h4>
                    <div class="grid grid-cols-2 gap-4 text-center">
                        <div>
                            <div class="text-2xl font-bold text-white">{{$ctrl.metrics.responseTime}}ms</div>
                            <div class="text-xs text-gray-400">Response Time</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-white">{{$ctrl.metrics.uptime}}%</div>
                            <div class="text-xs text-gray-400">Uptime</div>
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
                gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                uptime: '99.9%'
            },
            {
                name: 'Chat Service',
                description: 'Real-time messaging',
                icon: 'fa-comments',
                gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
                uptime: '99.8%'
            },
            {
                name: 'Analytics Service',
                description: 'Data & insights',
                icon: 'fa-chart-line',
                gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
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
            
            // Simulate authentication
            $timeout(() => {
                ctrl.isLoading = false;
                console.log('Login successful for:', ctrl.credentials.username);
                
                // Redirect to chat
                $location.path('/');
            }, 3000);
        };
        
        // Simulate real-time metrics updates
        const updateMetrics = function() {
            ctrl.metrics.responseTime = 140 + Math.floor(Math.random() * 10);
            ctrl.metrics.uptime = 99.7 + Math.random() * 0.3;
        };
        
        setInterval(updateMetrics, 5000);
    }
});