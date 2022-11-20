"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = _interopRequireDefault(require("../styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PagesIndicator = function PagesIndicator(_ref) {
  var css = _ref.css,
    page = _ref.page,
    pages = _ref.pages;
  var pagesClass = css ? css : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--pages';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: pagesClass,
    style: css ? {} : _styles.default.pages
  }, page, "/", pages);
};
PagesIndicator.propTypes = {
  css: _propTypes.default.string,
  page: _propTypes.default.number.isRequired,
  pages: _propTypes.default.number.isRequired
};
var _default = PagesIndicator;
exports.default = _default;