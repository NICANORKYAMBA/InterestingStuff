const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'chat-service',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Chat endpoints
app.get('/api/rooms', (req, res) => {
  res.json([
    { id: '1', name: 'General', description: 'General discussion', members: 12 },
    { id: '2', name: 'Development', description: 'Dev team chat', members: 8 },
    { id: '3', name: 'Design', description: 'Design team chat', members: 5 }
  ]);
});

app.get('/api/messages/:roomId', (req, res) => {
  const { roomId } = req.params;
  res.json([
    {
      id: '1',
      content: 'Welcome to the chat room!',
      user: { name: 'System', avatar: null },
      timestamp: new Date().toISOString(),
      type: 'system'
    },
    {
      id: '2', 
      content: 'Hello everyone! 👋',
      user: { name: 'Demo User', avatar: null },
      timestamp: new Date().toISOString(),
      type: 'text'
    }
  ]);
});

// WebSocket handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-joined', { userId: socket.id });
  });

  socket.on('send-message', (data) => {
    const message = {
      id: Date.now().toString(),
      content: data.content,
      user: data.user,
      timestamp: new Date().toISOString(),
      type: 'text'
    };
    
    io.to(data.roomId).emit('new-message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🗨️  Chat Service running on port ${PORT}`);
});