# BurgerHub DevOps Setup Script
Write-Host "BurgerHub DevOps Setup Script" -ForegroundColor Green
Write-Host "=============================" -ForegroundColor Green

# Check AWS CLI
Write-Host "Checking AWS CLI..." -ForegroundColor Yellow
try {
    $awsVersion = aws --version
    Write-Host "AWS CLI found: $awsVersion" -ForegroundColor Green
} catch {
    Write-Host "AWS CLI not found. Please install AWS CLI first." -ForegroundColor Red
    exit 1
}

# Test AWS credentials
Write-Host "Testing AWS credentials..." -ForegroundColor Yellow
try {
    $identity = aws sts get-caller-identity 2>$null
    if ($identity) {
        Write-Host "AWS credentials are configured" -ForegroundColor Green
    } else {
        Write-Host "AWS credentials not configured. Please run 'aws configure'" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "Please configure AWS credentials with 'aws configure'" -ForegroundColor Red
    exit 1
}

# Get region
$region = Read-Host "Enter AWS region (press Enter for us-east-1)"
if ([string]::IsNullOrEmpty($region)) {
    $region = "us-east-1"
}

# Get bucket name
Write-Host ""
Write-Host "S3 bucket name must be globally unique (e.g., your-name-burgerhub-terraform-state-2025)"
$bucketName = Read-Host "Enter S3 bucket name for Terraform state"
if ([string]::IsNullOrEmpty($bucketName)) {
    Write-Host "S3 bucket name is required!" -ForegroundColor Red
    exit 1
}

# Create S3 bucket
Write-Host ""
Write-Host "Creating S3 bucket for Terraform state..." -ForegroundColor Cyan
aws s3 mb s3://$bucketName --region $region
if ($LASTEXITCODE -eq 0) {
    Write-Host "S3 bucket created successfully" -ForegroundColor Green
} else {
    Write-Host "S3 bucket creation failed or bucket already exists" -ForegroundColor Yellow
}

# Enable versioning
Write-Host "Enabling versioning on S3 bucket..." -ForegroundColor Cyan
aws s3api put-bucket-versioning --bucket $bucketName --versioning-configuration Status=Enabled
if ($LASTEXITCODE -eq 0) {
    Write-Host "Versioning enabled successfully" -ForegroundColor Green
} else {
    Write-Host "Versioning setup failed" -ForegroundColor Yellow
}

# Create ECR repository
Write-Host "Creating ECR repository..." -ForegroundColor Cyan
aws ecr create-repository --repository-name burgerhub-frontend --region $region
if ($LASTEXITCODE -eq 0) {
    Write-Host "ECR repository created successfully" -ForegroundColor Green
} else {
    Write-Host "ECR repository creation failed or already exists" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "GitHub Setup Instructions:" -ForegroundColor Yellow
Write-Host "1. Go to your GitHub repository settings" -ForegroundColor White
Write-Host "2. Navigate to 'Secrets and variables' > 'Actions'" -ForegroundColor White
Write-Host "3. Add these repository secrets:" -ForegroundColor White
Write-Host "   AWS_ACCESS_KEY_ID: Your AWS access key" -ForegroundColor Cyan
Write-Host "   AWS_SECRET_ACCESS_KEY: Your AWS secret key" -ForegroundColor Cyan
Write-Host "   TF_STATE_BUCKET: $bucketName" -ForegroundColor Cyan

Write-Host ""
Write-Host "Setup completed!" -ForegroundColor Green
Write-Host "Next: Configure GitHub secrets and push your code" -ForegroundColor Green
