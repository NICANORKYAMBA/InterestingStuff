angular.module('chatApp')
.component('notificationCenter', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">Notification Center</h1>
                    <p class="text-slate-400">Manage all your platform notifications</p>
                </div>
                <div class="flex items-center space-x-3">
                    <div class="flex items-center space-x-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span class="text-emerald-400 text-sm font-medium">Live Updates</span>
                    </div>
                </div>
            </div>

            <!-- Navigation Tabs -->
            <div class="card-modern">
                <div class="border-b border-slate-800/50">
                    <nav class="flex space-x-8 px-8 pt-6">
                        <button ng-click="$ctrl.activeTab = 'inbox'"
                                class="pb-4 px-1 border-b-2 font-medium text-sm transition-colors"
                                ng-class="$ctrl.activeTab === 'inbox' ? 'border-violet-500 text-violet-400' : 'border-transparent text-slate-400 hover:text-white'">
                            <i class="fas fa-inbox mr-2"></i>Inbox
                            <span class="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">5</span>
                        </button>
                        <button ng-click="$ctrl.activeTab = 'send'"
                                class="pb-4 px-1 border-b-2 font-medium text-sm transition-colors"
                                ng-class="$ctrl.activeTab === 'send' ? 'border-violet-500 text-violet-400' : 'border-transparent text-slate-400 hover:text-white'">
                            <i class="fas fa-paper-plane mr-2"></i>Send
                        </button>
                        <button ng-click="$ctrl.activeTab = 'settings'"
                                class="pb-4 px-1 border-b-2 font-medium text-sm transition-colors"
                                ng-class="$ctrl.activeTab === 'settings' ? 'border-violet-500 text-violet-400' : 'border-transparent text-slate-400 hover:text-white'">
                            <i class="fas fa-cog mr-2"></i>Settings
                        </button>
                        <button ng-click="$ctrl.activeTab = 'analytics'"
                                class="pb-4 px-1 border-b-2 font-medium text-sm transition-colors"
                                ng-class="$ctrl.activeTab === 'analytics' ? 'border-violet-500 text-violet-400' : 'border-transparent text-slate-400 hover:text-white'">
                            <i class="fas fa-chart-bar mr-2"></i>Analytics
                        </button>
                    </nav>
                </div>

                <div class="p-8">
                    <!-- Inbox Tab -->
                    <div ng-if="$ctrl.activeTab === 'inbox'">
                        <!-- Filter Bar -->
                        <div class="flex items-center justify-between mb-6">
                            <div class="flex items-center space-x-4">
                                <select ng-model="$ctrl.selectedFilter" class="bg-slate-800/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white text-sm">
                                    <option value="all">All Notifications</option>
                                    <option value="unread">Unread Only</option>
                                    <option value="system">System</option>
                                    <option value="security">Security</option>
                                    <option value="chat">Chat</option>
                                </select>
                                <button ng-click="$ctrl.markAllAsRead()" class="btn-secondary text-sm">
                                    <i class="fas fa-check-double mr-2"></i>Mark All Read
                                </button>
                            </div>
                            <div class="text-slate-400 text-sm">
                                {{$ctrl.filteredNotifications.length}} notifications
                            </div>
                        </div>

                        <!-- Notifications List -->
                        <div class="space-y-3 max-h-96 overflow-y-auto">
                            <div ng-repeat="notification in $ctrl.filteredNotifications" 
                                 class="flex items-start space-x-4 p-4 rounded-xl transition-all duration-200 hover:bg-slate-800/50 cursor-pointer"
                                 ng-class="notification.read ? 'bg-slate-800/20' : 'bg-slate-800/40 border-l-4 border-violet-500'"
                                 ng-click="$ctrl.markAsRead(notification)">
                                
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" ng-class="notification.iconBg">
                                    <i class="fas text-white" ng-class="notification.icon"></i>
                                </div>
                                
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between mb-1">
                                        <h4 class="text-white font-medium" ng-class="!notification.read ? 'font-bold' : ''">{{notification.title}}</h4>
                                        <div class="flex items-center space-x-2">
                                            <span class="px-2 py-1 text-xs rounded-full" ng-class="notification.priorityClass">{{notification.priority}}</span>
                                            <span class="text-slate-400 text-xs">{{notification.time}}</span>
                                        </div>
                                    </div>
                                    <p class="text-slate-300 text-sm mb-2">{{notification.message}}</p>
                                    <div class="flex items-center justify-between">
                                        <span class="px-2 py-1 text-xs rounded-full" ng-class="notification.typeClass">{{notification.type}}</span>
                                        <button ng-click="$ctrl.dismissNotification(notification); $event.stopPropagation()" class="text-slate-400 hover:text-red-400 text-xs">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                <div ng-if="!notification.read" class="w-2 h-2 bg-violet-400 rounded-full flex-shrink-0 mt-2"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Send Tab -->
                    <div ng-if="$ctrl.activeTab === 'send'">
                        <div class="max-w-2xl mx-auto">
                            <h3 class="text-xl font-bold text-white mb-6 text-center">Send Notification</h3>
                            
                            <!-- Notification Type Selection -->
                            <div class="mb-6">
                                <label class="block text-slate-300 text-sm font-medium mb-3">Notification Type</label>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <label ng-repeat="type in $ctrl.notificationTypes" 
                                           class="flex flex-col items-center p-4 border rounded-xl cursor-pointer transition-all"
                                           ng-class="$ctrl.sendForm.type === type.id ? 'border-violet-500 bg-violet-500/10' : 'border-slate-600/50 hover:border-slate-500'">
                                        <input type="radio" ng-model="$ctrl.sendForm.type" ng-value="type.id" class="sr-only">
                                        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-2" ng-class="type.bgClass">
                                            <i class="fas text-white" ng-class="type.icon"></i>
                                        </div>
                                        <span class="text-white text-sm font-medium">{{type.name}}</span>
                                    </label>
                                </div>
                            </div>

                            <!-- Form Fields -->
                            <div class="space-y-4">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-slate-300 text-sm font-medium mb-2">Priority</label>
                                        <select ng-model="$ctrl.sendForm.priority" class="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white">
                                            <option value="low">Low Priority</option>
                                            <option value="medium">Medium Priority</option>
                                            <option value="high">High Priority</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-slate-300 text-sm font-medium mb-2">Target Audience</label>
                                        <select ng-model="$ctrl.sendForm.target" class="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white">
                                            <option value="all">All Users</option>
                                            <option value="admins">Administrators</option>
                                            <option value="managers">Managers</option>
                                            <option value="members">Team Members</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-slate-300 text-sm font-medium mb-2">Title</label>
                                    <input type="text" ng-model="$ctrl.sendForm.title" 
                                           class="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white placeholder-slate-400"
                                           placeholder="Enter notification title">
                                </div>

                                <div>
                                    <label class="block text-slate-300 text-sm font-medium mb-2">Message</label>
                                    <textarea ng-model="$ctrl.sendForm.message" 
                                              class="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white placeholder-slate-400 h-24" 
                                              placeholder="Enter your notification message..."></textarea>
                                </div>

                                <!-- Send Options -->
                                <div class="bg-slate-800/30 rounded-lg p-4">
                                    <h4 class="text-white font-medium mb-3">Delivery Options</h4>
                                    <div class="space-y-2">
                                        <label class="flex items-center">
                                            <input type="checkbox" ng-model="$ctrl.sendForm.sendEmail" class="mr-2 rounded bg-slate-800 border-slate-600 text-violet-500">
                                            <span class="text-slate-300 text-sm">Send via Email (SES)</span>
                                        </label>
                                        <label class="flex items-center">
                                            <input type="checkbox" ng-model="$ctrl.sendForm.sendPush" class="mr-2 rounded bg-slate-800 border-slate-600 text-violet-500">
                                            <span class="text-slate-300 text-sm">Send Push Notification (SNS)</span>
                                        </label>
                                        <label class="flex items-center">
                                            <input type="checkbox" ng-model="$ctrl.sendForm.sendInApp" class="mr-2 rounded bg-slate-800 border-slate-600 text-violet-500">
                                            <span class="text-slate-300 text-sm">In-App Notification</span>
                                        </label>
                                    </div>
                                </div>

                                <button ng-click="$ctrl.sendNotification()" 
                                        ng-disabled="!$ctrl.sendForm.title || !$ctrl.sendForm.message"
                                        class="w-full btn-primary">
                                    <i class="fas fa-paper-plane mr-2"></i>Send Notification
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Settings Tab -->
                    <div ng-if="$ctrl.activeTab === 'settings'">
                        <div class="max-w-2xl mx-auto">
                            <h3 class="text-xl font-bold text-white mb-6">Notification Preferences</h3>
                            
                            <div class="space-y-6">
                                <!-- Email Settings -->
                                <div class="card-modern p-6">
                                    <h4 class="text-lg font-bold text-white mb-4 flex items-center">
                                        <i class="fas fa-envelope mr-2 text-blue-400"></i>Email Notifications
                                    </h4>
                                    <div class="space-y-4">
                                        <div ng-repeat="setting in $ctrl.emailSettings" 
                                             class="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                                            <div>
                                                <h5 class="text-white font-medium">{{setting.title}}</h5>
                                                <p class="text-slate-400 text-sm">{{setting.description}}</p>
                                            </div>
                                            <label class="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" ng-model="setting.enabled" class="sr-only peer">
                                                <div class="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Push Settings -->
                                <div class="card-modern p-6">
                                    <h4 class="text-lg font-bold text-white mb-4 flex items-center">
                                        <i class="fas fa-bell mr-2 text-emerald-400"></i>Push Notifications
                                    </h4>
                                    <div class="space-y-4">
                                        <div ng-repeat="setting in $ctrl.pushSettings" 
                                             class="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                                            <div>
                                                <h5 class="text-white font-medium">{{setting.title}}</h5>
                                                <p class="text-slate-400 text-sm">{{setting.description}}</p>
                                            </div>
                                            <label class="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" ng-model="setting.enabled" class="sr-only peer">
                                                <div class="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <!-- General Settings -->
                                <div class="card-modern p-6">
                                    <h4 class="text-lg font-bold text-white mb-4 flex items-center">
                                        <i class="fas fa-cog mr-2 text-violet-400"></i>General Settings
                                    </h4>
                                    <div class="space-y-4">
                                        <div>
                                            <label class="block text-slate-300 text-sm font-medium mb-2">Notification Sound</label>
                                            <select ng-model="$ctrl.generalSettings.sound" class="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white">
                                                <option value="default">Default</option>
                                                <option value="chime">Chime</option>
                                                <option value="bell">Bell</option>
                                                <option value="none">Silent</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label class="block text-slate-300 text-sm font-medium mb-2">Quiet Hours</label>
                                            <div class="grid grid-cols-2 gap-3">
                                                <input type="time" ng-model="$ctrl.generalSettings.quietStart" 
                                                       class="bg-slate-800/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white">
                                                <input type="time" ng-model="$ctrl.generalSettings.quietEnd" 
                                                       class="bg-slate-800/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white">
                                            </div>
                                            <p class="text-slate-400 text-xs mt-1">No notifications during these hours</p>
                                        </div>
                                    </div>
                                </div>

                                <button ng-click="$ctrl.saveSettings()" class="w-full btn-primary">
                                    <i class="fas fa-save mr-2"></i>Save Settings
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Analytics Tab -->
                    <div ng-if="$ctrl.activeTab === 'analytics'">
                        <h3 class="text-xl font-bold text-white mb-6">Notification Analytics</h3>
                        
                        <!-- Stats Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                            <div ng-repeat="stat in $ctrl.analyticsStats" class="stat-card text-center">
                                <div class="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" ng-class="stat.bgClass">
                                    <i class="fas text-white" ng-class="stat.icon"></i>
                                </div>
                                <div class="text-2xl font-bold text-white mb-1">{{stat.value}}</div>
                                <div class="text-slate-400 text-sm mb-2">{{stat.label}}</div>
                                <div class="text-xs" ng-class="stat.changeClass">{{stat.change}}</div>
                            </div>
                        </div>

                        <!-- Charts -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div class="card-modern p-6">
                                <h4 class="text-white font-semibold mb-4">Delivery Success Rate</h4>
                                <div class="h-48 flex items-end justify-between space-x-2">
                                    <div ng-repeat="bar in $ctrl.deliveryData" 
                                         class="flex-1 bg-gradient-to-t from-emerald-500 to-green-400 rounded-t-lg transition-all duration-500"
                                         ng-style="{'height': bar.value + '%'}"
                                         title="{{bar.day}}: {{bar.rate}}%">
                                    </div>
                                </div>
                                <div class="flex justify-between mt-4 text-sm text-slate-400">
                                    <span ng-repeat="bar in $ctrl.deliveryData track by $index" ng-if="$index % 2 === 0">{{bar.day}}</span>
                                </div>
                            </div>

                            <div class="card-modern p-6">
                                <h4 class="text-white font-semibold mb-4">Notification Types</h4>
                                <div class="space-y-3">
                                    <div ng-repeat="type in $ctrl.typeBreakdown" 
                                         class="flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-4 h-4 rounded-full" ng-class="type.color"></div>
                                            <span class="text-slate-300">{{type.name}}</span>
                                        </div>
                                        <span class="text-white font-medium">{{type.percentage}}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function() {
        const ctrl = this;
        
        ctrl.activeTab = 'inbox';
        ctrl.selectedFilter = 'all';
        
        ctrl.sendForm = {
            type: 'system',
            priority: 'medium',
            target: 'all',
            title: '',
            message: '',
            sendEmail: true,
            sendPush: true,
            sendInApp: true
        };
        
        ctrl.notificationTypes = [
            { id: 'system', name: 'System', icon: 'fa-cog', bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
            { id: 'security', name: 'Security', icon: 'fa-shield-alt', bgClass: 'bg-gradient-to-r from-red-500 to-pink-500' },
            { id: 'chat', name: 'Chat', icon: 'fa-comments', bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600' },
            { id: 'deployment', name: 'Deploy', icon: 'fa-rocket', bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600' }
        ];
        
        ctrl.notifications = [
            {
                id: 1,
                title: 'System Maintenance Scheduled',
                message: 'Scheduled maintenance will occur tonight at 2:00 AM EST. Expected downtime: 30 minutes. All services will be temporarily unavailable.',
                type: 'system',
                priority: 'high',
                time: '2 min ago',
                read: false,
                icon: 'fa-wrench',
                iconBg: 'bg-orange-500',
                typeClass: 'bg-orange-500/20 text-orange-400',
                priorityClass: 'bg-red-500/20 text-red-400'
            },
            {
                id: 2,
                title: 'New User Registration',
                message: 'john.doe@company.com has joined your team and is awaiting approval from an administrator.',
                type: 'chat',
                priority: 'medium',
                time: '5 min ago',
                read: false,
                icon: 'fa-user-plus',
                iconBg: 'bg-emerald-500',
                typeClass: 'bg-emerald-500/20 text-emerald-400',
                priorityClass: 'bg-yellow-500/20 text-yellow-400'
            },
            {
                id: 3,
                title: 'Security Alert: Failed Login Attempts',
                message: 'Multiple failed login attempts detected from IP 192.168.1.100. Account has been temporarily locked for security.',
                type: 'security',
                priority: 'high',
                time: '10 min ago',
                read: true,
                icon: 'fa-shield-alt',
                iconBg: 'bg-red-500',
                typeClass: 'bg-red-500/20 text-red-400',
                priorityClass: 'bg-red-500/20 text-red-400'
            },
            {
                id: 4,
                title: 'Deployment Successful',
                message: 'Chat service v1.2.3 has been successfully deployed to production environment. All tests passed.',
                type: 'deployment',
                priority: 'low',
                time: '1 hour ago',
                read: true,
                icon: 'fa-rocket',
                iconBg: 'bg-blue-500',
                typeClass: 'bg-blue-500/20 text-blue-400',
                priorityClass: 'bg-slate-500/20 text-slate-400'
            },
            {
                id: 5,
                title: 'Database Backup Completed',
                message: 'Automated daily backup completed successfully. Backup size: 2.4 GB. Next backup scheduled for tomorrow at 3:00 AM.',
                type: 'system',
                priority: 'low',
                time: '2 hours ago',
                read: false,
                icon: 'fa-database',
                iconBg: 'bg-violet-500',
                typeClass: 'bg-violet-500/20 text-violet-400',
                priorityClass: 'bg-slate-500/20 text-slate-400'
            },
            {
                id: 6,
                title: 'New Message from Sarah Kim',
                message: 'Hey team! The new analytics dashboard looks amazing. Great work on the real-time charts!',
                type: 'chat',
                priority: 'medium',
                time: '3 hours ago',
                read: true,
                icon: 'fa-comment',
                iconBg: 'bg-cyan-500',
                typeClass: 'bg-cyan-500/20 text-cyan-400',
                priorityClass: 'bg-yellow-500/20 text-yellow-400'
            },
            {
                id: 7,
                title: 'SSL Certificate Renewal',
                message: 'SSL certificate for api.flowchat.com will expire in 30 days. Automatic renewal has been scheduled.',
                type: 'security',
                priority: 'medium',
                time: '4 hours ago',
                read: true,
                icon: 'fa-certificate',
                iconBg: 'bg-green-500',
                typeClass: 'bg-green-500/20 text-green-400',
                priorityClass: 'bg-yellow-500/20 text-yellow-400'
            },
            {
                id: 8,
                title: 'Performance Alert Resolved',
                message: 'High CPU usage alert for Analytics Service has been resolved. CPU usage back to normal levels (23%).',
                type: 'system',
                priority: 'medium',
                time: '6 hours ago',
                read: true,
                icon: 'fa-tachometer-alt',
                iconBg: 'bg-yellow-500',
                typeClass: 'bg-yellow-500/20 text-yellow-400',
                priorityClass: 'bg-yellow-500/20 text-yellow-400'
            },
            {
                id: 9,
                title: 'Weekly Report Generated',
                message: 'Your weekly platform usage report is ready. Total messages: 15,247 | Active users: 1,247 | Uptime: 99.9%',
                type: 'system',
                priority: 'low',
                time: '1 day ago',
                read: true,
                icon: 'fa-chart-line',
                iconBg: 'bg-indigo-500',
                typeClass: 'bg-indigo-500/20 text-indigo-400',
                priorityClass: 'bg-slate-500/20 text-slate-400'
            },
            {
                id: 10,
                title: 'Container Health Check',
                message: 'All Docker containers are running healthy. Memory usage: Chat Service (45%), User Service (38%), Analytics Service (52%).',
                type: 'deployment',
                priority: 'low',
                time: '1 day ago',
                read: true,
                icon: 'fa-docker',
                iconBg: 'bg-blue-600',
                typeClass: 'bg-blue-600/20 text-blue-400',
                priorityClass: 'bg-slate-500/20 text-slate-400'
            }
        ];
        
        ctrl.emailSettings = [
            { title: 'System Alerts', description: 'Important system notifications', enabled: true },
            { title: 'Security Alerts', description: 'Security-related notifications', enabled: true },
            { title: 'Chat Messages', description: 'New message notifications', enabled: false },
            { title: 'Weekly Reports', description: 'Weekly summary emails', enabled: true }
        ];
        
        ctrl.pushSettings = [
            { title: 'Instant Alerts', description: 'Real-time push notifications', enabled: true },
            { title: 'Security Warnings', description: 'Critical security alerts', enabled: true },
            { title: 'System Updates', description: 'System maintenance notifications', enabled: false }
        ];
        
        ctrl.generalSettings = {
            sound: 'default',
            quietStart: '22:00',
            quietEnd: '08:00'
        };
        
        ctrl.analyticsStats = [
            { label: 'Total Sent', value: '2,847', icon: 'fa-paper-plane', bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500', change: '+12% this week', changeClass: 'text-emerald-400' },
            { label: 'Delivered', value: '2,819', icon: 'fa-check', bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600', change: '99.0% rate', changeClass: 'text-emerald-400' },
            { label: 'Opened', value: '1,204', icon: 'fa-eye', bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600', change: '42.7% rate', changeClass: 'text-violet-400' },
            { label: 'Clicked', value: '387', icon: 'fa-mouse-pointer', bgClass: 'bg-gradient-to-r from-orange-500 to-yellow-500', change: '13.6% rate', changeClass: 'text-orange-400' }
        ];
        
        ctrl.deliveryData = [
            { day: 'Mon', rate: 98.2, value: 85 },
            { day: 'Tue', rate: 99.1, value: 95 },
            { day: 'Wed', rate: 97.8, value: 82 },
            { day: 'Thu', rate: 99.5, value: 98 },
            { day: 'Fri', rate: 98.9, value: 92 },
            { day: 'Sat', rate: 97.5, value: 80 },
            { day: 'Sun', rate: 98.7, value: 90 }
        ];
        
        ctrl.typeBreakdown = [
            { name: 'System', percentage: 45, color: 'bg-blue-500' },
            { name: 'Security', percentage: 25, color: 'bg-red-500' },
            { name: 'Chat', percentage: 20, color: 'bg-emerald-500' },
            { name: 'Deployment', percentage: 10, color: 'bg-violet-500' }
        ];
        
        // Filter notifications
        ctrl.updateFilteredNotifications = function() {
            ctrl.filteredNotifications = ctrl.notifications.filter(notification => {
                if (ctrl.selectedFilter === 'all') return true;
                if (ctrl.selectedFilter === 'unread') return !notification.read;
                return notification.type === ctrl.selectedFilter;
            });
        };
        
        ctrl.markAsRead = function(notification) {
            notification.read = true;
            ctrl.updateUnreadCount();
        };
        
        ctrl.markAllAsRead = function() {
            ctrl.notifications.forEach(n => n.read = true);
            ctrl.updateUnreadCount();
        };
        
        ctrl.dismissNotification = function(notification) {
            const index = ctrl.notifications.indexOf(notification);
            if (index > -1) {
                ctrl.notifications.splice(index, 1);
                ctrl.updateFilteredNotifications();
                ctrl.updateUnreadCount();
            }
        };
        
        ctrl.sendNotification = function() {
            if (!ctrl.sendForm.title || !ctrl.sendForm.message) return;
            
            const newNotification = {
                id: Date.now(),
                title: ctrl.sendForm.title,
                message: ctrl.sendForm.message,
                type: ctrl.sendForm.type,
                priority: ctrl.sendForm.priority,
                time: 'Just now',
                read: false,
                icon: 'fa-bell',
                iconBg: 'bg-violet-500',
                typeClass: 'bg-violet-500/20 text-violet-400',
                priorityClass: ctrl.sendForm.priority === 'high' ? 'bg-red-500/20 text-red-400' : 
                             ctrl.sendForm.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                             'bg-slate-500/20 text-slate-400'
            };
            
            ctrl.notifications.unshift(newNotification);
            ctrl.sendForm.title = '';
            ctrl.sendForm.message = '';
            ctrl.updateFilteredNotifications();
            ctrl.updateUnreadCount();
            ctrl.activeTab = 'inbox';
        };
        
        ctrl.saveSettings = function() {
            // Simulate saving settings
            console.log('Settings saved');
        };
        
        ctrl.updateUnreadCount = function() {
            const unreadCount = ctrl.notifications.filter(n => !n.read).length;
        };
        
        // Initialize - set filteredNotifications directly
        ctrl.filteredNotifications = ctrl.notifications;
        ctrl.updateUnreadCount();
        
        // Simple debug
        console.log('Notifications loaded:', ctrl.notifications.length);
        console.log('Filtered notifications:', ctrl.filteredNotifications.length);
    }
});