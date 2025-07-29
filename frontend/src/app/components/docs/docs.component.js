angular.module('chatApp')
.component('apiDocs', {
    template: `
        <div class="h-full overflow-y-auto p-6 space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">API Documentation</h1>
                    <p class="text-slate-400">RESTful API endpoints for FlowChat microservices</p>
                </div>
                <div class="flex items-center space-x-3">
                    <span class="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full">
                        OpenAPI 3.0
                    </span>
                    <button class="btn-primary">
                        <i class="fas fa-download mr-2"></i>Export Swagger
                    </button>
                </div>
            </div>

            <!-- Service Selector -->
            <div class="card-modern p-6">
                <div class="flex items-center space-x-4 mb-6">
                    <h2 class="text-xl font-bold text-white">Select Service</h2>
                    <div class="flex bg-slate-800/50 rounded-lg p-1">
                        <button ng-repeat="service in $ctrl.services" 
                                ng-click="$ctrl.selectedService = service.id"
                                class="px-4 py-2 rounded text-sm transition-colors"
                                ng-class="$ctrl.selectedService === service.id ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-white'">
                            <i class="fas mr-2" ng-class="service.icon"></i>{{service.name}}
                        </button>
                    </div>
                </div>

                <!-- Service Info -->
                <div ng-repeat="service in $ctrl.services" ng-if="$ctrl.selectedService === service.id">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div class="p-4 bg-slate-800/30 rounded-xl">
                            <h3 class="text-white font-medium mb-2">Base URL</h3>
                            <code class="text-cyan-400 text-sm">{{service.baseUrl}}</code>
                        </div>
                        <div class="p-4 bg-slate-800/30 rounded-xl">
                            <h3 class="text-white font-medium mb-2">Version</h3>
                            <span class="text-white">{{service.version}}</span>
                        </div>
                        <div class="p-4 bg-slate-800/30 rounded-xl">
                            <h3 class="text-white font-medium mb-2">Status</h3>
                            <span class="text-emerald-400">{{service.status}}</span>
                        </div>
                    </div>

                    <!-- Endpoints -->
                    <div class="space-y-4">
                        <div ng-repeat="endpoint in service.endpoints" 
                             class="border border-slate-700/50 rounded-xl overflow-hidden">
                            <div class="p-4 bg-slate-800/30 cursor-pointer" 
                                 ng-click="endpoint.expanded = !endpoint.expanded">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-4">
                                        <span class="px-3 py-1 text-xs font-mono rounded" 
                                              ng-class="endpoint.methodClass">{{endpoint.method}}</span>
                                        <code class="text-white font-mono">{{endpoint.path}}</code>
                                        <span class="text-slate-400">{{endpoint.summary}}</span>
                                    </div>
                                    <i class="fas fa-chevron-down text-slate-400 transition-transform" 
                                       ng-class="{'rotate-180': endpoint.expanded}"></i>
                                </div>
                            </div>
                            
                            <div ng-if="endpoint.expanded" class="p-6 border-t border-slate-700/50">
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <!-- Request -->
                                    <div>
                                        <h4 class="text-white font-semibold mb-4">Request</h4>
                                        
                                        <!-- Parameters -->
                                        <div ng-if="endpoint.parameters.length" class="mb-6">
                                            <h5 class="text-slate-300 font-medium mb-3">Parameters</h5>
                                            <div class="space-y-2">
                                                <div ng-repeat="param in endpoint.parameters" 
                                                     class="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                                                    <div>
                                                        <code class="text-cyan-400">{{param.name}}</code>
                                                        <span class="text-slate-400 ml-2 text-sm">{{param.type}}</span>
                                                        <span ng-if="param.required" class="text-red-400 ml-1">*</span>
                                                    </div>
                                                    <span class="text-slate-400 text-sm">{{param.description}}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Request Body -->
                                        <div ng-if="endpoint.requestBody">
                                            <h5 class="text-slate-300 font-medium mb-3">Request Body</h5>
                                            <pre class="bg-slate-900/50 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto"><code>{{endpoint.requestBody}}</code></pre>
                                        </div>
                                    </div>

                                    <!-- Response -->
                                    <div>
                                        <h4 class="text-white font-semibold mb-4">Response</h4>
                                        
                                        <!-- Status Codes -->
                                        <div class="mb-6">
                                            <h5 class="text-slate-300 font-medium mb-3">Status Codes</h5>
                                            <div class="space-y-2">
                                                <div ng-repeat="status in endpoint.responses" 
                                                     class="flex items-center space-x-3 p-3 bg-slate-900/50 rounded-lg">
                                                    <span class="px-2 py-1 text-xs font-mono rounded" 
                                                          ng-class="status.class">{{status.code}}</span>
                                                    <span class="text-slate-300">{{status.description}}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Response Body -->
                                        <div ng-if="endpoint.responseBody">
                                            <h5 class="text-slate-300 font-medium mb-3">Response Body</h5>
                                            <pre class="bg-slate-900/50 p-4 rounded-lg text-sm text-slate-300 overflow-x-auto"><code>{{endpoint.responseBody}}</code></pre>
                                        </div>
                                    </div>
                                </div>

                                <!-- Try It Out -->
                                <div class="mt-6 pt-6 border-t border-slate-700/50">
                                    <button class="btn-secondary">
                                        <i class="fas fa-play mr-2"></i>Try it out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    controller: function() {
        const ctrl = this;
        
        ctrl.selectedService = 'chat';
        
        ctrl.services = [
            {
                id: 'chat',
                name: 'Chat Service',
                icon: 'fa-comments',
                baseUrl: 'https://api.flowchat.com/chat/v1',
                version: '1.0.0',
                status: 'Active',
                endpoints: [
                    {
                        method: 'GET',
                        methodClass: 'bg-blue-500/20 text-blue-400',
                        path: '/rooms',
                        summary: 'Get all chat rooms',
                        expanded: false,
                        parameters: [
                            { name: 'limit', type: 'integer', required: false, description: 'Number of rooms to return' },
                            { name: 'offset', type: 'integer', required: false, description: 'Pagination offset' }
                        ],
                        responses: [
                            { code: '200', class: 'bg-emerald-500/20 text-emerald-400', description: 'Success' },
                            { code: '401', class: 'bg-red-500/20 text-red-400', description: 'Unauthorized' }
                        ],
                        responseBody: `{
  "rooms": [
    {
      "id": "room_123",
      "name": "general",
      "members": 24,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "total": 1,
  "has_more": false
}`
                    },
                    {
                        method: 'POST',
                        methodClass: 'bg-emerald-500/20 text-emerald-400',
                        path: '/messages',
                        summary: 'Send a message',
                        expanded: false,
                        parameters: [],
                        requestBody: `{
  "room_id": "room_123",
  "content": "Hello, world!",
  "type": "text"
}`,
                        responses: [
                            { code: '201', class: 'bg-emerald-500/20 text-emerald-400', description: 'Message sent' },
                            { code: '400', class: 'bg-red-500/20 text-red-400', description: 'Invalid request' }
                        ],
                        responseBody: `{
  "id": "msg_456",
  "room_id": "room_123",
  "user_id": "user_789",
  "content": "Hello, world!",
  "timestamp": "2024-01-15T10:35:00Z"
}`
                    }
                ]
            },
            {
                id: 'user',
                name: 'User Service',
                icon: 'fa-users',
                baseUrl: 'https://api.flowchat.com/users/v1',
                version: '1.0.0',
                status: 'Active',
                endpoints: [
                    {
                        method: 'POST',
                        methodClass: 'bg-emerald-500/20 text-emerald-400',
                        path: '/auth/login',
                        summary: 'User authentication',
                        expanded: false,
                        parameters: [],
                        requestBody: `{
  "email": "user@example.com",
  "password": "password123"
}`,
                        responses: [
                            { code: '200', class: 'bg-emerald-500/20 text-emerald-400', description: 'Login successful' },
                            { code: '401', class: 'bg-red-500/20 text-red-400', description: 'Invalid credentials' }
                        ],
                        responseBody: `{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_789",
    "email": "user@example.com",
    "name": "John Doe"
  },
  "expires_in": 3600
}`
                    }
                ]
            },
            {
                id: 'analytics',
                name: 'Analytics Service',
                icon: 'fa-chart-bar',
                baseUrl: 'https://api.flowchat.com/analytics/v1',
                version: '1.0.0',
                status: 'Active',
                endpoints: [
                    {
                        method: 'GET',
                        methodClass: 'bg-blue-500/20 text-blue-400',
                        path: '/metrics',
                        summary: 'Get platform metrics',
                        expanded: false,
                        parameters: [
                            { name: 'period', type: 'string', required: false, description: 'Time period (24h, 7d, 30d)' }
                        ],
                        responses: [
                            { code: '200', class: 'bg-emerald-500/20 text-emerald-400', description: 'Success' }
                        ],
                        responseBody: `{
  "total_messages": 15247,
  "active_users": 342,
  "total_rooms": 28,
  "avg_response_time": 145
}`
                    }
                ]
            }
        ];
    }
});