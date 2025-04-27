#!/bin/bash

# Simple deployment script for AMM website
# This script can be used to deploy the website to a server using rsync

# Configuration
REMOTE_USER="your-username"
REMOTE_HOST="your-server.com"
REMOTE_PATH="/var/www/ammindia.in"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting deployment of AMM website...${NC}"

# Check if rsync is installed
if ! command -v rsync &> /dev/null; then
    echo -e "${RED}rsync is not installed. Please install it first.${NC}"
    exit 1
fi

# Create a list of files to deploy
echo -e "${GREEN}Creating file list...${NC}"
FILES="index.html about.html products.html contact.html styles.css script.js images/"

# Deploy the files
echo -e "${GREEN}Deploying files to server...${NC}"
rsync -avz --progress $FILES $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Deployment completed successfully!${NC}"
    echo -e "${GREEN}The website is now available at http://www.ammindia.in${NC}"
else
    echo -e "${RED}Deployment failed. Please check your connection and try again.${NC}"
    exit 1
fi

echo -e "${GREEN}Done!${NC}"
