angular.module('chatApp')
.component('systemStatus', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">System Status</h1>
                    <p class="text-slate-400">AWS Infrastructure & Microservices Health</p>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span class="text-emerald-400 font-medium">All Systems Operational</span>
                </div>
            </div>

            <!-- AWS Services Status -->
            <div class="card-modern p-6">
                <h2 class="text-xl font-bold text-white mb-6 flex items-center">
                    <i class="fab fa-aws mr-2 text-orange-400"></i>AWS Services
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div ng-repeat="service in $ctrl.awsServices" 
                         class="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center space-x-3">
                                <i class="fab fa-aws text-orange-400"></i>
                                <h3 class="text-white font-medium">{{service.name}}</h3>
                            </div>
                            <div class="w-2 h-2 rounded-full" ng-class="service.statusColor"></div>
                        </div>
                        <p class="text-slate-400 text-sm mb-2">{{service.description}}</p>
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-500">Region: {{service.region}}</span>
                            <span ng-class="service.statusText">{{service.status}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Microservices Health -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="card-modern p-6">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fas fa-cubes mr-2 text-violet-400"></i>Microservices
                    </h2>
                    <div class="space-y-4">
                        <div ng-repeat="service in $ctrl.microservices" 
                             class="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center" ng-class="service.bgClass">
                                    <i class="fas text-white" ng-class="service.icon"></i>
                                </div>
                                <div>
                                    <h3 class="text-white font-medium">{{service.name}}</h3>
                                    <p class="text-slate-400 text-sm">{{service.endpoint}}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="flex items-center space-x-2 mb-1">
                                    <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                    <span class="text-emerald-400 text-sm">{{service.responseTime}}ms</span>
                                </div>
                                <p class="text-slate-400 text-xs">{{service.requests}}/min</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Container Status -->
                <div class="card-modern p-6">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fab fa-docker mr-2 text-blue-400"></i>Containers (ECS)
                    </h2>
                    <div class="space-y-4">
                        <div ng-repeat="container in $ctrl.containers" 
                             class="p-4 bg-slate-800/30 rounded-xl">
                            <div class="flex items-center justify-between mb-2">
                                <h3 class="text-white font-medium">{{container.name}}</h3>
                                <span class="px-2 py-1 text-xs rounded-full" ng-class="container.statusClass">
                                    {{container.status}}
                                </span>
                            </div>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span class="text-slate-400">CPU:</span>
                                    <span class="text-white ml-2">{{container.cpu}}%</span>
                                </div>
                                <div>
                                    <span class="text-slate-400">Memory:</span>
                                    <span class="text-white ml-2">{{container.memory}}%</span>
                                </div>
                                <div>
                                    <span class="text-slate-400">Tasks:</span>
                                    <span class="text-white ml-2">{{container.tasks}}</span>
                                </div>
                                <div>
                                    <span class="text-slate-400">Uptime:</span>
                                    <span class="text-white ml-2">{{container.uptime}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Performance Metrics -->
            <div class="card-modern p-6">
                <h2 class="text-xl font-bold text-white mb-6 flex items-center">
                    <i class="fas fa-chart-line mr-2 text-cyan-400"></i>Performance Metrics
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-1">{{$ctrl.metrics.totalRequests}}</div>
                        <div class="text-slate-400 text-sm">Total Requests</div>
                        <div class="text-emerald-400 text-xs mt-1">+12% from yesterday</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-1">{{$ctrl.metrics.avgLatency}}ms</div>
                        <div class="text-slate-400 text-sm">Avg Latency</div>
                        <div class="text-emerald-400 text-xs mt-1">-5% from yesterday</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-1">{{$ctrl.metrics.errorRate}}%</div>
                        <div class="text-slate-400 text-sm">Error Rate</div>
                        <div class="text-red-400 text-xs mt-1">+0.1% from yesterday</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-1">${{$ctrl.metrics.awsCost}}</div>
                        <div class="text-slate-400 text-sm">AWS Cost (MTD)</div>
                        <div class="text-yellow-400 text-xs mt-1">+8% from last month</div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($interval) {
        const ctrl = this;
        
        ctrl.awsServices = [
            {
                name: 'ECS Fargate',
                description: 'Container orchestration',
                region: 'us-east-1',
                status: 'Operational',
                statusColor: 'bg-emerald-400',
                statusText: 'text-emerald-400'
            },
            {
                name: 'RDS PostgreSQL',
                description: 'Primary database',
                region: 'us-east-1',
                status: 'Operational',
                statusColor: 'bg-emerald-400',
                statusText: 'text-emerald-400'
            },
            {
                name: 'S3 Bucket',
                description: 'File storage',
                region: 'us-east-1',
                status: 'Operational',
                statusColor: 'bg-emerald-400',
                statusText: 'text-emerald-400'
            },
            {
                name: 'ECR Registry',
                description: 'Container images',
                region: 'us-east-1',
                status: 'Operational',
                statusColor: 'bg-emerald-400',
                statusText: 'text-emerald-400'
            },
            {
                name: 'CloudWatch',
                description: 'Monitoring & logs',
                region: 'us-east-1',
                status: 'Operational',
                statusColor: 'bg-emerald-400',
                statusText: 'text-emerald-400'
            },
            {
                name: 'Application Load Balancer',
                description: 'Traffic distribution',
                region: 'us-east-1',
                status: 'Operational',
                statusColor: 'bg-emerald-400',
                statusText: 'text-emerald-400'
            }
        ];
        
        ctrl.microservices = [
            {
                name: 'Chat Service',
                endpoint: 'chat-service:3001',
                icon: 'fa-comments',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                responseTime: 89,
                requests: 1247
            },
            {
                name: 'User Service',
                endpoint: 'user-service:3002',
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                responseTime: 156,
                requests: 892
            },
            {
                name: 'Analytics Service',
                endpoint: 'analytics-service:3003',
                icon: 'fa-chart-bar',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                responseTime: 203,
                requests: 445
            }
        ];
        
        ctrl.containers = [
            {
                name: 'chat-service-task',
                status: 'RUNNING',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                cpu: 23,
                memory: 45,
                tasks: '2/2',
                uptime: '2d 14h'
            },
            {
                name: 'user-service-task',
                status: 'RUNNING',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                cpu: 18,
                memory: 38,
                tasks: '2/2',
                uptime: '2d 14h'
            },
            {
                name: 'analytics-service-task',
                status: 'RUNNING',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                cpu: 31,
                memory: 52,
                tasks: '1/1',
                uptime: '2d 14h'
            }
        ];
        
        ctrl.metrics = {
            totalRequests: 45672,
            avgLatency: 142,
            errorRate: 0.02,
            awsCost: 127.45
        };
        
        // Real-time updates
        const updateMetrics = function() {
            ctrl.metrics.totalRequests += Math.floor(Math.random() * 10);
            ctrl.metrics.avgLatency += Math.floor(Math.random() * 6) - 3;
            if (ctrl.metrics.avgLatency < 100) ctrl.metrics.avgLatency = 100;
        };
        
        const interval = $interval(updateMetrics, 2000);
        
        ctrl.$onDestroy = function() {
            if (interval) $interval.cancel(interval);
        };
    }
});