# dzen2-bin

[dzen2](https://github.com/robm/dzen) binary as a Node module.

## Install

```bash
npm install --save dzen2-bin
```

You need GCC and `make`.
`apt-get install build-essential` should do the trick.

## Usage

```js
var dzenPath = require('dzen2-bin')
var spawn = require('child_process').spawn

var dzen = spawn(dzenPath, ['-dock', '-fn', 'monospace'])
dzen.stdin.write('hello world\n')
```

## License

[MIT](./LICENSE)
