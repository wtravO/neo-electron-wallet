webpackHotUpdate(0,{

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(23);\n\nvar _index = __webpack_require__(42);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar examples = {};\n\nvar addExampleButton = function addExampleButton(dispatch) {\n  return function () {\n    dispatch((0, _index.addExample)());\n  };\n};\n\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  return function () {\n    dispatch((0, _index.deleteCommandExample)(id));\n  };\n};\n\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  return function () {\n    console.log(id, examples);\n    dispatch((0, _index.updateCommandExample)(id, examples[id].value));\n  };\n};\n\nvar ExamplesEditor = function ExamplesEditor(_ref) {\n  var dispatch = _ref.dispatch,\n      examples = _ref.examples;\n  return _react2.default.createElement(\n    'div',\n    { className: 'command_examples' },\n    _react2.default.createElement(\n      'button',\n      { onClick: addExampleButton(dispatch) },\n      'Add Example'\n    ),\n    examples.map(function (example, id) {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'example' },\n          _react2.default.createElement('input', { type: 'text', ref: function ref(node) {\n              examples[id] = node;\n            }, onChange: onChangeInput(dispatch, id), value: example })\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: onClickDelete(dispatch, id) },\n          'Delete'\n        )\n      );\n    })\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    examples: state.commandEditPane.examples\n  };\n};\n\nExamplesEditor = (0, _reactRedux.connect)(mapStateToProps)(ExamplesEditor);\n\nexports.default = ExamplesEditor;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FeGFtcGxlc0VkaXRvci5qcz82NWIwIl0sIm5hbWVzIjpbImV4YW1wbGVzIiwiYWRkRXhhbXBsZUJ1dHRvbiIsImRpc3BhdGNoIiwib25DbGlja0RlbGV0ZSIsImlkIiwib25DaGFuZ2VJbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsIkV4YW1wbGVzRWRpdG9yIiwibWFwIiwiZXhhbXBsZSIsIm5vZGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbW1hbmRFZGl0UGFuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQUlBLFdBQVcsRUFBZjs7QUFFQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxRQUFEO0FBQUEsU0FDdkIsWUFBTTtBQUNKQSxhQUFTLHdCQUFUO0FBQ0QsR0FIc0I7QUFBQSxDQUF6Qjs7QUFLQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNELFFBQUQsRUFBV0UsRUFBWDtBQUFBLFNBQ3BCLFlBQU07QUFDSkYsYUFBUyxpQ0FBcUJFLEVBQXJCLENBQVQ7QUFDRCxHQUhtQjtBQUFBLENBQXRCOztBQUtBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0gsUUFBRCxFQUFXRSxFQUFYO0FBQUEsU0FDcEIsWUFBTTtBQUNKRSxZQUFRQyxHQUFSLENBQVlILEVBQVosRUFBZ0JKLFFBQWhCO0FBQ0FFLGFBQVMsaUNBQXFCRSxFQUFyQixFQUF5QkosU0FBU0ksRUFBVCxFQUFhSSxLQUF0QyxDQUFUO0FBQ0QsR0FKbUI7QUFBQSxDQUF0Qjs7QUFNQSxJQUFJQyxpQkFBaUI7QUFBQSxNQUFHUCxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhRixRQUFiLFFBQWFBLFFBQWI7QUFBQSxTQUNqQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0k7QUFBQTtBQUFBLFFBQVEsU0FBU0MsaUJBQWlCQyxRQUFqQixDQUFqQjtBQUFBO0FBQUEsS0FESjtBQUVLRixhQUFTVSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVUCxFQUFWO0FBQUEsYUFBaUI7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQXlCLG1EQUFPLE1BQUssTUFBWixFQUFtQixLQUFLLG1CQUFRO0FBQUNKLHVCQUFTSSxFQUFULElBQWVRLElBQWY7QUFBcUIsYUFBdEQsRUFBd0QsVUFBVVAsY0FBY0gsUUFBZCxFQUF3QkUsRUFBeEIsQ0FBbEUsRUFBK0YsT0FBT08sT0FBdEc7QUFBekIsU0FBTDtBQUFxSjtBQUFBO0FBQUEsWUFBUSxTQUFTUixjQUFjRCxRQUFkLEVBQXdCRSxFQUF4QixDQUFqQjtBQUFBO0FBQUE7QUFBckosT0FBakI7QUFBQSxLQUFiO0FBRkwsR0FEaUI7QUFBQSxDQUFyQjs7QUFNQSxJQUFNUyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDZCxjQUFVYyxNQUFNQyxlQUFOLENBQXNCZjtBQURFLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQVMsaUJBQWlCLHlCQUFRSSxlQUFSLEVBQXlCSixjQUF6QixDQUFqQjs7a0JBRWVBLGMiLCJmaWxlIjoiNDM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRFeGFtcGxlLCBkZWxldGVDb21tYW5kRXhhbXBsZSwgdXBkYXRlQ29tbWFuZEV4YW1wbGUgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcblxubGV0IGV4YW1wbGVzID0ge307XG5cbmNvbnN0IGFkZEV4YW1wbGVCdXR0b24gPSAoZGlzcGF0Y2gpID0+XG4gICgpID0+IHtcbiAgICBkaXNwYXRjaChhZGRFeGFtcGxlKCkpO1xuICB9O1xuXG5jb25zdCBvbkNsaWNrRGVsZXRlID0gKGRpc3BhdGNoLCBpZCkgPT5cbiAgKCkgPT4ge1xuICAgIGRpc3BhdGNoKGRlbGV0ZUNvbW1hbmRFeGFtcGxlKGlkKSk7XG4gIH07XG5cbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZGlzcGF0Y2gsIGlkKSA9PlxuICAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coaWQsIGV4YW1wbGVzKTtcbiAgICBkaXNwYXRjaCh1cGRhdGVDb21tYW5kRXhhbXBsZShpZCwgZXhhbXBsZXNbaWRdLnZhbHVlKSk7XG4gIH07XG5cbmxldCBFeGFtcGxlc0VkaXRvciA9ICh7IGRpc3BhdGNoLCBleGFtcGxlcyB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZF9leGFtcGxlc1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEV4YW1wbGVCdXR0b24oZGlzcGF0Y2gpfT5BZGQgRXhhbXBsZTwvYnV0dG9uPlxuICAgICAgICB7ZXhhbXBsZXMubWFwKChleGFtcGxlLCBpZCkgPT4gPGRpdj48ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj48aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e25vZGUgPT4ge2V4YW1wbGVzW2lkXSA9IG5vZGU7fX0gb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gsIGlkKX0gdmFsdWU9e2V4YW1wbGV9IC8+PC9kaXY+PGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrRGVsZXRlKGRpc3BhdGNoLCBpZCl9PkRlbGV0ZTwvYnV0dG9uPjwvZGl2Pil9XG4gICAgPC9kaXY+O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGV4YW1wbGVzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuZXhhbXBsZXMsXG59KTtcblxuRXhhbXBsZXNFZGl0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRXhhbXBsZXNFZGl0b3IpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlc0VkaXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0V4YW1wbGVzRWRpdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})