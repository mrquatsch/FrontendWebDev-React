#!/bin/bash

docker build -t react:latest -f Dockerfile .
docker run --name=react -p 3020:3000 --restart=always --detach=true react:latest
