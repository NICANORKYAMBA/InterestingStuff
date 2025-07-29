#!/bin/bash

echo "🚀 Setting up Chat Platform..."

# Copy environment file
cp docker/.env.example docker/.env

# Install dependencies for all services
echo "📦 Installing shared Prisma dependencies..."
cd backend/shared && npm install && cd ../..

echo "📦 Installing frontend dependencies..."
cd frontend && npm install && cd ..

echo "📦 Installing chat-service dependencies..."
cd backend/chat-service && npm install && cd ../..

echo "📦 Installing user-service dependencies..."
cd backend/user-service && npm install && cd ../..

echo "📦 Installing analytics-service dependencies..."
cd backend/analytics-service && npm install && cd ../..

echo "🗄️ Setting up Prisma..."
cd backend/shared && npx prisma generate && npx prisma db push && cd ../..

echo "🐳 Building and starting containers..."
cd docker && docker-compose up --build -d

echo "✅ Setup complete! Services running on:"
echo "   Frontend: http://localhost:3000"
echo "   Chat Service: http://localhost:3001"
echo "   User Service: http://localhost:3002"
echo "   Analytics Service: http://localhost:3003"