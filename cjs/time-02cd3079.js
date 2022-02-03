'use strict';

const number = require('./number-1eb63a63.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const maxTenthForMinuteAndSecond = 5;
function getMeridiem(hour) {
  if (!number.isValidNumber(hour)) {
    return null;
  }
  const hourAsNumber = parseInt(hour);
  return hourAsNumber >= 0 && hourAsNumber <= 11 ? "AM" : "PM";
}
function getMeridiemHour(hour) {
  if (!number.isValidNumber(hour)) {
    return null;
  }
  const hourAsNumber = parseInt(hour);
  if (hourAsNumber === 0) {
    return "12";
  }
  return hourAsNumber > 12 ? formatTimePart(hourAsNumber - 12) : hour;
}
function parseTimeString(value) {
  const timeString = formatTimeString(value);
  const [hour, minute, second] = timeString ? timeString.split(":") : [null, null, null];
  return {
    hour,
    minute,
    second: second || (hour && minute ? "00" : null)
  };
}
function formatTimeString(value) {
  if (!value || value.endsWith(":") || value.startsWith(":")) {
    return null;
  }
  const splitValue = value.split(":");
  if (splitValue.length > 1) {
    const [hour, minute, second] = splitValue;
    const hourAsNumber = parseInt(splitValue[0]);
    const minuteAsNumber = parseInt(splitValue[1]);
    const secondAsNumber = parseInt(splitValue[2]);
    const hourValid = number.isValidNumber(hour) && hourAsNumber >= 0 && hourAsNumber < 24;
    const minuteValid = number.isValidNumber(minute) && minuteAsNumber >= 0 && minuteAsNumber < 60;
    const secondValid = number.isValidNumber(second) && secondAsNumber >= 0 && secondAsNumber < 60;
    if ((hourValid && minuteValid && !second) || (hourValid && minuteValid && secondValid)) {
      let newValue = `${formatTimePart(hourAsNumber)}:${formatTimePart(minuteAsNumber)}`;
      if (secondValid) {
        newValue = `${newValue}:${formatTimePart(secondAsNumber)}`;
      }
      return newValue;
    }
  }
  return null;
}
function formatTimePart(number) {
  const numberAsString = number.toString();
  return number >= 0 && number <= 9 ? numberAsString.padStart(2, "0") : numberAsString;
}

exports.formatTimePart = formatTimePart;
exports.formatTimeString = formatTimeString;
exports.getMeridiem = getMeridiem;
exports.getMeridiemHour = getMeridiemHour;
exports.maxTenthForMinuteAndSecond = maxTenthForMinuteAndSecond;
exports.parseTimeString = parseTimeString;
