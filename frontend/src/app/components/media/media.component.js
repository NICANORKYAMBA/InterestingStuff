angular.module('chatApp')
.component('mediaManager', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">Media Manager</h1>
                    <p class="text-slate-400">S3 File Storage & Upload Management</p>
                </div>
                <button class="btn-primary" ng-click="$ctrl.showUploadModal = true">
                    <i class="fas fa-cloud-upload-alt mr-2"></i>Upload Files
                </button>
            </div>

            <!-- Storage Stats -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                            <i class="fas fa-hdd text-white"></i>
                        </div>
                        <span class="text-cyan-400 text-sm">S3</span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.totalSize}}</h3>
                    <p class="text-slate-400 text-sm">Total Storage</p>
                </div>
                
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                            <i class="fas fa-file text-white"></i>
                        </div>
                        <span class="text-emerald-400 text-sm">+{{$ctrl.stats.newFiles}}</span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.totalFiles}}</h3>
                    <p class="text-slate-400 text-sm">Total Files</p>
                </div>
                
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <i class="fas fa-download text-white"></i>
                        </div>
                        <span class="text-violet-400 text-sm">Today</span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">{{$ctrl.stats.downloads}}</h3>
                    <p class="text-slate-400 text-sm">Downloads</p>
                </div>
                
                <div class="stat-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                            <i class="fas fa-dollar-sign text-white"></i>
                        </div>
                        <span class="text-orange-400 text-sm">MTD</span>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-1">${{$ctrl.stats.cost}}</h3>
                    <p class="text-slate-400 text-sm">S3 Cost</p>
                </div>
            </div>

            <!-- File Browser -->
            <div class="card-modern p-6">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-xl font-bold text-white flex items-center">
                        <i class="fas fa-folder mr-2 text-yellow-400"></i>File Browser
                    </h2>
                    <div class="flex items-center space-x-3">
                        <select ng-model="$ctrl.selectedBucket" class="input-modern py-2 px-3 text-sm">
                            <option ng-repeat="bucket in $ctrl.buckets" value="{{bucket.name}}">{{bucket.name}}</option>
                        </select>
                        <div class="flex bg-slate-800/50 rounded-lg p-1">
                            <button ng-click="$ctrl.viewMode = 'grid'" 
                                    class="px-3 py-1 rounded text-sm transition-colors"
                                    ng-class="$ctrl.viewMode === 'grid' ? 'bg-violet-500 text-white' : 'text-slate-400'">
                                <i class="fas fa-th"></i>
                            </button>
                            <button ng-click="$ctrl.viewMode = 'list'" 
                                    class="px-3 py-1 rounded text-sm transition-colors"
                                    ng-class="$ctrl.viewMode === 'list' ? 'bg-violet-500 text-white' : 'text-slate-400'">
                                <i class="fas fa-list"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Grid View -->
                <div ng-if="$ctrl.viewMode === 'grid'" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div ng-repeat="file in $ctrl.files" 
                         class="p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer group">
                        <div class="text-center">
                            <div class="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center"
                                 ng-class="file.iconBg">
                                <i class="fas text-white" ng-class="file.icon"></i>
                            </div>
                            <h3 class="text-white text-sm font-medium truncate mb-1">{{file.name}}</h3>
                            <p class="text-slate-400 text-xs">{{file.size}}</p>
                            <div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button class="text-violet-400 hover:text-violet-300 text-xs mr-2">
                                    <i class="fas fa-download"></i>
                                </button>
                                <button class="text-red-400 hover:text-red-300 text-xs">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- List View -->
                <div ng-if="$ctrl.viewMode === 'list'" class="space-y-2">
                    <div ng-repeat="file in $ctrl.files" 
                         class="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 rounded-lg flex items-center justify-center" ng-class="file.iconBg">
                                <i class="fas text-white text-sm" ng-class="file.icon"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">{{file.name}}</h3>
                                <p class="text-slate-400 text-sm">{{file.uploadDate}} • {{file.size}}</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">{{file.type}}</span>
                            <button class="text-violet-400 hover:text-violet-300 p-1">
                                <i class="fas fa-download"></i>
                            </button>
                            <button class="text-red-400 hover:text-red-300 p-1">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Upload Modal -->
            <div ng-if="$ctrl.showUploadModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div class="card-modern p-8 max-w-md w-full mx-4">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-xl font-bold text-white">Upload to S3</h3>
                        <button ng-click="$ctrl.showUploadModal = false" class="text-slate-400 hover:text-white">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center mb-6">
                        <i class="fas fa-cloud-upload-alt text-4xl text-slate-400 mb-4"></i>
                        <p class="text-white mb-2">Drag & drop files here</p>
                        <p class="text-slate-400 text-sm mb-4">or click to browse</p>
                        <button class="btn-secondary">Choose Files</button>
                    </div>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-white text-sm font-medium mb-2">Bucket</label>
                            <select ng-model="$ctrl.uploadBucket" class="input-modern w-full">
                                <option ng-repeat="bucket in $ctrl.buckets" value="{{bucket.name}}">{{bucket.name}}</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-white text-sm font-medium mb-2">Folder (optional)</label>
                            <input type="text" ng-model="$ctrl.uploadFolder" class="input-modern w-full" placeholder="uploads/">
                        </div>
                    </div>
                    
                    <div class="flex space-x-3 mt-6">
                        <button ng-click="$ctrl.showUploadModal = false" class="btn-secondary flex-1">Cancel</button>
                        <button class="btn-primary flex-1">Upload</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function() {
        const ctrl = this;
        
        ctrl.viewMode = 'grid';
        ctrl.selectedBucket = 'flowchat-media';
        ctrl.showUploadModal = false;
        ctrl.uploadBucket = 'flowchat-media';
        ctrl.uploadFolder = '';
        
        ctrl.stats = {
            totalSize: '2.4 GB',
            totalFiles: 1247,
            newFiles: 23,
            downloads: 892,
            cost: 12.45
        };
        
        ctrl.buckets = [
            { name: 'flowchat-media', region: 'us-east-1' },
            { name: 'flowchat-backups', region: 'us-east-1' },
            { name: 'flowchat-logs', region: 'us-east-1' }
        ];
        
        ctrl.files = [
            {
                name: 'avatar-1.jpg',
                size: '245 KB',
                type: 'image',
                icon: 'fa-image',
                iconBg: 'bg-gradient-to-r from-green-500 to-emerald-600',
                uploadDate: '2024-01-15'
            },
            {
                name: 'chat-export.json',
                size: '1.2 MB',
                type: 'json',
                icon: 'fa-file-code',
                iconBg: 'bg-gradient-to-r from-blue-500 to-cyan-500',
                uploadDate: '2024-01-14'
            },
            {
                name: 'system-logs.txt',
                size: '892 KB',
                type: 'text',
                icon: 'fa-file-alt',
                iconBg: 'bg-gradient-to-r from-slate-500 to-slate-600',
                uploadDate: '2024-01-14'
            },
            {
                name: 'backup.zip',
                size: '15.3 MB',
                type: 'archive',
                icon: 'fa-file-archive',
                iconBg: 'bg-gradient-to-r from-orange-500 to-yellow-500',
                uploadDate: '2024-01-13'
            },
            {
                name: 'profile-pic.png',
                size: '156 KB',
                type: 'image',
                icon: 'fa-image',
                iconBg: 'bg-gradient-to-r from-green-500 to-emerald-600',
                uploadDate: '2024-01-13'
            },
            {
                name: 'analytics.pdf',
                size: '2.1 MB',
                type: 'pdf',
                icon: 'fa-file-pdf',
                iconBg: 'bg-gradient-to-r from-red-500 to-pink-500',
                uploadDate: '2024-01-12'
            }
        ];
    }
});