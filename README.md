# Multi-Service Chat Platform

A containerized real-time chat application with analytics, built for learning container orchestration.

## Tech Stack
- **Frontend**: AngularJS + TailwindCSS
- **Backend**: Node.js + Express.js (3 microservices)
- **Database**: PostgreSQL + Prisma ORM
- **Containers**: Docker + Docker Compose
- **Orchestration**: Kubernetes

## Services
1. **Chat Service** (Port 3001) - WebSocket real-time messaging
2. **User Service** (Port 3002) - Authentication & user management
3. **Analytics Service** (Port 3003) - Chat usage analytics
4. **Frontend** (Port 3000) - Web interface

## Quick Start
```bash
# Clone and setup
./scripts/setup.sh

# Or manually:
cd docker
docker-compose up --build
```

## Development
```bash
# Start individual service
cd backend/chat-service
npm run dev

# View logs
docker-compose logs -f chat-service

# Kubernetes deployment
kubectl apply -f k8s/
```

## Project Structure
See `project-structure.md` for detailed organization.

## Architecture
- **Microservices**: 3 independent services with clear boundaries
- **Containerization**: Each service runs in isolated Docker containers
- **Orchestration**: Docker Compose for local dev, Kubernetes for production
- **Database**: Shared PostgreSQL with Prisma ORM
- **Real-time**: WebSocket connections for live chat
- **Analytics**: Event-driven analytics collection

## Learning Goals
- ✅ Microservices architecture
- ✅ Docker containerization  
- ✅ Container orchestration (Docker + Kubernetes)
- ✅ Service communication
- ✅ Database integration with Prisma
- ✅ Professional project structure
- 🔄 Production deployment (next phase)