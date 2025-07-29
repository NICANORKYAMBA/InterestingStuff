angular.module('chatApp')
.component('analyticsDashboard', {
    template: `
        <div class="space-y-8">
            <!-- Header -->
            <div class="glass-card p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-3xl font-bold text-white mb-2">
                            <i class="fas fa-chart-line mr-3 text-purple-400"></i>
                            Analytics Dashboard
                        </h2>
                        <p class="text-white/70">Real-time insights from your microservices platform</p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <select class="glass-input text-sm">
                            <option>Last 24 hours</option>
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                        </select>
                        <button class="btn-secondary py-2 px-4 text-sm">
                            <i class="fas fa-download mr-2"></i>Export
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <i class="fas fa-comments text-white text-xl"></i>
                        </div>
                        <span class="text-green-400 text-sm font-semibold flex items-center">
                            <i class="fas fa-arrow-up mr-1"></i>+12%
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.totalMessages | number}}</h3>
                    <p class="text-white/70 text-sm">Total Messages</p>
                    <div class="mt-3 w-full bg-white/10 rounded-full h-2">
                        <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style="width: 75%"></div>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                            <i class="fas fa-users text-white text-xl"></i>
                        </div>
                        <span class="text-green-400 text-sm font-semibold flex items-center">
                            <i class="fas fa-arrow-up mr-1"></i>+8%
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.activeUsers | number}}</h3>
                    <p class="text-white/70 text-sm">Active Users</p>
                    <div class="mt-3 w-full bg-white/10 rounded-full h-2">
                        <div class="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style="width: 60%"></div>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <i class="fas fa-hashtag text-white text-xl"></i>
                        </div>
                        <span class="text-red-400 text-sm font-semibold flex items-center">
                            <i class="fas fa-arrow-down mr-1"></i>-2%
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.totalRooms | number}}</h3>
                    <p class="text-white/70 text-sm">Chat Rooms</p>
                    <div class="mt-3 w-full bg-white/10 rounded-full h-2">
                        <div class="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style="width: 40%"></div>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                            <i class="fas fa-clock text-white text-xl"></i>
                        </div>
                        <span class="text-green-400 text-sm font-semibold flex items-center">
                            <i class="fas fa-arrow-up mr-1"></i>+15%
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.avgResponseTime}}ms</h3>
                    <p class="text-white/70 text-sm">Avg Response Time</p>
                    <div class="mt-3 w-full bg-white/10 rounded-full h-2">
                        <div class="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style="width: 85%"></div>
                    </div>
                </div>
            </div>
            
            <!-- Charts Row -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Message Activity Chart -->
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-white mb-4 flex items-center">
                        <i class="fas fa-chart-area mr-2 text-blue-400"></i>
                        Message Activity
                    </h3>
                    <div class="h-64 flex items-end justify-between space-x-2">
                        <div ng-repeat="bar in $ctrl.messageActivity" 
                             class="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-400 hover:to-blue-300"
                             ng-style="{'height': bar.value + '%'}"
                             title="{{bar.label}}: {{bar.count}} messages">
                        </div>
                    </div>
                    <div class="flex justify-between mt-4 text-xs text-white/60">
                        <span ng-repeat="bar in $ctrl.messageActivity">{{bar.label}}</span>
                    </div>
                </div>
                
                <!-- User Engagement -->
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-white mb-4 flex items-center">
                        <i class="fas fa-chart-pie mr-2 text-green-400"></i>
                        User Engagement
                    </h3>
                    <div class="h-64 flex items-center justify-center">
                        <div class="relative w-48 h-48">
                            <!-- Simulated Pie Chart -->
                            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-80"></div>
                            <div class="absolute inset-4 rounded-full bg-slate-900 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-white">{{$ctrl.stats.engagementRate}}%</div>
                                    <div class="text-white/70 text-sm">Engagement</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 space-y-2">
                        <div class="flex items-center justify-between text-sm">
                            <span class="flex items-center text-white/80">
                                <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                Active Users
                            </span>
                            <span class="text-white font-semibold">65%</span>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                            <span class="flex items-center text-white/80">
                                <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                Occasional Users
                            </span>
                            <span class="text-white font-semibold">25%</span>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                            <span class="flex items-center text-white/80">
                                <div class="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                New Users
                            </span>
                            <span class="text-white font-semibold">10%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Service Health & Recent Activity -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Service Health -->
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-white mb-4 flex items-center">
                        <i class="fas fa-server mr-2 text-purple-400"></i>
                        Microservices Health
                    </h3>
                    <div class="space-y-4">
                        <div ng-repeat="service in $ctrl.services" 
                             class="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/10">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center"
                                     ng-class="service.status === 'healthy' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'">
                                    <i class="fas" ng-class="service.icon"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-semibold">{{service.name}}</h4>
                                    <p class="text-white/60 text-sm">{{service.description}}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="flex items-center space-x-2 mb-1">
                                    <div class="w-2 h-2 rounded-full"
                                         ng-class="service.status === 'healthy' ? 'bg-green-400 animate-pulse' : 'bg-red-400'"></div>
                                    <span class="text-sm font-semibold"
                                          ng-class="service.status === 'healthy' ? 'text-green-400' : 'text-red-400'">
                                        {{service.status | uppercase}}
                                    </span>
                                </div>
                                <p class="text-white/60 text-xs">{{service.uptime}} uptime</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Recent Activity -->
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-white mb-4 flex items-center">
                        <i class="fas fa-history mr-2 text-orange-400"></i>
                        Recent Activity
                    </h3>
                    <div class="space-y-3 max-h-64 overflow-y-auto">
                        <div ng-repeat="activity in $ctrl.recentActivity" 
                             class="flex items-start space-x-3 p-3 bg-black/20 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                                 ng-class="activity.type === 'message' ? 'bg-blue-500/20 text-blue-400' : 
                                          activity.type === 'user' ? 'bg-green-500/20 text-green-400' : 
                                          'bg-purple-500/20 text-purple-400'">
                                <i class="fas" ng-class="activity.icon"></i>
                            </div>
                            <div class="flex-1">
                                <p class="text-white text-sm">{{activity.description}}</p>
                                <p class="text-white/60 text-xs mt-1">{{activity.timestamp | date:'HH:mm:ss'}}</p>
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
            totalMessages: 15247,
            activeUsers: 342,
            totalRooms: 28,
            avgResponseTime: 145,
            engagementRate: 78
        };
        
        ctrl.messageActivity = [
            { label: 'Mon', value: 65, count: 1250 },
            { label: 'Tue', value: 78, count: 1580 },
            { label: 'Wed', value: 45, count: 890 },
            { label: 'Thu', value: 89, count: 1780 },
            { label: 'Fri', value: 92, count: 1850 },
            { label: 'Sat', value: 67, count: 1340 },
            { label: 'Sun', value: 54, count: 1080 }
        ];
        
        ctrl.services = [
            {
                name: 'Chat Service',
                description: 'Real-time messaging & WebSocket',
                status: 'healthy',
                icon: 'fa-comments',
                uptime: '99.9%'
            },
            {
                name: 'User Service',
                description: 'Authentication & user management',
                status: 'healthy',
                icon: 'fa-users',
                uptime: '99.8%'
            },
            {
                name: 'Analytics Service',
                description: 'Data processing & insights',
                status: 'healthy',
                icon: 'fa-chart-bar',
                uptime: '99.7%'
            }
        ];
        
        ctrl.recentActivity = [
            {
                type: 'message',
                icon: 'fa-comment',
                description: 'New message in General Discussion',
                timestamp: new Date(Date.now() - 30000)
            },
            {
                type: 'user',
                icon: 'fa-user-plus',
                description: 'Alice Johnson joined the platform',
                timestamp: new Date(Date.now() - 120000)
            },
            {
                type: 'system',
                icon: 'fa-cog',
                description: 'Analytics service restarted',
                timestamp: new Date(Date.now() - 300000)
            },
            {
                type: 'message',
                icon: 'fa-comment',
                description: 'New message in Tech Talk',
                timestamp: new Date(Date.now() - 450000)
            }
        ];
        
        // Simulate real-time updates
        const updateStats = function() {
            ctrl.stats.totalMessages += Math.floor(Math.random() * 5);
            ctrl.stats.activeUsers += Math.floor(Math.random() * 3) - 1;
            ctrl.stats.avgResponseTime += Math.floor(Math.random() * 10) - 5;
            
            // Add new activity
            const activities = [
                { type: 'message', icon: 'fa-comment', description: 'New message received' },
                { type: 'user', icon: 'fa-user', description: 'User came online' },
                { type: 'system', icon: 'fa-server', description: 'Health check completed' }
            ];
            
            const newActivity = activities[Math.floor(Math.random() * activities.length)];
            newActivity.timestamp = new Date();
            
            ctrl.recentActivity.unshift(newActivity);
            if (ctrl.recentActivity.length > 10) {
                ctrl.recentActivity.pop();
            }
        };
        
        // Update every 5 seconds
        const interval = $interval(updateStats, 5000);
        
        // Cleanup
        ctrl.$onDestroy = function() {
            if (interval) {
                $interval.cancel(interval);
            }
        };
    }
});