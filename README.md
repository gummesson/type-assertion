# type-assertion

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Assert the type of a value.

## Installation

```
npm install type-assertion
```

## Usage

``` javascript
var assert = require('type-assertion')

assert({}, 'object')
assert([], 'object')  //=> TypeError: expected object
assert('ok', 'value')
assert('', 'value')   //=> TypeError: expected value
```

## API

### assert(value, expected)

Assert that `value` has the type of `expected` (aliased to `assert.type`).

## Why?

To provide a simple way to assert types with a small footprint. Node.js'
[assert](https://nodejs.org/api/assert.html) module is nice, but it's a bit too
big when it comes to using it on the front-end.

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/type-assertion.svg?style=flat-square
[npm-url]: https://npmjs.com/package/type-assertion
[license-img]: http://img.shields.io/npm/l/type-assertion.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/type-assertion.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/type-assertion
