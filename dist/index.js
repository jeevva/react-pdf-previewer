"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactPdfJs = _interopRequireDefault(require("react-pdf-js"));
var _Navigation = _interopRequireDefault(require("./Navigation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var mgrpdfStyles = {};
mgrpdfStyles.wrapper = {
  textAlign: 'center'
};
var PDFViewer = /*#__PURE__*/function (_React$Component) {
  _inherits(PDFViewer, _React$Component);
  var _super = _createSuper(PDFViewer);
  function PDFViewer() {
    var _this;
    _classCallCheck(this, PDFViewer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      pages: 0,
      page: 1
    });
    _defineProperty(_assertThisInitialized(_this), "onDocumentComplete", function (pages) {
      _this.setState({
        pages: pages
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handlePrevClick", function () {
      if (_this.state.page === 1) return;
      _this.setState({
        page: _this.state.page - 1
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleNextClick", function () {
      if (_this.state.page === _this.state.pages) return;
      _this.setState({
        page: _this.state.page + 1
      });
    });
    return _this;
  }
  _createClass(PDFViewer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        pages: null,
        page: this.props.page || 1
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var page = _ref.page;
      this.setState({
        page: page || this.state.page
      });
    }
  }, {
    key: "render",
    value: function render() {
      var source = this.props.document;
      var _this$props = this.props,
        loader = _this$props.loader,
        scale = _this$props.scale,
        hideNavbar = _this$props.hideNavbar,
        navigation = _this$props.navigation,
        css = _this$props.css,
        onDocumentClick = _this$props.onDocumentClick;
      var _this$state = this.state,
        page = _this$state.page,
        pages = _this$state.pages;
      var NavigationElement = navigation;
      var pdf = /*#__PURE__*/_react.default.createElement(_reactPdfJs.default, {
        file: source.file || source.url,
        content: source.base64,
        binaryContent: source.binary,
        documentInitParameters: source.connection,
        loading: loader,
        page: page,
        scale: scale,
        onDocumentComplete: this.onDocumentComplete
      });
      var nav = null;
      if (!hideNavbar && pages > 0) {
        nav = !navigation || navigation && _typeof(navigation) === 'object' ? /*#__PURE__*/_react.default.createElement(_Navigation.default, {
          page: page,
          pages: pages,
          css: navigation ? navigation.css : undefined,
          elements: navigation ? navigation.elements : undefined,
          handleNextClick: this.handleNextClick,
          handlePrevClick: this.handlePrevClick
        }) : /*#__PURE__*/_react.default.createElement(NavigationElement, {
          page: page,
          pages: pages,
          handleNextClick: this.handleNextClick,
          handlePrevClick: this.handlePrevClick
        });
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: css ? css : 'mgrpdf__wrapper',
        style: mgrpdfStyles.wrapper
      }, /*#__PURE__*/_react.default.createElement("div", {
        onClick: onDocumentClick
      }, pdf), nav);
    }
  }]);
  return PDFViewer;
}(_react.default.Component);
PDFViewer.propTypes = {
  document: _propTypes.default.shape({
    file: _propTypes.default.any,
    // File object,
    url: _propTypes.default.string,
    connection: _propTypes.default.shape({
      url: _propTypes.default.string.isRequired // URL to fetch the pdf
    }),

    base64: _propTypes.default.string,
    // PDF file encoded in base64
    binary: _propTypes.default.shape({
      // UInt8Array
      data: _propTypes.default.any
    })
  }).isRequired,
  loader: _propTypes.default.node,
  page: _propTypes.default.number,
  scale: _propTypes.default.number,
  css: _propTypes.default.string,
  onDocumentClick: _propTypes.default.func,
  hideNavbar: _propTypes.default.bool,
  navigation: _propTypes.default.oneOfType([
  // Can be an object with css classes or react elements to be rendered
  _propTypes.default.shape({
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
    })
  }),
  // Or a full navigation component
  _propTypes.default.any])
};
PDFViewer.defaultProps = {
  scale: 1
};
var _default = PDFViewer;
exports.default = _default;