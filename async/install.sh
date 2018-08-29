#!/bin/bash
rm -rf package*.*
rm -rf node_modules
echo {} > package.json
npm install -D chai