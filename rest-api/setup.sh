#!/bin/bash
rm -rf node_modules
rm -rf package*.json

npm init -y
npm install express
npm install chai -D
npm install chai-http -D