"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = _interopRequireDefault(require("../styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PreviousPageButton = function PreviousPageButton(_ref) {
  var css = _ref.css,
    page = _ref.page,
    handlePrevClick = _ref.handlePrevClick;
  var prevClass = "\n    ".concat(css ? css : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--previous', "\n    ").concat(page === 1 ? ' mgrpdf-navigation__controls--disabled' : '', "\n  ");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: prevClass,
    style: css ? {} : _styles.default.previous,
    onClick: handlePrevClick
  }, /*#__PURE__*/_react.default.createElement("a", null, '<'));
};
PreviousPageButton.propTypes = {
  css: _propTypes.default.string,
  page: _propTypes.default.number.isRequired,
  handlePrevClick: _propTypes.default.func.isRequired
};
var _default = PreviousPageButton;
exports.default = _default;