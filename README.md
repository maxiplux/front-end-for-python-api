# Angular Frontend for Python API

A modern Angular 17 frontend application that connects to a Python FastAPI backend, providing a complete product management system with user authentication and CRUD operations.

## 📋 Project Overview

This is a full-stack web application frontend built with Angular 17, designed to work seamlessly with a FastAPI backend. The application features user authentication, role-based access control, and comprehensive product management capabilities.

## ✨ Key Features

- **User Authentication**: Secure login system with JWT token-based authentication
- **Dashboard**: Interactive dashboard for monitoring and quick access to features
- **Product Management**: Complete CRUD operations (Create, Read, Update, Delete) for products
- **Route Protection**: AuthGuard implementation to secure protected routes
- **HTTP Interceptors**: Token and authentication interceptors for API requests
- **Responsive Design**: Modern UI built with Tailwind CSS and Flowbite components
- **Alert Notifications**: User-friendly notifications using SweetAlert2
- **Dockerized Deployment**: Ready-to-deploy Docker configuration with Nginx

## 🛠️ Technologies Used

- **Framework**: Angular 17.0
- **UI Framework**: Tailwind CSS 3.4
- **Component Library**: Flowbite 2.2
- **Notifications**: SweetAlert2 11.10
- **HTTP Client**: Angular HttpClient with RxJS 7.8
- **Web Server**: Nginx (for production)
- **Build Tool**: Angular CLI 17.1
- **Container**: Docker with multi-stage builds

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v20 or higher)
- npm (v10.4.0 or higher)
- Angular CLI (`npm install -g @angular/cli`)
- Docker and Docker Compose (for containerized deployment)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd front-end-for-python-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint**
   
   Update the API URL in the environment files if needed:
   - Development: `src/environments/environment.development.ts`
   - Production: `src/environments/environment.ts`
   
   Default API URL: `http://localhost:8080`

## 💻 Development

### Development Server

Run the development server:
```bash
ng serve
```
or
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you change source files.

### Code Scaffolding

Generate new components, services, or other Angular elements:
```bash
ng generate component component-name
ng generate service service-name
ng generate directive|pipe|guard|interface|enum|module
```

### Build

Build the project for production:
```bash
ng build
```

The build artifacts will be stored in the `dist/` directory with optimizations enabled.

### Running Tests

Execute unit tests via Karma:
```bash
ng test
```

## 🐳 Docker Deployment

### Build Docker Image

Build the Docker image locally:
```bash
docker build -t front-end-for-python-api .
```

### Run with Docker Compose

The project includes a complete Docker Compose configuration that orchestrates:
- **PostgreSQL Database** (port 5432)
- **FastAPI Backend** (port 8080)
- **Angular Frontend** (port 8081)

Start the entire stack:
```bash
docker-compose up -d
```

Access the application at `http://localhost:8081`

Stop the stack:
```bash
docker-compose down
```

### Docker Architecture

The Dockerfile uses a multi-stage build:
1. **Stage 1**: Node.js 20 for building the Angular application
2. **Stage 2**: Nginx Alpine for serving the static files efficiently

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # UI Components
│   │   ├── dashboard/       # Dashboard view
│   │   ├── login/          # Login page
│   │   ├── products/       # Product list view
│   │   ├── product-create/ # Create product form
│   │   ├── product-edit/   # Edit product form
│   │   └── errors-component/ # Error handling
│   ├── services/           # Business logic services
│   │   ├── auth.service.ts    # Authentication service
│   │   ├── product.service.ts # Product API service
│   │   └── AuthGuard.ts       # Route protection
│   ├── interceptors/       # HTTP interceptors
│   │   ├── auth.interceptor.ts  # Auth request handler
│   │   └── token.interceptor.ts # Token injection
│   ├── models/             # Data models
│   │   ├── Usuario.ts      # User model
│   │   └── product.ts      # Product model
│   ├── ui/                 # Shared UI components
│   │   └── left-bar/       # Navigation sidebar
│   ├── app.config.ts       # App configuration
│   └── app.routes.ts       # Route definitions
├── environments/           # Environment configurations
└── styles.css             # Global styles
```

## 🔑 Environment Configuration

### API Connection

Configure the backend API URL in environment files:

**Production** (`src/environments/environment.ts`):
```typescript
export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080'
};
```

**Development** (`src/environments/environment.development.ts`):
Update with your local or remote API endpoint.

## 🔒 Authentication Flow

1. User submits credentials via login component
2. Auth service sends request to backend API
3. Backend validates and returns JWT token
4. Token is stored and injected in subsequent requests via token interceptor
5. AuthGuard protects routes requiring authentication
6. Auth interceptor handles authentication errors and redirects

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build with watch mode for development
- `npm test` - Run unit tests
- `ng serve` - Serve the application
- `ng build` - Build the application

## 🌐 Backend Integration

This frontend is designed to work with a FastAPI backend. The Docker Compose configuration includes:
- Backend API image: `maxiplux/fastapidevops-auth`
- Database: PostgreSQL 15.0
- Default backend port: 8080

Ensure the backend API is running and accessible at the configured `apiUrl`.

## 📚 Further Help

- **Angular CLI**: Use `ng help` or visit [Angular CLI Documentation](https://angular.io/cli)
- **Angular**: Visit [Angular Documentation](https://angular.io/docs)
- **Tailwind CSS**: Visit [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- **Flowbite**: Visit [Flowbite Documentation](https://flowbite.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of a full-stack application demonstrating modern web development practices with Angular and FastAPI.

---

**Note**: For production deployment, ensure to:
- Update environment configurations with production URLs
- Configure proper security headers in nginx.conf
- Use secure HTTPS connections
- Implement proper error logging and monitoring
- Review and harden the Docker Compose configuration
