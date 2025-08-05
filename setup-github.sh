#!/bin/bash

# BurgerHub DevOps - GitHub Repository Setup Script
echo "🍔 Setting up BurgerHub DevOps repository on GitHub..."
echo ""

# Check current git status
echo "📊 Current Git Status:"
git log --oneline -3
echo ""

# Get GitHub username
echo "🔗 GitHub Repository Setup:"
echo "Please follow these steps to create your GitHub repository:"
echo ""
echo "1. Go to https://github.com/new"
echo "2. Repository name: burgerhub-devops"
echo "3. Description: Modern React restaurant app with enterprise DevOps pipeline (AWS ECS, Terraform, GitHub Actions)"
echo "4. Make it Public or Private (your choice)"
echo "5. DO NOT initialize with README, .gitignore, or license (we already have these)"
echo "6. Click 'Create repository'"
echo ""

# Prompt for GitHub username
read -p "Enter your GitHub username: " github_username

# Construct repository URL
repo_url="https://github.com/$github_username/burgerhub-devops.git"

echo ""
echo "🚀 Setting up remote repository..."

# Add remote origin
git remote add origin $repo_url
echo "✅ Added remote origin: $repo_url"

# Show current branch
current_branch=$(git branch --show-current)
echo "📍 Current branch: $current_branch"

echo ""
echo "🎯 Ready to push! Run the following command:"
echo ""
echo "git push -u origin $current_branch"
echo ""

echo "🔐 If prompted for authentication:"
echo "- Use your GitHub username"
echo "- For password, use a Personal Access Token (not your GitHub password)"
echo "- Create a token at: https://github.com/settings/tokens"
echo "- Give it 'repo' permissions"
echo ""

echo "📋 After successful push, set up GitHub Secrets for CI/CD:"
echo "Go to: https://github.com/$github_username/burgerhub-devops/settings/secrets/actions"
echo ""
echo "Add these secrets:"
echo "- AWS_ACCESS_KEY_ID: Your AWS access key"
echo "- AWS_SECRET_ACCESS_KEY: Your AWS secret key"  
echo "- TF_STATE_BUCKET: S3 bucket name for Terraform state (e.g., burgerhub-tf-state-$github_username)"
echo ""

echo "📖 Next steps after GitHub setup:"
echo "1. Run: ./scripts/setup.ps1 (to create AWS resources)"
echo "2. Push changes to trigger CI/CD pipeline"
echo "3. Monitor deployment in GitHub Actions"
echo "4. Check DEPLOYMENT_CHECKLIST.md for verification steps"
echo ""

echo "🎉 Repository setup complete! Ready for GitHub!"
