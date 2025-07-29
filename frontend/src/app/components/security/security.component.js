angular.module('chatApp')
.component('securityCenter', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">Security Center</h1>
                    <p class="text-slate-400">IAM, SSL certificates, and compliance monitoring</p>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span class="text-emerald-400 font-medium">Security Score: {{$ctrl.securityScore}}/100</span>
                </div>
            </div>

            <!-- Security Overview -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div ng-repeat="metric in $ctrl.securityMetrics" class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 rounded-xl flex items-center justify-center" ng-class="metric.bgClass">
                            <i class="fas text-white" ng-class="metric.icon"></i>
                        </div>
                        <span class="text-sm font-medium" ng-class="metric.statusClass">{{metric.status}}</span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{metric.value}}</h3>
                    <p class="text-slate-400 text-sm">{{metric.label}}</p>
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
                    <!-- IAM Tab -->
                    <div ng-if="$ctrl.activeTab === 'iam'">
                        <h3 class="text-xl font-bold text-white mb-6">Identity & Access Management</h3>
                        
                        <!-- IAM Users -->
                        <div class="mb-8">
                            <h4 class="text-white font-semibold mb-4">IAM Users & Roles</h4>
                            <div class="overflow-x-auto">
                                <table class="w-full">
                                    <thead>
                                        <tr class="border-b border-slate-800/50">
                                            <th class="text-left text-slate-400 font-medium py-3">Name</th>
                                            <th class="text-left text-slate-400 font-medium py-3">Type</th>
                                            <th class="text-left text-slate-400 font-medium py-3">Permissions</th>
                                            <th class="text-left text-slate-400 font-medium py-3">Last Access</th>
                                            <th class="text-left text-slate-400 font-medium py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr ng-repeat="user in $ctrl.iamUsers" class="border-b border-slate-800/30">
                                            <td class="py-4">
                                                <div class="flex items-center space-x-3">
                                                    <i class="fas" ng-class="user.icon + ' ' + user.iconClass"></i>
                                                    <span class="text-white font-medium">{{user.name}}</span>
                                                </div>
                                            </td>
                                            <td class="py-4">
                                                <span class="px-2 py-1 text-xs rounded-full" ng-class="user.typeClass">
                                                    {{user.type}}
                                                </span>
                                            </td>
                                            <td class="py-4 text-slate-400">{{user.permissions}}</td>
                                            <td class="py-4 text-slate-400">{{user.lastAccess}}</td>
                                            <td class="py-4">
                                                <span class="px-2 py-1 text-xs rounded-full" ng-class="user.statusClass">
                                                    {{user.status}}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Policies -->
                        <div>
                            <h4 class="text-white font-semibold mb-4">Security Policies</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div ng-repeat="policy in $ctrl.policies" 
                                     class="p-4 bg-slate-800/30 rounded-xl">
                                    <div class="flex items-center justify-between mb-3">
                                        <h5 class="text-white font-medium">{{policy.name}}</h5>
                                        <span class="px-2 py-1 text-xs rounded-full" ng-class="policy.statusClass">
                                            {{policy.status}}
                                        </span>
                                    </div>
                                    <p class="text-slate-400 text-sm mb-3">{{policy.description}}</p>
                                    <div class="flex justify-between text-xs">
                                        <span class="text-slate-500">Attached to: {{policy.attachedTo}}</span>
                                        <span class="text-slate-500">{{policy.lastModified}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- SSL Tab -->
                    <div ng-if="$ctrl.activeTab === 'ssl'">
                        <h3 class="text-xl font-bold text-white mb-6">SSL Certificates</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div ng-repeat="cert in $ctrl.certificates" 
                                 class="p-6 bg-slate-800/30 rounded-xl">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center space-x-3">
                                        <i class="fas fa-certificate text-emerald-400"></i>
                                        <h4 class="text-white font-medium">{{cert.domain}}</h4>
                                    </div>
                                    <span class="px-2 py-1 text-xs rounded-full" ng-class="cert.statusClass">
                                        {{cert.status}}
                                    </span>
                                </div>
                                
                                <div class="space-y-2 text-sm">
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Issuer:</span>
                                        <span class="text-white">{{cert.issuer}}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Expires:</span>
                                        <span class="text-white">{{cert.expires}}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Algorithm:</span>
                                        <span class="text-white">{{cert.algorithm}}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Key Size:</span>
                                        <span class="text-white">{{cert.keySize}}</span>
                                    </div>
                                </div>

                                <!-- Expiry Warning -->
                                <div ng-if="cert.daysUntilExpiry < 30" 
                                     class="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                                    <div class="flex items-center space-x-2">
                                        <i class="fas fa-exclamation-triangle text-yellow-400"></i>
                                        <span class="text-yellow-400 text-sm">Expires in {{cert.daysUntilExpiry}} days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Compliance Tab -->
                    <div ng-if="$ctrl.activeTab === 'compliance'">
                        <h3 class="text-xl font-bold text-white mb-6">Compliance & Auditing</h3>
                        
                        <!-- Compliance Score -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div ng-repeat="standard in $ctrl.complianceStandards" 
                                 class="p-6 bg-slate-800/30 rounded-xl">
                                <div class="flex items-center justify-between mb-4">
                                    <h4 class="text-white font-medium">{{standard.name}}</h4>
                                    <span class="text-2xl font-bold" ng-class="standard.scoreClass">{{standard.score}}%</span>
                                </div>
                                <div class="w-full bg-slate-700 rounded-full h-2 mb-4">
                                    <div class="h-2 rounded-full transition-all duration-500" 
                                         ng-class="standard.barClass"
                                         ng-style="{'width': standard.score + '%'}"></div>
                                </div>
                                <p class="text-slate-400 text-sm">{{standard.description}}</p>
                            </div>
                        </div>

                        <!-- Audit Logs -->
                        <div>
                            <h4 class="text-white font-semibold mb-4">Recent Audit Events</h4>
                            <div class="space-y-3">
                                <div ng-repeat="event in $ctrl.auditEvents" 
                                     class="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                                    <div class="flex items-center space-x-3">
                                        <i class="fas" ng-class="event.icon + ' ' + event.iconClass"></i>
                                        <div>
                                            <h5 class="text-white font-medium">{{event.action}}</h5>
                                            <p class="text-slate-400 text-sm">{{event.description}}</p>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <span class="text-slate-400 text-sm">{{event.user}}</span>
                                        <div class="text-slate-500 text-xs">{{event.timestamp}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Threats Tab -->
                    <div ng-if="$ctrl.activeTab === 'threats'">
                        <h3 class="text-xl font-bold text-white mb-6">Threat Detection</h3>
                        
                        <!-- Threat Summary -->
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                            <div ng-repeat="threat in $ctrl.threatSummary" class="text-center p-4 bg-slate-800/30 rounded-xl">
                                <div class="text-2xl font-bold mb-1" ng-class="threat.valueClass">{{threat.value}}</div>
                                <div class="text-slate-400 text-sm">{{threat.label}}</div>
                            </div>
                        </div>

                        <!-- Recent Threats -->
                        <div>
                            <h4 class="text-white font-semibold mb-4">Recent Security Events</h4>
                            <div class="space-y-3">
                                <div ng-repeat="threat in $ctrl.recentThreats" 
                                     class="flex items-center justify-between p-4 rounded-xl border-l-4" 
                                     ng-class="threat.bgClass + ' ' + threat.borderClass">
                                    <div class="flex items-center space-x-3">
                                        <i class="fas" ng-class="threat.icon + ' ' + threat.iconClass"></i>
                                        <div>
                                            <h5 class="text-white font-medium">{{threat.title}}</h5>
                                            <p class="text-slate-400 text-sm">{{threat.description}}</p>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <span class="px-2 py-1 text-xs rounded-full" ng-class="threat.severityClass">
                                            {{threat.severity}}
                                        </span>
                                        <div class="text-slate-500 text-xs mt-1">{{threat.time}}</div>
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
        
        ctrl.activeTab = 'iam';
        ctrl.securityScore = 94;
        
        ctrl.tabs = [
            { id: 'iam', name: 'IAM', icon: 'fa-users-cog' },
            { id: 'ssl', name: 'SSL/TLS', icon: 'fa-certificate' },
            { id: 'compliance', name: 'Compliance', icon: 'fa-shield-alt' },
            { id: 'threats', name: 'Threats', icon: 'fa-exclamation-triangle' }
        ];
        
        ctrl.securityMetrics = [
            {
                label: 'Active Users',
                value: '24',
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                status: 'Secure',
                statusClass: 'text-emerald-400'
            },
            {
                label: 'SSL Certificates',
                value: '3',
                icon: 'fa-certificate',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                status: 'Valid',
                statusClass: 'text-emerald-400'
            },
            {
                label: 'Failed Logins',
                value: '2',
                icon: 'fa-exclamation-triangle',
                bgClass: 'bg-gradient-to-r from-red-500 to-pink-500',
                status: 'Low',
                statusClass: 'text-emerald-400'
            },
            {
                label: 'Compliance',
                value: '98%',
                icon: 'fa-shield-alt',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600',
                status: 'Compliant',
                statusClass: 'text-emerald-400'
            }
        ];
        
        ctrl.iamUsers = [
            {
                name: 'flowchat-admin',
                type: 'User',
                typeClass: 'bg-blue-500/20 text-blue-400',
                permissions: 'AdministratorAccess',
                lastAccess: '2 hours ago',
                status: 'Active',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                icon: 'fa-user',
                iconClass: 'text-blue-400'
            },
            {
                name: 'ecs-task-role',
                type: 'Role',
                typeClass: 'bg-violet-500/20 text-violet-400',
                permissions: 'ECS, RDS, S3',
                lastAccess: '5 minutes ago',
                status: 'Active',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                icon: 'fa-cog',
                iconClass: 'text-violet-400'
            },
            {
                name: 'lambda-execution-role',
                type: 'Role',
                typeClass: 'bg-violet-500/20 text-violet-400',
                permissions: 'Lambda, CloudWatch',
                lastAccess: '1 hour ago',
                status: 'Active',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                icon: 'fa-cog',
                iconClass: 'text-violet-400'
            }
        ];
        
        ctrl.policies = [
            {
                name: 'FlowChatECSPolicy',
                description: 'Allows ECS tasks to access required AWS services',
                status: 'Active',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                attachedTo: '2 roles',
                lastModified: '3 days ago'
            },
            {
                name: 'S3MediaBucketPolicy',
                description: 'Grants read/write access to media storage bucket',
                status: 'Active',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                attachedTo: '1 role',
                lastModified: '1 week ago'
            }
        ];
        
        ctrl.certificates = [
            {
                domain: '*.flowchat.com',
                status: 'Valid',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                issuer: 'AWS Certificate Manager',
                expires: 'Dec 15, 2024',
                algorithm: 'RSA-SHA256',
                keySize: '2048 bits',
                daysUntilExpiry: 45
            },
            {
                domain: 'api.flowchat.com',
                status: 'Valid',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                issuer: 'AWS Certificate Manager',
                expires: 'Nov 20, 2024',
                algorithm: 'RSA-SHA256',
                keySize: '2048 bits',
                daysUntilExpiry: 20
            },
            {
                domain: 'admin.flowchat.com',
                status: 'Expiring Soon',
                statusClass: 'bg-yellow-500/20 text-yellow-400',
                issuer: 'AWS Certificate Manager',
                expires: 'Oct 30, 2024',
                algorithm: 'RSA-SHA256',
                keySize: '2048 bits',
                daysUntilExpiry: 5
            }
        ];
        
        ctrl.complianceStandards = [
            {
                name: 'SOC 2',
                score: 96,
                scoreClass: 'text-emerald-400',
                barClass: 'bg-gradient-to-r from-emerald-500 to-green-400',
                description: 'Security, availability, and confidentiality'
            },
            {
                name: 'GDPR',
                score: 94,
                scoreClass: 'text-emerald-400',
                barClass: 'bg-gradient-to-r from-emerald-500 to-green-400',
                description: 'Data protection and privacy'
            },
            {
                name: 'ISO 27001',
                score: 89,
                scoreClass: 'text-yellow-400',
                barClass: 'bg-gradient-to-r from-yellow-500 to-orange-400',
                description: 'Information security management'
            }
        ];
        
        ctrl.auditEvents = [
            {
                action: 'User Login',
                description: 'Successful admin login from 192.168.1.100',
                user: 'admin@flowchat.com',
                timestamp: '2 minutes ago',
                icon: 'fa-sign-in-alt',
                iconClass: 'text-emerald-400'
            },
            {
                action: 'Policy Modified',
                description: 'ECS task policy permissions updated',
                user: 'admin@flowchat.com',
                timestamp: '1 hour ago',
                icon: 'fa-edit',
                iconClass: 'text-blue-400'
            },
            {
                action: 'Certificate Renewed',
                description: 'SSL certificate for api.flowchat.com renewed',
                user: 'system',
                timestamp: '2 hours ago',
                icon: 'fa-certificate',
                iconClass: 'text-violet-400'
            }
        ];
        
        ctrl.threatSummary = [
            { label: 'Blocked Attacks', value: '127', valueClass: 'text-red-400' },
            { label: 'Suspicious IPs', value: '8', valueClass: 'text-yellow-400' },
            { label: 'Failed Logins', value: '23', valueClass: 'text-orange-400' },
            { label: 'Clean Requests', value: '99.8%', valueClass: 'text-emerald-400' }
        ];
        
        ctrl.recentThreats = [
            {
                title: 'Brute Force Attack',
                description: 'Multiple failed login attempts from 203.0.113.45',
                severity: 'High',
                severityClass: 'bg-red-500/20 text-red-400',
                time: '5 minutes ago',
                icon: 'fa-user-slash',
                iconClass: 'text-red-400',
                bgClass: 'bg-red-500/10',
                borderClass: 'border-red-500'
            },
            {
                title: 'SQL Injection Attempt',
                description: 'Malicious SQL query blocked by WAF',
                severity: 'Medium',
                severityClass: 'bg-yellow-500/20 text-yellow-400',
                time: '15 minutes ago',
                icon: 'fa-database',
                iconClass: 'text-yellow-400',
                bgClass: 'bg-yellow-500/10',
                borderClass: 'border-yellow-500'
            }
        ];
    }
});