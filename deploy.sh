#!/bin/bash

# 🚀 Quick Deployment Script for Beyond Ordinary Adventures
# This script helps you deploy to Vercel and Render quickly

set -e  # Exit on error

echo "🚀 Beyond Ordinary Adventures - Deployment Script"
echo "=================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Check if required tools are installed
check_requirements() {
    print_info "Checking requirements..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    print_success "Node.js is installed"
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    print_success "npm is installed"
    
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed. Please install Git first."
        exit 1
    fi
    print_success "Git is installed"
    
    echo ""
}

# Install dependencies
install_dependencies() {
    print_info "Installing dependencies..."
    npm install
    print_success "Dependencies installed"
    echo ""
}

# Build the project
build_project() {
    print_info "Building project..."
    npm run build
    print_success "Build completed"
    echo ""
}

# Deploy to Vercel
deploy_vercel() {
    print_info "Deploying to Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    print_info "Running Vercel deployment..."
    vercel --prod
    
    print_success "Deployed to Vercel!"
    echo ""
}

# Main menu
show_menu() {
    echo "What would you like to do?"
    echo ""
    echo "1) Install dependencies"
    echo "2) Build project"
    echo "3) Deploy to Vercel (production)"
    echo "4) Deploy to Vercel (preview)"
    echo "5) Full deployment (install + build + deploy)"
    echo "6) Check deployment status"
    echo "7) View Vercel logs"
    echo "8) Exit"
    echo ""
    read -p "Enter your choice (1-8): " choice
    
    case $choice in
        1)
            install_dependencies
            show_menu
            ;;
        2)
            build_project
            show_menu
            ;;
        3)
            check_requirements
            install_dependencies
            build_project
            deploy_vercel
            print_success "🎉 Deployment complete!"
            ;;
        4)
            check_requirements
            install_dependencies
            build_project
            print_info "Deploying preview to Vercel..."
            vercel
            print_success "Preview deployed!"
            show_menu
            ;;
        5)
            check_requirements
            install_dependencies
            build_project
            deploy_vercel
            print_success "🎉 Full deployment complete!"
            ;;
        6)
            print_info "Checking deployment status..."
            vercel ls
            show_menu
            ;;
        7)
            print_info "Fetching Vercel logs..."
            vercel logs
            show_menu
            ;;
        8)
            print_info "Goodbye! 👋"
            exit 0
            ;;
        *)
            print_error "Invalid choice. Please try again."
            show_menu
            ;;
    esac
}

# Start the script
clear
check_requirements
show_menu
