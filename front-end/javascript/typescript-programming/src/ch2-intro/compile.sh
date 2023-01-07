#!/bin/bash

# Run this file at the root directory
# bash src/ch2-intro/compile.sh
./node_modules/.bin/tsc
node ./dist/index.js

# clean up
rm -r ./dist