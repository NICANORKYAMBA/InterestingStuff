#!/bin/bash

echo "🚀 Starting FlowChat Frontend Development Server..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build Tailwind CSS
echo "🎨 Building Tailwind CSS..."
npx tailwindcss -i ./src/styles/tailwind.css -o ./dist/styles.css --watch &

# Find available port
PORT=3000
while lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; do
    PORT=$((PORT+1))
done

# Start a simple HTTP server
echo "🌐 Starting development server on http://localhost:$PORT"
echo "📱 Your modern FlowChat platform is ready!"
echo ""
echo "Features available:"
echo "  ✅ Modern Dashboard Homepage"
echo "  ✅ Real-time Chat Interface"
echo "  ✅ Analytics Dashboard"
echo "  ✅ User Profile Management"
echo "  ✅ Professional Login Page"
echo "  ✅ Mobile-Responsive Design"
echo ""

# Install live-server for hot reload if not available
if ! command -v live-server &> /dev/null; then
    echo "📦 Installing live-server for hot reload..."
    npm install -g live-server
fi

# Start live-server with hot reload
echo "🔄 Hot reload enabled - changes will auto-refresh!"
live-server src --port=$PORT --host=localhost --entry-file=index.html --open=false --quiet=false --ignore=node_modules