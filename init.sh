#!/bin/bash
echo "Starting React CRUD App Setup..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the app
echo "Building the app..."
npm run build

# Start Docker
echo "Starting Docker containers..."
docker-compose up --build

echo "App is running at http://localhost:3000"

