angular.module('chatApp')
.component('homePage', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Welcome Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">Welcome back, {{$ctrl.user.name}}!</h1>
                    <p class="text-slate-400">Here's your FlowChat platform overview</p>
                </div>
                <div class="flex items-center space-x-3">
                    <div class="flex items-center space-x-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span class="text-emerald-400 text-sm font-medium">All Systems Online</span>
                    </div>
                </div>
            </div>

            <!-- Platform Stats -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div ng-repeat="stat in $ctrl.platformStats" class="stat-card text-center">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" ng-class="stat.bgClass">
                        <i class="fas text-white" ng-class="stat.icon"></i>
                    </div>
                    <div class="text-2xl font-bold text-white mb-1">{{stat.value}}</div>
                    <div class="text-slate-400 text-sm mb-2">{{stat.label}}</div>
                    <div class="text-xs" ng-class="stat.changeClass">{{stat.change}}</div>
                </div>
            </div>

            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Quick Actions -->
                <div class="lg:col-span-2">
                    <div class="card-modern p-6">
                        <h2 class="text-xl font-bold text-white mb-6">Quick Actions</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div ng-repeat="action in $ctrl.quickActions" 
                                 class="p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all cursor-pointer group border border-transparent hover:border-violet-500/30"
                                 ng-click="$ctrl.navigateTo(action.route)">
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" ng-class="action.bgClass">
                                        <i class="fas text-white" ng-class="action.icon"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h3 class="text-white font-semibold mb-1">{{action.title}}</h3>
                                        <p class="text-slate-400 text-sm">{{action.description}}</p>
                                    </div>
                                    <i class="fas fa-arrow-right text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- System Health -->
                <div class="space-y-6">
                    <div class="card-modern p-6">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center">
                            <i class="fas fa-heartbeat mr-2 text-emerald-400"></i>System Health
                        </h3>
                        <div class="space-y-3">
                            <div ng-repeat="service in $ctrl.systemHealth" 
                                 class="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                                <div class="flex items-center space-x-3">
                                    <div class="w-8 h-8 rounded-lg flex items-center justify-center" ng-class="service.bgClass">
                                        <i class="fas text-white text-sm" ng-class="service.icon"></i>
                                    </div>
                                    <div>
                                        <div class="text-white text-sm font-medium">{{service.name}}</div>
                                        <div class="text-slate-400 text-xs">{{service.status}}</div>
                                    </div>
                                </div>
                                <div class="w-2 h-2 rounded-full" ng-class="service.statusColor"></div>
                            </div>
                        </div>
                        <button ng-click="$ctrl.navigateTo('/status')" class="w-full mt-4 btn-secondary text-sm py-2">
                            View Full Status
                        </button>
                    </div>

                    <!-- Recent Activity -->
                    <div class="card-modern p-6">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center">
                            <i class="fas fa-clock mr-2 text-blue-400"></i>Recent Activity
                        </h3>
                        <div class="space-y-3">
                            <div ng-repeat="activity in $ctrl.recentActivity" 
                                 class="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                                <div class="w-8 h-8 rounded-full flex items-center justify-center" ng-class="activity.bgClass">
                                    <i class="fas text-white text-xs" ng-class="activity.icon"></i>
                                </div>
                                <div class="flex-1">
                                    <div class="text-white text-sm font-medium">{{activity.title}}</div>
                                    <div class="text-slate-400 text-xs">{{activity.description}}</div>
                                    <div class="text-slate-500 text-xs mt-1">{{activity.time}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Microservices Overview -->
            <div class="card-modern p-6">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-xl font-bold text-white flex items-center">
                        <i class="fas fa-cubes mr-2 text-violet-400"></i>Microservices Architecture
                    </h2>
                    <button ng-click="$ctrl.navigateTo('/monitoring')" class="btn-secondary text-sm">
                        View Monitoring
                    </button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div ng-repeat="service in $ctrl.microservices" 
                         class="p-6 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center" ng-class="service.bgClass">
                                    <i class="fas text-white" ng-class="service.icon"></i>
                                </div>
                                <h3 class="text-white font-semibold">{{service.name}}</h3>
                            </div>
                            <span class="px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400">Running</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-slate-400">Port:</span>
                                <span class="text-white font-mono">{{service.port}}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-400">CPU:</span>
                                <span class="text-white">{{service.cpu}}%</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-400">Memory:</span>
                                <span class="text-white">{{service.memory}}%</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-400">Requests:</span>
                                <span class="text-white">{{service.requests}}/min</span>
                            </div>
                        </div>
                        <div class="mt-4 pt-4 border-t border-slate-700/50">
                            <div class="flex justify-between items-center">
                                <span class="text-slate-400 text-xs">Response Time</span>
                                <span class="text-emerald-400 text-sm font-medium">{{service.responseTime}}ms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Technology Stack -->
            <div class="card-modern p-6">
                <h2 class="text-xl font-bold text-white mb-6 flex items-center">
                    <i class="fas fa-layer-group mr-2 text-cyan-400"></i>Technology Stack
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div ng-repeat="tech in $ctrl.techStack" 
                         class="flex flex-col items-center p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all group">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" ng-class="tech.bgClass">
                            <i class="text-white text-xl" ng-class="tech.icon"></i>
                        </div>
                        <div class="text-white text-sm font-medium text-center">{{tech.name}}</div>
                        <div class="text-slate-400 text-xs text-center">{{tech.category}}</div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($location, $interval) {
        const ctrl = this;
        
        ctrl.user = { name: 'Demo User' };
        
        ctrl.platformStats = [
            { label: 'Active Users', value: '1,247', icon: 'fa-users', bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500', change: '+12% today', changeClass: 'text-emerald-400' },
            { label: 'Messages Sent', value: '15.2K', icon: 'fa-comments', bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600', change: '+8% today', changeClass: 'text-emerald-400' },
            { label: 'API Requests', value: '892K', icon: 'fa-exchange-alt', bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600', change: '+15% today', changeClass: 'text-emerald-400' },
            { label: 'Uptime', value: '99.9%', icon: 'fa-server', bgClass: 'bg-gradient-to-r from-orange-500 to-yellow-500', change: 'Last 30 days', changeClass: 'text-slate-400' }
        ];
        
        ctrl.quickActions = [
            { title: 'Start Chatting', description: 'Join real-time conversations', icon: 'fa-comments', bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500', route: '/chat' },
            { title: 'View Analytics', description: 'Platform insights & metrics', icon: 'fa-chart-bar', bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600', route: '/analytics' },
            { title: 'API Documentation', description: 'Explore REST endpoints', icon: 'fa-book', bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600', route: '/docs' },
            { title: 'System Admin', description: 'Manage users & settings', icon: 'fa-cogs', bgClass: 'bg-gradient-to-r from-orange-500 to-red-500', route: '/admin' }
        ];
        
        ctrl.systemHealth = [
            { name: 'Chat Service', status: 'Healthy', icon: 'fa-comments', bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500', statusColor: 'bg-emerald-400 animate-pulse' },
            { name: 'User Service', status: 'Healthy', icon: 'fa-users', bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600', statusColor: 'bg-emerald-400 animate-pulse' },
            { name: 'Analytics Service', status: 'Healthy', icon: 'fa-chart-bar', bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600', statusColor: 'bg-emerald-400 animate-pulse' },
            { name: 'Database', status: 'Healthy', icon: 'fa-database', bgClass: 'bg-gradient-to-r from-slate-500 to-slate-600', statusColor: 'bg-emerald-400 animate-pulse' }
        ];
        
        ctrl.recentActivity = [
            { title: 'New User Registered', description: 'john.doe@company.com joined', time: '2 minutes ago', icon: 'fa-user-plus', bgClass: 'bg-emerald-500' },
            { title: 'System Backup', description: 'Database backup completed', time: '15 minutes ago', icon: 'fa-database', bgClass: 'bg-blue-500' },
            { title: 'Security Scan', description: 'Vulnerability scan passed', time: '1 hour ago', icon: 'fa-shield-alt', bgClass: 'bg-violet-500' },
            { title: 'Performance Alert', description: 'Response time optimized', time: '2 hours ago', icon: 'fa-tachometer-alt', bgClass: 'bg-orange-500' }
        ];
        
        ctrl.microservices = [
            {
                name: 'Chat Service',
                port: '3001',
                icon: 'fa-comments',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                cpu: 23,
                memory: 45,
                requests: 1247,
                responseTime: 89
            },
            {
                name: 'User Service',
                port: '3002',
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                cpu: 18,
                memory: 38,
                requests: 892,
                responseTime: 156
            },
            {
                name: 'Analytics Service',
                port: '3003',
                icon: 'fa-chart-bar',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                cpu: 31,
                memory: 52,
                requests: 445,
                responseTime: 203
            }
        ];
        
        ctrl.techStack = [
            { name: 'Node.js', category: 'Backend', icon: 'fab fa-node-js', bgClass: 'bg-green-600' },
            { name: 'AngularJS', category: 'Frontend', icon: 'fab fa-angular', bgClass: 'bg-red-600' },
            { name: 'PostgreSQL', category: 'Database', icon: 'fas fa-database', bgClass: 'bg-blue-600' },
            { name: 'Docker', category: 'Container', icon: 'fab fa-docker', bgClass: 'bg-blue-500' },
            { name: 'Kubernetes', category: 'Orchestration', icon: 'fas fa-dharmachakra', bgClass: 'bg-blue-400' },
            { name: 'AWS', category: 'Cloud', icon: 'fab fa-aws', bgClass: 'bg-orange-500' }
        ];
        
        // Real-time updates
        const updateStats = function() {
            ctrl.platformStats[0].value = (Math.floor(Math.random() * 50) + 1200).toLocaleString();
            ctrl.platformStats[2].value = (Math.floor(Math.random() * 100) + 850) + 'K';
        };
        
        const interval = $interval(updateStats, 5000);
        
        ctrl.$onDestroy = function() {
            if (interval) $interval.cancel(interval);
        };
        
        ctrl.navigateTo = function(path) {
            $location.path(path);
        };
    }
});