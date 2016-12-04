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

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _KReport = __webpack_require__(1);

	var _KReport2 = _interopRequireDefault(_KReport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (typeof module != 'undefined' && module.exports) {
	    module.exports = _KReport2.default;
	} else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return _KReport2.default;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	    window.KReport = _KReport2.default;
	}
	window.KReport = _KReport2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _LoadTime = __webpack_require__(2);

	var _LoadTime2 = _interopRequireDefault(_LoadTime);

	var _Network = __webpack_require__(6);

	var _Network2 = _interopRequireDefault(_Network);

	var _Error_ = __webpack_require__(7);

	var _Error_2 = _interopRequireDefault(_Error_);

	var _Options = __webpack_require__(4);

	var _Options2 = _interopRequireDefault(_Options);

	var _Utils = __webpack_require__(3);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var KReport = function () {
	    function KReport() {
	        _classCallCheck(this, KReport);
	    }

	    _createClass(KReport, [{
	        key: 'setOptions',
	        value: function setOptions(options_) {
	            var options = _Options2.default.setOptions(options_),
	                _self = this;

	            //window.addEventListener('load',function(){
	            //alert(1)
	            if (options.loadtime !== undefined) {
	                _self.loadtime = new _LoadTime2.default();
	            }

	            if (options.network !== undefined) {
	                _self.network = new _Network2.default();
	            }

	            if (options.error !== undefined) {
	                _self.error = new _Error_2.default();
	            }
	            //})


	            window.addEventListener('beforeunload', function (e) {
	                _self.sendMessage();
	                //e.returnValue = "\o/"
	            });
	        }
	    }, {
	        key: 'sendMessage',
	        value: function sendMessage() {
	            var options = _Options2.default.getOptions();

	            if (this.loadtime !== undefined) {
	                var img = new Image();
	                img.src = _Utils2.default.urlAppendData(options.loadtime.url, this.loadtime.getTime());
	            }

	            if (this.network !== undefined) {
	                var _img = new Image();
	                _img.src = _Utils2.default.urlAppendData(options.network.url, this.network.resourceTimeOut);
	            }

	            if (this.error !== undefined) {
	                var _img2 = new Image();
	                _img2.src = _Utils2.default.urlAppendData(options.error.url, this.error.message);
	            }
	        }
	    }]);

	    return KReport;
	}();

	exports.default = new KReport();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _ATF = __webpack_require__(5);

	var _ATF2 = _interopRequireDefault(_ATF);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoadTime = function () {
	    function LoadTime() {
	        _classCallCheck(this, LoadTime);

	        this.domContentLoadedTime = -1;
	        this.atfed = -1;
	        this.windowLoaded = -1;

	        //init
	        this.setDOMContentLoaded();
	        this.setWindowLoeded();

	        this.setAtfed();
	    }

	    _createClass(LoadTime, [{
	        key: 'getTime',
	        value: function getTime() {
	            return {
	                unloadEventStart: this.unloadEventStart(),
	                domContentLoaded: this.domContentLoadedTime,
	                atf: this.atfed,
	                windowLoaded: this.windowLoaded
	            };
	        }
	    }, {
	        key: 'unloadEventStart',
	        value: function unloadEventStart() {
	            if (_Utils2.default.supportPerformance()) {
	                return performance.timing.unloadEventStart;
	            } else {
	                return -1;
	            }
	        }
	    }, {
	        key: 'setDOMContentLoaded',
	        value: function setDOMContentLoaded() {
	            var _self = this;
	            //if (Utils.supportPerformance()) {
	            //LoadTime.domContentLoadedTime = performance.timing.domContentLoadedEventStart
	            //return performance.timing.domContentLoadedEventStart
	            //}else {
	            function completed() {
	                document.removeEventListener('DOMContentLoaded', completed);
	                window.removeEventListener('load', completed);
	                if (_Utils2.default.supportPerformance()) {
	                    _self.domContentLoadedTime = performance.timing.domContentLoadedEventStart;
	                } else {
	                    _self.domContentLoadedTime = _Utils2.default.now();
	                }
	            }

	            // Catch cases where $(document).ready() is called
	            // after the browser event has already occurred.
	            // Support: IE <=9 - 10 only
	            // Older IE sometimes signals 'interactive' too soon
	            if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {

	                // Handle it asynchronously to allow scripts the opportunity to delay ready
	                if (_Utils2.default.supportPerformance()) {
	                    _self.domContentLoadedTime = performance.timing.domContentLoadedEventStart;
	                } else {
	                    _self.domContentLoadedTime = _Utils2.default.now();
	                }
	            } else {

	                // Use the handy event callback
	                document.addEventListener('DOMContentLoaded', completed);

	                // A fallback to window.onload, that will always work
	                window.addEventListener('load', completed);
	            }
	            //}

	        }
	    }, {
	        key: 'setAtfed',
	        value: function setAtfed() {
	            var atf = new _ATF2.default(),
	                atfSourceURL = atf.sourceURL,
	                atfed = 0,
	                resourceStart = 0,
	                _self = this;

	            var timer = window.setTimeout(function () {

	                if (atfSourceURL.length === 0) {
	                    window.clearInterval(timer);
	                    return;
	                }

	                var enties = performance.getEntries(),
	                    entriesLength = enties.length;

	                for (var i = resourceStart; i < entriesLength; i++) {
	                    for (var j = atfSourceURL.length - 1; j >= 0; j--) {
	                        if (enties[i].name === atfSourceURL[j] && enties[i].responseEnd >= _self.atfed) {
	                            _self.atfed = enties[i].responseEnd;
	                            atfSourceURL.splice(j, 1);
	                        }
	                    }
	                }

	                resourceStart = entriesLength;
	            }, 3000);
	        }
	    }, {
	        key: 'setWindowLoeded',
	        value: function setWindowLoeded() {
	            var _self = this;
	            window.addEventListener('load', function () {
	                _self.windowLoaded = Date.now();
	            });
	        }
	    }]);

	    return LoadTime;
	}();

	exports.default = LoadTime;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Options = __webpack_require__(4);

	var _Options2 = _interopRequireDefault(_Options);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Utils = function () {
	    function Utils() {
	        _classCallCheck(this, Utils);
	    }

	    _createClass(Utils, null, [{
	        key: 'supportPerformance',
	        value: function supportPerformance() {
	            if ('performance' in window && 'getEntriesByType' in window.performance && window.performance.getEntriesByType('resource') instanceof Array) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'now',
	        value: function now() {
	            if (Utils.supportPerformance()) {
	                return window.performance.now();
	            } else {
	                return Date.now();
	            }
	        }
	    }, {
	        key: 'urlAppendData',
	        value: function urlAppendData(url, data) {
	            if (url.indexOf('?') === -1) {
	                url += '?';
	            } else {
	                url += '&';
	            }
	            return url + Utils.encodeFormData(data);
	        }
	    }, {
	        key: 'encodeFormData',
	        value: function encodeFormData(data) {
	            if (!data) return '';
	            var pairs = [];
	            for (var name in data) {
	                if (!data.hasOwnProperty(name)) continue;
	                if (typeof data[name] === 'function') continue;
	                var value = JSON.stringify(data[name]);
	                name = encodeURIComponent(name.replace('%20', '+'));
	                value = encodeURIComponent(value.replace('%20', '+'));
	                pairs.push(name + '=' + value);
	            }
	            return pairs.join('&');
	        }
	    }, {
	        key: 'offset',
	        value: function offset(elem) {
	            var rect = void 0;

	            if (!elem) {
	                return;
	            }
	            // Support: IE <=11 only
	            // Running getBoundingClientRect on a
	            // disconnected node in IE throws an error
	            var a = elem.getClientRects();
	            if (!elem.getClientRects().length) {
	                return { top: 0, left: 0 };
	            }

	            rect = elem.getBoundingClientRect();

	            // Make sure element is not hidden (display: none)
	            if (rect.width || rect.height) {

	                return {
	                    top: rect.top + window.pageYOffset - document.documentElement.clientTop,
	                    left: rect.left + window.pageXOffset - document.documentElement.clientLeft
	                };
	            }

	            return rect;
	        }
	    }, {
	        key: 'log',
	        value: function log(info) {
	            if (_Options2.default.getOptions('debug') === true) console.log(info);
	        }
	    }]);

	    return Utils;
	}();

	exports.default = Utils;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Options = function () {
	    function Options() {
	        _classCallCheck(this, Options);
	    }

	    _createClass(Options, null, [{
	        key: 'defaultOptions',
	        value: function defaultOptions() {
	            return {
	                'debug': true,
	                'loadtime': {
	                    'url': 'http://k-report.404mzk.com/Receive/loadtime',
	                    'classLoad': '.k-report-classLoad', //空的情况则默认去搜索
	                    'random': 0
	                    /*'sourceType': [
	                        'img',
	                        'background-image'
	                    ],
	                    'upSourceATC': true*/
	                },
	                'network': {
	                    'url': 'http://k-report.404mzk.com/Receive/network',
	                    'timer': 5000,
	                    'timeout': 2,
	                    'random': 0
	                },
	                'error': {
	                    'url': 'http://k-report.404mzk.com/Receive/error',
	                    'random': 0
	                }
	            };
	        }
	    }, {
	        key: 'setOptions',
	        value: function setOptions(options) {
	            if (options == undefined) return Options.defaultOptions();

	            var defaultOptions = Options.defaultOptions(),
	                //前者为layer时只替换部分属性
	            keys = Object.keys(defaultOptions);

	            for (var i = keys.length - 1; i >= 0; i--) {
	                if (options[keys[i]] === undefined) {
	                    options[keys[i]] = defaultOptions[keys[i]];
	                }
	            }

	            Options.Options = options;
	            return options;
	        }
	    }, {
	        key: 'getOptions',
	        value: function getOptions(key) {
	            var options = Options.options || Options.defaultOptions();

	            if (key == undefined) return options;

	            if (options[key] == undefined) return;

	            return options[key];
	        }
	    }]);

	    return Options;
	}();

	exports.default = Options;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Options = __webpack_require__(4);

	var _Options2 = _interopRequireDefault(_Options);

	var _Utils = __webpack_require__(3);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ATF = function () {
	    function ATF() {
	        _classCallCheck(this, ATF);

	        this.options = _Options2.default.getOptions();
	        this.sourceURL = [];

	        this.findSourceURL();
	    }

	    _createClass(ATF, [{
	        key: 'findSourceURL',
	        value: function findSourceURL() {
	            var classLoad = this.options.loadtime.classLoad,
	                elems = document.querySelectorAll(classLoad);

	            for (var i = 0; i < elems.length; i++) {
	                var backgroundImage = window.getComputedStyle(elems[i], null).backgroundImage,
	                    src = elems[i].src;

	                _Utils2.default.log('获取到绑定的class backgroundImage: ' + backgroundImage);
	                _Utils2.default.log('获取到绑定的class backgroundImage: ' + src);

	                if (!this.isInATF(elems[i])) continue;

	                if (typeof backgroundImage === 'string' && backgroundImage !== 'none') {
	                    //backgroun-image
	                    var backgroundImageURL = backgroundImage.match(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g);
	                    if (backgroundImageURL !== null && this.sourceURL.indexOf(backgroundImageURL[0]) === -1) this.sourceURL.push(backgroundImageURL[0]);
	                }

	                if (src !== undefined && this.sourceURL.indexOf(src) === -1) {
	                    this.sourceURL.push(src);
	                }
	            }
	        }
	    }, {
	        key: 'isInATF',
	        value: function isInATF(element) {
	            var windowHeight = document.documentElement.clientHeight,
	                elemTop = _Utils2.default.offset(element).top;

	            //Utils.log('offset情况'+JSON.stringify(Utils.offset(element)))
	            _Utils2.default.log('elemTop: ' + elemTop + ' windowHeight: ' + windowHeight);
	            _Utils2.default.log('资源是否在首屏' + (elemTop <= windowHeight));
	            if (elemTop <= windowHeight) {
	                return true;
	            } else {
	                return false;
	            }
	        }

	        /*被动首屏探索,这个不太准确,先放放
	        findImgTagURL() {
	            let _self = this
	            document.addEventListener('load',function(e){
	                let target = e.target || window.target
	                if (target && target.tagName === 'IMG')
	                _self.imgTagURL
	            },true)
	          }
	        */

	    }]);

	    return ATF;
	}();

	exports.default = ATF;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(3);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _Options = __webpack_require__(4);

	var _Options2 = _interopRequireDefault(_Options);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Network = function () {
	    function Network() {
	        _classCallCheck(this, Network);

	        this.resourceTimeOut = [];

	        this.setTimer();
	    }

	    _createClass(Network, [{
	        key: 'setTimer',
	        value: function setTimer() {
	            var time = _Options2.default.getOptions('network').timer,
	                _self = this;
	            time = time < 5000 ? 5000 : time;
	            var timer = setInterval(function () {
	                if (_Utils2.default.supportPerformance()) {
	                    _self.performanceTimer();
	                } else {}
	            }, time);
	            return timer;
	        }
	    }, {
	        key: 'performanceTimer',
	        value: function performanceTimer() {
	            var timeout = parseInt(_Options2.default.getOptions('network').timeout),
	                enties = performance.getEntries(),
	                entriesLength = enties.length,
	                resourceStart = this.resourceStart || 0;

	            for (var i = resourceStart; i < entriesLength; i++) {
	                if (enties[i].duration > timeout) {
	                    var timeoutObj = {
	                        'duration': enties[i].duration,
	                        'url': enties[i].name
	                    };
	                    this.resourceTimeOut.push(timeoutObj);
	                }
	            }

	            this.resourceStart = entriesLength;
	        }
	    }]);

	    return Network;
	}();

	exports.default = Network;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Error_ = function () {
	    function Error_() {
	        _classCallCheck(this, Error_);

	        this.message = [];

	        this.setOnError();
	    }

	    _createClass(Error_, [{
	        key: 'setOnError',
	        value: function setOnError() {
	            var windowOnerror = window.onerror,
	                _self = this;

	            window.addEventListener('error', function (e) {
	                if (e.message !== undefined) return true; //脚本错误的情况交给window.onerror
	                _self.message.push({
	                    id: e.target.id,
	                    className: e.target.className,
	                    url: e.target.currentSrc || e.target.href
	                });
	                return true;
	            }, true);

	            window.onerror = function (msg, url, lineNo, columnNo, error) {
	                var string = msg.toLowerCase(),
	                    substring = 'script error',
	                    message = '';

	                if (windowOnerror !== null) windowOnerror(msg, url, lineNo, columnNo, error);

	                if (string.indexOf(substring) > -1) {
	                    message = {
	                        'message': 'Script Error: See Browser Console for Detail'
	                    };
	                } else {
	                    message = {
	                        'message': msg,
	                        'url': url,
	                        'line': lineNo,
	                        'column': columnNo,
	                        'object': JSON.stringify(error)
	                    };

	                    _self.message.push(message);
	                }

	                return false;
	            };
	        }
	    }]);

	    return Error_;
	}();

	exports.default = Error_;

/***/ }
/******/ ]);