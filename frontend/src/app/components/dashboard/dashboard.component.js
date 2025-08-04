angular.module('chatApp')
.component('mainDashboard', {
    template: `
        <div class="h-full overflow-y-auto">
            <!-- Hero Section -->
            <div class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10"></div>
                <div class="relative max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Welcome to <span class="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">FlowChat</span>
                            </h1>
                            <p class="text-xl text-slate-300 mb-8">
                                Experience modern microservices architecture with real-time communication, 
                                powerful analytics, and seamless user management.
                            </p>
                            <div class="flex flex-wrap gap-4">
                                <button ng-click="$ctrl.navigateTo('/chat')" class="btn-primary text-lg px-8 py-4">
                                    <i class="fas fa-comments mr-3"></i>Join the Conversation
                                </button>
                                <button ng-click="$ctrl.navigateTo('/analytics')" class="btn-secondary text-lg px-8 py-4">
                                    <i class="fas fa-chart-bar mr-3"></i>View Insights
                                </button>
                            </div>
                            <p class="text-slate-400 text-sm mt-4">
                                <i class="fas fa-users mr-2"></i>{{$ctrl.stats.users}} users online • 
                                <i class="fas fa-comments mr-2"></i>{{$ctrl.stats.messages}} messages today
                            </p>
                        </div>
                        <div class="relative">
                            <div class="card-modern p-8 animate-float">
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="text-center">
                                        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                            <i class="fas fa-comments text-white text-2xl"></i>
                                        </div>
                                        <div class="text-2xl font-bold text-white">{{$ctrl.stats.messages}}</div>
                                        <div class="text-slate-400 text-sm">Messages</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                            <i class="fas fa-users text-white text-2xl"></i>
                                        </div>
                                        <div class="text-2xl font-bold text-white">{{$ctrl.stats.users}}</div>
                                        <div class="text-slate-400 text-sm">Active Users</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                            <i class="fas fa-hashtag text-white text-2xl"></i>
                                        </div>
                                        <div class="text-2xl font-bold text-white">{{$ctrl.stats.rooms}}</div>
                                        <div class="text-slate-400 text-sm">Chat Rooms</div>
                                    </div>
                                    <div class="text-center">
                                        <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                            <i class="fas fa-bolt text-white text-2xl"></i>
                                        </div>
                                        <div class="text-2xl font-bold text-white">{{$ctrl.stats.uptime}}%</div>
                                        <div class="text-slate-400 text-sm">Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="p-8">
                <div class="max-w-7xl mx-auto">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-2xl font-bold text-white">What would you like to do?</h2>
                        <span class="text-slate-400 text-sm">Choose your next action</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div ng-repeat="action in $ctrl.quickActions" 
                             class="card-modern p-6 hover:scale-105 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-violet-500/30"
                             ng-click="$ctrl.navigateTo(action.route)">
                            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                 ng-class="action.bgClass">
                                <i class="fas text-white text-xl" ng-class="action.icon"></i>
                            </div>
                            <h3 class="text-white font-bold text-lg mb-2">{{action.title}}</h3>
                            <p class="text-slate-400 text-sm mb-4">{{action.description}}</p>
                            <div class="flex items-center text-violet-400 text-sm font-medium group-hover:text-violet-300">
                                <span>Get started</span>
                                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Platform Features -->
            <div class="p-8 bg-slate-900/30">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-white mb-4">Why Choose FlowChat?</h2>
                        <p class="text-slate-400 text-lg">Experience the power of modern communication</p>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div ng-repeat="feature in $ctrl.features" class="text-center">
                            <div class="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                 ng-class="feature.bgClass">
                                <i class="fas text-white text-3xl" ng-class="feature.icon"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white mb-3">{{feature.title}}</h3>
                            <p class="text-slate-400 mb-4">{{feature.description}}</p>
                            <div class="flex flex-wrap justify-center gap-2">
                                <span ng-repeat="tech in feature.technologies" 
                                      class="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700/50">
                                    {{tech}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Activity -->
            <div class="p-8">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- System Health -->
                        <div class="card-modern p-6">
                            <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                                <i class="fas fa-heartbeat mr-2 text-emerald-400"></i>
                                System Health
                            </h3>
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
                                            <p class="text-slate-400 text-sm">Port {{service.port}}</p>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <div class="flex items-center space-x-2 mb-1">
                                            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                            <span class="text-emerald-400 text-sm font-medium">Online</span>
                                        </div>
                                        <p class="text-slate-400 text-xs">{{service.responseTime}}ms</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Getting Started Guide -->
                        <div class="card-modern p-6">
                            <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                                <i class="fas fa-rocket mr-2 text-violet-400"></i>
                                Getting Started
                            </h3>
                            <div class="space-y-4">
                                <div ng-repeat="step in $ctrl.gettingStarted" 
                                     class="flex items-start space-x-3 p-3 rounded-lg transition-colors"
                                     ng-class="step.completed ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-slate-800/30 hover:bg-slate-800/50'">
                                    <div class="w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                                         ng-class="step.completed ? 'bg-emerald-500' : 'bg-slate-600'">
                                        <i class="fas text-white text-sm" 
                                           ng-class="step.completed ? 'fa-check' : 'fa-' + ($index + 1)"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="text-white font-medium mb-1">{{step.title}}</h4>
                                        <p class="text-slate-400 text-sm mb-2">{{step.description}}</p>
                                        <button ng-if="!step.completed" 
                                                ng-click="$ctrl.navigateTo(step.route)"
                                                class="text-violet-400 hover:text-violet-300 text-sm font-medium">
                                            {{step.action}} <i class="fas fa-arrow-right ml-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($location, $interval) {
        const ctrl = this;
        
        ctrl.stats = {
            messages: 15247,
            users: 342,
            rooms: 28,
            uptime: 99.9
        };
        
        ctrl.quickActions = [
            {
                title: 'Start Chatting',
                description: 'Join conversations and connect with your team in real-time',
                icon: 'fa-comments',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                route: '/chat'
            },
            {
                title: 'View Insights',
                description: 'Explore analytics and monitor platform performance',
                icon: 'fa-chart-bar',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                route: '/analytics'
            },
            {
                title: 'Manage Profile',
                description: 'Update your account settings and preferences',
                icon: 'fa-user-cog',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                route: '/profile'
            }
        ];
        
        ctrl.features = [
            {
                title: 'Real-time Chat',
                description: 'WebSocket-powered messaging with instant delivery and typing indicators',
                icon: 'fa-bolt',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                technologies: ['WebSocket', 'Node.js', 'Express']
            },
            {
                title: 'User Management',
                description: 'Secure authentication and profile management with JWT tokens',
                icon: 'fa-shield-alt',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                technologies: ['JWT', 'PostgreSQL', 'Prisma']
            },
            {
                title: 'Analytics Engine',
                description: 'Real-time insights and performance monitoring across all services',
                icon: 'fa-chart-bar',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                technologies: ['Charts.js', 'Real-time', 'Metrics']
            }
        ];
        
        ctrl.services = [
            {
                name: 'Chat Service',
                port: 3001,
                icon: 'fa-comments',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                responseTime: 89
            },
            {
                name: 'User Service',
                port: 3002,
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                responseTime: 156
            },
            {
                name: 'Analytics Service',
                port: 3003,
                icon: 'fa-chart-bar',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                responseTime: 203
            }
        ];
        
        ctrl.gettingStarted = [
            {
                title: 'Complete Your Profile',
                description: 'Add your photo and update your information',
                action: 'Set up profile',
                route: '/profile',
                completed: false
            },
            {
                title: 'Join Your First Chat',
                description: 'Connect with your team in real-time conversations',
                action: 'Start chatting',
                route: '/chat',
                completed: false
            },
            {
                title: 'Explore Analytics',
                description: 'Discover insights about platform usage and performance',
                action: 'View insights',
                route: '/analytics',
                completed: false
            }
        ];
        
        ctrl.navigateTo = function(path) {
            $location.path(path);
        };
        
        // Real-time stats updates
        const updateStats = function() {
            ctrl.stats.messages += Math.floor(Math.random() * 5);
            ctrl.stats.users += Math.floor(Math.random() * 3) - 1;
            if (ctrl.stats.users < 300) ctrl.stats.users = 300;
        };
        
        const interval = $interval(updateStats, 3000);
        
        ctrl.$onDestroy = function() {
            if (interval) {
                $interval.cancel(interval);
            }
        };
    }
});