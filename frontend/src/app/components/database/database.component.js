angular.module('chatApp')
.component('databaseManager', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">Database Manager</h1>
                    <p class="text-slate-400">RDS PostgreSQL & DynamoDB management</p>
                </div>
                <div class="flex items-center space-x-3">
                    <button class="btn-secondary">
                        <i class="fas fa-download mr-2"></i>Backup
                    </button>
                    <button class="btn-primary">
                        <i class="fas fa-plus mr-2"></i>New Query
                    </button>
                </div>
            </div>

            <!-- Database Overview -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div ng-repeat="db in $ctrl.databases" class="card-modern p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 rounded-xl flex items-center justify-center" ng-class="db.bgClass">
                                <i class="fas text-white" ng-class="db.icon"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-semibold">{{db.name}}</h3>
                                <p class="text-slate-400 text-sm">{{db.type}}</p>
                            </div>
                        </div>
                        <span class="px-2 py-1 text-xs rounded-full" ng-class="db.statusClass">
                            {{db.status}}
                        </span>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-white">{{db.connections}}</div>
                            <div class="text-slate-400 text-sm">Connections</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-white">{{db.size}}</div>
                            <div class="text-slate-400 text-sm">Size</div>
                        </div>
                    </div>
                    
                    <div class="space-y-2 text-sm">
                        <div class="flex justify-between">
                            <span class="text-slate-400">CPU:</span>
                            <span class="text-white">{{db.cpu}}%</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400">Memory:</span>
                            <span class="text-white">{{db.memory}}%</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400">IOPS:</span>
                            <span class="text-white">{{db.iops}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Query Interface -->
            <div class="card-modern p-6">
                <h2 class="text-xl font-bold text-white mb-6">SQL Query Interface</h2>
                <div class="space-y-4">
                    <div>
                        <label class="block text-white text-sm font-medium mb-2">Database</label>
                        <select ng-model="$ctrl.selectedDb" class="input-modern w-full md:w-64">
                            <option ng-repeat="db in $ctrl.databases" value="{{db.id}}">{{db.name}}</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-white text-sm font-medium mb-2">Query</label>
                        <textarea ng-model="$ctrl.query" 
                                  class="input-modern w-full h-32 font-mono text-sm"
                                  placeholder="SELECT * FROM users LIMIT 10;"></textarea>
                    </div>
                    <div class="flex space-x-3">
                        <button ng-click="$ctrl.executeQuery()" class="btn-primary">
                            <i class="fas fa-play mr-2"></i>Execute
                        </button>
                        <button class="btn-secondary">
                            <i class="fas fa-save mr-2"></i>Save Query
                        </button>
                        <button class="btn-secondary">
                            <i class="fas fa-history mr-2"></i>History
                        </button>
                    </div>
                </div>
            </div>

            <!-- Query Results -->
            <div ng-if="$ctrl.queryResults" class="card-modern p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-white font-semibold">Query Results</h3>
                    <span class="text-slate-400 text-sm">{{$ctrl.queryResults.rows.length}} rows • {{$ctrl.queryResults.duration}}ms</span>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b border-slate-700">
                                <th ng-repeat="col in $ctrl.queryResults.columns" 
                                    class="text-left text-slate-300 font-medium py-2 px-3">{{col}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="row in $ctrl.queryResults.rows" class="border-b border-slate-800/30">
                                <td ng-repeat="cell in row track by $index" 
                                    class="py-2 px-3 text-slate-300 font-mono">{{cell}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Tables Overview -->
            <div class="card-modern p-6">
                <h2 class="text-xl font-bold text-white mb-6">Tables & Collections</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div ng-repeat="table in $ctrl.tables" 
                         class="p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer">
                        <div class="flex items-center justify-between mb-3">
                            <h4 class="text-white font-medium">{{table.name}}</h4>
                            <i class="fas" ng-class="table.icon + ' text-' + table.color + '-400'"></i>
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-slate-400">Rows:</span>
                                <span class="text-white">{{table.rows | number}}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-400">Size:</span>
                                <span class="text-white">{{table.size}}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-400">Last Updated:</span>
                                <span class="text-white">{{table.lastUpdated}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function() {
        const ctrl = this;
        
        ctrl.selectedDb = 'postgres';
        ctrl.query = 'SELECT * FROM users LIMIT 10;';
        
        ctrl.databases = [
            {
                id: 'postgres',
                name: 'FlowChat PostgreSQL',
                type: 'RDS PostgreSQL 14.9',
                icon: 'fa-database',
                bgClass: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                status: 'Available',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                connections: 24,
                size: '2.4 GB',
                cpu: 23,
                memory: 45,
                iops: 1200
            },
            {
                id: 'dynamodb',
                name: 'FlowChat DynamoDB',
                type: 'DynamoDB On-Demand',
                icon: 'fa-bolt',
                bgClass: 'bg-gradient-to-r from-orange-500 to-yellow-500',
                status: 'Active',
                statusClass: 'bg-emerald-500/20 text-emerald-400',
                connections: 156,
                size: '892 MB',
                cpu: 12,
                memory: 28,
                iops: 2400
            }
        ];
        
        ctrl.tables = [
            {
                name: 'users',
                icon: 'fa-users',
                color: 'blue',
                rows: 1247,
                size: '45 MB',
                lastUpdated: '2 min ago'
            },
            {
                name: 'messages',
                icon: 'fa-comments',
                color: 'emerald',
                rows: 15247,
                size: '892 MB',
                lastUpdated: '1 min ago'
            },
            {
                name: 'rooms',
                icon: 'fa-hashtag',
                color: 'violet',
                rows: 28,
                size: '2.1 MB',
                lastUpdated: '5 min ago'
            },
            {
                name: 'analytics_events',
                icon: 'fa-chart-bar',
                color: 'orange',
                rows: 45672,
                size: '1.2 GB',
                lastUpdated: '30 sec ago'
            },
            {
                name: 'user_sessions',
                icon: 'fa-clock',
                color: 'pink',
                rows: 892,
                size: '12 MB',
                lastUpdated: '3 min ago'
            },
            {
                name: 'file_uploads',
                icon: 'fa-file',
                color: 'cyan',
                rows: 567,
                size: '234 MB',
                lastUpdated: '10 min ago'
            }
        ];
        
        ctrl.executeQuery = function() {
            // Simulate query execution
            ctrl.queryResults = {
                columns: ['id', 'username', 'email', 'created_at', 'last_login'],
                rows: [
                    ['1', 'john_doe', 'john@example.com', '2024-01-15 10:30:00', '2024-01-20 14:25:00'],
                    ['2', 'jane_smith', 'jane@example.com', '2024-01-16 09:15:00', '2024-01-20 13:45:00'],
                    ['3', 'bob_wilson', 'bob@example.com', '2024-01-17 11:20:00', '2024-01-19 16:30:00'],
                    ['4', 'alice_brown', 'alice@example.com', '2024-01-18 08:45:00', '2024-01-20 12:15:00'],
                    ['5', 'charlie_davis', 'charlie@example.com', '2024-01-19 14:10:00', '2024-01-20 15:20:00']
                ],
                duration: 142
            };
        };
    }
});