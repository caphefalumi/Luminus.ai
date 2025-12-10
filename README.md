# Luminus.ai

**AI-Powered HR Analytics Platform**

![Luminus.ai Homepage](https://github.com/caphefalumi/Luminus.ai/blob/main/frontend/public/homepage.png?raw=true)

A comprehensive workforce intelligence platform that leverages artificial intelligence to transform HR analytics, visualize team dynamics, predict employee burnout, and uncover hidden talent within organizations.

## Features

### Core Functionality

- **AI-Powered Insights**: Advanced machine learning algorithms analyze workforce patterns and predict trends
- **Network Visualization**: Interactive galaxy view showing team relationships and collaboration patterns
- **Burnout Detection**: Early warning system to identify at-risk employees before critical situations arise
- **Performance Analytics**: Comprehensive metrics and leaderboards to track team performance
- **Real-time Updates**: Live data synchronization keeps insights always up-to-date
- **Secure Authentication**: JWT-based authentication system with role-based access control

### User Management

- Role-based access control (RBAC)
- User registration and login system
- Protected routes and middleware-based authentication
- Profile management with customizable avatars

### Data Processing

- CSV file upload and parsing for employee data
- Automated promotion detection and analysis
- Employee relationship mapping and network graph generation
- Performance metrics calculation and visualization

## Tech Stack

### Frontend

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Charts/Visualization**: Recharts, Custom network graphs

### Backend

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens with secure session management
- **File Processing**: CSV parsing and data transformation
- **API**: RESTful API architecture

### DevOps & Deployment

- **Frontend Deployment**: Vercel
- **Backend Deployment**: Vercel Serverless Functions
- **Database**: MongoDB Atlas
- **Version Control**: Git & GitHub
- **Package Manager**: Bun
- **CI/CD**: Automated deployment via Vercel

## Project Structure

```
my-nextjs/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App router pages
│   │   ├── (public)/       # Public pages (landing)
│   │   ├── analytics/      # Analytics dashboard
│   │   ├── dashboard/      # Main dashboard
│   │   ├── insights/       # AI insights
│   │   ├── login/          # Authentication
│   │   ├── performance/    # Performance metrics
│   │   ├── personnel/      # Employee management
│   │   └── settings/       # User settings
│   ├── components/         # Reusable React components
│   ├── lib/                # Utilities and context providers
│   └── public/             # Static assets
│
├── backend/                 # NestJS backend application
│   ├── api/                # Vercel serverless entry point
│   ├── src/
│   │   ├── auth/           # Authentication module
│   │   ├── employees/      # Employee management module
│   │   ├── schemas/        # MongoDB schemas
│   │   └── data/           # Sample data and mock files
│   └── vercel.json         # Vercel deployment config
│
└── Makefile                # Build and deployment scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- MongoDB instance (MongoDB Atlas recommended)
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/caphefalumi/Luminus.ai.git
cd Luminus.ai
```

2. **Install dependencies**

Frontend:
```bash
cd frontend
bun install
```

Backend:
```bash
cd backend
bun install
```

3. **Environment Setup**

Create `.env` files in both frontend and backend directories:

Frontend `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3002
```

Backend `.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/luminus
JWT_SECRET=your-secret-key-here
PORT=3002
NODE_ENV=development
```

4. **Run the development servers**

Frontend:
```bash
cd frontend
bun dev
```

Backend:
```bash
cd backend
bun run start:dev
```

5. **Access the application**

- Frontend: http://localhost:3000
- Backend API: http://localhost:3002

## Deployment

### Frontend (Vercel)

```bash
cd frontend
vercel --prod
```

### Backend (Vercel)

```bash
cd backend
vercel --prod
```

**Important**: Add environment variables in Vercel dashboard:
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Set to "production"

## API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user profile
- `POST /api/auth/logout` - User logout

### Employees

- `GET /api/employees` - List all employees
- `GET /api/employees/:id` - Get employee details
- `POST /api/employees/upload` - Upload employee data (CSV)
- `GET /api/employees/network` - Get network graph data

## Usage

1. **Register/Login**: Create an account or login with your credentials
2. **Upload Data**: Navigate to the dashboard and upload employee CSV data
3. **Explore Analytics**: View performance metrics, network graphs, and AI insights
4. **Monitor Teams**: Track employee performance and identify collaboration patterns
5. **Detect Burnout**: Use AI-powered analysis to identify at-risk team members

## Key Features in Detail

### Network Visualization

Interactive galaxy-style network graph that visualizes:
- Team relationships and connections
- Collaboration patterns
- Organizational structure
- Communication flows

### AI-Powered Insights

Machine learning algorithms provide:
- Predictive analytics for workforce trends
- Burnout risk assessment
- Performance pattern recognition
- Talent identification

### Performance Analytics

Comprehensive dashboards featuring:
- Individual and team performance metrics
- Leaderboards and rankings
- Historical trend analysis
- Custom performance indicators

## Security

- Password hashing using SHA-256
- JWT-based authentication
- Secure token storage
- Protected API endpoints
- CORS configuration for production
- Role-based access control

## Technologies

**Frontend**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Recharts

**Backend**: NestJS, MongoDB, Mongoose, Passport, JWT

**Infrastructure**: Vercel, MongoDB Atlas

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

**Developer**: Dang Duy Toan

- Email: dangduytoan13l@gmail.com
- GitHub: [@caphefalumi](https://github.com/caphefalumi)
- LinkedIn: [caphefalumi](https://linkedin.com/in/caphefalumi)

## Acknowledgments

Built with modern web technologies to showcase full-stack development capabilities and AI-powered analytics for workforce management.

---

⭐ Star this repository if you find it helpful!
