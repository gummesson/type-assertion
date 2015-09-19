/**
 * Dependencies
 */

var test = require('tape')
var assert = require('./')

/**
 * Tests
 */

test('assert(value, expected)', function(t) {
  t.doesNotThrow(assert.bind(null, {}, 'object'))
  t.doesNotThrow(assert.bind(null, [], 'array'))
  t.doesNotThrow(assert.bind(null, 'hello', 'value'))
  t.throws(assert)
  t.throws(assert.bind(null, [], 'object'))
  t.throws(assert.bind(null, '', 'value'))
  t.end()
})
