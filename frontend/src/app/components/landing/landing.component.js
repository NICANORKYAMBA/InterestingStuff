angular.module('chatApp')
.component('landingPage', {
    template: `
        <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            <!-- Animated Background Elements -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute top-20 left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
            </div>

            <!-- Navigation -->
            <nav class="relative z-10 flex items-center justify-between p-6 lg:px-12">
                <div class="flex items-center space-x-3">
                    <div class="w-14 h-14 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-500/50 animate-pulse">
                        <i class="fas fa-comments text-white text-xl"></i>
                    </div>
                    <div>
                        <h1 class="text-3xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">FlowChat</h1>
                        <p class="text-xs text-slate-400 font-semibold tracking-wider">CHAT • ANALYZE • COLLABORATE</p>
                    </div>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#features" class="text-slate-300 hover:text-white transition-colors font-medium">Features</a>
                    <a href="#demo" class="text-slate-300 hover:text-white transition-colors font-medium">Demo</a>
                    <a href="#!/login" class="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-violet-500/25 font-semibold">
                        Get Started
                    </a>
                </div>
            </nav>

            <!-- Hero Section -->
            <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
                <div class="max-w-5xl mx-auto">
                    <!-- Status Badge -->
                    <div class="inline-flex items-center space-x-3 bg-slate-800/60 backdrop-blur-2xl border border-slate-700/50 rounded-full px-6 py-3 mb-8 shadow-2xl">
                        <div class="flex items-center space-x-2">
                            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                            <span class="text-green-400 text-sm font-semibold">Live & Ready</span>
                        </div>
                        <div class="w-px h-4 bg-slate-600"></div>
                        <span class="text-slate-300 text-sm">50K+ Active Users</span>
                    </div>

                    <!-- Main Headline -->
                    <h1 class="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight">
                        Chat. Analyze.
                        <br>
                        <span class="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">Collaborate.</span>
                    </h1>

                    <!-- Subtitle -->
                    <p class="text-2xl lg:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                        The ultimate team communication platform with real-time messaging and powerful analytics insights.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
                        <a href="#!/register" class="group bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/50 flex items-center space-x-3">
                            <i class="fas fa-rocket text-xl group-hover:rotate-12 transition-transform"></i>
                            <span class="text-lg">Start Chatting Now</span>
                        </a>
                        <a href="#!/home" class="group bg-slate-800/60 hover:bg-slate-700/60 backdrop-blur-2xl border border-slate-600/50 hover:border-violet-500/50 text-white font-semibold py-5 px-10 rounded-2xl transition-all duration-300 flex items-center space-x-3 hover:shadow-xl">
                            <i class="fas fa-chart-line text-xl text-violet-400 group-hover:scale-110 transition-transform"></i>
                            <span class="text-lg">View Analytics</span>
                        </a>
                    </div>

                    <!-- Feature Highlights -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div class="flex items-center justify-center space-x-3 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl py-4 px-6 hover:bg-slate-700/40 transition-all duration-300">
                            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                <i class="fas fa-comments text-white"></i>
                            </div>
                            <div class="text-left">
                                <div class="text-white font-semibold">Real-time Chat</div>
                                <div class="text-slate-400 text-sm">Instant messaging</div>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-center space-x-3 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl py-4 px-6 hover:bg-slate-700/40 transition-all duration-300">
                            <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <i class="fas fa-chart-bar text-white"></i>
                            </div>
                            <div class="text-left">
                                <div class="text-white font-semibold">Smart Analytics</div>
                                <div class="text-slate-400 text-sm">Deep insights</div>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-center space-x-3 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl py-4 px-6 hover:bg-slate-700/40 transition-all duration-300">
                            <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                                <i class="fas fa-users text-white"></i>
                            </div>
                            <div class="text-left">
                                <div class="text-white font-semibold">Team Workspace</div>
                                <div class="text-slate-400 text-sm">Collaborate better</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Scroll Indicator -->
                <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div class="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center hover:border-violet-400 transition-colors cursor-pointer">
                        <div class="w-1 h-3 bg-violet-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>

            <!-- Features Section -->
            <section id="features" class="relative z-10 py-20 px-6 lg:px-12">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-5xl lg:text-6xl font-black text-white mb-6">
                            Why Teams Choose <span class="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">FlowChat</span>
                        </h2>
                        <p class="text-2xl text-slate-300 max-w-4xl mx-auto font-light">
                            Experience the perfect blend of instant communication and intelligent analytics in one powerful platform.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl">
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                                <i class="fas fa-comments text-white text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4">Real-Time Chat</h3>
                            <p class="text-slate-400 leading-relaxed">
                                Instant messaging with WebSocket technology, typing indicators, message reactions, and thread conversations.
                            </p>
                        </div>

                        <div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl">
                            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
                                <i class="fas fa-chart-bar text-white text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
                            <p class="text-slate-400 leading-relaxed">
                                Deep insights into team communication patterns, message frequency, user engagement, and productivity metrics.
                            </p>
                        </div>

                        <div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl">
                            <div class="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-500/25">
                                <i class="fas fa-file-upload text-white text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4">File Sharing</h3>
                            <p class="text-slate-400 leading-relaxed">
                                Share documents, images, and files seamlessly with drag-and-drop upload, preview, and version control.
                            </p>
                        </div>

                        <div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl">
                            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                                <i class="fas fa-users-cog text-white text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4">Team Workspace</h3>
                            <p class="text-slate-400 leading-relaxed">
                                Organize teams with channels, private groups, direct messages, and role-based permissions management.
                            </p>
                        </div>

                        <div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl">
                            <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/25">
                                <i class="fas fa-search text-white text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4">Smart Search</h3>
                            <p class="text-slate-400 leading-relaxed">
                                Powerful search across messages, files, and users with filters, keywords, and AI-powered suggestions.
                            </p>
                        </div>

                        <div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl">
                            <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25">
                                <i class="fas fa-bell text-white text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4">Smart Notifications</h3>
                            <p class="text-slate-400 leading-relaxed">
                                Intelligent notification system with custom alerts, do-not-disturb modes, and priority message filtering.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Architecture Section -->
            <section id="architecture" class="relative z-10 py-20 px-6 lg:px-12 bg-slate-900/20">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Built with <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Modern Tech</span>
                        </h2>
                        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
                            Powered by microservices architecture with Docker and Kubernetes for enterprise-scale reliability.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <!-- Frontend -->
                        <div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl">
                            <div class="text-center mb-6">
                                <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
                                    <i class="fas fa-desktop text-white text-3xl"></i>
                                </div>
                                <h3 class="text-2xl font-bold text-white mb-2">Frontend</h3>
                                <p class="text-emerald-400 font-medium">Port 3000</p>
                            </div>
                            <ul class="space-y-3 text-slate-400">
                                <li class="flex items-center space-x-2">
                                    <i class="fab fa-angular text-red-400"></i>
                                    <span>AngularJS SPA</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <i class="fas fa-paint-brush text-blue-400"></i>
                                    <span>TailwindCSS</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <i class="fas fa-mobile-alt text-violet-400"></i>
                                    <span>Responsive Design</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Microservices -->
                        <div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl">
                            <div class="text-center mb-6">
                                <div class="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-500/25">
                                    <i class="fas fa-cubes text-white text-3xl"></i>
                                </div>
                                <h3 class="text-2xl font-bold text-white mb-2">Microservices</h3>
                                <p class="text-violet-400 font-medium">Ports 3001-3003</p>
                            </div>
                            <ul class="space-y-3 text-slate-400">
                                <li class="flex items-center space-x-2">
                                    <i class="fas fa-comments text-blue-400"></i>
                                    <span>Chat Service</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <i class="fas fa-users text-emerald-400"></i>
                                    <span>User Service</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <i class="fas fa-chart-bar text-orange-400"></i>
                                    <span>Analytics Service</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Infrastructure -->
                        <div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl">
                            <div class="text-center mb-6">
                                <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                                    <i class="fas fa-server text-white text-3xl"></i>
                                </div>
                                <h3 class="text-2xl font-bold text-white mb-2">Infrastructure</h3>
                                <p class="text-blue-400 font-medium">Container Ready</p>
                            </div>
                            <ul class="space-y-3 text-slate-400">
                                <li class="flex items-center space-x-2">
                                    <i class="fas fa-database text-blue-400"></i>
                                    <span>PostgreSQL</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <i class="fab fa-docker text-blue-400"></i>
                                    <span>Docker Containers</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <i class="fas fa-dharmachakra text-blue-400"></i>
                                    <span>Kubernetes</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="relative z-10 py-20 px-6 lg:px-12">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8">
                        Transform Your Team Communication
                    </h2>
                    <p class="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Join thousands of teams using FlowChat to streamline communication, boost productivity, and gain valuable insights.
                    </p>
                    
                    <!-- Stats -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-white mb-2">50K+</div>
                            <div class="text-slate-400">Active Users</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-white mb-2">2M+</div>
                            <div class="text-slate-400">Messages Sent</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-white mb-2">99.9%</div>
                            <div class="text-slate-400">Uptime</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-white mb-2">500+</div>
                            <div class="text-slate-400">Companies</div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <a href="#!/register" class="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50 flex items-center space-x-2">
                            <i class="fas fa-rocket"></i>
                            <span>Get Started Free</span>
                        </a>
                        <a href="#!/login" class="bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center space-x-2">
                            <i class="fas fa-sign-in-alt"></i>
                            <span>Sign In</span>
                        </a>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer class="relative z-10 border-t border-slate-800/50 py-12 px-6 lg:px-12">
                <div class="max-w-7xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center justify-between">
                        <div class="flex items-center space-x-3 mb-4 md:mb-0">
                            <div class="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <i class="fas fa-bolt text-white"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-white">FlowChat</h3>
                                <p class="text-xs text-slate-400">Microservices Platform</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-6 text-slate-400">
                            <span class="flex items-center space-x-2">
                                <i class="fab fa-docker text-blue-400"></i>
                                <span>Containerized</span>
                            </span>
                            <span class="flex items-center space-x-2">
                                <i class="fas fa-dharmachakra text-blue-400"></i>
                                <span>K8s Ready</span>
                            </span>
                            <span class="flex items-center space-x-2">
                                <i class="fas fa-cubes text-violet-400"></i>
                                <span>Microservices</span>
                            </span>
                        </div>
                    </div>
                    <div class="mt-8 pt-8 border-t border-slate-800/50 text-center text-slate-400">
                        <p>&copy; ${new Date().getFullYear()} FlowChat Pro. Complete team communication and analytics platform.</p>
                    </div>
                </div>
            </footer>
        </div>
    `,
    controller: function() {
        // Landing page controller logic can go here
    }
});