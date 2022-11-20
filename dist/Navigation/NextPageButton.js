"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = _interopRequireDefault(require("../styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NextPageButton = function NextPageButton(_ref) {
  var css = _ref.css,
    page = _ref.page,
    pages = _ref.pages,
    handleNextClick = _ref.handleNextClick;
  var nextClass = "\n    ".concat(css ? css : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--next', "\n    ").concat(page === pages ? ' mgrpdf-navigation__controls--disabled' : '', "\n  ");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: nextClass,
    style: css ? {} : _styles.default.next,
    onClick: handleNextClick
  }, /*#__PURE__*/_react.default.createElement("a", null, '>'));
};
NextPageButton.propTypes = {
  css: _propTypes.default.string,
  page: _propTypes.default.number.isRequired,
  pages: _propTypes.default.number.isRequired,
  handleNextClick: _propTypes.default.func.isRequired
};
var _default = NextPageButton;
exports.default = _default;