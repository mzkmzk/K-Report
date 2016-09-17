/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _JavaScript_Utils = __webpack_require__(1);

	var _JavaScript_Utils2 = _interopRequireDefault(_JavaScript_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_JavaScript_Utils.firstName);
	window.onerror = function (msg, url, lineNo, columnNo, error) {
	    console.log('触发到错误啦');
	    var string = msg.toLowerCase();
	    var substring = "script error";
	    if (string.indexOf(substring) > -1) {
	        console.log('Script Error: See Browser Console for Detail');
	    } else {
	        var message;

	        (function () {
	            var getRomId = function getRomId() {
	                if (localStorage.getItem('TRY_JS') == null) {
	                    localStorage.setItem('TRY_JS', uuid());
	                }
	                return localStorage.getItem('TRY_JS');
	            };

	            var uuid = function uuid() {
	                var s = [];
	                var hexDigits = "0123456789abcdef";
	                for (var i = 0; i < 36; i++) {
	                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	                }
	                s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	                s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	                s[8] = s[13] = s[18] = s[23] = "-";

	                var uuid = s.join("");
	                return uuid;
	            };

	            message = ['Message: ' + msg, 'URL: ' + url, 'Line: ' + lineNo, 'Column: ' + columnNo, 'Error object: ' + JSON.stringify(error)].join(' - ');

	            _JavaScript_Utils2.default.Ajax.useImg('http://my.apache.com/Inner_Try_JS/public/v1/Creator_Error_Controller/insert', {
	                'message': msg,
	                'url': url,
	                'line': lineNo,
	                'column': columnNo,
	                'error_object': JSON.stringify(error),
	                'pv_id': getRomId()
	            });
	            console.log(message + "");
	        })();
	    }

	    return false;
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Ajax = __webpack_require__(2);

	var _Ajax2 = _interopRequireDefault(_Ajax);

	var _Brower = __webpack_require__(3);

	var _Brower2 = _interopRequireDefault(_Brower);

	var _Cookie = __webpack_require__(4);

	var _Cookie2 = _interopRequireDefault(_Cookie);

	var _Event = __webpack_require__(5);

	var _Event2 = _interopRequireDefault(_Event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		Ajax: _Ajax2.default,
		Brower: _Brower2.default,
		Cookie: _Cookie2.default,
		Event: _Event2.default
		};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var Ajax = {
		useImg: function useImg(url, data, callback) {
			var img = new Image();
			img.onload = img.onerror = function () {
				callback && callback();
			};
			url += '?';
			var params = Object.keys(data);
			for (var i = params.length - 1; i >= 0; i--) {
				//当有多层对象,估计有问题
				url += params[i] + "=" + data[params[i]] + "&";
			}
			img.src = url;
		}
	};

		module.exports = Ajax;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Brower = {
		hasPlugin: function hasPlugin(name) {
			var plugins = window.navigator.plugins;
			name = name.toLowerCase();
			for (var i = plugins.length - 1; i >= 0; i--) {
				if (plugins[i].name.toLowerCase().indexOf(name) > -1) {
					return true;
				}
			}
			return false;
		},
		hasIEPlugin: function hasIEPlugin(name) {
			try {
				new ActiveXObject(name);
				return true;
			} catch (ex) {
				return false;
			}
		},
		hasFlash: function hasFlash() {
			var result = Brower.hasPlugin('flash');
			if (!result) {
				result = Brower.hasIEPlugin('ShockwaveFlash.ShockwaveFlash');
			}
			return result;
		},
		getBaseBrowerInfo: function getBaseBrowerInfo() {
			var params = {
				'user_agent': window.navigator.userAgent,
				'url': window.location.href,
				'referer': document.referrer
			};
			return params;
		}
	};

		exports.default = Brower;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * IE8暂不支持 trim方法
	 */
	var Cookie = function () {
	    function Cookie() {
	        _classCallCheck(this, Cookie);

	        this.cookie = this._getCookie();
	    }

	    _createClass(Cookie, [{
	        key: '_getCookie',
	        value: function _getCookie() {
	            var cookie = {};
	            var all = document.cookie;
	            if (all === '') return cookie;
	            var list = all.split('; ');
	            for (var i = list.length - 1; i >= 0; i--) {
	                var pos = list[i].indexOf("=");
	                var key = list[i].substring(0, pos);
	                var value = list[i].substring(pos + 1);
	                cookie[key] = value;
	            }
	            return cookie;
	        }
	    }, {
	        key: 'setItem',
	        value: function setItem(key, value, maxAge, domain) {
	            this.cookie[key] = value;
	            var cookie = key + '=' + encodeURIComponent(value);
	            if (maxAge) cookie += '; max-age=' + maxAge;
	            if (domain) cookie += '; domain=' + domain;
	            document.cookie = cookie;
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem(key) {
	            return this.cookie[key] || null;
	        }
	    }, {
	        key: 'removeItem',
	        value: function removeItem(key, domain) {
	            if (!key in this.cookie) return;
	            delete cookie[key];
	            var cookie = key + '=; max-age=0';
	            if (domain) cookie += '; domain=' + domain;
	            document.cookie = cookie;
	        }
	    }, {
	        key: 'clear',
	        value: function clear(domain) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = Object.keys(this.cookie)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var key = _step.value;

	                    document.cookie = this.cookie[key] + "=; max-age=0";
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            this.cookie = {};
	        }
	    }]);

	    return Cookie;
	}();

		exports.default = Cookie;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * 事件处理
	 * 待优化: 1. 如何对浏览器检查只需要一次
	 */
	var Event = {
		getEvent: function getEvent(event) {
			return event ? event : window.event;
		},
		getTarger: function getTarger(event) {
			return event.target || event.srcElement;
		},
		preventDefault: function preventDefault(event) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		},
		addHandler: function addHandler(element, type, handler) {
			if (element.addEventListener) {
				element.addEventListener(type, handler, false);
			} else if (element.attachEvent) {
				element.attachEvent('on' + type, handler);
			} else {
				element['on' + type] = handler;
			}
		},
		removeHandler: function removeHandler(element, type, handler) {
			if (element.removeEventListener) {
				element.removeEventListener(type, handler, false);
			} else if (element.detachEvent) {
				element.detachEvent('on' + type, handler);
			} else {
				element['on' + type] = handler;
			}
		},
		stopPropagation: function stopPropagation(event) {
			if (event.stopPropagation) {
				event.stopPropagation();
			} else {
				event.cancelBubble = true;
			}
		},
		getRelatedTarget: function getRelatedTarget(event) {
			if (event.relatedTarget) {
				return event.relatedTarget;
			} else if (event.toElement) {
				return event.toElement;
			} else if (event.fromElement) {
				return event.fromElement;
			} else {
				return null;
			}
		},
		getWheelDelta: function getWheelDelta(event) {
			if (event.whellDelta) {
				return client.engine.opera && client.engine.opera < 9.5 ? -event.whellDelta : event.whellDelta;
			} else {
				return -event.detail * 40; //FireFox
			}
		},
		getCharCode: function getCharCode(event) {
			if (typeof event.charCode == "number") {
				return event.charCode;
			} else {
				return event.keyCode;
			}
		}
	};

		exports.default = Event;

/***/ }
/******/ ]);
//# sourceMappingURL=Try_JS_Error.js.map