#!/bin/bash

cd /home/ubuntu/learn_actions
forever stopall
forever start /home/ubuntu/learn_actions/server.js
