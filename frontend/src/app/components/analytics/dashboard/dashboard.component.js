angular.module('chatApp')
.component('analyticsDashboard', {
    template: `
        <div>
            <h2 class="text-2xl font-bold mb-6">Analytics Dashboard</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-blue-100 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-800">Total Messages</h3>
                    <p class="text-3xl font-bold text-blue-600">{{$ctrl.stats.totalMessages}}</p>
                </div>
                
                <div class="bg-green-100 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold text-green-800">Active Users</h3>
                    <p class="text-3xl font-bold text-green-600">{{$ctrl.stats.activeUsers}}</p>
                </div>
                
                <div class="bg-purple-100 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold text-purple-800">Rooms</h3>
                    <p class="text-3xl font-bold text-purple-600">{{$ctrl.stats.totalRooms}}</p>
                </div>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold mb-4">Service Health</h3>
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span>Chat Service:</span>
                        <span class="text-green-600 font-semibold">Healthy</span>
                    </div>
                    <div class="flex justify-between">
                        <span>User Service:</span>
                        <span class="text-green-600 font-semibold">Healthy</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Analytics Service:</span>
                        <span class="text-green-600 font-semibold">Healthy</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function() {
        this.stats = {
            totalMessages: 1247,
            activeUsers: 23,
            totalRooms: 5
        };
        
        // Will connect to analytics-service later
    }
});