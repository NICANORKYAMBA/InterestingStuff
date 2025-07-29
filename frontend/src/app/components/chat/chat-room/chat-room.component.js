angular.module('chatApp')
.component('chatRoom', {
    template: `
        <div class="glass-card-modern overflow-hidden min-h-[800px]">
            <!-- Header -->
            <div class="chat-header-modern p-8">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <div class="relative">
                            <div class="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                                <i class="fas fa-hashtag text-white text-2xl"></i>
                            </div>
                            <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
                        </div>
                        <div>
                            <h1 class="text-3xl font-bold text-white mb-1">{{$ctrl.currentRoom.name}}</h1>
                            <div class="flex items-center space-x-4 text-sm">
                                <span class="text-cyan-400 font-medium">{{$ctrl.onlineUsers}} online</span>
                                <span class="text-gray-400">•</span>
                                <span class="text-gray-400">{{$ctrl.messages.length}} messages today</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button class="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-xl border border-white/20">
                            <i class="fas fa-search text-white"></i>
                        </button>
                        <button class="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-xl border border-white/20">
                            <i class="fas fa-phone text-white"></i>
                        </button>
                        <button class="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-xl border border-white/20">
                            <i class="fas fa-video text-white"></i>
                        </button>
                        <div class="w-px h-8 bg-white/20"></div>
                        <button class="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-pink-500/25">
                            <i class="fas fa-cog text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="flex h-[600px]">
                <!-- Sidebar -->
                <div class="w-80 sidebar-modern flex flex-col">
                    <!-- Room List -->
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-white font-bold text-lg">Channels</h3>
                            <button class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                                <i class="fas fa-plus text-white text-sm"></i>
                            </button>
                        </div>
                        <div class="space-y-2">
                            <div ng-repeat="room in $ctrl.rooms" 
                                 class="group flex items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-white/10"
                                 ng-class="{'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30': room.id === $ctrl.currentRoom.id}"
                                 ng-click="$ctrl.selectRoom(room)">
                                <div class="flex items-center space-x-3 flex-1">
                                    <div class="w-3 h-3 rounded-full"
                                         ng-class="room.active ? 'bg-green-400 animate-pulse' : 'bg-gray-500'"></div>
                                    <span class="text-white font-medium group-hover:text-cyan-400 transition-colors">{{room.name}}</span>
                                </div>
                                <div ng-if="room.unread" class="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                                    <span class="text-white text-xs font-bold">{{room.unread}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Online Users -->
                    <div class="flex-1 p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-white font-bold text-lg">Online</h3>
                            <span class="text-cyan-400 text-sm font-medium">{{$ctrl.users.length}}</span>
                        </div>
                        <div class="space-y-3">
                            <div ng-repeat="user in $ctrl.users" 
                                 class="flex items-center p-3 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                                <div class="relative">
                                    <img ng-src="{{user.avatar}}" 
                                         class="w-12 h-12 rounded-2xl border-2 border-green-400 shadow-lg">
                                    <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                                </div>
                                <div class="ml-3 flex-1">
                                    <p class="text-white font-medium group-hover:text-cyan-400 transition-colors">{{user.username}}</p>
                                    <p class="text-gray-400 text-sm">{{user.status}}</p>
                                </div>
                                <div class="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                                        <i class="fas fa-comment text-white text-xs"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Chat Area -->
                <div class="flex-1 flex flex-col">
                    <!-- Messages -->
                    <div class="flex-1 p-8 overflow-y-auto space-y-6" id="messagesContainer">
                        <div ng-repeat="message in $ctrl.messages" 
                             class="flex animate-slideInUp"
                             ng-class="message.isOwn ? 'justify-end' : 'justify-start'">
                            
                            <!-- Received Message -->
                            <div ng-if="!message.isOwn" class="flex items-start space-x-4 max-w-lg animate-slideInLeft">
                                <div class="relative">
                                    <img ng-src="{{message.user.avatar}}" 
                                         class="w-12 h-12 rounded-2xl border-2 border-white/20 shadow-lg">
                                    <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center space-x-3 mb-2">
                                        <span class="text-white font-semibold">{{message.user.username}}</span>
                                        <span class="text-gray-400 text-sm">{{message.timestamp | date:'HH:mm'}}</span>
                                    </div>
                                    <div class="message-bubble-received">
                                        {{message.content}}
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Sent Message -->
                            <div ng-if="message.isOwn" class="flex items-start space-x-4 max-w-lg animate-slideInRight">
                                <div class="flex-1 text-right">
                                    <div class="flex items-center justify-end space-x-3 mb-2">
                                        <span class="text-gray-400 text-sm">{{message.timestamp | date:'HH:mm'}}</span>
                                        <span class="text-white font-semibold">You</span>
                                    </div>
                                    <div class="message-bubble-sent">
                                        {{message.content}}
                                    </div>
                                </div>
                                <div class="relative">
                                    <img ng-src="{{message.user.avatar}}" 
                                         class="w-12 h-12 rounded-2xl border-2 border-cyan-400 shadow-lg shadow-cyan-500/25">
                                    <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-white"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Typing Indicator -->
                        <div ng-if="$ctrl.isTyping" class="flex items-center space-x-4 animate-pulse">
                            <div class="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                                <i class="fas fa-robot text-white"></i>
                            </div>
                            <div class="bg-white/10 backdrop-blur-xl rounded-3xl rounded-bl-lg px-6 py-4 border border-white/20">
                                <div class="flex space-x-2">
                                    <div class="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
                                    <div class="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                                    <div class="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Message Input -->
                    <div class="p-8 border-t border-white/10 bg-black/20 backdrop-blur-xl">
                        <div class="flex items-end space-x-4">
                            <button class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
                                <i class="fas fa-paperclip text-white"></i>
                            </button>
                            
                            <div class="flex-1 relative">
                                <textarea ng-model="$ctrl.newMessage" 
                                         ng-keydown="$ctrl.handleKeyDown($event)"
                                         placeholder="Type something amazing..."
                                         class="glass-input-modern w-full resize-none min-h-[60px] max-h-40 pr-16 font-medium"
                                         rows="1"></textarea>
                                <button ng-click="$ctrl.sendMessage()" 
                                        ng-disabled="!$ctrl.newMessage.trim()"
                                        class="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/25">
                                    <i class="fas fa-paper-plane text-white"></i>
                                </button>
                            </div>
                            
                            <button class="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-yellow-500/25">
                                <i class="fas fa-smile text-white"></i>
                            </button>
                            
                            <button class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                                <i class="fas fa-microphone text-white"></i>
                            </button>
                        </div>
                        
                        <div class="flex items-center justify-between mt-4 text-sm">
                            <div class="flex items-center space-x-4 text-gray-400">
                                <span class="flex items-center space-x-2">
                                    <kbd class="px-2 py-1 bg-white/10 rounded-lg text-xs">Enter</kbd>
                                    <span>to send</span>
                                </span>
                                <span class="flex items-center space-x-2">
                                    <kbd class="px-2 py-1 bg-white/10 rounded-lg text-xs">Shift+Enter</kbd>
                                    <span>new line</span>
                                </span>
                            </div>
                            <span class="text-gray-400">{{$ctrl.newMessage.length}}/1000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($scope, $timeout) {
        const ctrl = this;
        
        ctrl.currentRoom = { id: 1, name: 'General Discussion' };
        ctrl.onlineUsers = 24;
        ctrl.isTyping = false;
        ctrl.newMessage = '';
        
        ctrl.rooms = [
            { id: 1, name: 'General Discussion', active: true, unread: 0 },
            { id: 2, name: 'Tech Innovations', active: true, unread: 5 },
            { id: 3, name: 'Design Studio', active: true, unread: 0 },
            { id: 4, name: 'Random Thoughts', active: true, unread: 2 },
            { id: 5, name: 'Announcements', active: false, unread: 1 },
            { id: 6, name: 'DevOps & Cloud', active: true, unread: 0 }
        ];
        
        ctrl.users = [
            { username: 'Alex Rivera', status: 'Building something cool', avatar: 'https://ui-avatars.com/api/?name=Alex+Rivera&background=06b6d4&color=fff&bold=true' },
            { username: 'Sarah Chen', status: 'In the zone', avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=8b5cf6&color=fff&bold=true' },
            { username: 'Marcus Johnson', status: 'Coffee break', avatar: 'https://ui-avatars.com/api/?name=Marcus+Johnson&background=10b981&color=fff&bold=true' },
            { username: 'Emma Davis', status: 'Debugging life', avatar: 'https://ui-avatars.com/api/?name=Emma+Davis&background=f59e0b&color=fff&bold=true' },
            { username: 'Ryan Park', status: 'Shipping features', avatar: 'https://ui-avatars.com/api/?name=Ryan+Park&background=ef4444&color=fff&bold=true' },
            { username: 'Zoe Martinez', status: 'Design thinking', avatar: 'https://ui-avatars.com/api/?name=Zoe+Martinez&background=ec4899&color=fff&bold=true' }
        ];
        
        ctrl.messages = [
            {
                id: 1,
                content: '🚀 Welcome to NexusChat! This is our next-generation microservices communication platform. Feel free to explore all the features!',
                user: { username: 'NexusBot', avatar: 'https://ui-avatars.com/api/?name=NexusBot&background=6366f1&color=fff&bold=true' },
                timestamp: new Date(Date.now() - 600000),
                isOwn: false
            },
            {
                id: 2,
                content: 'This UI is absolutely stunning! The glassmorphism design and animations are so smooth. Great work on the microservices architecture too! 💎',
                user: { username: 'Alex Rivera', avatar: 'https://ui-avatars.com/api/?name=Alex+Rivera&background=06b6d4&color=fff&bold=true' },
                timestamp: new Date(Date.now() - 480000),
                isOwn: false
            },
            {
                id: 3,
                content: 'Thanks! The containerized approach with Docker and Kubernetes makes scaling so much easier. Plus the real-time features are working perfectly! ⚡',
                user: { username: 'You', avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=06b6d4&color=fff&bold=true' },
                timestamp: new Date(Date.now() - 360000),
                isOwn: true
            },
            {
                id: 4,
                content: 'I love how responsive everything is. The animations and the color scheme create such a modern feel. This is definitely production-ready! 🎨',
                user: { username: 'Sarah Chen', avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=8b5cf6&color=fff&bold=true' },
                timestamp: new Date(Date.now() - 240000),
                isOwn: false
            }
        ];
        
        ctrl.selectRoom = function(room) {
            ctrl.currentRoom = room;
            room.unread = 0;
            console.log('Switched to room:', room.name);
        };
        
        ctrl.handleKeyDown = function(event) {
            if (event.keyCode === 13 && !event.shiftKey) {
                event.preventDefault();
                ctrl.sendMessage();
            }
        };
        
        ctrl.sendMessage = function() {
            if (!ctrl.newMessage.trim()) return;
            
            const message = {
                id: ctrl.messages.length + 1,
                content: ctrl.newMessage.trim(),
                user: { 
                    username: 'You', 
                    avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=06b6d4&color=fff&bold=true' 
                },
                timestamp: new Date(),
                isOwn: true
            };
            
            ctrl.messages.push(message);
            ctrl.newMessage = '';
            
            // Simulate bot response
            $timeout(() => {
                ctrl.isTyping = true;
                $timeout(() => {
                    ctrl.isTyping = false;
                    const responses = [
                        'That\'s an interesting point! The microservices architecture really shines here. 🌟',
                        'Absolutely! The containerization makes deployment so much smoother. 🐳',
                        'I agree! The real-time features are working flawlessly. ⚡',
                        'Great observation! The UI/UX design really enhances the user experience. 🎨',
                        'Exactly! This demonstrates the power of modern web technologies. 🚀'
                    ];
                    
                    ctrl.messages.push({
                        id: ctrl.messages.length + 1,
                        content: responses[Math.floor(Math.random() * responses.length)],
                        user: { 
                            username: 'NexusBot', 
                            avatar: 'https://ui-avatars.com/api/?name=NexusBot&background=6366f1&color=fff&bold=true' 
                        },
                        timestamp: new Date(),
                        isOwn: false
                    });
                    
                    // Auto scroll
                    $timeout(() => {
                        const container = document.getElementById('messagesContainer');
                        if (container) {
                            container.scrollTop = container.scrollHeight;
                        }
                    }, 100);
                }, 2500);
            }, 800);
        };
        
        // Auto scroll on init
        $timeout(() => {
            const container = document.getElementById('messagesContainer');
            if (container) {
                container.scrollTop = container.scrollHeight;
            }
        }, 200);
    }
});