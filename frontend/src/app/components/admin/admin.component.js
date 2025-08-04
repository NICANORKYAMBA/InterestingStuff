angular.module('chatApp')
.component('adminPanel', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">Admin Panel</h1>
                    <p class="text-slate-400">System administration & user management</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="px-3 py-1 bg-violet-500/20 text-violet-400 text-sm rounded-full border border-violet-500/30">
                        <i class="fas fa-shield-alt mr-1"></i>Admin Access
                    </span>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div ng-repeat="action in $ctrl.quickActions" 
                     class="card-modern p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
                     ng-click="$ctrl.executeAction(action.id)">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                         ng-class="action.bgClass">
                        <i class="fas text-white" ng-class="action.icon"></i>
                    </div>
                    <h3 class="text-white font-semibold mb-2">{{action.title}}</h3>
                    <p class="text-slate-400 text-sm">{{action.description}}</p>
                </div>
            </div>

            <!-- Tabs -->
            <div class="card-modern">
                <div class="border-b border-slate-800/50">
                    <nav class="flex space-x-8 px-8 pt-6">
                        <button ng-repeat="tab in $ctrl.tabs" 
                                ng-click="$ctrl.activeTab = tab.id"
                                class="pb-4 px-1 border-b-2 font-medium text-sm transition-colors"
                                ng-class="$ctrl.activeTab === tab.id ? 'border-violet-500 text-violet-400' : 'border-transparent text-slate-400 hover:text-white'">
                            <i class="fas mr-2" ng-class="tab.icon"></i>{{tab.name}}
                        </button>
                    </nav>
                </div>

                <div class="p-8">
                    <!-- Users Tab -->
                    <div ng-if="$ctrl.activeTab === 'users'">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-xl font-bold text-white">User Management</h3>
                            <button class="btn-primary">
                                <i class="fas fa-user-plus mr-2"></i>Add User
                            </button>
                        </div>
                        
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b border-slate-800/50">
                                        <th class="text-left text-slate-400 font-medium py-3">User</th>
                                        <th class="text-left text-slate-400 font-medium py-3">Role</th>
                                        <th class="text-left text-slate-400 font-medium py-3">Status</th>
                                        <th class="text-left text-slate-400 font-medium py-3">Last Active</th>
                                        <th class="text-left text-slate-400 font-medium py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr ng-repeat="user in $ctrl.users" class="border-b border-slate-800/30">
                                        <td class="py-4">
                                            <div class="flex items-center space-x-3">
                                                <img ng-src="{{user.avatar}}" class="w-8 h-8 rounded-full">
                                                <div>
                                                    <div class="text-white font-medium">{{user.name}}</div>
                                                    <div class="text-slate-400 text-sm">{{user.email}}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <span class="px-2 py-1 text-xs rounded-full" ng-class="user.roleClass">
                                                {{user.role}}
                                            </span>
                                        </td>
                                        <td class="py-4">
                                            <span class="px-2 py-1 text-xs rounded-full" ng-class="user.statusClass">
                                                {{user.status}}
                                            </span>
                                        </td>
                                        <td class="py-4 text-slate-400">{{user.lastActive}}</td>
                                        <td class="py-4">
                                            <div class="flex space-x-2">
                                                <button class="text-violet-400 hover:text-violet-300 p-1">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <button class="text-red-400 hover:text-red-300 p-1">
                                                    <i class="fas fa-ban"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Services Tab -->
                    <div ng-if="$ctrl.activeTab === 'services'">
                        <h3 class="text-xl font-bold text-white mb-6">Service Management</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div ng-repeat="service in $ctrl.services" 
                                 class="p-6 bg-slate-800/30 rounded-xl">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-10 h-10 rounded-lg flex items-center justify-center" ng-class="service.bgClass">
                                            <i class="fas text-white" ng-class="service.icon"></i>
                                        </div>
                                        <h4 class="text-white font-medium">{{service.name}}</h4>
                                    </div>
                                    <div class="flex space-x-2">
                                        <button class="text-emerald-400 hover:text-emerald-300 p-1" title="Start">
                                            <i class="fas fa-play"></i>
                                        </button>
                                        <button class="text-red-400 hover:text-red-300 p-1" title="Stop">
                                            <i class="fas fa-stop"></i>
                                        </button>
                                        <button class="text-yellow-400 hover:text-yellow-300 p-1" title="Restart">
                                            <i class="fas fa-redo"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="space-y-2 text-sm">
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Status:</span>
                                        <span class="text-emerald-400">{{service.status}}</span>
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
                                        <span class="text-slate-400">Uptime:</span>
                                        <span class="text-white">{{service.uptime}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Logs Tab -->
                    <div ng-if="$ctrl.activeTab === 'logs'">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-xl font-bold text-white">System Logs</h3>
                            <div class="flex space-x-3">
                                <select ng-model="$ctrl.selectedLogLevel" class="input-modern py-2 px-3 text-sm">
                                    <option value="all">All Levels</option>
                                    <option value="error">Error</option>
                                    <option value="warn">Warning</option>
                                    <option value="info">Info</option>
                                </select>
                                <button class="btn-secondary text-sm">
                                    <i class="fas fa-download mr-2"></i>Export
                                </button>
                            </div>
                        </div>
                        
                        <div class="bg-slate-900/50 rounded-xl p-4 font-mono text-sm max-h-96 overflow-y-auto">
                            <div ng-repeat="log in $ctrl.logs" 
                                 class="flex items-start space-x-3 py-2 border-b border-slate-800/30 last:border-b-0">
                                <span class="text-slate-400 text-xs whitespace-nowrap">{{log.timestamp}}</span>
                                <span class="px-2 py-1 text-xs rounded" ng-class="log.levelClass">{{log.level}}</span>
                                <span class="text-slate-300 flex-1">{{log.message}}</span>
                                <span class="text-slate-500 text-xs">{{log.service}}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Settings Tab -->
                    <div ng-if="$ctrl.activeTab === 'settings'">
                        <h3 class="text-xl font-bold text-white mb-6">System Settings</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 class="text-white font-semibold mb-4">General Settings</h4>
                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-white text-sm font-medium mb-2">Platform Name</label>
                                        <input type="text" value="FlowChat" class="input-modern w-full">
                                    </div>
                                    <div>
                                        <label class="block text-white text-sm font-medium mb-2">Max Users</label>
                                        <input type="number" value="1000" class="input-modern w-full">
                                    </div>
                                    <div>
                                        <label class="block text-white text-sm font-medium mb-2">Session Timeout (minutes)</label>
                                        <input type="number" value="30" class="input-modern w-full">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold mb-4">Security Settings</h4>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                                        <div>
                                            <h5 class="text-white font-medium">Two-Factor Authentication</h5>
                                            <p class="text-slate-400 text-sm">Require 2FA for all users</p>
                                        </div>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" class="sr-only peer">
                                            <div class="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                                        </label>
                                    </div>
                                    <div class="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                                        <div>
                                            <h5 class="text-white font-medium">Rate Limiting</h5>
                                            <p class="text-slate-400 text-sm">Enable API rate limiting</p>
                                        </div>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" checked class="sr-only peer">
                                            <div class="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8">
                            <button class="btn-primary">
                                <i class="fas fa-save mr-2"></i>Save Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function() {
        const ctrl = this;
        
        ctrl.activeTab = 'users';
        ctrl.selectedLogLevel = 'all';
        
        ctrl.quickActions = [
            {
                id: 'restart-services',
                title: 'Restart Services',
                description: 'Restart all microservices',
                icon: 'fa-redo',
                bgClass: 'bg-gradient-to-r from-orange-500 to-yellow-500'
            },
            {
                id: 'backup-db',
                title: 'Backup Database',
                description: 'Create RDS snapshot',
                icon: 'fa-database',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500'
            },
            {
                id: 'clear-cache',
                title: 'Clear Cache',
                description: 'Clear application cache',
                icon: 'fa-broom',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600'
            },
            {
                id: 'view-metrics',
                title: 'CloudWatch Metrics',
                description: 'View AWS metrics',
                icon: 'fa-chart-line',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600'
            }
        ];
        
        ctrl.tabs = [
            { id: 'users', name: 'Users', icon: 'fa-users' },
            { id: 'services', name: 'Services', icon: 'fa-cogs' },
            { id: 'logs', name: 'Logs', icon: 'fa-file-alt' },
            { id: 'settings', name: 'Settings', icon: 'fa-cog' }
        ];
        
        ctrl.users = [
            {
                name: 'John Doe',
                email: 'john@flowchat.com',
                avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=8b5cf6&color=fff',
                role: 'Admin',
                roleClass: 'bg-red-500/20 text-red-400',
                status: 'Active',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                lastActive: '2 minutes ago'
            },
            {
                name: 'Jane Smith',
                email: 'jane@flowchat.com',
                avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=06b6d4&color=fff',
                role: 'Moderator',
                roleClass: 'bg-violet-500/20 text-violet-400',
                status: 'Active',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                lastActive: '5 minutes ago'
            },
            {
                name: 'Bob Wilson',
                email: 'bob@flowchat.com',
                avatar: 'https://ui-avatars.com/api/?name=Bob+Wilson&background=10b981&color=fff',
                role: 'User',
                roleClass: 'bg-slate-500/20 text-slate-400',
                status: 'Inactive',
                statusClass: 'bg-slate-500/20 text-slate-400',
                lastActive: '2 hours ago'
            }
        ];
        
        ctrl.services = [
            {
                name: 'Chat Service',
                icon: 'fa-comments',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                status: 'Running',
                cpu: 23,
                memory: 45,
                uptime: '2d 14h'
            },
            {
                name: 'User Service',
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                status: 'Running',
                cpu: 18,
                memory: 38,
                uptime: '2d 14h'
            },
            {
                name: 'Analytics Service',
                icon: 'fa-chart-bar',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                status: 'Running',
                cpu: 31,
                memory: 52,
                uptime: '2d 14h'
            }
        ];
        
        ctrl.logs = [
            {
                timestamp: '14:32:15',
                level: 'INFO',
                levelClass: 'bg-blue-500/20 text-blue-400',
                message: 'User authentication successful',
                service: 'user-service'
            },
            {
                timestamp: '14:31:42',
                level: 'WARN',
                levelClass: 'bg-yellow-500/20 text-yellow-400',
                message: 'High memory usage detected',
                service: 'chat-service'
            },
            {
                timestamp: '14:30:18',
                level: 'ERROR',
                levelClass: 'bg-red-500/20 text-red-400',
                message: 'Database connection timeout',
                service: 'analytics-service'
            },
            {
                timestamp: '14:29:55',
                level: 'INFO',
                levelClass: 'bg-blue-500/20 text-blue-400',
                message: 'New message sent successfully',
                service: 'chat-service'
            }
        ];
        
        ctrl.executeAction = function(actionId) {
            console.log('Executing action:', actionId);
        };
    }
});