#!/usr/bin/env node

var dzenPath = require('.')
var spawn = require('child_process').spawnSync

spawn(dzenPath, process.argv.slice(2), {
  stdio: 'inherit'
})
