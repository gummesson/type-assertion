/**
 * Dependencies
 */

var typeOf = require('obj-type')

/**
 * Exports
 */

module.exports = assert
module.exports.type = assert

/**
 * Assert the type of a value.
 *
 * @param {*} value
 * @param {String} expected
 */

function assert(value, expected) {
  var actual = typeOf(value)
  if (actual === expected) return
  if (expected === 'value' && value) return
  throw error(expected)
}

/**
 * Format error.
 *
 * @param {String} expected
 * @return {Error}
 * @private
 */

function error(expected) {
  var message = 'expected ' + expected
  var error = new TypeError(message)
  return error
}
