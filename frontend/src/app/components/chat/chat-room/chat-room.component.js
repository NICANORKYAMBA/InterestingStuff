angular.module('chatApp')
.component('chatRoom', {
    template: `
        <div class="flex h-96">
            <div class="w-1/4 bg-gray-50 p-4 border-r">
                <h3 class="font-bold mb-4">Rooms</h3>
                <div ng-repeat="room in $ctrl.rooms" 
                     class="p-2 hover:bg-blue-100 cursor-pointer rounded"
                     ng-click="$ctrl.selectRoom(room)">
                    {{room.name}}
                </div>
            </div>
            
            <div class="flex-1 flex flex-col">
                <div class="flex-1 p-4 overflow-y-auto bg-white">
                    <div ng-repeat="message in $ctrl.messages" class="mb-2">
                        <span class="font-semibold text-blue-600">{{message.user}}:</span>
                        <span class="ml-2">{{message.content}}</span>
                    </div>
                </div>
                
                <div class="p-4 border-t bg-gray-50">
                    <div class="flex">
                        <input type="text" 
                               ng-model="$ctrl.newMessage" 
                               ng-keypress="$ctrl.sendMessage($event)"
                               placeholder="Type a message..."
                               class="flex-1 p-2 border rounded-l">
                        <button ng-click="$ctrl.sendMessage()" 
                                class="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function() {
        this.rooms = [
            { id: 1, name: 'General' },
            { id: 2, name: 'Tech Talk' }
        ];
        
        this.messages = [
            { user: 'System', content: 'Welcome to the chat!' }
        ];
        
        this.newMessage = '';
        
        this.selectRoom = function(room) {
            console.log('Selected room:', room.name);
        };
        
        this.sendMessage = function(event) {
            if (event && event.keyCode !== 13) return;
            if (!this.newMessage.trim()) return;
            
            this.messages.push({
                user: 'You',
                content: this.newMessage
            });
            
            this.newMessage = '';
        };
    }
});