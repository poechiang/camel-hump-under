"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hump = exports.camel = exports.underline = void 0;

var underline = function underline(str) {
  return (str || '').replace(/[A-Z-]/g, function (item) {
    return '_' + item.toLowerCase();
  }).split('_').filter(function (item) {
    return !!item;
  }).join('_');
};

exports.underline = underline;

var camel = function camel(str) {
  return (str || '').replace(/[_-][a-z]/g, function (item) {
    return item.replace(/[_-]/g, '').toUpperCase();
  });
};

exports.camel = camel;

var hump = function hump(str) {
  return (str || '').replace(/[A-Z_]/g, function (item) {
    return '-' + item.toLowerCase();
  }).split('-').filter(function (item) {
    return !!item;
  }).join('-');
};

exports.hump = hump;