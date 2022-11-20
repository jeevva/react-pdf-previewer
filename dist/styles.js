"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var styles = {};
styles.navigation = {
  display: 'inline-block'
};
styles.controls = _objectSpread(_objectSpread({}, styles.navigation), {}, {
  textAlign: 'center'
});
styles.wrapper = _objectSpread(_objectSpread({}, styles.controls), {}, {
  width: '100%',
  heigth: 24,
  backgroundColor: '#323232',
  color: '#fff'
});
styles.previous = _objectSpread(_objectSpread({}, styles.controls), {}, {
  marginRight: 12,
  cursor: 'pointer'
});
styles.next = _objectSpread(_objectSpread({}, styles.controls), {}, {
  marginLeft: 12,
  cursor: 'pointer'
});
styles.pages = _objectSpread({}, styles.controls);
var _default = styles;
exports.default = _default;