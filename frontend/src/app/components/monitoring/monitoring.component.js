angular.module('chatApp')
.component('monitoringDashboard', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">Monitoring Dashboard</h1>
                    <p class="text-slate-400">CloudWatch metrics & application performance</p>
                </div>
                <div class="flex items-center space-x-3">
                    <select ng-model="$ctrl.timeRange" class="input-modern py-2 px-3 text-sm">
                        <option value="1h">Last Hour</option>
                        <option value="24h">Last 24 Hours</option>
                        <option value="7d">Last 7 Days</option>
                        <option value="30d">Last 30 Days</option>
                    </select>
                    <button class="btn-primary">
                        <i class="fas fa-sync mr-2"></i>Refresh
                    </button>
                </div>
            </div>

            <!-- Key Metrics -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div ng-repeat="metric in $ctrl.keyMetrics" class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 rounded-xl flex items-center justify-center" ng-class="metric.bgClass">
                            <i class="fas text-white" ng-class="metric.icon"></i>
                        </div>
                        <span class="text-sm font-medium flex items-center" ng-class="metric.trendClass">
                            <i class="fas mr-1" ng-class="metric.trendIcon"></i>{{metric.trend}}
                        </span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{metric.value}}</h3>
                    <p class="text-slate-400 text-sm">{{metric.label}}</p>
                </div>
            </div>

            <!-- Charts Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- CPU Usage -->
                <div class="card-modern p-6">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fas fa-microchip mr-2 text-blue-400"></i>CPU Usage
                    </h3>
                    <div class="h-64 flex items-end justify-between space-x-2">
                        <div ng-repeat="point in $ctrl.cpuData" 
                             class="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition-all duration-500 hover:from-blue-400 hover:to-cyan-300 cursor-pointer relative group"
                             ng-style="{'height': point.value + '%'}"
                             title="{{point.time}}: {{point.cpu}}%">
                            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {{point.cpu}}%
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-4 text-sm text-slate-400">
                        <span ng-repeat="point in $ctrl.cpuData track by $index" ng-if="$index % 4 === 0">{{point.time}}</span>
                    </div>
                </div>

                <!-- Memory Usage -->
                <div class="card-modern p-6">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fas fa-memory mr-2 text-emerald-400"></i>Memory Usage
                    </h3>
                    <div class="h-64 flex items-end justify-between space-x-2">
                        <div ng-repeat="point in $ctrl.memoryData" 
                             class="flex-1 bg-gradient-to-t from-emerald-500 to-green-400 rounded-t-lg transition-all duration-500 hover:from-emerald-400 hover:to-green-300 cursor-pointer relative group"
                             ng-style="{'height': point.value + '%'}"
                             title="{{point.time}}: {{point.memory}}%">
                            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {{point.memory}}%
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-4 text-sm text-slate-400">
                        <span ng-repeat="point in $ctrl.memoryData track by $index" ng-if="$index % 4 === 0">{{point.time}}</span>
                    </div>
                </div>

                <!-- Request Rate -->
                <div class="card-modern p-6">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fas fa-exchange-alt mr-2 text-violet-400"></i>Request Rate
                    </h3>
                    <div class="h-64 flex items-end justify-between space-x-1">
                        <div ng-repeat="point in $ctrl.requestData" 
                             class="flex-1 bg-gradient-to-t from-violet-500 to-purple-400 rounded-t-sm transition-all duration-500 hover:from-violet-400 hover:to-purple-300 cursor-pointer relative group"
                             ng-style="{'height': point.value + '%'}"
                             title="{{point.time}}: {{point.requests}} req/min">
                            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {{point.requests}} req/min
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-4 text-sm text-slate-400">
                        <span ng-repeat="point in $ctrl.requestData track by $index" ng-if="$index % 6 === 0">{{point.time}}</span>
                    </div>
                </div>

                <!-- Error Rate -->
                <div class="card-modern p-6">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fas fa-exclamation-triangle mr-2 text-red-400"></i>Error Rate
                    </h3>
                    <div class="h-64 flex items-end justify-between space-x-1">
                        <div ng-repeat="point in $ctrl.errorData" 
                             class="flex-1 bg-gradient-to-t from-red-500 to-pink-400 rounded-t-sm transition-all duration-500 hover:from-red-400 hover:to-pink-300 cursor-pointer relative group"
                             ng-style="{'height': (point.value * 10) + '%'}"
                             title="{{point.time}}: {{point.errors}}%">
                            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {{point.errors}}%
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-4 text-sm text-slate-400">
                        <span ng-repeat="point in $ctrl.errorData track by $index" ng-if="$index % 6 === 0">{{point.time}}</span>
                    </div>
                </div>
            </div>

            <!-- Service Health -->
            <div class="card-modern p-6">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                    <i class="fas fa-heartbeat mr-2 text-pink-400"></i>Service Health Matrix
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div ng-repeat="service in $ctrl.serviceHealth" 
                         class="p-6 bg-slate-800/30 rounded-xl">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center" ng-class="service.bgClass">
                                    <i class="fas text-white" ng-class="service.icon"></i>
                                </div>
                                <h4 class="text-white font-medium">{{service.name}}</h4>
                            </div>
                            <div class="w-3 h-3 rounded-full" ng-class="service.statusColor"></div>
                        </div>
                        
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-slate-400 text-sm">Response Time</span>
                                <span class="text-white font-medium">{{service.responseTime}}ms</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-slate-400 text-sm">Success Rate</span>
                                <span class="text-emerald-400 font-medium">{{service.successRate}}%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-slate-400 text-sm">Throughput</span>
                                <span class="text-white font-medium">{{service.throughput}}/min</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-slate-400 text-sm">Uptime</span>
                                <span class="text-emerald-400 font-medium">{{service.uptime}}</span>
                            </div>
                        </div>

                        <!-- Health Score -->
                        <div class="mt-4 pt-4 border-t border-slate-700/50">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-slate-400 text-sm">Health Score</span>
                                <span class="text-white font-bold">{{service.healthScore}}/100</span>
                            </div>
                            <div class="w-full bg-slate-700 rounded-full h-2">
                                <div class="h-2 rounded-full transition-all duration-500" 
                                     ng-class="service.healthBarClass"
                                     ng-style="{'width': service.healthScore + '%'}"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Alerts -->
            <div class="card-modern p-6">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                    <i class="fas fa-bell mr-2 text-yellow-400"></i>Active Alerts
                </h3>
                <div class="space-y-3">
                    <div ng-repeat="alert in $ctrl.alerts" 
                         class="flex items-center justify-between p-4 rounded-xl border-l-4" 
                         ng-class="alert.bgClass + ' ' + alert.borderClass">
                        <div class="flex items-center space-x-3">
                            <i class="fas" ng-class="alert.icon + ' ' + alert.iconClass"></i>
                            <div>
                                <h4 class="text-white font-medium">{{alert.title}}</h4>
                                <p class="text-slate-400 text-sm">{{alert.description}}</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-slate-400 text-xs">{{alert.time}}</span>
                            <div class="mt-1">
                                <button class="text-slate-400 hover:text-white text-sm mr-2">
                                    <i class="fas fa-check"></i>
                                </button>
                                <button class="text-slate-400 hover:text-white text-sm">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($interval) {
        const ctrl = this;
        
        ctrl.timeRange = '24h';
        
        ctrl.keyMetrics = [
            {
                label: 'Avg Response Time',
                value: '142ms',
                icon: 'fa-clock',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                trend: '+5%',
                trendIcon: 'fa-arrow-up',
                trendClass: 'text-red-400'
            },
            {
                label: 'Requests/min',
                value: '1,247',
                icon: 'fa-exchange-alt',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                trend: '+12%',
                trendIcon: 'fa-arrow-up',
                trendClass: 'text-emerald-400'
            },
            {
                label: 'Error Rate',
                value: '0.02%',
                icon: 'fa-exclamation-triangle',
                bgClass: 'bg-gradient-to-r from-red-500 to-pink-500',
                trend: '-8%',
                trendIcon: 'fa-arrow-down',
                trendClass: 'text-emerald-400'
            },
            {
                label: 'Uptime',
                value: '99.9%',
                icon: 'fa-heartbeat',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                trend: '0%',
                trendIcon: 'fa-minus',
                trendClass: 'text-slate-400'
            }
        ];
        
        // Generate sample data
        ctrl.cpuData = [];
        ctrl.memoryData = [];
        ctrl.requestData = [];
        ctrl.errorData = [];
        
        for (let i = 0; i < 24; i++) {
            const time = (23 - i) + 'h ago';
            ctrl.cpuData.push({
                time: time,
                cpu: Math.floor(Math.random() * 40) + 20,
                value: Math.floor(Math.random() * 40) + 20
            });
            ctrl.memoryData.push({
                time: time,
                memory: Math.floor(Math.random() * 30) + 30,
                value: Math.floor(Math.random() * 30) + 30
            });
        }
        
        for (let i = 0; i < 60; i++) {
            const time = (59 - i) + 'm';
            ctrl.requestData.push({
                time: time,
                requests: Math.floor(Math.random() * 500) + 800,
                value: Math.floor(Math.random() * 80) + 20
            });
            ctrl.errorData.push({
                time: time,
                errors: (Math.random() * 0.1).toFixed(3),
                value: Math.random() * 5
            });
        }
        
        ctrl.serviceHealth = [
            {
                name: 'Chat Service',
                icon: 'fa-comments',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                statusColor: 'bg-emerald-400 animate-pulse',
                responseTime: 89,
                successRate: 99.8,
                throughput: 1247,
                uptime: '99.9%',
                healthScore: 98,
                healthBarClass: 'bg-gradient-to-r from-emerald-500 to-green-400'
            },
            {
                name: 'User Service',
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                statusColor: 'bg-emerald-400 animate-pulse',
                responseTime: 156,
                successRate: 99.5,
                throughput: 892,
                uptime: '99.8%',
                healthScore: 95,
                healthBarClass: 'bg-gradient-to-r from-emerald-500 to-green-400'
            },
            {
                name: 'Analytics Service',
                icon: 'fa-chart-bar',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                statusColor: 'bg-yellow-400 animate-pulse',
                responseTime: 203,
                successRate: 98.9,
                throughput: 445,
                uptime: '99.7%',
                healthScore: 87,
                healthBarClass: 'bg-gradient-to-r from-yellow-500 to-orange-400'
            }
        ];
        
        ctrl.alerts = [
            {
                title: 'High Memory Usage',
                description: 'Analytics service memory usage above 85%',
                time: '2 min ago',
                icon: 'fa-memory',
                iconClass: 'text-yellow-400',
                bgClass: 'bg-yellow-500/10',
                borderClass: 'border-yellow-500'
            },
            {
                title: 'Slow Response Time',
                description: 'User service response time increased by 15%',
                time: '5 min ago',
                icon: 'fa-clock',
                iconClass: 'text-orange-400',
                bgClass: 'bg-orange-500/10',
                borderClass: 'border-orange-500'
            }
        ];
        
        // Real-time updates
        const updateMetrics = function() {
            ctrl.keyMetrics[1].value = (Math.floor(Math.random() * 200) + 1200).toLocaleString();
            ctrl.keyMetrics[0].value = (Math.floor(Math.random() * 20) + 130) + 'ms';
        };
        
        const interval = $interval(updateMetrics, 3000);
        
        ctrl.$onDestroy = function() {
            if (interval) $interval.cancel(interval);
        };
    }
});