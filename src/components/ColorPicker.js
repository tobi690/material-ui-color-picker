"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPickerField = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withState = _interopRequireDefault(require("recompose/withState"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _transformers = require("../transformers");

var _PickerDialog = _interopRequireDefault(require("./PickerDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ColorPicker = function ColorPicker(_ref) {
  var _onChange = _ref.onChange,
      convert = _ref.convert,
      name = _ref.name,
      id = _ref.id,
      hintText = _ref.hintText,
      placeholder = _ref.placeholder,
      floatingLabelText = _ref.floatingLabelText,
      label = _ref.label,
      TextFieldProps = _ref.TextFieldProps,
      value = _ref.value,
      showPicker = _ref.showPicker,
      setShowPicker = _ref.setShowPicker,
      internalValue = _ref.internalValue,
      setValue = _ref.setValue,
      custom = _objectWithoutProperties(_ref, ["onChange", "convert", "name", "id", "hintText", "placeholder", "floatingLabelText", "label", "TextFieldProps", "value", "showPicker", "setShowPicker", "internalValue", "setValue"]);

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_TextField["default"], _extends({
    name: name,
    id: id,
    label: floatingLabelText || label,
    placeholder: hintText || placeholder,
    onClick: function onClick() {
      return setShowPicker(true);
    },
    onChange: function onChange(e) {
      setValue(e.target.value);

      _onChange(e.target.value);
    },
    InputProps: {
      style: {
        color: value === undefined ? internalValue : value
      }
    }
  }, TextFieldProps, custom)), showPicker && _react["default"].createElement(_PickerDialog["default"], {
    value: value === undefined ? internalValue : value,
    onClick: function onClick() {
      setShowPicker(false);

      _onChange(value);
    },
    onChange: function onChange(c) {
      var newValue = _transformers.converters[convert](c);

      setValue(newValue);

      _onChange(newValue);
    }
  }));
};

ColorPicker.propTypes = {
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  convert: _propTypes["default"].oneOf(Object.keys(_transformers.converters)),
  name: _propTypes["default"].string,
  id: _propTypes["default"].string,
  hintText: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  label: _propTypes["default"].string,
  floatingLabelText: _propTypes["default"].string,
  TextFieldProps: _propTypes["default"].shape(_TextField["default"].propTypes),
  showPicker: _propTypes["default"].bool,
  setShowPicker: _propTypes["default"].func,
  internalValue: _propTypes["default"].string,
  setValue: _propTypes["default"].func
};
ColorPicker.defaultProps = {
  convert: _transformers.DEFAULT_CONVERTER
};
var makeColorPicker = (0, _compose["default"])((0, _withState["default"])('showPicker', 'setShowPicker', false), (0, _withState["default"])('internalValue', 'setValue', function (_ref2) {
  var defaultValue = _ref2.defaultValue;
  return defaultValue;
}));
var MakedColorPicker = makeColorPicker(ColorPicker);

var ColorPickerField = function ColorPickerField(_ref3) {
  var _ref3$input = _ref3.input,
      value = _ref3$input.value,
      onChange = _ref3$input.onChange,
      restInput = _objectWithoutProperties(_ref3$input, ["value", "onChange"]),
      _ref3$meta = _ref3.meta,
      touched = _ref3$meta.touched,
      error = _ref3$meta.error,
      restProps = _objectWithoutProperties(_ref3, ["input", "meta"]);

  return _react["default"].createElement(MakedColorPicker, _extends({
    value: value,
    onChange: onChange,
    errorText: touched && error,
    disableAlpha: true
  }, restInput, restProps));
};

exports.ColorPickerField = ColorPickerField;
ColorPickerField.propTypes = {
  input: _propTypes["default"].object,
  meta: _propTypes["default"].object
};
var _default = MakedColorPicker;
exports["default"] = _default;