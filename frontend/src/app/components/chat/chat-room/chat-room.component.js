angular.module('chatApp')
.component('chatRoom', {
    template: `
        <div class="h-full flex">
            <!-- Sidebar -->
            <div class="w-80 sidebar flex flex-col">
                <!-- Channels -->
                <div class="p-6 border-b border-slate-800/50">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-white font-semibold">Channels</h3>
                        <button class="w-8 h-8 bg-violet-500 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors">
                            <i class="fas fa-plus text-white text-sm"></i>
                        </button>
                    </div>
                    <div class="space-y-1">
                        <div ng-repeat="room in $ctrl.rooms" 
                             class="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-slate-800/50"
                             ng-class="{'bg-violet-500/20 border border-violet-500/30': room.id === $ctrl.currentRoom.id}"
                             ng-click="$ctrl.selectRoom(room)">
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-hashtag text-slate-400 text-sm"></i>
                                <span class="text-white font-medium">{{room.name}}</span>
                            </div>
                            <span ng-if="room.unread" class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{{room.unread}}</span>
                        </div>
                    </div>
                </div>
                
                <!-- Online Users -->
                <div class="flex-1 p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-white font-semibold">Online</h3>
                        <span class="text-emerald-400 text-sm">{{$ctrl.users.length}}</span>
                    </div>
                    <div class="space-y-2">
                        <div ng-repeat="user in $ctrl.users" 
                             class="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors cursor-pointer">
                            <div class="relative">
                                <img ng-src="{{user.avatar}}" class="w-8 h-8 rounded-full">
                                <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900"></div>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-white text-sm font-medium truncate">{{user.username}}</p>
                                <p class="text-slate-400 text-xs truncate">{{user.status}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Chat Area -->
            <div class="flex-1 flex flex-col">
                <!-- Header -->
                <div class="chat-header p-6">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <i class="fas fa-hashtag text-white"></i>
                            </div>
                            <div>
                                <h1 class="text-xl font-bold text-white">{{$ctrl.currentRoom.name}}</h1>
                                <p class="text-slate-400 text-sm">{{$ctrl.onlineUsers}} members • {{$ctrl.messages.length}} messages</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button class="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-colors">
                                <i class="fas fa-search text-slate-400"></i>
                            </button>
                            <button class="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-colors">
                                <i class="fas fa-phone text-slate-400"></i>
                            </button>
                            <button class="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-colors">
                                <i class="fas fa-video text-slate-400"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Messages -->
                <div class="flex-1 p-6 overflow-y-auto space-y-4" id="messagesContainer">
                    <div ng-repeat="message in $ctrl.messages" 
                         class="flex animate-slideUp"
                         ng-class="message.isOwn ? 'justify-end' : 'justify-start'">
                        
                        <!-- Received Message -->
                        <div ng-if="!message.isOwn" class="flex items-start space-x-3 max-w-md">
                            <img ng-src="{{message.user.avatar}}" class="w-8 h-8 rounded-full">
                            <div>
                                <div class="flex items-center space-x-2 mb-1">
                                    <span class="text-white text-sm font-medium">{{message.user.username}}</span>
                                    <span class="text-slate-400 text-xs">{{message.timestamp | date:'HH:mm'}}</span>
                                </div>
                                <div class="message-received">{{message.content}}</div>
                            </div>
                        </div>
                        
                        <!-- Sent Message -->
                        <div ng-if="message.isOwn" class="flex items-start space-x-3 max-w-md">
                            <div class="text-right">
                                <div class="flex items-center justify-end space-x-2 mb-1">
                                    <span class="text-slate-400 text-xs">{{message.timestamp | date:'HH:mm'}}</span>
                                    <span class="text-white text-sm font-medium">You</span>
                                </div>
                                <div class="message-sent">{{message.content}}</div>
                            </div>
                            <img ng-src="{{message.user.avatar}}" class="w-8 h-8 rounded-full">
                        </div>
                    </div>
                    
                    <!-- Typing Indicator -->
                    <div ng-if="$ctrl.isTyping" class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                            <i class="fas fa-robot text-slate-400 text-sm"></i>
                        </div>
                        <div class="bg-slate-800/50 rounded-2xl rounded-bl-md px-4 py-2 border border-slate-700/50">
                            <div class="flex space-x-1">
                                <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                                <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Input -->
                <div class="p-6 border-t border-slate-800/50">
                    <div class="flex items-end space-x-3">
                        <button class="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-colors">
                            <i class="fas fa-paperclip text-slate-400"></i>
                        </button>
                        
                        <div class="flex-1 relative">
                            <textarea ng-model="$ctrl.newMessage" 
                                     ng-keydown="$ctrl.handleKeyDown($event)"
                                     placeholder="Type a message..."
                                     class="input-modern w-full resize-none min-h-[48px] max-h-32 pr-12"
                                     rows="1"></textarea>
                            <button ng-click="$ctrl.sendMessage()" 
                                    ng-disabled="!$ctrl.newMessage.trim()"
                                    class="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-200 disabled:opacity-50">
                                <i class="fas fa-paper-plane text-white text-sm"></i>
                            </button>
                        </div>
                        
                        <button class="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-colors">
                            <i class="fas fa-smile text-slate-400"></i>
                        </button>
                    </div>
                    
                    <div class="flex items-center justify-between mt-3 text-xs text-slate-400">
                        <span>Press Enter to send, Shift+Enter for new line</span>
                        <span>{{$ctrl.newMessage.length}}/500</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($scope, $timeout) {
        const ctrl = this;
        
        ctrl.currentRoom = { id: 1, name: 'general' };
        ctrl.onlineUsers = 24;
        ctrl.isTyping = false;
        ctrl.newMessage = '';
        
        ctrl.rooms = [
            { id: 1, name: 'general', unread: 0 },
            { id: 2, name: 'tech-talk', unread: 3 },
            { id: 3, name: 'design', unread: 0 },
            { id: 4, name: 'random', unread: 1 },
            { id: 5, name: 'announcements', unread: 0 }
        ];
        
        ctrl.users = [
            { username: 'Alex Chen', status: 'Building something cool', avatar: 'https://ui-avatars.com/api/?name=Alex+Chen&background=8b5cf6&color=fff' },
            { username: 'Sarah Kim', status: 'In the zone', avatar: 'https://ui-avatars.com/api/?name=Sarah+Kim&background=06b6d4&color=fff' },
            { username: 'Mike Johnson', status: 'Coffee break', avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=10b981&color=fff' },
            { username: 'Emma Davis', status: 'Debugging', avatar: 'https://ui-avatars.com/api/?name=Emma+Davis&background=f59e0b&color=fff' },
            { username: 'Ryan Park', status: 'Shipping features', avatar: 'https://ui-avatars.com/api/?name=Ryan+Park&background=ef4444&color=fff' }
        ];
        
        ctrl.messages = [
            {
                id: 1,
                content: 'Welcome to FlowChat! This is our modern microservices platform.',
                user: { username: 'FlowBot', avatar: 'https://ui-avatars.com/api/?name=FlowBot&background=6366f1&color=fff' },
                timestamp: new Date(Date.now() - 300000),
                isOwn: false
            },
            {
                id: 2,
                content: 'Love the new responsive design! Everything looks so clean and modern.',
                user: { username: 'Alex Chen', avatar: 'https://ui-avatars.com/api/?name=Alex+Chen&background=8b5cf6&color=fff' },
                timestamp: new Date(Date.now() - 180000),
                isOwn: false
            },
            {
                id: 3,
                content: 'Thanks! The full-screen layout really makes a difference.',
                user: { username: 'You', avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=8b5cf6&color=fff' },
                timestamp: new Date(Date.now() - 120000),
                isOwn: true
            }
        ];
        
        ctrl.selectRoom = function(room) {
            ctrl.currentRoom = room;
            room.unread = 0;
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
                    avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=8b5cf6&color=fff' 
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
                    ctrl.messages.push({
                        id: ctrl.messages.length + 1,
                        content: 'Great message! The platform is working perfectly.',
                        user: { 
                            username: 'FlowBot', 
                            avatar: 'https://ui-avatars.com/api/?name=FlowBot&background=6366f1&color=fff' 
                        },
                        timestamp: new Date(),
                        isOwn: false
                    });
                    
                    $timeout(() => {
                        const container = document.getElementById('messagesContainer');
                        if (container) {
                            container.scrollTop = container.scrollHeight;
                        }
                    }, 100);
                }, 1500);
            }, 500);
        };
        
        $timeout(() => {
            const container = document.getElementById('messagesContainer');
            if (container) {
                container.scrollTop = container.scrollHeight;
            }
        }, 100);
    }
});