'use strict';

const key = require('./key-244ba28e.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function isValidNumber(numberString) {
  return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
  if (!numberString || !stringContainsNumbers(numberString)) {
    return null;
  }
  let containsDecimal = false;
  const result = numberString
    .split("")
    .filter((value, i) => {
    if (value.match(/\./g) && !containsDecimal) {
      containsDecimal = true;
      return true;
    }
    if (value.match(/\-/g) && i === 0) {
      return true;
    }
    return key.numberKeys.includes(value);
  })
    .reduce((string, part) => string + part);
  return isValidNumber(result) ? Number(result).toString() : null;
}
function sanitizeDecimalString(decimalString) {
  return (decimalString === null || decimalString === void 0 ? void 0 : decimalString.endsWith(".")) ? decimalString.replace(".", "") : decimalString;
}
function sanitizeNumberString(value) {
  return value ? Number(sanitizeDecimalString(value)).toString() : value;
}
function stringContainsNumbers(string) {
  return key.numberKeys.some((number) => string.includes(number));
}

exports.isValidNumber = isValidNumber;
exports.parseNumberString = parseNumberString;
exports.sanitizeDecimalString = sanitizeDecimalString;
exports.sanitizeNumberString = sanitizeNumberString;
