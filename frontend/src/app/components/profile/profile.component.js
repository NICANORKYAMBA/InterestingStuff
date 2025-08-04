angular.module('chatApp')
.component('userProfile', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">Profile Settings</h1>
                    <p class="text-slate-400">Manage your account and platform preferences</p>
                </div>
                <div class="flex items-center space-x-3">
                    <div class="flex items-center space-x-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span class="text-emerald-400 text-sm font-medium">Profile Active</span>
                    </div>
                </div>
            </div>

            <!-- Profile Stats -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="stat-card text-center hover:scale-105 transition-all duration-300">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500">
                        <i class="fas fa-comments text-white"></i>
                    </div>
                    <div class="text-2xl font-bold text-white mb-1">1,247</div>
                    <div class="text-slate-400 text-sm mb-2">Messages Sent</div>
                    <div class="text-xs text-emerald-400">+12% this week</div>
                </div>
                <div class="stat-card text-center hover:scale-105 transition-all duration-300">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-green-600">
                        <i class="fas fa-project-diagram text-white"></i>
                    </div>
                    <div class="text-2xl font-bold text-white mb-1">12</div>
                    <div class="text-slate-400 text-sm mb-2">Active Projects</div>
                    <div class="text-xs text-emerald-400">+2 this month</div>
                </div>
                <div class="stat-card text-center hover:scale-105 transition-all duration-300">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-violet-500 to-purple-600">
                        <i class="fas fa-clock text-white"></i>
                    </div>
                    <div class="text-2xl font-bold text-white mb-1">99.9%</div>
                    <div class="text-slate-400 text-sm mb-2">Uptime</div>
                    <div class="text-xs text-violet-400">Last 30 days</div>
                </div>
                <div class="stat-card text-center hover:scale-105 transition-all duration-300">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-orange-500 to-yellow-500">
                        <i class="fas fa-user text-white"></i>
                    </div>
                    <div class="text-2xl font-bold text-white mb-1">{{$ctrl.profile.role}}</div>
                    <div class="text-slate-400 text-sm mb-2">Current Role</div>
                    <div class="text-xs text-slate-400">{{$ctrl.profile.department}}</div>
                </div>
            </div>

            <!-- Navigation Tabs -->
            <div class="card-modern">
                <div class="border-b border-slate-800/50">
                    <nav class="flex space-x-8 px-8 pt-6">
                        <button ng-click="$ctrl.activeTab = 'personal'"
                                class="pb-4 px-1 border-b-2 font-medium text-sm transition-colors"
                                ng-class="$ctrl.activeTab === 'personal' ? 'border-violet-500 text-violet-400' : 'border-transparent text-slate-400 hover:text-white'">
                            <i class="fas fa-user mr-2"></i>Personal Info
                        </button>
                        <button ng-click="$ctrl.activeTab = 'account'"
                                class="pb-4 px-1 border-b-2 font-medium text-sm transition-colors"
                                ng-class="$ctrl.activeTab === 'account' ? 'border-violet-500 text-violet-400' : 'border-transparent text-slate-400 hover:text-white'">
                            <i class="fas fa-cog mr-2"></i>Account Settings
                        </button>
                        <button ng-click="$ctrl.activeTab = 'security'"
                                class="pb-4 px-1 border-b-2 font-medium text-sm transition-colors"
                                ng-class="$ctrl.activeTab === 'security' ? 'border-violet-500 text-violet-400' : 'border-transparent text-slate-400 hover:text-white'">
                            <i class="fas fa-shield-alt mr-2"></i>Security
                        </button>
                        <button ng-click="$ctrl.activeTab = 'preferences'"
                                class="pb-4 px-1 border-b-2 font-medium text-sm transition-colors"
                                ng-class="$ctrl.activeTab === 'preferences' ? 'border-violet-500 text-violet-400' : 'border-transparent text-slate-400 hover:text-white'">
                            <i class="fas fa-palette mr-2"></i>Preferences
                        </button>
                    </nav>
                </div>

                <div class="p-8">
                    <!-- Personal Info Tab -->
                    <div ng-if="$ctrl.activeTab === 'personal'">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-xl font-bold text-white flex items-center">
                                <i class="fas fa-user mr-2 text-violet-400"></i>Personal Information
                            </h3>
                            <div class="flex items-center space-x-4">
                                <div class="relative">
                                    <div class="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                                        <i class="fas fa-user text-white text-xl"></i>
                                    </div>
                                    <button class="absolute -bottom-1 -right-1 w-6 h-6 bg-violet-500 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors">
                                        <i class="fas fa-camera text-white text-xs"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-2xl mx-auto space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-slate-300 text-sm font-medium mb-2">First Name</label>
                                        <input type="text" 
                                               ng-model="$ctrl.profile.firstName"
                                               class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                               placeholder="Enter first name">
                                    </div>
                                    <div>
                                        <label class="block text-slate-300 text-sm font-medium mb-2">Last Name</label>
                                        <input type="text" 
                                               ng-model="$ctrl.profile.lastName"
                                               class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                               placeholder="Enter last name">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-slate-300 text-sm font-medium mb-2">Email</label>
                                    <input type="email" 
                                           ng-model="$ctrl.profile.email"
                                           class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="Enter your email">
                                </div>
                                <div>
                                    <label class="block text-slate-300 text-sm font-medium mb-2">Phone</label>
                                    <input type="tel" 
                                           ng-model="$ctrl.profile.phone"
                                           class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="Enter your phone number">
                                </div>
                                <div>
                                    <label class="block text-slate-300 text-sm font-medium mb-2">Bio</label>
                                    <textarea ng-model="$ctrl.profile.bio"
                                              class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200 h-24 resize-none"
                                              placeholder="Tell us about yourself..."></textarea>
                                </div>
                                <button ng-click="$ctrl.saveProfile()" class="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-violet-500/25">
                                    <i class="fas fa-save mr-2"></i>Save Personal Info
                                </button>
                            </div>
                        </div>

                    <!-- Account Settings Tab -->
                    <div ng-if="$ctrl.activeTab === 'account'">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                            <i class="fas fa-cog mr-2 text-emerald-400"></i>Account Settings
                        </h3>
                            <div class="max-w-2xl mx-auto space-y-6">
                                <div>
                                    <label class="block text-slate-300 text-sm font-medium mb-2">Username</label>
                                    <input type="text" 
                                           ng-model="$ctrl.profile.username"
                                           class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="Enter username">
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-slate-300 text-sm font-medium mb-2">Role</label>
                                        <select ng-model="$ctrl.profile.role" 
                                                class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200">
                                            <option value="Admin">Administrator</option>
                                            <option value="Manager">Manager</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Designer">Designer</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-slate-300 text-sm font-medium mb-2">Department</label>
                                        <select ng-model="$ctrl.profile.department" 
                                                class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200">
                                            <option value="Engineering">Engineering</option>
                                            <option value="Product">Product</option>
                                            <option value="Design">Design</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Sales">Sales</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-slate-300 text-sm font-medium mb-2">Time Zone</label>
                                    <select ng-model="$ctrl.profile.timezone" 
                                            class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200">
                                        <option value="UTC-8">Pacific Time (UTC-8)</option>
                                        <option value="UTC-5">Eastern Time (UTC-5)</option>
                                        <option value="UTC+0">GMT (UTC+0)</option>
                                        <option value="UTC+1">Central European Time (UTC+1)</option>
                                    </select>
                                </div>
                                <div class="bg-slate-800/30 rounded-xl p-4">
                                    <h4 class="text-white font-medium mb-3">Account Status</h4>
                                    <div class="space-y-2">
                                        <div class="flex justify-between">
                                            <span class="text-slate-300">Account Type</span>
                                            <span class="px-2 py-1 bg-violet-500/20 text-violet-400 text-sm rounded-full">Premium</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-slate-300">Member Since</span>
                                            <span class="text-white">January 2024</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-slate-300">Last Login</span>
                                            <span class="text-white">2 hours ago</span>
                                        </div>
                                    </div>
                                </div>
                                <button ng-click="$ctrl.saveAccount()" class="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                                    <i class="fas fa-check mr-2"></i>Update Account
                                </button>
                            </div>
                        </div>

                    <!-- Security Tab -->
                    <div ng-if="$ctrl.activeTab === 'security'">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                            <i class="fas fa-shield-alt mr-2 text-red-400"></i>Security Settings
                        </h3>
                            <div class="max-w-2xl mx-auto space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-slate-300 text-sm font-medium mb-2">Current Password</label>
                                        <input type="password" 
                                               class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                               placeholder="Enter current password">
                                    </div>
                                    <div>
                                        <label class="block text-slate-300 text-sm font-medium mb-2">New Password</label>
                                        <input type="password" 
                                               class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                               placeholder="Enter new password">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-slate-300 text-sm font-medium mb-2">Confirm New Password</label>
                                    <input type="password" 
                                           class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                                           placeholder="Confirm new password">
                                </div>
                                <div class="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                                    <div>
                                        <h4 class="text-white font-medium">Two-Factor Authentication</h4>
                                        <p class="text-slate-400 text-sm">Add extra security to your account</p>
                                    </div>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" ng-model="$ctrl.security.twoFactor" class="sr-only peer">
                                        <div class="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                                    </label>
                                </div>
                                <button class="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-red-500/25">
                                    <i class="fas fa-key mr-2"></i>Update Password
                                </button>
                            </div>
                        </div>

                    <!-- Preferences Tab -->
                    <div ng-if="$ctrl.activeTab === 'preferences'">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                            <i class="fas fa-palette mr-2 text-blue-400"></i>Preferences
                        </h3>
                            <div class="max-w-2xl mx-auto space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-slate-300 text-sm font-medium mb-2">Theme</label>
                                        <select class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200">
                                            <option value="dark">Dark Mode</option>
                                            <option value="light">Light Mode</option>
                                            <option value="auto">Auto</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-slate-300 text-sm font-medium mb-2">Language</label>
                                        <select class="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200">
                                            <option value="en">English</option>
                                            <option value="es">Spanish</option>
                                            <option value="fr">French</option>
                                            <option value="de">German</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                                        <div>
                                            <h4 class="text-white font-medium">Email Notifications</h4>
                                            <p class="text-slate-400 text-sm">Receive email updates</p>
                                        </div>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" ng-model="$ctrl.preferences.emailNotifications" class="sr-only peer">
                                            <div class="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                                        </label>
                                    </div>
                                    <div class="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                                        <div>
                                            <h4 class="text-white font-medium">Push Notifications</h4>
                                            <p class="text-slate-400 text-sm">Browser notifications</p>
                                        </div>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" ng-model="$ctrl.preferences.pushNotifications" class="sr-only peer">
                                            <div class="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                                        </label>
                                    </div>
                                    <div class="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                                        <div>
                                            <h4 class="text-white font-medium">Dark Mode</h4>
                                            <p class="text-slate-400 text-sm">Use dark theme</p>
                                        </div>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" ng-model="$ctrl.preferences.darkMode" class="sr-only peer">
                                            <div class="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-500"></div>
                                        </label>
                                    </div>
                                </div>
                                <button class="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                                    <i class="fas fa-save mr-2"></i>Save Preferences
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function() {
        const ctrl = this;
        
        ctrl.activeTab = 'personal';
        
        ctrl.profile = {
            name: 'Demo User',
            firstName: 'Demo',
            lastName: 'User',
            email: 'demo@flowchat.com',
            phone: '+1 (555) 123-4567',
            username: 'demouser',
            role: 'Developer',
            department: 'Engineering',
            timezone: 'UTC-8',
            bio: 'Full-stack developer passionate about microservices and modern web technologies.'
        };
        
        ctrl.security = {
            twoFactor: false
        };
        
        ctrl.preferences = {
            emailNotifications: true,
            pushNotifications: true,
            darkMode: true
        };
        
        ctrl.saveProfile = function() {
            console.log('Profile saved');
        };
        
        ctrl.saveAccount = function() {
            console.log('Account saved');
        };
    }
});