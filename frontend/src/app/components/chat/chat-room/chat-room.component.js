angular.module('chatApp')
.component('chatRoom', {
    template: `
        <div class="glass-card overflow-hidden">
            <!-- Header -->
            <div class="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md p-6 border-b border-white/20">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-bold text-white mb-1">
                            <i class="fas fa-comments mr-3 text-purple-400"></i>
                            {{$ctrl.currentRoom.name}}
                        </h2>
                        <p class="text-white/70">{{$ctrl.onlineUsers}} users online</p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button class="btn-secondary py-2 px-4 text-sm">
                            <i class="fas fa-cog mr-2"></i>Settings
                        </button>
                        <div class="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                            <i class="fas fa-user text-white text-sm"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex h-[600px]">
                <!-- Sidebar -->
                <div class="w-80 bg-black/20 backdrop-blur-md border-r border-white/20 flex flex-col">
                    <!-- Room List -->
                    <div class="p-4 border-b border-white/20">
                        <h3 class="text-white font-semibold mb-3 flex items-center">
                            <i class="fas fa-hashtag mr-2 text-purple-400"></i>
                            Channels
                        </h3>
                        <div class="space-y-1">
                            <div ng-repeat="room in $ctrl.rooms" 
                                 class="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/10"
                                 ng-class="{'bg-white/20 shadow-lg': room.id === $ctrl.currentRoom.id}"
                                 ng-click="$ctrl.selectRoom(room)">
                                <div class="w-2 h-2 rounded-full mr-3"
                                     ng-class="room.active ? 'bg-green-400' : 'bg-gray-400'"></div>
                                <span class="text-white font-medium">{{room.name}}</span>
                                <span class="ml-auto text-xs text-white/60" ng-if="room.unread">
                                    {{room.unread}}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Online Users -->
                    <div class="flex-1 p-4">
                        <h3 class="text-white font-semibold mb-3 flex items-center">
                            <i class="fas fa-users mr-2 text-green-400"></i>
                            Online ({{$ctrl.users.length}})
                        </h3>
                        <div class="space-y-2">
                            <div ng-repeat="user in $ctrl.users" 
                                 class="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <img ng-src="{{user.avatar}}" 
                                     class="w-8 h-8 rounded-full mr-3 border-2 border-green-400">
                                <div class="flex-1">
                                    <p class="text-white text-sm font-medium">{{user.username}}</p>
                                    <p class="text-white/60 text-xs">{{user.status}}</p>
                                </div>
                                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Chat Area -->
                <div class="flex-1 flex flex-col">
                    <!-- Messages -->
                    <div class="flex-1 p-6 overflow-y-auto space-y-4" id="messagesContainer">
                        <div ng-repeat="message in $ctrl.messages" 
                             class="flex animate-slideUp"
                             ng-class="message.isOwn ? 'justify-end' : 'justify-start'">
                            
                            <!-- Received Message -->
                            <div ng-if="!message.isOwn" class="flex items-start space-x-3 max-w-md">
                                <img ng-src="{{message.user.avatar}}" 
                                     class="w-8 h-8 rounded-full border-2 border-white/20">
                                <div>
                                    <div class="flex items-center space-x-2 mb-1">
                                        <span class="text-white/80 text-sm font-medium">{{message.user.username}}</span>
                                        <span class="text-white/50 text-xs">{{message.timestamp | date:'HH:mm'}}</span>
                                    </div>
                                    <div class="message-bubble message-received">
                                        {{message.content}}
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Sent Message -->
                            <div ng-if="message.isOwn" class="flex items-start space-x-3 max-w-md">
                                <div class="text-right">
                                    <div class="flex items-center justify-end space-x-2 mb-1">
                                        <span class="text-white/50 text-xs">{{message.timestamp | date:'HH:mm'}}</span>
                                        <span class="text-white/80 text-sm font-medium">You</span>
                                    </div>
                                    <div class="message-bubble message-sent">
                                        {{message.content}}
                                    </div>
                                </div>
                                <img ng-src="{{message.user.avatar}}" 
                                     class="w-8 h-8 rounded-full border-2 border-purple-400">
                            </div>
                        </div>
                        
                        <!-- Typing Indicator -->
                        <div ng-if="$ctrl.isTyping" class="flex items-center space-x-3 animate-pulse">
                            <div class="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                                <i class="fas fa-user text-white text-xs"></i>
                            </div>
                            <div class="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
                                <div class="flex space-x-1">
                                    <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                                    <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                                    <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Message Input -->
                    <div class="p-6 border-t border-white/20 bg-black/20 backdrop-blur-md">
                        <div class="flex items-end space-x-4">
                            <button class="btn-secondary p-3">
                                <i class="fas fa-paperclip"></i>
                            </button>
                            
                            <div class="flex-1 relative">
                                <textarea ng-model="$ctrl.newMessage" 
                                         ng-keydown="$ctrl.handleKeyDown($event)"
                                         placeholder="Type your message..."
                                         class="glass-input w-full resize-none min-h-[50px] max-h-32 pr-12"
                                         rows="1"></textarea>
                                <button ng-click="$ctrl.sendMessage()" 
                                        ng-disabled="!$ctrl.newMessage.trim()"
                                        class="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                                    <i class="fas fa-paper-plane text-white text-sm"></i>
                                </button>
                            </div>
                            
                            <button class="btn-secondary p-3">
                                <i class="fas fa-smile"></i>
                            </button>
                        </div>
                        
                        <div class="flex items-center justify-between mt-3 text-xs text-white/60">
                            <span>Press Enter to send, Shift+Enter for new line</span>
                            <span>{{$ctrl.newMessage.length}}/500</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function($scope, $timeout) {
        const ctrl = this;
        
        ctrl.currentRoom = { id: 1, name: 'General Discussion' };
        ctrl.onlineUsers = 12;
        ctrl.isTyping = false;
        ctrl.newMessage = '';
        
        ctrl.rooms = [
            { id: 1, name: 'General Discussion', active: true, unread: 0 },
            { id: 2, name: 'Tech Talk', active: true, unread: 3 },
            { id: 3, name: 'Random', active: true, unread: 0 },
            { id: 4, name: 'Announcements', active: false, unread: 1 }
        ];
        
        ctrl.users = [
            { username: 'Alice Johnson', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Alice+Johnson&background=10b981&color=fff' },
            { username: 'Bob Smith', status: 'Away', avatar: 'https://ui-avatars.com/api/?name=Bob+Smith&background=f59e0b&color=fff' },
            { username: 'Carol Davis', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Carol+Davis&background=ef4444&color=fff' },
            { username: 'David Wilson', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=David+Wilson&background=8b5cf6&color=fff' }
        ];
        
        ctrl.messages = [
            {
                id: 1,
                content: 'Welcome to the chat! This is a demo of our microservices platform.',
                user: { username: 'System', avatar: 'https://ui-avatars.com/api/?name=System&background=6b7280&color=fff' },
                timestamp: new Date(Date.now() - 300000),
                isOwn: false
            },
            {
                id: 2,
                content: 'Hey everyone! Excited to test this new chat platform.',
                user: { username: 'Alice Johnson', avatar: 'https://ui-avatars.com/api/?name=Alice+Johnson&background=10b981&color=fff' },
                timestamp: new Date(Date.now() - 240000),
                isOwn: false
            },
            {
                id: 3,
                content: 'The UI looks amazing! Great work on the design.',
                user: { username: 'You', avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=6366f1&color=fff' },
                timestamp: new Date(Date.now() - 180000),
                isOwn: true
            }
        ];
        
        ctrl.selectRoom = function(room) {
            ctrl.currentRoom = room;
            room.unread = 0;
            console.log('Selected room:', room.name);
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
                    avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=6366f1&color=fff' 
                },
                timestamp: new Date(),
                isOwn: true
            };
            
            ctrl.messages.push(message);
            ctrl.newMessage = '';
            
            // Simulate typing indicator
            $timeout(() => {
                ctrl.isTyping = true;
                $timeout(() => {
                    ctrl.isTyping = false;
                    ctrl.messages.push({
                        id: ctrl.messages.length + 1,
                        content: 'Thanks for the message! This is an automated response.',
                        user: { 
                            username: 'Bot', 
                            avatar: 'https://ui-avatars.com/api/?name=Bot&background=6b7280&color=fff' 
                        },
                        timestamp: new Date(),
                        isOwn: false
                    });
                    
                    // Auto scroll to bottom
                    $timeout(() => {
                        const container = document.getElementById('messagesContainer');
                        if (container) {
                            container.scrollTop = container.scrollHeight;
                        }
                    }, 100);
                }, 2000);
            }, 500);
        };
        
        // Auto scroll to bottom on init
        $timeout(() => {
            const container = document.getElementById('messagesContainer');
            if (container) {
                container.scrollTop = container.scrollHeight;
            }
        }, 100);
    }
});