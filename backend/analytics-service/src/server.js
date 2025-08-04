const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'analytics-service',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Analytics endpoints
app.get('/api/analytics/dashboard', (req, res) => {
  res.json({
    totalUsers: 1247,
    activeUsers: 892,
    totalMessages: 15247,
    totalRooms: 23,
    systemUptime: '99.9%',
    responseTime: '89ms',
    cpuUsage: '23%',
    memoryUsage: '45%'
  });
});

app.get('/api/analytics/messages', (req, res) => {
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return {
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 500) + 200
    };
  }).reverse();

  res.json(last7Days);
});

app.get('/api/analytics/users', (req, res) => {
  res.json({
    totalUsers: 1247,
    activeToday: 892,
    newThisWeek: 47,
    retentionRate: '87%',
    averageSessionTime: '24m'
  });
});

app.get('/api/analytics/performance', (req, res) => {
  res.json({
    services: [
      {
        name: 'Chat Service',
        status: 'healthy',
        responseTime: '89ms',
        uptime: '99.9%',
        requests: 1247
      },
      {
        name: 'User Service', 
        status: 'healthy',
        responseTime: '156ms',
        uptime: '99.8%',
        requests: 892
      },
      {
        name: 'Analytics Service',
        status: 'healthy', 
        responseTime: '203ms',
        uptime: '99.9%',
        requests: 445
      }
    ]
  });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`📊 Analytics Service running on port ${PORT}`);
});