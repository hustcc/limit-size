# limit-size

> `Lightweight`, `Convenient`, `Fast` command tool to control your file size, `size-limit` is too bloated.

[![npm Version](https://img.shields.io/npm/v/limit-size.svg)](https://www.npmjs.com/package/limit-size)
[![Build Status](https://github.com/hustcc/limit-size/workflows/build/badge.svg)](https://github.com/hustcc/limit-size/actions)
[![npm](https://img.shields.io/npm/dm/limit-size.svg)](https://www.npmjs.com/package/limit-size)
[![npm License](https://img.shields.io/npm/l/limit-size.svg)](https://www.npmjs.com/package/limit-size)


## Install

```bash
$ npm i --save-dev limit-size
```


## Usage

 - Add the `limit-size` section and the `size` script to your `package.json`:

```diff
  "scripts": {
+   "size": "limit-size",
    "test": "jest"
  },
+ "limit-size": [
+   {
+     "path": "dist/g2plot.min.js",
+     "limit": "500 Kb"
+   },
+   {
+     "path": "dist/g2plot.min.js",
+     "limit": "200 Kb",
+     "gzip": true
+   }
+ ],
```

 - you can get the size for your current project:

```bash
$ npm run size
```


## Dev

```bash
# install dependence
$ npm install

# run test cases
$ npm run test

# build package
$ npm run build

# run size local
$ npm run size
```


## License

MIT@[hustcc](https://github.com/hustcc).
