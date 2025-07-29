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

# Start HTTP server (you can use any simple server)
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT --directory src
elif command -v python &> /dev/null; then
    cd src && python -m SimpleHTTPServer $PORT
elif command -v npx &> /dev/null; then
    npx http-server src -p $PORT -c-1
else
    echo "⚠️  No HTTP server available. Please install Python or http-server globally:"
    echo "   npm install -g http-server"
fi