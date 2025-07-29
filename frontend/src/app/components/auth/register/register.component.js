angular.module('chatApp')
.component('authRegister', {
    template: `
        <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            <!-- Animated Background -->
            <div class="absolute inset-0">
                <div class="absolute top-20 left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
            </div>
            
            <div class="relative z-10 flex items-center justify-center min-h-screen p-6">
                <div class="w-full max-w-md">
                    <!-- Back to Landing -->
                    <div class="mb-6">
                        <a href="#!/" class="inline-flex items-center text-slate-400 hover:text-white transition-colors group">
                            <i class="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>Back to Home
                        </a>
                    </div>

                    <!-- Sign Up Form -->
                    <div class="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl">
                        <div class="text-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-violet-500/25 animate-float">
                                <i class="fas fa-user-plus text-white"></i>
                            </div>
                            <h2 class="text-xl font-bold text-white mb-1">Create Your Account</h2>
                            <p class="text-slate-400 text-sm">Join thousands of teams using FlowChat</p>
                        </div>
                    
                        <form ng-submit="$ctrl.register()" class="space-y-3">
                            <!-- Personal Info -->
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-slate-300 text-sm font-medium mb-2">First Name</label>
                                    <input type="text" 
                                           ng-model="$ctrl.form.firstName"
                                           class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="John"
                                           required>
                                </div>
                                <div>
                                    <label class="block text-slate-300 text-sm font-medium mb-2">Last Name</label>
                                    <input type="text" 
                                           ng-model="$ctrl.form.lastName"
                                           class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="Doe"
                                           required>
                                </div>
                            </div>
                            
                            <div>
                                <label class="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
                                <input type="email" 
                                       ng-model="$ctrl.form.email"
                                       class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                       placeholder="john@company.com"
                                       required>
                            </div>
                            
                            <div>
                                <label class="block text-slate-300 text-sm font-medium mb-2">Password</label>
                                <div class="relative">
                                    <input ng-type="$ctrl.showPassword ? 'text' : 'password'" 
                                           ng-model="$ctrl.form.password"
                                           class="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 pr-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="Create a strong password"
                                           required>
                                    <button type="button" 
                                            ng-click="$ctrl.togglePassword()"
                                            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
                                        <i class="fas" ng-class="$ctrl.showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Role Selection -->
                            <div>
                                <label class="block text-slate-300 text-sm font-medium mb-3">I am joining as:</label>
                                <div class="grid grid-cols-3 gap-2">
                                    <label ng-repeat="role in $ctrl.roles" 
                                           class="flex flex-col items-center p-3 border rounded-xl cursor-pointer transition-all text-center"
                                           ng-class="$ctrl.selectedRole === role.id ? 'border-violet-500 bg-violet-500/10' : 'border-slate-600/50 hover:border-slate-500'">
                                        <input type="radio" 
                                               ng-model="$ctrl.selectedRole" 
                                               ng-value="role.id" 
                                               class="sr-only">
                                        <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-2" ng-class="role.bgClass">
                                            <i class="fas text-white text-sm" ng-class="role.icon"></i>
                                        </div>
                                        <div class="text-white text-xs font-medium">{{role.title}}</div>
                                    </label>
                                </div>
                            </div>
                            
                            <!-- Terms -->
                            <div class="flex items-start space-x-3">
                                <input type="checkbox" 
                                       ng-model="$ctrl.acceptTerms"
                                       class="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-600 text-violet-500 focus:ring-violet-500"
                                       required>
                                <label class="text-slate-400 text-sm">
                                    I agree to the <a href="#" class="text-violet-400 hover:text-violet-300 underline">Terms</a> 
                                    and <a href="#" class="text-violet-400 hover:text-violet-300 underline">Privacy Policy</a>
                                </label>
                            </div>
                            
                            <button type="submit" 
                                    ng-disabled="$ctrl.isLoading || !$ctrl.acceptTerms"
                                    class="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed">
                                <span ng-if="!$ctrl.isLoading">
                                    <i class="fas fa-rocket mr-2"></i>Create Account
                                </span>
                                <span ng-if="$ctrl.isLoading" class="flex items-center justify-center">
                                    <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                    Creating account...
                                </span>
                            </button>
                        </form>
                    
                        <!-- Social Sign Up -->
                        <div class="mt-3">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-slate-700/50"></div>
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="px-3 bg-slate-900/80 text-slate-400">Or continue with</span>
                                </div>
                            </div>
                            
                            <div class="mt-3 grid grid-cols-2 gap-3">
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
                        
                        <!-- Sign In Link -->
                        <div class="mt-3 text-center">
                            <span class="text-slate-400">Already have an account? </span>
                            <a href="#!/login" class="text-violet-400 hover:text-violet-300 font-medium transition-colors underline">
                                Sign in
                            </a>
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
            password: '',
            confirmPassword: ''
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