angular.module('chatApp')
.component('authRegister', {
    template: `
        <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            <!-- Animated Background -->
            <div class="absolute inset-0">
                <div class="absolute top-20 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
            </div>
            
            <!-- Back Button -->
            <div class="absolute top-6 left-6 z-20">
                <a href="#!/" class="flex items-center justify-center w-12 h-12 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300 group">
                    <i class="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                </a>
            </div>
            
            <div class="relative z-10 flex items-center justify-center min-h-screen p-4">
                <div class="w-full max-w-2xl">
                    <!-- Header -->
                    <div class="text-center mb-8">
                        <div class="w-20 h-20 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-violet-500/50 animate-pulse">
                            <i class="fas fa-rocket text-white text-2xl"></i>
                        </div>
                        <h1 class="text-4xl font-bold text-white mb-3">Join FlowChat Pro</h1>
                        <p class="text-slate-400 text-lg">Start your team communication journey</p>
                    </div>

                    <!-- Modern Registration Card -->
                    <div class="bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl shadow-black/50 hover:shadow-violet-500/20 transition-all duration-500">
                        <form ng-submit="$ctrl.register()" class="space-y-4">
                            <!-- Personal Info Row -->
                            <div class="grid grid-cols-2 gap-4">
                                <div class="relative">
                                    <i class="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                                    <input type="text" 
                                           ng-model="$ctrl.form.firstName"
                                           class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="First name"
                                           required>
                                </div>
                                <div class="relative">
                                    <i class="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                                    <input type="text" 
                                           ng-model="$ctrl.form.lastName"
                                           class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="Last name"
                                           required>
                                </div>
                            </div>
                            
                            <!-- Email & Company Row -->
                            <div class="grid grid-cols-2 gap-4">
                                <div class="relative">
                                    <i class="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                                    <input type="email" 
                                           ng-model="$ctrl.form.email"
                                           class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="Work email"
                                           required>
                                </div>
                                <div class="relative">
                                    <i class="fas fa-building absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                                    <input type="text" 
                                           ng-model="$ctrl.form.company"
                                           class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="Company"
                                           required>
                                </div>
                            </div>
                            
                            <!-- Password Row -->
                            <div class="relative">
                                <i class="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                                <input ng-type="$ctrl.showPassword ? 'text' : 'password'" 
                                       ng-model="$ctrl.form.password"
                                       class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl pl-12 pr-12 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                       placeholder="Create a secure password"
                                       required>
                                <button type="button" 
                                        ng-click="$ctrl.togglePassword()"
                                        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
                                    <i class="fas" ng-class="$ctrl.showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                                </button>
                            </div>
                            
                            <!-- Terms & Create Button -->
                            <div class="space-y-4">
                                <label class="flex items-start space-x-3 cursor-pointer">
                                    <input type="checkbox" 
                                           ng-model="$ctrl.acceptTerms"
                                           class="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-600 text-violet-500"
                                           required>
                                    <span class="text-slate-400 text-sm">
                                        I agree to the <a href="#" class="text-violet-400 hover:text-violet-300 underline">Terms</a> 
                                        and <a href="#" class="text-violet-400 hover:text-violet-300 underline">Privacy Policy</a>
                                    </span>
                                </label>
                                
                                <button type="submit" 
                                        ng-disabled="$ctrl.isLoading || !$ctrl.acceptTerms"
                                        class="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-violet-500/25 disabled:opacity-50">
                                    <span ng-if="!$ctrl.isLoading">Create Account</span>
                                    <span ng-if="$ctrl.isLoading" class="flex items-center justify-center">
                                        <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                        Creating account...
                                    </span>
                                </button>
                            </div>
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
                        
                        <!-- Social & Sign In -->
                        <div class="space-y-4">
                            <div class="grid grid-cols-2 gap-3">
                                <button class="flex items-center justify-center py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 rounded-xl transition-all duration-200">
                                    <i class="fab fa-google text-red-400 mr-2"></i>
                                    <span class="text-white font-medium">Google</span>
                                </button>
                                <button class="flex items-center justify-center py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 rounded-xl transition-all duration-200">
                                    <i class="fab fa-github text-white mr-2"></i>
                                    <span class="text-white font-medium">GitHub</span>
                                </button>
                            </div>
                            
                            <div class="text-center">
                                <span class="text-slate-400">Already have an account? </span>
                                <a href="#!/login" class="text-violet-400 hover:text-violet-300 font-medium transition-colors">Sign in</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Features Preview -->
                    <div class="mt-8 text-center">
                        <div class="grid grid-cols-3 gap-4 text-sm">
                            <div class="flex flex-col items-center text-slate-400">
                                <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-2">
                                    <i class="fas fa-comments text-white text-sm"></i>
                                </div>
                                <span>Real-time Chat</span>
                            </div>
                            <div class="flex flex-col items-center text-slate-400">
                                <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-2">
                                    <i class="fas fa-chart-bar text-white text-sm"></i>
                                </div>
                                <span>Analytics</span>
                            </div>
                            <div class="flex flex-col items-center text-slate-400">
                                <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-2">
                                    <i class="fas fa-file-upload text-white text-sm"></i>
                                </div>
                                <span>File Sharing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($timeout, $location, $rootScope) {
        const ctrl = this;
        
        ctrl.selectedRole = 'member';
        ctrl.showPassword = false;
        ctrl.acceptTerms = false;
        ctrl.isLoading = false;
        
        ctrl.form = {
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            password: ''
        };
        
        ctrl.roles = [
            {
                id: 'member',
                title: 'Member',
                icon: 'fa-user',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500'
            },
            {
                id: 'manager',
                title: 'Manager',
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600'
            },
            {
                id: 'admin',
                title: 'Admin',
                icon: 'fa-cogs',
                bgClass: 'bg-gradient-to-r from-orange-500 to-red-500'
            }
        ];
        
        ctrl.togglePassword = function() {
            ctrl.showPassword = !ctrl.showPassword;
        };
        
        ctrl.register = function() {
            if (ctrl.form.password !== ctrl.form.confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            ctrl.isLoading = true;
            
            $timeout(() => {
                ctrl.isLoading = false;
                $rootScope.userRole = ctrl.selectedRole;
                $location.path('/login');
            }, 2000);
        };
    }
});