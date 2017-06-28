webpackHotUpdate(0,{

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(25);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1101);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _ArgumentAnnotation = __webpack_require__(432);\n\nvar _ArgumentAnnotation2 = _interopRequireDefault(_ArgumentAnnotation);\n\nvar _index = __webpack_require__(48);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(517);\n\n__webpack_require__(518);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0,\n    command_editor = void 0,\n    explanation_editor = void 0,\n    code_preview = void 0;\n\nvar runTest = function runTest(args_obj) {\n  (0, _python.testFunction)({\n    name: command_name.value,\n    title: command_title.value,\n    args: args_obj,\n    command: command_editor.editor.getValue(),\n    explanation: explanation_editor.editor.getValue()\n  });\n};\n\nvar onChange = function onChange(dispatch, name) {\n  return function (value) {\n    console.log(\"setting\", name, value);\n    dispatch((0, _index.updateCodeEditor)(name, value));\n    runTest();\n  };\n};\n\nvar addArgument = function addArgument(dispatch) {\n  return function () {\n    dispatch((0, _index.addCommandArg)());\n  };\n};\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange(_this.props.dispatch, 'name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange(_this.props.dispatch, 'title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(\n              'button',\n              { onClick: addArgument(_this.props.dispatch) },\n              'Add Argument'\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'arguments' },\n              _this.props.args.map(function (arg, i) {\n                return _react2.default.createElement(_ArgumentAnnotation2.default, { id: i, name: arg.arg_name });\n              })\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'command'),\n              value: _this.props.command,\n              name: 'command_editor',\n              ref: function ref(node) {\n                command_editor = node;\n              }\n\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              value: _this.props.explanation,\n              name: 'explanation_editor',\n              ref: function ref(node) {\n                explanation_editor = node;\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Code preview:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              name: 'code_preview',\n              value: _this.props.preview,\n              contentEditable: false,\n              ref: function ref(node) {\n                code_preview = node;\n              }\n            }),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return runTest(_this.props.args);\n                } },\n              'Compile Code'\n            ),\n            _this.props.error !== \"\" ? _react2.default.createElement(\n              'div',\n              { className: 'errorBox' },\n              _this.props.error\n            ) : _react2.default.createElement('div', null)\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CommandEdit, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      console.log(\"setting values\", this.props.command);\n      code_preview.editor.setOptions({\n        readOnly: true,\n        highlightActiveLine: false,\n        highlightGutterLine: false\n      });\n      // command_editor.editor.setValue(this.props.command);\n      // args_editor.editor.setValue(this.props.args);\n      // explanation_editor.editor.setValue(this.props.explanation);\n    }\n  }]);\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs,\n    preview: state.commandEditPane.preview,\n    error: state.commandEditPane.error\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbImNvbW1hbmRfbmFtZSIsImNvbW1hbmRfdGl0bGUiLCJ0ZXN0X2lucHV0cyIsImFyZ3NfZWRpdG9yIiwiY29tbWFuZF9lZGl0b3IiLCJleHBsYW5hdGlvbl9lZGl0b3IiLCJjb2RlX3ByZXZpZXciLCJydW5UZXN0IiwiYXJnc19vYmoiLCJuYW1lIiwidmFsdWUiLCJ0aXRsZSIsImFyZ3MiLCJjb21tYW5kIiwiZWRpdG9yIiwiZ2V0VmFsdWUiLCJleHBsYW5hdGlvbiIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYWRkQXJndW1lbnQiLCJDb21tYW5kRWRpdCIsInJlbmRlciIsInByb3BzIiwibm9kZSIsIm1hcCIsImFyZyIsImkiLCJhcmdfbmFtZSIsInByZXZpZXciLCJlcnJvciIsInNldE9wdGlvbnMiLCJyZWFkT25seSIsImhpZ2hsaWdodEFjdGl2ZUxpbmUiLCJoaWdobGlnaHRHdXR0ZXJMaW5lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tYW5kRWRpdFBhbmUiLCJ0ZXN0SW5wdXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUdBLElBQUlBLHFCQUFKO0FBQUEsSUFBa0JDLHNCQUFsQjtBQUFBLElBQWlDQyxvQkFBakM7QUFBQSxJQUE4Q0Msb0JBQTlDO0FBQUEsSUFBMkRDLHVCQUEzRDtBQUFBLElBQTJFQywyQkFBM0U7QUFBQSxJQUErRkMscUJBQS9GOztBQUdBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxRQUFELEVBQWM7QUFDNUIsNEJBQWE7QUFDVEMsVUFBTVQsYUFBYVUsS0FEVjtBQUVUQyxXQUFNVixjQUFjUyxLQUZYO0FBR1RFLFVBQU1KLFFBSEc7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TUFBTUMsZUFBTixDQUFzQjNCLEtBREc7QUFFaENGLFVBQU00QixNQUFNQyxlQUFOLENBQXNCN0IsSUFGSTtBQUdoQ0csVUFBTXlCLE1BQU1DLGVBQU4sQ0FBc0IxQixJQUhJO0FBSWhDQyxhQUFTd0IsTUFBTUMsZUFBTixDQUFzQnpCLE9BSkM7QUFLaENHLGlCQUFhcUIsTUFBTUMsZUFBTixDQUFzQnRCLFdBTEg7QUFNaEN1QixnQkFBWUYsTUFBTUMsZUFBTixDQUFzQkMsVUFORjtBQU9oQ1QsYUFBU08sTUFBTUMsZUFBTixDQUFzQlIsT0FQQztBQVFoQ0MsV0FBT00sTUFBTUMsZUFBTixDQUFzQlA7QUFSRyxHQUFaO0FBQUEsQ0FBeEI7O0FBV0FULGNBQWMseUJBQVFjLGVBQVIsRUFBeUJkLFdBQXpCLENBQWQ7O2tCQUVlQSxXIiwiZmlsZSI6IjQzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYnJhY2UgZnJvbSAnYnJhY2UnO1xuaW1wb3J0IEFjZUVkaXRvciBmcm9tICdyZWFjdC1hY2UnO1xuaW1wb3J0IEFyZ3VtZW50QW5ub3RhdGlvbiBmcm9tICcuL0FyZ3VtZW50QW5ub3RhdGlvbic7XG5pbXBvcnQgeyB1cGRhdGVDb2RlRWRpdG9yLCBhZGRDb21tYW5kQXJnIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyBkb1NlYXJjaCwgdXBkYXRlSGludCwgdXBkYXRlRG9jcywgdGVzdEZ1bmN0aW9uIH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gJ3JlYWN0LXNwbGl0LXBhbmUnO1xuXG5pbXBvcnQgJ2JyYWNlL21vZGUvcHl0aG9uJztcbmltcG9ydCAnYnJhY2UvdGhlbWUvZ2l0aHViJztcblxuXG5sZXQgY29tbWFuZF9uYW1lLCBjb21tYW5kX3RpdGxlLCB0ZXN0X2lucHV0cywgYXJnc19lZGl0b3IsIGNvbW1hbmRfZWRpdG9yLCBleHBsYW5hdGlvbl9lZGl0b3IsIGNvZGVfcHJldmlldztcblxuXG5jb25zdCBydW5UZXN0ID0gKGFyZ3Nfb2JqKSA9PiB7XG4gIHRlc3RGdW5jdGlvbih7XG4gICAgICBuYW1lOiBjb21tYW5kX25hbWUudmFsdWUsXG4gICAgICB0aXRsZTpjb21tYW5kX3RpdGxlLnZhbHVlLFxuICAgICAgYXJnczogYXJnc19vYmosXG4gICAgICBjb21tYW5kOmNvbW1hbmRfZWRpdG9yLmVkaXRvci5nZXRWYWx1ZSgpLFxuICAgICAgZXhwbGFuYXRpb246ZXhwbGFuYXRpb25fZWRpdG9yLmVkaXRvci5nZXRWYWx1ZSgpXG4gIH0pO1xufTtcblxuY29uc3Qgb25DaGFuZ2UgPSAoZGlzcGF0Y2gsIG5hbWUpID0+XG4gICh2YWx1ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZ1wiLG5hbWUsdmFsdWUpO1xuICAgIGRpc3BhdGNoKHVwZGF0ZUNvZGVFZGl0b3IobmFtZSwgdmFsdWUpKTtcbiAgICBydW5UZXN0KCk7XG4gIH07XG5cbmNvbnN0IGFkZEFyZ3VtZW50ID0gKGRpc3BhdGNoKSA9PlxuICAoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkQ29tbWFuZEFyZygpKTtcbiAgfTtcblxuY2xhc3MgQ29tbWFuZEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgdmFsdWVzXCIsIHRoaXMucHJvcHMuY29tbWFuZCk7XG4gICAgICAgIGNvZGVfcHJldmlldy5lZGl0b3Iuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGhpZ2hsaWdodEFjdGl2ZUxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgaGlnaGxpZ2h0R3V0dGVyTGluZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbW1hbmRfZWRpdG9yLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLmNvbW1hbmQpO1xuICAgICAgICAvLyBhcmdzX2VkaXRvci5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy5hcmdzKTtcbiAgICAgICAgLy8gZXhwbGFuYXRpb25fZWRpdG9yLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLmV4cGxhbmF0aW9uKTtcbiAgICB9XG5cbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZF9lZGl0XCI+XG4gICAgICAgICAgICA8U3BsaXRQYW5lIGNsYXNzTmFtZT1cImNvZGVwYW5lXCIgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIGRlZmF1bHRTaXplPVwiNjYlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db21tYW5kIG5hbWU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZF90d29fbnVtYmVyc1wiIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnbmFtZScpfSByZWY9e25vZGUgPT4ge2NvbW1hbmRfbmFtZSA9IG5vZGU7fX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db21tYW5kIHRpdGxlOjwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlLmcuLCBhZGQge3h9IGFuZCB7eX1cIiBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ3RpdGxlJyl9IHJlZj17bm9kZSA9PiB7Y29tbWFuZF90aXRsZSA9IG5vZGU7fX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Bcmd1bWVudHM6PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEFyZ3VtZW50KHRoaXMucHJvcHMuZGlzcGF0Y2gpfT5BZGQgQXJndW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJndW1lbnRzXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFyZ3MubWFwKChhcmcsaSkgPT4gPEFyZ3VtZW50QW5ub3RhdGlvbiBpZD17aX0gbmFtZT17YXJnLmFyZ19uYW1lfS8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRoZSBweXRob24gY29tbWFuZDo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnY29tbWFuZCcpfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jb21tYW5kfVxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWFuZF9lZGl0b3JcIlxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2NvbW1hbmRfZWRpdG9yID0gbm9kZTt9fVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRoZSBleHBsYW5hdGlvbjo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnZXhwbGFuYXRpb24nKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZXhwbGFuYXRpb259XG4gICAgICAgICAgICAgIG5hbWU9XCJleHBsYW5hdGlvbl9lZGl0b3JcIlxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2V4cGxhbmF0aW9uX2VkaXRvciA9IG5vZGU7fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXQgdGVzdHBhbmUgb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db2RlIHByZXZpZXc6PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBuYW1lPVwiY29kZV9wcmV2aWV3XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMucHJldmlld31cbiAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlID0ge2ZhbHNlfVxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2NvZGVfcHJldmlldyA9IG5vZGU7fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJ1blRlc3QodGhpcy5wcm9wcy5hcmdzKX0+Q29tcGlsZSBDb2RlPC9idXR0b24+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvciAhPT0gXCJcIiA/IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JCb3hcIj57dGhpcy5wcm9wcy5lcnJvcn08L2Rpdj4gOiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgICA8L2Rpdj5cblxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB0aXRsZTogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnRpdGxlLFxuICAgIG5hbWU6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5uYW1lLFxuICAgIGFyZ3M6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5hcmdzLFxuICAgIGNvbW1hbmQ6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5jb21tYW5kLFxuICAgIGV4cGxhbmF0aW9uOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuZXhwbGFuYXRpb24sXG4gICAgdGVzdElucHV0czogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnRlc3RJbnB1dHMsXG4gICAgcHJldmlldzogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnByZXZpZXcsXG4gICAgZXJyb3I6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5lcnJvclxufSk7XG5cbkNvbW1hbmRFZGl0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1hbmRFZGl0KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZEVkaXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})