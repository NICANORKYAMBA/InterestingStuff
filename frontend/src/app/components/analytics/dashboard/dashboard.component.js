angular.module('chatApp')
.component('analyticsDashboard', {
    template: `
        <div class="space-y-8">
            <!-- Header -->
            <div class="glass-card-modern p-8">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-6">
                        <div class="relative">
                            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/25 animate-glow">
                                <i class="fas fa-chart-network text-white text-2xl"></i>
                            </div>
                            <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
                        </div>
                        <div>
                            <h1 class="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                                Analytics Command Center
                            </h1>
                            <p class="text-gray-300 text-lg">Real-time insights from your microservices ecosystem</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <select class="glass-input-modern text-sm py-3 px-4">
                            <option>Last 24 hours</option>
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Last 90 days</option>
                        </select>
                        <button class="btn-gradient-purple py-3 px-6 text-sm">
                            <i class="fas fa-download mr-2"></i>Export Data
                        </button>
                        <button class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-cyan-500/25">
                            <i class="fas fa-sync-alt text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Key Metrics Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="stat-card-modern relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
                    <div class="relative z-10">
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                                <i class="fas fa-comments text-white text-xl"></i>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-arrow-up text-green-400 text-sm"></i>
                                <span class="text-green-400 text-sm font-bold">+{{$ctrl.stats.messageGrowth}}%</span>
                            </div>
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-2">{{$ctrl.stats.totalMessages | number}}</h3>
                        <p class="text-gray-400 text-sm font-medium">Total Messages</p>
                        <div class="mt-4 w-full bg-white/10 rounded-full h-2">
                            <div class="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-pulse" style="width: 85%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card-modern relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl"></div>
                    <div class="relative z-10">
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                                <i class="fas fa-users text-white text-xl"></i>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-arrow-up text-green-400 text-sm"></i>
                                <span class="text-green-400 text-sm font-bold">+{{$ctrl.stats.userGrowth}}%</span>
                            </div>
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-2">{{$ctrl.stats.activeUsers | number}}</h3>
                        <p class="text-gray-400 text-sm font-medium">Active Users</p>
                        <div class="mt-4 w-full bg-white/10 rounded-full h-2">
                            <div class="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full animate-pulse" style="width: 72%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card-modern relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                    <div class="relative z-10">
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                                <i class="fas fa-hashtag text-white text-xl"></i>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-arrow-down text-red-400 text-sm"></i>
                                <span class="text-red-400 text-sm font-bold">-{{$ctrl.stats.roomDecline}}%</span>
                            </div>
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-2">{{$ctrl.stats.totalRooms | number}}</h3>
                        <p class="text-gray-400 text-sm font-medium">Chat Rooms</p>
                        <div class="mt-4 w-full bg-white/10 rounded-full h-2">
                            <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style="width: 45%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card-modern relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-2xl"></div>
                    <div class="relative z-10">
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-14 h-14 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                                <i class="fas fa-bolt text-white text-xl"></i>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-arrow-up text-green-400 text-sm"></i>
                                <span class="text-green-400 text-sm font-bold">+{{$ctrl.stats.performanceImprovement}}%</span>
                            </div>
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-2">{{$ctrl.stats.avgResponseTime}}ms</h3>
                        <p class="text-gray-400 text-sm font-medium">Avg Response Time</p>
                        <div class="mt-4 w-full bg-white/10 rounded-full h-2">
                            <div class="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full animate-pulse" style="width: 92%"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Message Activity Chart -->
                <div class="glass-card-modern p-8">
                    <div class="flex items-center justify-between mb-8">
                        <h3 class="text-2xl font-bold text-white flex items-center">
                            <i class="fas fa-chart-area mr-3 text-cyan-400"></i>
                            Message Activity
                        </h3>
                        <div class="flex items-center space-x-2">
                            <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                            <span class="text-gray-400 text-sm">Real-time</span>
                        </div>
                    </div>
                    <div class="h-80 flex items-end justify-between space-x-3">
                        <div ng-repeat="bar in $ctrl.messageActivity" 
                             class="flex-1 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t-2xl transition-all duration-700 hover:from-cyan-400 hover:to-blue-300 cursor-pointer group relative"
                             ng-style="{'height': bar.value + '%'}"
                             title="{{bar.label}}: {{bar.count}} messages">
                            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {{bar.count}}
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-6 text-sm text-gray-400">
                        <span ng-repeat="bar in $ctrl.messageActivity">{{bar.label}}</span>
                    </div>
                </div>
                
                <!-- User Engagement Pie Chart -->
                <div class="glass-card-modern p-8">
                    <div class="flex items-center justify-between mb-8">
                        <h3 class="text-2xl font-bold text-white flex items-center">
                            <i class="fas fa-chart-pie mr-3 text-purple-400"></i>
                            User Engagement
                        </h3>
                        <div class="text-right">
                            <div class="text-2xl font-bold text-white">{{$ctrl.stats.engagementRate}}%</div>
                            <div class="text-gray-400 text-sm">Overall Score</div>
                        </div>
                    </div>
                    <div class="h-80 flex items-center justify-center">
                        <div class="relative w-56 h-56">
                            <!-- Animated Pie Chart -->
                            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 via-blue-500 via-purple-500 to-pink-500 opacity-90 animate-spin-slow"></div>
                            <div class="absolute inset-6 rounded-full bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl flex items-center justify-center">
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-white mb-1">{{$ctrl.stats.engagementRate}}%</div>
                                    <div class="text-gray-400 text-sm">Engagement</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 grid grid-cols-2 gap-4">
                        <div class="flex items-center justify-between text-sm">
                            <span class="flex items-center text-white/80">
                                <div class="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                                Active Users
                            </span>
                            <span class="text-white font-bold">{{$ctrl.engagement.active}}%</span>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                            <span class="flex items-center text-white/80">
                                <div class="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                                Regular Users
                            </span>
                            <span class="text-white font-bold">{{$ctrl.engagement.regular}}%</span>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                            <span class="flex items-center text-white/80">
                                <div class="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                                New Users
                            </span>
                            <span class="text-white font-bold">{{$ctrl.engagement.new}}%</span>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                            <span class="flex items-center text-white/80">
                                <div class="w-4 h-4 bg-pink-500 rounded-full mr-3"></div>
                                Inactive
                            </span>
                            <span class="text-white font-bold">{{$ctrl.engagement.inactive}}%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Bottom Section -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Microservices Health -->
                <div class="lg:col-span-2 glass-card-modern p-8">
                    <div class="flex items-center justify-between mb-8">
                        <h3 class="text-2xl font-bold text-white flex items-center">
                            <i class="fas fa-server mr-3 text-green-400"></i>
                            Microservices Health
                        </h3>
                        <div class="flex items-center space-x-2">
                            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span class="text-green-400 text-sm font-medium">All Systems Operational</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div ng-repeat="service in $ctrl.services" 
                             class="bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                            <div class="flex items-center justify-between mb-4">
                                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                                     ng-class="service.gradient">
                                    <i class="fas text-white" ng-class="service.icon"></i>
                                </div>
                                <div class="text-right">
                                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h4 class="text-white font-bold text-lg mb-2">{{service.name}}</h4>
                            <p class="text-gray-400 text-sm mb-4">{{service.description}}</p>
                            <div class="space-y-2">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-400">Uptime</span>
                                    <span class="text-green-400 font-bold">{{service.uptime}}</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-400">Response</span>
                                    <span class="text-cyan-400 font-bold">{{service.responseTime}}ms</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-400">Load</span>
                                    <span class="text-yellow-400 font-bold">{{service.load}}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Real-time Activity Feed -->
                <div class="glass-card-modern p-8">
                    <div class="flex items-center justify-between mb-8">
                        <h3 class="text-2xl font-bold text-white flex items-center">
                            <i class="fas fa-stream mr-3 text-orange-400"></i>
                            Live Activity
                        </h3>
                        <div class="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    </div>
                    <div class="space-y-4 max-h-80 overflow-y-auto">
                        <div ng-repeat="activity in $ctrl.recentActivity" 
                             class="flex items-start space-x-4 p-4 bg-black/20 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 animate-slideInUp">
                            <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-lg"
                                 ng-class="activity.gradient">
                                <i class="fas text-white" ng-class="activity.icon"></i>
                            </div>
                            <div class="flex-1">
                                <p class="text-white text-sm font-medium">{{activity.description}}</p>
                                <div class="flex items-center space-x-2 mt-1">
                                    <span class="text-gray-400 text-xs">{{activity.timestamp | date:'HH:mm:ss'}}</span>
                                    <span class="text-gray-500">•</span>
                                    <span class="text-cyan-400 text-xs font-medium">{{activity.service}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($interval, $timeout) {
        const ctrl = this;
        
        ctrl.stats = {
            totalMessages: 47832,
            activeUsers: 1247,
            totalRooms: 89,
            avgResponseTime: 127,
            engagementRate: 84,
            messageGrowth: 15,
            userGrowth: 23,
            roomDecline: 3,
            performanceImprovement: 18
        };
        
        ctrl.engagement = {
            active: 45,
            regular: 30,
            new: 15,
            inactive: 10
        };
        
        ctrl.messageActivity = [
            { label: 'Mon', value: 75, count: 3250 },
            { label: 'Tue', value: 85, count: 4180 },
            { label: 'Wed', value: 65, count: 2890 },
            { label: 'Thu', value: 95, count: 5780 },
            { label: 'Fri', value: 100, count: 6850 },
            { label: 'Sat', value: 80, count: 4340 },
            { label: 'Sun', value: 70, count: 3080 }
        ];
        
        ctrl.services = [
            {
                name: 'Chat Service',
                description: 'Real-time messaging & WebSocket connections',
                icon: 'fa-comments',
                gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                uptime: '99.97%',
                responseTime: 89,
                load: 34
            },
            {
                name: 'User Service',
                description: 'Authentication & user management',
                icon: 'fa-users',
                gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
                uptime: '99.94%',
                responseTime: 156,
                load: 28
            },
            {
                name: 'Analytics Service',
                description: 'Data processing & insights generation',
                icon: 'fa-chart-bar',
                gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
                uptime: '99.89%',
                responseTime: 203,
                load: 45
            }
        ];
        
        ctrl.recentActivity = [
            {
                icon: 'fa-comment',
                description: 'New message in Tech Innovations',
                timestamp: new Date(Date.now() - 15000),
                service: 'Chat Service',
                gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
            },
            {
                icon: 'fa-user-plus',
                description: 'New user registration: alex.rivera',
                timestamp: new Date(Date.now() - 45000),
                service: 'User Service',
                gradient: 'bg-gradient-to-r from-green-500 to-emerald-500'
            },
            {
                icon: 'fa-chart-line',
                description: 'Analytics report generated',
                timestamp: new Date(Date.now() - 120000),
                service: 'Analytics Service',
                gradient: 'bg-gradient-to-r from-purple-500 to-pink-500'
            },
            {
                icon: 'fa-server',
                description: 'Health check completed successfully',
                timestamp: new Date(Date.now() - 180000),
                service: 'System',
                gradient: 'bg-gradient-to-r from-orange-500 to-yellow-500'
            }
        ];
        
        // Real-time updates
        const updateStats = function() {
            ctrl.stats.totalMessages += Math.floor(Math.random() * 8) + 1;
            ctrl.stats.activeUsers += Math.floor(Math.random() * 5) - 2;
            ctrl.stats.avgResponseTime = 120 + Math.floor(Math.random() * 20);
            
            // Add new activity
            const activities = [
                { icon: 'fa-comment', description: 'New message received', service: 'Chat Service', gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
                { icon: 'fa-user', description: 'User came online', service: 'User Service', gradient: 'bg-gradient-to-r from-green-500 to-emerald-500' },
                { icon: 'fa-chart-bar', description: 'Metrics updated', service: 'Analytics Service', gradient: 'bg-gradient-to-r from-purple-500 to-pink-500' },
                { icon: 'fa-sync', description: 'System sync completed', service: 'System', gradient: 'bg-gradient-to-r from-orange-500 to-yellow-500' }
            ];
            
            const newActivity = activities[Math.floor(Math.random() * activities.length)];
            newActivity.timestamp = new Date();
            
            ctrl.recentActivity.unshift(newActivity);
            if (ctrl.recentActivity.length > 8) {
                ctrl.recentActivity.pop();
            }
        };
        
        // Update every 3 seconds
        const interval = $interval(updateStats, 3000);
        
        // Cleanup
        ctrl.$onDestroy = function() {
            if (interval) {
                $interval.cancel(interval);
            }
        };
    }
});