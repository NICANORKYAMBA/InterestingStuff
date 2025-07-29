angular.module('chatApp')
.component('deploymentPipeline', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">CI/CD Pipeline</h1>
                    <p class="text-slate-400">Continuous integration & deployment automation</p>
                </div>
                <div class="flex items-center space-x-3">
                    <button class="btn-secondary">
                        <i class="fas fa-history mr-2"></i>View History
                    </button>
                    <button class="btn-primary">
                        <i class="fas fa-rocket mr-2"></i>Deploy Now
                    </button>
                </div>
            </div>

            <!-- Pipeline Status -->
            <div class="card-modern p-6">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-xl font-bold text-white">Current Pipeline Status</h2>
                    <div class="flex items-center space-x-2">
                        <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span class="text-emerald-400 font-medium">Build #{{$ctrl.currentBuild.number}} - {{$ctrl.currentBuild.status}}</span>
                    </div>
                </div>

                <!-- Pipeline Stages -->
                <div class="relative">
                    <div class="absolute top-8 left-0 right-0 h-0.5 bg-slate-700"></div>
                    <div class="flex justify-between relative">
                        <div ng-repeat="stage in $ctrl.pipelineStages" class="flex flex-col items-center">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-3 relative z-10" 
                                 ng-class="stage.bgClass">
                                <i class="fas text-white" ng-class="stage.icon"></i>
                                <div ng-if="stage.status === 'running'" 
                                     class="absolute inset-0 rounded-full border-2 border-violet-400 animate-spin border-t-transparent"></div>
                            </div>
                            <h3 class="text-white font-medium mb-1">{{stage.name}}</h3>
                            <p class="text-slate-400 text-sm text-center">{{stage.description}}</p>
                            <div class="mt-2 flex items-center space-x-1">
                                <span class="px-2 py-1 text-xs rounded-full" ng-class="stage.statusClass">
                                    {{stage.status}}
                                </span>
                                <span class="text-slate-500 text-xs">{{stage.duration}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Deployment Environments -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div ng-repeat="env in $ctrl.environments" class="card-modern p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-lg flex items-center justify-center" ng-class="env.bgClass">
                                <i class="fas text-white" ng-class="env.icon"></i>
                            </div>
                            <h3 class="text-white font-semibold">{{env.name}}</h3>
                        </div>
                        <span class="px-2 py-1 text-xs rounded-full" ng-class="env.statusClass">
                            {{env.status}}
                        </span>
                    </div>
                    
                    <div class="space-y-3 mb-4">
                        <div class="flex justify-between text-sm">
                            <span class="text-slate-400">Version:</span>
                            <span class="text-white font-mono">{{env.version}}</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span class="text-slate-400">Last Deploy:</span>
                            <span class="text-white">{{env.lastDeploy}}</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span class="text-slate-400">Health:</span>
                            <span class="text-emerald-400">{{env.health}}</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span class="text-slate-400">Instances:</span>
                            <span class="text-white">{{env.instances}}</span>
                        </div>
                    </div>

                    <div class="flex space-x-2">
                        <button class="btn-secondary text-sm flex-1" ng-disabled="env.name === 'Production'">
                            <i class="fas fa-rocket mr-1"></i>Deploy
                        </button>
                        <button class="btn-secondary text-sm px-3">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Recent Deployments -->
            <div class="card-modern p-6">
                <h2 class="text-xl font-bold text-white mb-6">Recent Deployments</h2>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b border-slate-800/50">
                                <th class="text-left text-slate-400 font-medium py-3">Build</th>
                                <th class="text-left text-slate-400 font-medium py-3">Environment</th>
                                <th class="text-left text-slate-400 font-medium py-3">Version</th>
                                <th class="text-left text-slate-400 font-medium py-3">Status</th>
                                <th class="text-left text-slate-400 font-medium py-3">Duration</th>
                                <th class="text-left text-slate-400 font-medium py-3">Deployed By</th>
                                <th class="text-left text-slate-400 font-medium py-3">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="deployment in $ctrl.recentDeployments" class="border-b border-slate-800/30">
                                <td class="py-4">
                                    <span class="text-white font-mono">#{{deployment.build}}</span>
                                </td>
                                <td class="py-4">
                                    <span class="px-2 py-1 text-xs rounded-full" ng-class="deployment.envClass">
                                        {{deployment.environment}}
                                    </span>
                                </td>
                                <td class="py-4 text-slate-400 font-mono">{{deployment.version}}</td>
                                <td class="py-4">
                                    <span class="px-2 py-1 text-xs rounded-full" ng-class="deployment.statusClass">
                                        {{deployment.status}}
                                    </span>
                                </td>
                                <td class="py-4 text-slate-400">{{deployment.duration}}</td>
                                <td class="py-4 text-slate-400">{{deployment.deployedBy}}</td>
                                <td class="py-4 text-slate-400">{{deployment.time}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Infrastructure -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Docker Images -->
                <div class="card-modern p-6">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fab fa-docker mr-2 text-blue-400"></i>Container Images (ECR)
                    </h3>
                    <div class="space-y-4">
                        <div ng-repeat="image in $ctrl.dockerImages" 
                             class="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center" ng-class="image.bgClass">
                                    <i class="fas text-white" ng-class="image.icon"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-medium">{{image.name}}</h4>
                                    <p class="text-slate-400 text-sm">{{image.repository}}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-white font-mono text-sm">{{image.tag}}</div>
                                <div class="text-slate-400 text-xs">{{image.size}} • {{image.pushed}}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Build Metrics -->
                <div class="card-modern p-6">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                        <i class="fas fa-chart-bar mr-2 text-violet-400"></i>Build Metrics
                    </h3>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-white mb-1">{{$ctrl.buildMetrics.successRate}}%</div>
                            <div class="text-slate-400 text-sm">Success Rate</div>
                            <div class="text-emerald-400 text-xs mt-1">+2% this week</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-white mb-1">{{$ctrl.buildMetrics.avgDuration}}</div>
                            <div class="text-slate-400 text-sm">Avg Duration</div>
                            <div class="text-emerald-400 text-xs mt-1">-30s this week</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-white mb-1">{{$ctrl.buildMetrics.totalBuilds}}</div>
                            <div class="text-slate-400 text-sm">Total Builds</div>
                            <div class="text-blue-400 text-xs mt-1">This month</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-white mb-1">{{$ctrl.buildMetrics.deployments}}</div>
                            <div class="text-slate-400 text-sm">Deployments</div>
                            <div class="text-blue-400 text-xs mt-1">This month</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($interval) {
        const ctrl = this;
        
        ctrl.currentBuild = {
            number: 247,
            status: 'Success'
        };
        
        ctrl.pipelineStages = [
            {
                name: 'Source',
                description: 'Git checkout',
                icon: 'fa-code-branch',
                bgClass: 'bg-emerald-500',
                status: 'completed',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                duration: '15s'
            },
            {
                name: 'Build',
                description: 'Docker build',
                icon: 'fa-hammer',
                bgClass: 'bg-blue-500',
                status: 'completed',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                duration: '2m 30s'
            },
            {
                name: 'Test',
                description: 'Unit & integration',
                icon: 'fa-vial',
                bgClass: 'bg-violet-500',
                status: 'completed',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                duration: '1m 45s'
            },
            {
                name: 'Deploy',
                description: 'ECS deployment',
                icon: 'fa-rocket',
                bgClass: 'bg-orange-500',
                status: 'completed',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                duration: '3m 20s'
            }
        ];
        
        ctrl.environments = [
            {
                name: 'Development',
                icon: 'fa-code',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                status: 'Healthy',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                version: 'v1.2.3-dev',
                lastDeploy: '2 hours ago',
                health: '100%',
                instances: '2/2'
            },
            {
                name: 'Staging',
                icon: 'fa-flask',
                bgClass: 'bg-gradient-to-r from-yellow-500 to-orange-500',
                status: 'Healthy',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                version: 'v1.2.2',
                lastDeploy: '1 day ago',
                health: '100%',
                instances: '2/2'
            },
            {
                name: 'Production',
                icon: 'fa-server',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600',
                status: 'Healthy',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                version: 'v1.2.1',
                lastDeploy: '3 days ago',
                health: '99.9%',
                instances: '4/4'
            }
        ];
        
        ctrl.recentDeployments = [
            {
                build: '247',
                environment: 'Development',
                envClass: 'bg-blue-500/20 text-blue-400',
                version: 'v1.2.3-dev',
                status: 'Success',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                duration: '7m 50s',
                deployedBy: 'GitHub Actions',
                time: '2 hours ago'
            },
            {
                build: '246',
                environment: 'Staging',
                envClass: 'bg-yellow-500/20 text-yellow-400',
                version: 'v1.2.2',
                status: 'Success',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                duration: '8m 15s',
                deployedBy: 'admin@flowchat.com',
                time: '1 day ago'
            },
            {
                build: '245',
                environment: 'Production',
                envClass: 'bg-emerald-500/20 text-emerald-400',
                version: 'v1.2.1',
                status: 'Success',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                duration: '12m 30s',
                deployedBy: 'admin@flowchat.com',
                time: '3 days ago'
            },
            {
                build: '244',
                environment: 'Staging',
                envClass: 'bg-yellow-500/20 text-yellow-400',
                version: 'v1.2.0',
                status: 'Failed',
                statusClass: 'bg-red-500/20 text-red-400',
                duration: '5m 20s',
                deployedBy: 'GitHub Actions',
                time: '4 days ago'
            }
        ];
        
        ctrl.dockerImages = [
            {
                name: 'Chat Service',
                repository: 'flowchat/chat-service',
                tag: 'v1.2.3',
                size: '245 MB',
                pushed: '2 hours ago',
                icon: 'fa-comments',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500'
            },
            {
                name: 'User Service',
                repository: 'flowchat/user-service',
                tag: 'v1.2.3',
                size: '198 MB',
                pushed: '2 hours ago',
                icon: 'fa-users',
                bgClass: 'bg-gradient-to-r from-emerald-500 to-green-600'
            },
            {
                name: 'Analytics Service',
                repository: 'flowchat/analytics-service',
                tag: 'v1.2.3',
                size: '312 MB',
                pushed: '2 hours ago',
                icon: 'fa-chart-bar',
                bgClass: 'bg-gradient-to-r from-violet-500 to-purple-600'
            }
        ];
        
        ctrl.buildMetrics = {
            successRate: 94,
            avgDuration: '8m 30s',
            totalBuilds: 247,
            deployments: 89
        };
        
        // Simulate real-time updates
        const updateBuild = function() {
            ctrl.currentBuild.number++;
        };
        
        const interval = $interval(updateBuild, 30000);
        
        ctrl.$onDestroy = function() {
            if (interval) $interval.cancel(interval);
        };
    }
});