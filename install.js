var path = require('path')
var spawn = require('child_process').spawnSync

spawn('make', {
  cwd: path.join(__dirname, 'src'),
  stdio: 'inherit'
})
