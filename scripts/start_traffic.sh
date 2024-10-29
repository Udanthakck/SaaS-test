#!/bin/bash
set -e
# Start the HTTP server after the application is installed



# Start the HTTP server
echo "Starting the HTTP server on port 80..."
sudo python3 -m http.server 8080 --bind 0.0.0.0 &
