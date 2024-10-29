#!/bin/bash
set -e

# Stop the HTTP server
echo "Stopping the HTTP server..."
sudo pkill -f "python -m http.server"
