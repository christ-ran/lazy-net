/*
 * Check if object is number.
 *
 * @param {Object} obj The object we want to test.
 * @returns {Boolean} True if value is a number, otherwise false.
 * */
function isNumber(obj: number) {
  return obj !== null && typeof obj === 'number'
}

export { isNumber }
