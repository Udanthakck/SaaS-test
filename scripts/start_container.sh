#!/bin/bash
set -e

# Install AWS CLI v2 if it's not installed
if ! command -v aws &> /dev/null
then
    echo "AWS CLI not found, installing..."
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    unzip awscliv2.zip
    sudo ./aws/install
fi


# Retrieve Docker credentials from AWS Parameter Store
DOCKER_REGISTRY_USERNAME=$(aws ssm get-parameter --name "/SaaS/docker-credentials/username" --with-decryption --query "Parameter.Value" --output text)
DOCKER_REGISTRY_PASSWORD=$(aws ssm get-parameter --name "/SaaS/docker-credentials/password" --with-decryption --query "Parameter.Value" --output text)
DOCKER_REGISTRY_URL=$(aws ssm get-parameter --name "/SaaS/docker-url/url" --with-decryption --query "Parameter.Value" --output text)


# echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

echo "$DOCKER_REGISTRY_PASSWORD" | docker login -u "$DOCKER_REGISTRY_USERNAME" --password-stdin "$DOCKER_REGISTRY_URL"


# Pull the Docker image from Docker Hub
docker pull udanthamahanama/saas-fe:latest

# Run the Docker image as a container

docker run -d -p 80:5000 udanthamahanama/saas-fe




