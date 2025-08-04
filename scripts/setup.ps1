# BurgerHub DevOps Setup Script
# This script helps set up the AWS infrastructure and GitHub repository

Write-Host "🍔 BurgerHub DevOps Setup Script" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

# Check if required tools are installed
Write-Host "Checking prerequisites..." -ForegroundColor Yellow

# Check AWS CLI
try {
    $awsVersion = aws --version 2>$null
    Write-Host "✅ AWS CLI found: $awsVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ AWS CLI not found. Please install AWS CLI first." -ForegroundColor Red
    exit 1
}

# Check Terraform
try {
    $tfVersion = terraform --version | Select-Object -First 1
    Write-Host "✅ Terraform found: $tfVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Terraform not found. Please install Terraform first." -ForegroundColor Red
    exit 1
}

# Check Docker
try {
    $dockerVersion = docker --version
    Write-Host "✅ Docker found: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker not found. Please install Docker first." -ForegroundColor Red
    exit 1
}

# Check Node.js
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

Write-Host "`n🔧 Setting up AWS resources..." -ForegroundColor Yellow

# Prompt for AWS region
$region = Read-Host "Enter AWS region (default: us-east-1)"
if ([string]::IsNullOrEmpty($region)) {
    $region = "us-east-1"
}

# Prompt for S3 bucket name for Terraform state
$bucketName = Read-Host "Enter S3 bucket name for Terraform state (must be globally unique)"
if ([string]::IsNullOrEmpty($bucketName)) {
    Write-Host "❌ S3 bucket name is required!" -ForegroundColor Red
    exit 1
}

# Create S3 bucket for Terraform state
Write-Host "Creating S3 bucket for Terraform state..." -ForegroundColor Cyan
try {
    aws s3 mb s3://$bucketName --region $region
    Write-Host "✅ S3 bucket '$bucketName' created successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to create S3 bucket. It might already exist or you might not have permissions." -ForegroundColor Red
}

# Enable versioning on the bucket
Write-Host "Enabling versioning on S3 bucket..." -ForegroundColor Cyan
try {
    aws s3api put-bucket-versioning --bucket $bucketName --versioning-configuration Status=Enabled
    Write-Host "✅ Versioning enabled on S3 bucket" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to enable versioning on S3 bucket" -ForegroundColor Red
}

# Create ECR repository
Write-Host "Creating ECR repository..." -ForegroundColor Cyan
try {
    aws ecr create-repository --repository-name burgerhub-frontend --region $region
    Write-Host "✅ ECR repository 'burgerhub-frontend' created successfully" -ForegroundColor Green
} catch {
    Write-Host "ℹ️ ECR repository might already exist" -ForegroundColor Yellow
}

Write-Host "`n📝 GitHub Setup Instructions:" -ForegroundColor Yellow
Write-Host "1. Go to your GitHub repository settings" -ForegroundColor White
Write-Host "2. Navigate to 'Secrets and variables' > 'Actions'" -ForegroundColor White
Write-Host "3. Add the following repository secrets:" -ForegroundColor White
Write-Host "   - AWS_ACCESS_KEY_ID: Your AWS access key" -ForegroundColor Cyan
Write-Host "   - AWS_SECRET_ACCESS_KEY: Your AWS secret key" -ForegroundColor Cyan
Write-Host "   - TF_STATE_BUCKET: $bucketName" -ForegroundColor Cyan

Write-Host "`n🚀 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Commit and push your code to GitHub" -ForegroundColor White
Write-Host "2. The GitHub Actions pipeline will automatically:" -ForegroundColor White
Write-Host "   - Run tests and build the application" -ForegroundColor Cyan
Write-Host "   - Create Docker image and push to ECR" -ForegroundColor Cyan
Write-Host "   - Deploy infrastructure using Terraform" -ForegroundColor Cyan
Write-Host "   - Deploy the application to ECS" -ForegroundColor Cyan

Write-Host "`n✨ Setup completed successfully!" -ForegroundColor Green
Write-Host "Your BurgerHub DevOps pipeline is ready to go!" -ForegroundColor Green
