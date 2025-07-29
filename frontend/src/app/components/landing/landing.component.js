angular.module('chatApp')
.component('landingPage', {
    template: `
        <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            <!-- Animated Background -->
            <div class="absolute inset-0">
                <div class="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
                <div class="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
            </div>
            
            <!-- Navigation -->
            <nav class="relative z-10 flex items-center justify-between p-6">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <i class="fas fa-bolt text-white"></i>
                    </div>
                    <span class="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">FlowChat</span>
                </div>
                <button ng-click="$ctrl.navigateTo('/login')" class="btn-secondary px-6 py-2">
                    <i class="fas fa-sign-in-alt mr-2"></i>Sign In
                </button>
            </nav>

            <!-- Hero Section -->
            <div class="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div class="text-center">
                    <!-- Animated Logo -->
                    <div class="flex items-center justify-center mb-12">
                        <div class="relative">
                            <div class="w-32 h-32 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-500/50 animate-float">
                                <i class="fas fa-bolt text-white text-5xl"></i>
                            </div>
                            <div class="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full animate-ping"></div>
                            <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    
                    <!-- Main Headline -->
                    <h1 class="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                        The Future of
                        <br>
                        <span class="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                            Team Communication
                        </span>
                    </h1>
                    
                    <p class="text-lg lg:text-xl text-slate-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                        Experience lightning-fast messaging, real-time analytics, and enterprise-grade security 
                        <span class="text-violet-400 font-semibold">powered by modern microservices</span>
                    </p>
                    
                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                        <button ng-click="$ctrl.navigateTo('/register')" 
                                class="group relative bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70">
                            <span class="relative z-10 flex items-center justify-center">
                                <i class="fas fa-rocket mr-3 group-hover:animate-bounce"></i>
                                Start Free Trial
                            </span>
                            <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        
                        <button ng-click="$ctrl.showDemo = true" 
                                class="group bg-slate-800/50 hover:bg-slate-700/50 text-white border-2 border-slate-600 hover:border-violet-400 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 backdrop-blur-xl">
                            <i class="fas fa-play mr-3 group-hover:text-violet-400"></i>
                            Watch Demo
                        </button>
                    </div>
                    
                    <!-- Trust Indicators -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div ng-repeat="stat in $ctrl.trustStats" class="text-center group">
                            <div class="text-2xl lg:text-3xl font-black text-white mb-2 group-hover:text-violet-400 transition-colors">{{stat.value}}</div>
                            <div class="text-slate-400 font-medium">{{stat.label}}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Features Showcase -->
            <div class="relative z-10 py-32 bg-gradient-to-b from-transparent to-slate-900/50">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="text-center mb-20">
                        <h2 class="text-3xl lg:text-4xl font-black text-white mb-6">
                            Why Teams Choose
                            <span class="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">FlowChat</span>
                        </h2>
                        <p class="text-lg text-slate-400 max-w-3xl mx-auto">Built with cutting-edge technology for the modern workplace</p>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div ng-repeat="feature in $ctrl.features" 
                             class="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-violet-500/50 transition-all duration-500 hover:scale-105">
                            <!-- Glow Effect -->
                            <div class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div class="relative z-10">
                                <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300" ng-class="feature.bgClass">
                                    <i class="fas text-white text-3xl" ng-class="feature.icon"></i>
                                </div>
                                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">{{feature.title}}</h3>
                                <p class="text-slate-400 text-lg leading-relaxed mb-6">{{feature.description}}</p>
                                <div class="flex flex-wrap gap-2">
                                    <span ng-repeat="tech in feature.technologies" 
                                          class="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700/50 group-hover:border-violet-500/30 transition-colors">
                                        {{tech}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- User Journey Section -->
            <div class="relative z-10 py-32">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="text-center mb-20">
                        <h2 class="text-3xl lg:text-4xl font-black text-white mb-6">Choose Your Path</h2>
                        <p class="text-lg text-slate-400">Tailored experiences for every role</p>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div ng-repeat="userType in $ctrl.userTypes" 
                             class="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 hover:border-violet-500/50 transition-all duration-500 hover:scale-105">
                            
                            <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" ng-class="userType.gradientClass"></div>
                            
                            <div class="relative z-10">
                                <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" ng-class="userType.bgClass">
                                    <i class="fas text-white text-2xl" ng-class="userType.icon"></i>
                                </div>
                                
                                <h3 class="text-2xl font-bold text-white mb-4">{{userType.title}}</h3>
                                <p class="text-slate-400 mb-8 text-lg">{{userType.description}}</p>
                                
                                <div class="space-y-3 mb-8">
                                    <div ng-repeat="feature in userType.features" class="flex items-center space-x-3">
                                        <i class="fas fa-check text-emerald-400"></i>
                                        <span class="text-slate-300">{{feature}}</span>
                                    </div>
                                </div>
                                
                                <button ng-click="$ctrl.startJourney(userType.role)" 
                                        class="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-violet-500 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 group-hover:scale-105">
                                    Start as {{userType.title}}
                                    <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Final CTA -->
            <div class="relative z-10 py-32 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20">
                <div class="max-w-5xl mx-auto text-center px-6">
                    <h2 class="text-3xl lg:text-4xl font-black text-white mb-8">
                        Ready to Transform Your
                        <span class="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Workflow?</span>
                    </h2>
                    <p class="text-lg text-slate-300 mb-12 font-light">Join thousands of teams already using FlowChat</p>
                    
                    <div class="flex flex-col sm:flex-row gap-6 justify-center">
                        <button ng-click="$ctrl.navigateTo('/register')" 
                                class="group relative bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-bold text-lg px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-violet-500/50">
                            <i class="fas fa-rocket mr-3 group-hover:animate-bounce"></i>
                            Get Started Free
                        </button>
                    </div>
                    
                    <p class="text-slate-400 mt-6">✨ No credit card required • 14-day free trial • Cancel anytime</p>
                </div>
            </div>
        </div>
    `,
    controller: function($location, $rootScope) {
        const ctrl = this;
        
        ctrl.trustStats = [
            { value: '50K+', label: 'Active Users' },
            { value: '1.2M+', label: 'Messages Sent' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' }
        ];
        
        ctrl.features = [
            {
                title: 'Lightning Fast Messaging',
                description: 'Real-time communication with WebSocket technology. Send messages, files, and reactions instantly with zero lag.',
                icon: 'fa-bolt',
                bgClass: 'bg-gradient-to-br from-blue-500 to-cyan-500',
                technologies: ['WebSocket', 'Node.js', 'Redis']
            },
            {
                title: 'Advanced Analytics',
                description: 'Deep insights into team communication patterns, engagement metrics, and productivity analytics.',
                icon: 'fa-chart-line',
                bgClass: 'bg-gradient-to-br from-violet-500 to-purple-600',
                technologies: ['Real-time', 'Charts.js', 'AI Insights']
            },
            {
                title: 'Enterprise Security',
                description: 'Bank-grade encryption, SSO integration, compliance monitoring, and advanced threat detection.',
                icon: 'fa-shield-alt',
                bgClass: 'bg-gradient-to-br from-emerald-500 to-green-600',
                technologies: ['End-to-End Encryption', 'SSO', 'Compliance']
            }
        ];
        
        ctrl.userTypes = [
            {
                title: 'Team Member',
                role: 'member',
                description: 'Perfect for individual contributors who want to collaborate effectively',
                icon: 'fa-user',
                bgClass: 'bg-gradient-to-br from-blue-500 to-cyan-500',
                gradientClass: 'from-blue-500/10 to-cyan-500/10',
                features: [
                    'Instant messaging & file sharing',
                    'Real-time notifications',
                    'Message search & history',
                    'Mobile & desktop apps'
                ]
            },
            {
                title: 'Team Manager',
                role: 'manager',
                description: 'Ideal for managers who need insights into team communication',
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-br from-violet-500 to-purple-600',
                gradientClass: 'from-violet-500/10 to-purple-500/10',
                features: [
                    'Team analytics & insights',
                    'Communication patterns',
                    'Engagement tracking',
                    'Performance reports'
                ]
            },
            {
                title: 'System Admin',
                role: 'admin',
                description: 'Complete control for IT administrators and system managers',
                icon: 'fa-cogs',
                bgClass: 'bg-gradient-to-br from-orange-500 to-red-500',
                gradientClass: 'from-orange-500/10 to-red-500/10',
                features: [
                    'User & role management',
                    'System monitoring',
                    'Security & compliance',
                    'Infrastructure control'
                ]
            }
        ];
        
        ctrl.showDemo = false;
        
        ctrl.navigateTo = function(path) {
            $location.path(path);
        };
        
        ctrl.startJourney = function(role) {
            $rootScope.userRole = role;
            $location.path('/register');
        };
    }
});