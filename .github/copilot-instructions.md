# BurgerHub DevOps - AI Coding Agent Instructions

## Architecture Overview

This is a **React restaurant app with enterprise DevOps pipeline** deploying to AWS ECS Fargate. The project demonstrates production-ready CI/CD practices with Infrastructure as Code.

### Key Components
- **Frontend**: React 19 SPA with Radix UI components and Tailwind CSS
- **Infrastructure**: AWS ECS Fargate + ALB via Terraform
- **CI/CD**: GitHub Actions with security scanning and multi-stage Docker builds
- **Monitoring**: CloudWatch logs and ECS health checks

## Project Structure & Conventions

### Component Architecture
- **UI Components**: `/frontend/src/components/ui/` - Radix UI primitives with Tailwind variants
- **App Components**: `/frontend/src/components/` - Business logic components (Header, Menu, etc.)
- **Data Layer**: `/frontend/src/data/mockData.js` - Centralized static data
- **Utils**: `/frontend/src/lib/utils.js` - `cn()` utility for className merging

### Key Patterns
```javascript
// Component structure follows this pattern:
const Component = React.forwardRef(({ className, ...props }, ref) => (
  <Primitive
    ref={ref}
    className={cn("base-styles", className)}
    {...props}
  />
))
```

### State Management
- **Local state** with `useState` for component-specific data
- **Toast notifications** via `useToast` hook for user feedback
- **Smooth scrolling** navigation with `document.getElementById().scrollIntoView()`

## Development Workflows

### Frontend Development
```bash
cd frontend
npm install --legacy-peer-deps  # CRITICAL: Required for React 19 + Radix UI compatibility
npm start                       # Development server
npm test                       # Jest tests
npm run build                  # Production build
```

### Docker Development
```bash
docker build -t burgerhub .    # Multi-stage build (Node builder + Nginx runtime)
docker run -p 8080:80 burgerhub  # Test locally
```

### Infrastructure Management
```bash
cd terraform
terraform init -backend-config="bucket=YOUR_BUCKET"
terraform plan -var="image_tag=latest"
terraform apply
```

## Critical DevOps Requirements

### Package Management
- **ALWAYS use `--legacy-peer-deps`** for npm installs due to React 19 + Radix UI peer dependency conflicts
- **Never use yarn** - CI/CD pipeline expects npm and package-lock.json

### Environment Variables
- **GitHub Secrets Required**: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `TF_STATE_BUCKET`
- **Terraform Variables**: `image_tag`, `environment` configurable per deployment

### Health Check Implementation
- **Required endpoint**: `/health` returns 200 OK for ALB health checks
- **Implementation**: `HealthCheck.jsx` component handles routing
- **Docker**: `HEALTHCHECK` instruction uses curl to `/health`

## Deployment Pipeline Stages

### 1. Test & Build (2-3 min)
- Installs deps with `--legacy-peer-deps --force`
- Runs ESLint (continues on error)
- Executes Jest tests (continues on error)
- Builds React app and uploads artifacts

### 2. Security Scan (3-4 min)
- npm audit for dependency vulnerabilities
- Trivy filesystem scan
- SARIF report upload to GitHub Security

### 3. Docker Build & Push (5-6 min)
- Multi-stage build: Node.js builder → Nginx runtime
- ECR push with commit SHA and `latest` tags
- Container vulnerability scanning

### 4. Infrastructure Deploy (8-10 min)
- Terraform format check
- Infrastructure planning and application
- VPC, ECS cluster, ALB creation

### 5. ECS Deploy (3-4 min)
- Downloads existing task definition
- Updates container image URI
- Deploys with zero-downtime rolling update

## Integration Points

### AWS Resources Created
- **VPC**: Public/private subnets across 2 AZs
- **ECS Fargate**: Serverless containers with auto-scaling
- **ALB**: Application Load Balancer with health checks targeting `/health`
- **ECR**: Container registry with lifecycle policies
- **CloudWatch**: Centralized logging at `/ecs/burgerhub`

### Security Configuration
- **ECS tasks**: Run in private subnets, no public IPs
- **Security groups**: ALB → ECS on port 80 only
- **IAM roles**: Separate execution and task roles with minimal permissions

## Component Development Guidelines

### UI Component Creation
```javascript
// Follow this pattern for new UI components:
import { cn } from "../../lib/utils"

const NewComponent = React.forwardRef(({ className, variant, ...props }, ref) => (
  <BaseElement
    ref={ref}
    className={cn("default-styles", variants({ variant }), className)}
    {...props}
  />
))
```

### Adding New Menu Items
- Update `/frontend/src/data/mockData.js`
- Follow existing structure with `id`, `name`, `description`, `price`, `category`
- Use Unsplash or Pexels URLs for images

### Navigation Integration
- Add new sections to `Header.jsx` navigation
- Use `scrollToSection()` function with element IDs
- Update `Footer.jsx` quick links

## Troubleshooting Common Issues

### Build Failures
- **npm install fails**: Use `--legacy-peer-deps --force`
- **Docker build fails**: Check all source paths exist in context
- **Terraform fails**: Verify AWS credentials and S3 bucket access

### Deployment Issues
- **ECS tasks won't start**: Check CloudWatch logs at `/ecs/burgerhub`
- **Health checks fail**: Ensure `/health` endpoint returns 200
- **Container crashes**: Verify nginx.conf and build artifacts exist

### Development Environment
- **Component not updating**: Clear npm cache and restart dev server
- **Styling issues**: Check Tailwind classes and `cn()` utility usage
- **Import errors**: Verify Radix UI components are properly exported

## File Modification Guidelines

### Critical Files - Handle with Care
- `/.github/workflows/ci-cd.yml` - Production CI/CD pipeline
- `/terraform/main.tf` - Production infrastructure
- `/Dockerfile` - Multi-stage container build
- `/frontend/package.json` - Dependency management

### Safe to Modify
- `/frontend/src/components/` - All React components
- `/frontend/src/data/mockData.js` - Menu and content data
- `/frontend/src/components/ui/` - UI component styling

When modifying infrastructure, always test with `terraform plan` first. For component changes, ensure health check endpoint remains functional.
