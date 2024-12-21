#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Step 1: Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker first."
    exit 1
fi

# Step 2: Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Step 3: Install dependencies
echo "Installing Node.js dependencies..."
npm install

# Step 4: Build the Docker image
echo "Building Docker image..."
docker-compose build

# Step 5: Run the Docker container
echo "Starting Docker containers..."
docker-compose up -d

# Step 6: Start the application in development mode
echo "Starting the development server..."
npm run dev

echo "Setup complete! Visit your app at http://localhost:3000"