"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _NextPageButton = _interopRequireDefault(require("./NextPageButton"));
var _PagesIndicator = _interopRequireDefault(require("./PagesIndicator"));
var _PreviousPageButton = _interopRequireDefault(require("./PreviousPageButton"));
var _styles = _interopRequireDefault(require("../styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Navigation = function Navigation(_ref) {
  var page = _ref.page,
    pages = _ref.pages,
    css = _ref.css,
    elements = _ref.elements,
    handlePrevClick = _ref.handlePrevClick,
    handleNextClick = _ref.handleNextClick;
  var prevEl, nextEl, pagesEl;
  if (elements.previousPageBtn) {
    prevEl = /*#__PURE__*/_react.default.createElement(elements.previousPageBtn, {
      page: page,
      pages: pages,
      handlePrevClick: handlePrevClick
    });
  } else {
    prevEl = /*#__PURE__*/_react.default.createElement(_PreviousPageButton.default, {
      css: css.previousPageBtn,
      page: page,
      pages: pages,
      handlePrevClick: handlePrevClick
    });
  }
  if (elements.nextPageBtn) {
    nextEl = /*#__PURE__*/_react.default.createElement(elements.nextPageBtn, {
      page: page,
      pages: pages,
      handleNextClick: handleNextClick
    });
  } else {
    nextEl = /*#__PURE__*/_react.default.createElement(_NextPageButton.default, {
      css: css.nextPageBtn,
      page: page,
      pages: pages,
      handleNextClick: handleNextClick
    });
  }
  if (elements.pages) {
    pagesEl = /*#__PURE__*/_react.default.createElement(elements.pages, {
      page: page,
      pages: pages
    });
  } else {
    pagesEl = /*#__PURE__*/_react.default.createElement(_PagesIndicator.default, {
      css: css.pages,
      page: page,
      pages: pages
    });
  }
  var wrapperClass = css.wrapper ? css.wrapper : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--wrapper';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClass,
    style: css.wrapper ? {} : _styles.default.wrapper
  }, prevEl, pagesEl, nextEl);
};
Navigation.propTypes = {
  page: _propTypes.default.number.isRequired,
  pages: _propTypes.default.number.isRequired,
  css: _propTypes.default.shape({
    previousPageBtn: _propTypes.default.string,
    nextPageBtn: _propTypes.default.string,
    pages: _propTypes.default.string,
    wrapper: _propTypes.default.string
  }),
  elements: _propTypes.default.shape({
    previousPageBtn: _propTypes.default.any,
    nextPageBtn: _propTypes.default.any,
    pages: _propTypes.default.any
  }),
  handlePrevClick: _propTypes.default.func.isRequired,
  handleNextClick: _propTypes.default.func.isRequired
};
Navigation.defaultProps = {
  css: {},
  elements: {}
};
var _default = Navigation;
exports.default = _default;