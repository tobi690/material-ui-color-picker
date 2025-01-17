"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactColor = require("react-color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PickerDialog = function PickerDialog(_ref) {
  var value = _ref.value,
      onClick = _ref.onClick,
      onChange = _ref.onChange;
  return _react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, _react["default"].createElement("div", {
    style: {
      position: 'absolute',
      zIndex: '2'
    }
  }, _react["default"].createElement("div", {
    style: {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    },
    onClick: onClick
  }), _react["default"].createElement(_reactColor.ChromePicker, {
    color: value,
    onChange: onChange,
    disableAlpha: true
  })));
};

PickerDialog.propTypes = {
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func
};
var _default = PickerDialog;
exports["default"] = _default;