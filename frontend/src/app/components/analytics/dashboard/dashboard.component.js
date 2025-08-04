angular.module('chatApp')
.component('analyticsDashboard', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
                    <p class="text-slate-400">Real-time insights from your microservices platform</p>
                </div>
                <div class="flex items-center space-x-3">
                    <select class="input-modern py-2 px-3 text-sm">
                        <option>Last 24 hours</option>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                    </select>
                    <button class="btn-primary py-2 px-4 text-sm">
                        <i class="fas fa-download mr-2"></i>Export
                    </button>
                </div>
            </div>
            
            <!-- Stats Grid -->
            <div class="grid grid-auto-fit gap-6">
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                            <i class="fas fa-comments text-white"></i>
                        </div>
                        <span class="text-emerald-400 text-sm font-medium flex items-center">
                            <i class="fas fa-arrow-up mr-1"></i>+12%
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.totalMessages | number}}</h3>
                    <p class="text-slate-400 text-sm">Total Messages</p>
                </div>
                
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                            <i class="fas fa-users text-white"></i>
                        </div>
                        <span class="text-emerald-400 text-sm font-medium flex items-center">
                            <i class="fas fa-arrow-up mr-1"></i>+8%
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.activeUsers | number}}</h3>
                    <p class="text-slate-400 text-sm">Active Users</p>
                </div>
                
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <i class="fas fa-hashtag text-white"></i>
                        </div>
                        <span class="text-red-400 text-sm font-medium flex items-center">
                            <i class="fas fa-arrow-down mr-1"></i>-2%
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.totalRooms | number}}</h3>
                    <p class="text-slate-400 text-sm">Chat Rooms</p>
                </div>
                
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                            <i class="fas fa-bolt text-white"></i>
                        </div>
                        <span class="text-emerald-400 text-sm font-medium flex items-center">
                            <i class="fas fa-arrow-up mr-1"></i>+15%
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.avgResponseTime}}ms</h3>
                    <p class="text-slate-400 text-sm">Avg Response Time</p>
                </div>
            </div>
            
            <!-- Charts -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="card-modern p-6">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fas fa-chart-area mr-2 text-cyan-400"></i>
                        Message Activity
                    </h3>
                    <div class="h-64 flex items-end justify-between space-x-2">
                        <div ng-repeat="bar in $ctrl.messageActivity" 
                             class="flex-1 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-cyan-400 hover:to-blue-300 cursor-pointer"
                             ng-style="{'height': bar.value + '%'}"
                             title="{{bar.label}}: {{bar.count}} messages">
                        </div>
                    </div>
                    <div class="flex justify-between mt-4 text-sm text-slate-400">
                        <span ng-repeat="bar in $ctrl.messageActivity">{{bar.label}}</span>
                    </div>
                </div>
                
                <div class="card-modern p-6">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fas fa-chart-pie mr-2 text-violet-400"></i>
                        User Engagement
                    </h3>
                    <div class="h-64 flex items-center justify-center">
                        <div class="relative w-48 h-48">
                            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 via-violet-500 to-pink-500 opacity-80"></div>
                            <div class="absolute inset-4 rounded-full bg-slate-900 flex items-center justify-center">
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-white">{{$ctrl.stats.engagementRate}}%</div>
                                    <div class="text-slate-400 text-sm">Engagement</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div class="flex items-center justify-between">
                            <span class="flex items-center text-slate-400">
                                <div class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                Active
                            </span>
                            <span class="text-white font-medium">65%</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="flex items-center text-slate-400">
                                <div class="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                                Regular
                            </span>
                            <span class="text-white font-medium">25%</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="flex items-center text-slate-400">
                                <div class="w-3 h-3 bg-violet-500 rounded-full mr-2"></div>
                                New
                            </span>
                            <span class="text-white font-medium">10%</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="flex items-center text-slate-400">
                                <div class="w-3 h-3 bg-slate-500 rounded-full mr-2"></div>
                                Inactive
                            </span>
                            <span class="text-white font-medium">5%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Services & Activity -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 card-modern p-6">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fas fa-server mr-2 text-emerald-400"></i>
                        Microservices Health
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div ng-repeat="service in $ctrl.services" 
                             class="bg-slate-800/30 p-4 rounded-xl">
                            <div class="flex items-center justify-between mb-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center"
                                     ng-class="service.bgClass">
                                    <i class="fas text-white" ng-class="service.icon"></i>
                                </div>
                                <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            </div>
                            <h4 class="text-white font-medium mb-1">{{service.name}}</h4>
                            <p class="text-slate-400 text-sm mb-3">{{service.description}}</p>
                            <div class="space-y-1 text-xs">
                                <div class="flex justify-between">
                                    <span class="text-slate-400">Uptime</span>
                                    <span class="text-emerald-400">{{service.uptime}}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-400">Response</span>
                                    <span class="text-cyan-400">{{service.responseTime}}ms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card-modern p-6">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fas fa-stream mr-2 text-orange-400"></i>
                        Live Activity
                    </h3>
                    <div class="space-y-3 max-h-64 overflow-y-auto">
                        <div ng-repeat="activity in $ctrl.recentActivity" 
                             class="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                            <div class="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                                 ng-class="activity.bgClass">
                                <i class="fas text-white" ng-class="activity.icon"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-white text-sm">{{activity.description}}</p>
                                <p class="text-slate-400 text-xs">{{activity.timestamp | date:'HH:mm:ss'}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($interval) {
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
                description: 'Real-time messaging',
                icon: 'fa-comments',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                uptime: '99.9%',
                responseTime: 89
            },
            {
                name: 'User Service',
                description: 'Authentication',
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                uptime: '99.8%',
                responseTime: 156
            },
            {
                name: 'Analytics Service',
                description: 'Data processing',
                icon: 'fa-chart-bar',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                uptime: '99.7%',
                responseTime: 203
            }
        ];
        
        ctrl.recentActivity = [
            {
                icon: 'fa-comment',
                description: 'New message in #general',
                timestamp: new Date(Date.now() - 15000),
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500'
            },
            {
                icon: 'fa-user-plus',
                description: 'User joined the platform',
                timestamp: new Date(Date.now() - 45000),
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600'
            },
            {
                icon: 'fa-chart-line',
                description: 'Analytics report generated',
                timestamp: new Date(Date.now() - 120000),
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600'
            }
        ];
        
        // Real-time updates
        const updateStats = function() {
            ctrl.stats.totalMessages += Math.floor(Math.random() * 5);
            ctrl.stats.activeUsers += Math.floor(Math.random() * 3) - 1;
            
            const newActivity = {
                icon: 'fa-sync',
                description: 'System health check completed',
                timestamp: new Date(),
                bgClass: 'bg-gradient-to-r from-orange-500 to-yellow-500'
            };
            
            ctrl.recentActivity.unshift(newActivity);
            if (ctrl.recentActivity.length > 6) {
                ctrl.recentActivity.pop();
            }
        };
        
        const interval = $interval(updateStats, 5000);
        
        ctrl.$onDestroy = function() {
            if (interval) {
                $interval.cancel(interval);
            }
        };
    }
});