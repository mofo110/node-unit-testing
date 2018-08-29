#!/bin/bash
sudo npm install mocha -g

touch package.json
echo {} > package.json

npm install chai --save-dev
npm install sinon --save-dev
