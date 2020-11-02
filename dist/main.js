/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ \"./toy-react.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Square = /*#__PURE__*/function (_Component) {\n  _inherits(Square, _Component);\n\n  var _super = _createSuper(Square);\n\n  function Square(props) {\n    var _this;\n\n    _classCallCheck(this, Square);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      value: null\n    };\n    return _this;\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n        className: \"square\",\n        onClick: function onClick() {\n          return _this2.setState({\n            value: 'X'\n          });\n        }\n      }, this.state.value);\n    }\n  }]);\n\n  return Square;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Board = /*#__PURE__*/function (_Component2) {\n  _inherits(Board, _Component2);\n\n  var _super2 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Square, null);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var status = 'Next player: X';\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"status\"\n      }, status), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Game = /*#__PURE__*/function (_Component3) {\n  _inherits(Game, _Component3);\n\n  var _super3 = _createSuper(Game);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    return _super3.apply(this, arguments);\n  }\n\n  _createClass(Game, [{\n    key: \"render\",\n    value: function render() {\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"game\"\n      }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"game-board\"\n      }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Board, null)), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        className: \"game-info\"\n      }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"ol\", null)));\n    }\n  }]);\n\n  return Game;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // ========================================\n\n\nObject(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Game, null), document.getElementById('root')); // import {createElement, render, Component} from \"./toy-react\";\n//\n//\n// class MyComponent extends Component {\n//     constructor() {\n//         super();\n//         this.state = {\n//             a: 1,\n//             b: 2\n//         }\n//     }\n//\n//     render() {\n//         return <div>\n//             <h1>my component</h1>\n//             <button onClick={() => {\n//                 this.setState({a: this.state.a + 1}\n//                 )\n//             }}>hello kevin\n//             </button>\n//             <span>{this.state.a.toString()}</span>\n//             <span>{this.state.b.toString()}</span>\n//             <h1>1234</h1>\n//             {this.children}\n//         </div>\n//     }\n// }\n//\n// render(<MyComponent id=\"a\" class=\"c\">\n//         <div>hello</div>\n//         <div>world</div>\n//     </MyComponent>\n//     , document.body);\n// 给原生的对象加一个wrapper函数 使其能够appendchild一个自定义的对象\n//render() 优化了document.body.appendChild()\n// render(<div id=\"a\" class=\"c\">\n//         <div>hello</div>\n//         <div>world</div>\n//         <div>!</div>\n//         <h1>YJW</h1>\n//     </div>\n// ,document.body);\n//上方代码等价于\n// document.body.appendChild(createElement(\"div\", {\n//     id: \"a\",\n//     \"class\": \"c\"\n// }, createElement(\"div\", null, \"hello\"), createElement(\"div\", null, \"world\"),\n// createElement(\"div\", null, \"!\"), createElement(\"h1\", null, \"YJW\")));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! exports provided: Component, render, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RENDER_TO_DOM = Symbol(\"render to dom\");\n\nvar ElementWrapper = /*#__PURE__*/function () {\n  function ElementWrapper(type) {\n    _classCallCheck(this, ElementWrapper);\n\n    this.root = document.createElement(type);\n  }\n\n  _createClass(ElementWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      //属性中事件和静态属性的 处理是不一样的\n      if (name.match(/^on([\\s\\S]+)/)) {\n        //以on开头的事件属性添加\n        this.root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, function (c) {\n          return c.toLowerCase();\n        }), value);\n      } else {\n        if (name === \"className\") {\n          this.root.setAttribute(\"class\", value);\n        } else {\n          this.root.setAttribute(name, value);\n        }\n      }\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      var range = document.createRange();\n      range.setStart(this.root, this.root.childNodes.length);\n      range.setEnd(this.root, this.root.childNodes.length);\n      component[RENDER_TO_DOM](range); // this.root.appendChild(component.root)\n    } //这个就是重新给document赋值的函数\n\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      //如果仅仅是为了第一次加载那么这里可以不用先删在插，这样做是为了在更新时起作用！！！！\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return ElementWrapper;\n}();\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(content) {\n    _classCallCheck(this, TextWrapper);\n\n    this.root = document.createTextNode(content);\n  } //这个就是重新给document赋值的函数\n\n\n  _createClass(TextWrapper, [{\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return TextWrapper;\n}();\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.props = Object.create(null);\n    this.state = null;\n    this.children = [];\n    this._root = null;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.props[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      this.children.push(component);\n    } //这个就是重新给document赋值的函数一直其对递归调用\n    //this.render()函数调用重新生成document\n    //自定义component有几层就会调用几层\n\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      this._range = range;\n      this.render()[RENDER_TO_DOM](range);\n    } // get root() {\n    //     if (!this._root) {\n    //         this._root = this.render().root;\n    //     }\n    //     return this._root\n    // }\n\n  }, {\n    key: \"rerender\",\n    value: function rerender() {\n      //将旧的range保存下来\n      var oldRange = this._range; //新建一个range,在旧的rang之前暂时为null\n\n      var range = document.createRange();\n      range.setStart(oldRange.startContainer, this._range.startOffset);\n      range.setEnd(oldRange.startContainer, this._range.startOffset);\n      var range1 = document.createRange();\n      range1.setStart(oldRange.startContainer, this._range.endOffset);\n      range1.setEnd(oldRange.startContainer, this._range.endOffset + 1); //新rang有了更新的内容，旧rang变大了在前面包含了新rang！！！！！\n\n      this[RENDER_TO_DOM](range); //将旧rang缩小到正确的旧内容范围（以前包含新旧内容）\n\n      oldRange.setStart(range.endContainer, range.endOffset); // 将就内容删除\n\n      oldRange.deleteContents(); //会有问题 应该用上面的方法,保证不丢数据\n      // this._range.deleteContents();\n      // this[RENDER_TO_DOM](this._range)\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(newState) {\n      if (this.state === null || _typeof(this.state) !== \"object\") {\n        this.state = newState;\n        this.rerender();\n        return;\n      }\n\n      var merge = function merge(oldState, newState) {\n        for (var p in newState) {\n          if (oldState[p] === null || _typeof(oldState[p]) !== \"object\") {\n            oldState[p] = newState[p];\n          } else {\n            merge(oldState[p], newState[p]);\n          }\n        }\n      };\n\n      merge(this.state, newState);\n      this.rerender();\n    }\n  }]);\n\n  return Component;\n}(); //render() 优化了document.body.appendChild\n//只在main函数调用render函数时运行一次！！！！\n\nfunction render(component, parentElement) {\n  var range = document.createRange();\n  range.setStart(parentElement, 0);\n  range.setEnd(parentElement, parentElement.childNodes.length);\n  component[RENDER_TO_DOM](range); // parentElement.appendChild(component.root)\n}\nfunction createElement(type, attributes) {\n  var e;\n\n  if (typeof type === \"string\") {\n    e = new ElementWrapper(type); // e = document.createElement(type);\n  } else {\n    e = new type();\n  }\n\n  for (var p in attributes) {\n    e.setAttribute(p, attributes[p]);\n  }\n\n  var insertChildren = function insertChildren(children) {\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        if (typeof child === \"string\") {\n          child = new TextWrapper(child); // i = document.createTextNode(i);\n        } //没有这行的话<div></div>\n\n\n        if (child === null) {\n          continue;\n        }\n\n        if (_typeof(child) === \"object\" && child instanceof Array) {\n          insertChildren(child);\n        } else {\n          e.appendChild(child);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  insertChildren(children);\n  return e;\n}\n\n//# sourceURL=webpack:///./toy-react.js?");

/***/ })

/******/ });