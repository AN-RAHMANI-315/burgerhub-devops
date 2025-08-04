# BurgerHub DevOps Setup Script (Simple Version)
Write-Host "🍔 BurgerHub DevOps Setup Script" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

# Check AWS CLI
Write-Host "Checking AWS CLI..." -ForegroundColor Yellow
try {
    $awsVersion = aws --version
    Write-Host "✅ AWS CLI found: $awsVersion" -ForegroundColor Green
}
catch {
    Write-Host "❌ AWS CLI not found. Please install AWS CLI first." -ForegroundColor Red
    exit 1
}

# Get AWS region
$region = Read-Host "Enter AWS region (default: us-east-1)"
if ([string]::IsNullOrEmpty($region)) {
    $region = "us-east-1"
}

# Get S3 bucket name
$bucketName = Read-Host "Enter S3 bucket name for Terraform state (must be globally unique)"
if ([string]::IsNullOrEmpty($bucketName)) {
    Write-Host "❌ S3 bucket name is required!" -ForegroundColor Red
    exit 1
}

# Create S3 bucket
Write-Host "Creating S3 bucket for Terraform state..." -ForegroundColor Cyan
$bucketResult = aws s3 mb s3://$bucketName --region $region 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ S3 bucket '$bucketName' created successfully" -ForegroundColor Green
}
else {
    Write-Host "⚠️ S3 bucket creation result: $bucketResult" -ForegroundColor Yellow
}

# Enable versioning
Write-Host "Enabling versioning on S3 bucket..." -ForegroundColor Cyan
$versionResult = aws s3api put-bucket-versioning --bucket $bucketName --versioning-configuration Status=Enabled 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Versioning enabled on S3 bucket" -ForegroundColor Green
}
else {
    Write-Host "⚠️ Versioning result: $versionResult" -ForegroundColor Yellow
}

# Create ECR repository
Write-Host "Creating ECR repository..." -ForegroundColor Cyan
$ecrResult = aws ecr create-repository --repository-name burgerhub-frontend --region $region 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ ECR repository 'burgerhub-frontend' created successfully" -ForegroundColor Green
}
else {
    Write-Host "ℹ️ ECR repository result: $ecrResult" -ForegroundColor Yellow
}

Write-Host "`n📝 GitHub Setup Instructions:" -ForegroundColor Yellow
Write-Host "1. Go to your GitHub repository settings" -ForegroundColor White
Write-Host "2. Navigate to 'Secrets and variables' > 'Actions'" -ForegroundColor White
Write-Host "3. Add the following repository secrets:" -ForegroundColor White
Write-Host "   - AWS_ACCESS_KEY_ID: Your AWS access key" -ForegroundColor Cyan
Write-Host "   - AWS_SECRET_ACCESS_KEY: Your AWS secret key" -ForegroundColor Cyan
Write-Host "   - TF_STATE_BUCKET: $bucketName" -ForegroundColor Cyan

Write-Host "`n✨ Setup completed!" -ForegroundColor Green
