(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("k_report", [], factory);
	else if(typeof exports === 'object')
		exports["k_report"] = factory();
	else
		root["k_report"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	exports.__esModule = true;

	var _LoadTime = __webpack_require__(1);

	var _LoadTime2 = _interopRequireDefault(_LoadTime);

	var _Network = __webpack_require__(5);

	var _Network2 = _interopRequireDefault(_Network);

	var _Error_ = __webpack_require__(6);

	var _Error_2 = _interopRequireDefault(_Error_);

	var _Options = __webpack_require__(3);

	var _Options2 = _interopRequireDefault(_Options);

	var _Utils = __webpack_require__(2);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var KReport = function () {
	    function KReport() {
	        _classCallCheck(this, KReport);
	    }

	    KReport.prototype.setOptions = function setOptions(options_) {

	        if (!_Utils2['default'].supportPerformance()) return;

	        var options = _Options2['default'].setOptions(options_),
	            _self = this;

	        //window.addEventListener('load',function(){
	        //alert(1)
	        if (options.loadtime !== undefined) {
	            _self.loadtime = new _LoadTime2['default']();
	        }

	        if (options.network !== undefined) {
	            _self.network = new _Network2['default']();
	        }

	        if (options.error !== undefined) {
	            _self.error = new _Error_2['default']();
	        }
	        //})


	        window.addEventListener('beforeunload', function (e) {
	            _self.sendMessage();
	            if (options.debug === true) {
	                e.message = '你确定要离开吗?';
	                return '你确定要离开吗？';
	            }

	            //e.returnValue = "\o/"
	        });
	    };

	    KReport.prototype.sendMessage = function sendMessage() {
	        var options = _Options2['default'].getOptions();

	        if (this.loadtime !== undefined) {
	            var max = options.loadtime.random,
	                img = new Image();

	            if (max && _Utils2['default'].getRandomInt(0, max) !== 0) return;

	            img.src = _Utils2['default'].urlAppendData(options.loadtime.url, this.loadtime.getTime());
	        }

	        if (this.network !== undefined) {
	            var _img = new Image(),
	                _max = options.network.random,
	                params = {
	                k_creator_entities: this.network.resourceTimeOut
	            };

	            if (_max && _Utils2['default'].getRandomInt(0, _max) !== 0) return;

	            _img.src = _Utils2['default'].urlAppendData(options.network.url, params);
	        }

	        if (this.error !== undefined) {
	            var _img2 = new Image(),
	                _max2 = options.error.random,
	                _params = {
	                k_creator_entities: this.error.message
	            };

	            if (_max2 && _Utils2['default'].getRandomInt(0, _max2) !== 0) return;

	            _img2.src = _Utils2['default'].urlAppendData(options.error.url, _params);
	        }
	    };

	    return KReport;
	}();

	var singple = new KReport();
	window.KReport = singple; //兼容之前
	exports['default'] = singple;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Utils = __webpack_require__(2);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _ATF = __webpack_require__(4);

	var _ATF2 = _interopRequireDefault(_ATF);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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

	    LoadTime.prototype.getTime = function getTime() {
	        return {
	            unload_event_start: this.unloadEventStart(),
	            dom_content_loaded: this.domContentLoadedTime,
	            atf: this.atfed,
	            window_loaded: this.windowLoaded,
	            referer: location.href
	        };
	    };

	    LoadTime.prototype.unloadEventStart = function unloadEventStart() {
	        if (_Utils2['default'].supportPerformance()) {
	            return performance.timing.unloadEventStart || performance.timing.fetchStart;
	        } else {
	            return _Utils2['default'].now();
	        }
	    };

	    LoadTime.prototype.setDOMContentLoaded = function setDOMContentLoaded() {
	        var _self = this;
	        //if (Utils.supportPerformance()) {
	        //LoadTime.domContentLoadedTime = performance.timing.domContentLoadedEventStart
	        //return performance.timing.domContentLoadedEventStart
	        //}else {
	        function completed() {
	            document.removeEventListener('DOMContentLoaded', completed);
	            window.removeEventListener('load', completed);
	            if (_Utils2['default'].supportPerformance()) {
	                _self.domContentLoadedTime = performance.timing.domContentLoadedEventStart;
	            } else {
	                _self.domContentLoadedTime = _Utils2['default'].now();
	            }
	        }

	        // Catch cases where $(document).ready() is called
	        // after the browser event has already occurred.
	        // Support: IE <=9 - 10 only
	        // Older IE sometimes signals 'interactive' too soon
	        if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {

	            // Handle it asynchronously to allow scripts the opportunity to delay ready
	            if (_Utils2['default'].supportPerformance()) {
	                _self.domContentLoadedTime = performance.timing.domContentLoadedEventStart;
	            } else {
	                _self.domContentLoadedTime = _Utils2['default'].now();
	            }
	        } else {

	            // Use the handy event callback
	            document.addEventListener('DOMContentLoaded', completed);

	            // A fallback to window.onload, that will always work
	            window.addEventListener('load', completed);
	        }
	        //}

	    };

	    LoadTime.prototype.setAtfed = function setAtfed() {
	        var atf = new _ATF2['default'](),
	            atfSourceURL = atf.sourceURL,
	            //索引传递
	        atfed = 0,
	            resourceStart = 0,
	            _self = this;
	        //思路 定时器(会丢掉秒关和 网速极慢下不准) window.onload(单页下不准)  关闭网页前(秒关情况下不准)


	        window.addEventListener('load', function (e) {
	            if (_self.windowLoaded === -1) return; //秒关情况下不算

	            //if (atfSourceURL.length === 0 ) {
	            //window.clearInterval(timer)
	            //    return 
	            //}

	            var enties = performance.getEntries(),
	                entriesLength = enties.length;

	            for (var i = resourceStart; i < entriesLength; i++) {
	                for (var j = atfSourceURL.length - 1; j >= 0; j--) {
	                    if (enties[i].name === atfSourceURL[j] && enties[i].responseEnd >= _self.atfed) {
	                        _self.atfed = enties[i].responseEnd.toFixed(2);
	                        atfSourceURL.splice(j, 1);
	                    }
	                }
	            }

	            resourceStart = entriesLength;
	        });

	        //let timer = window.setTimeout(function(){


	        //},3000)
	    };

	    LoadTime.prototype.setWindowLoeded = function setWindowLoeded() {
	        var _self = this;
	        window.addEventListener('load', function () {
	            _self.windowLoaded = Date.now();
	        });
	    };

	    return LoadTime;
	}();

	exports['default'] = LoadTime;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Options = __webpack_require__(3);

	var _Options2 = _interopRequireDefault(_Options);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Utils = function () {
	    function Utils() {
	        _classCallCheck(this, Utils);
	    }

	    Utils.supportPerformance = function supportPerformance() {
	        if ('performance' in window && 'getEntriesByType' in window.performance && window.performance.getEntriesByType('resource') instanceof Array) {
	            return true;
	        } else {
	            return false;
	        }
	    };

	    Utils.now = function now() {
	        if (Utils.supportPerformance()) {
	            return window.performance.now().toFixed(2);
	        } else {
	            return Date.now();
	        }
	    };

	    Utils.urlAppendData = function urlAppendData(url, data) {
	        if (url.indexOf('?') === -1) {
	            url += '?';
	        } else {
	            url += '&';
	        }
	        return url + Utils.encodeFormData(data);
	    };

	    Utils.encodeFormData = function encodeFormData(data) {
	        if (!data) return '';
	        var pairs = [];
	        for (var name in data) {
	            if (!data.hasOwnProperty(name)) continue;
	            if (typeof data[name] === 'function') continue;
	            var value = data[name] instanceof Object ? JSON.stringify(data[name]) : data[name] + '';

	            name = encodeURIComponent(name.replace('%20', '+'));
	            value = encodeURIComponent(value.replace('%20', '+'));
	            pairs.push(name + '=' + value);
	        }
	        return pairs.join('&');
	    };

	    Utils.offset = function offset(elem) {
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
	    };

	    Utils.log = function log(info) {
	        if (_Options2['default'].getOptions('debug') === true) console.log(info);
	    };

	    Utils.getRandomInt = function getRandomInt(min, max) {
	        var _min = Math.ceil(min),
	            _max = Math.floor(max);
	        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
	    };

	    return Utils;
	}();

	exports['default'] = Utils;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Options = function () {
	    function Options() {
	        _classCallCheck(this, Options);
	    }

	    Options.defaultOptions = function defaultOptions() {
	        return {
	            'debug': true,
	            'loadtime': {
	                'url': 'http://k-inner-report.404mzk.com/v1/Creator_Loadtime_Controller/insert',
	                'classLoad': '.k-report-classLoad', //空的情况则默认去搜索
	                'random': 0
	                /*'sourceType': [
	                    'img',
	                    'background-image'
	                ],
	                'upSourceATC': true*/
	            },
	            'network': {
	                'url': 'http://k-inner-report.404mzk.com/v1/Creator_Network_Controller/insert',
	                'timer': 5000,
	                'timeout': 2,
	                'random': 0
	            },
	            'error': {
	                'url': 'http://k-inner-report.404mzk.com/v1/Creator_Error_Controller/insert',
	                'random': 0
	            }
	        };
	    };

	    Options.setOptions = function setOptions(options) {
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
	    };

	    Options.getOptions = function getOptions(key) {
	        var options = Options.Options || Options.defaultOptions();

	        if (key == undefined) return options;

	        if (options[key] == undefined) return;

	        return options[key];
	    };

	    return Options;
	}();

	exports['default'] = Options;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Options = __webpack_require__(3);

	var _Options2 = _interopRequireDefault(_Options);

	var _Utils = __webpack_require__(2);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ATF = function () {
	    function ATF() {
	        _classCallCheck(this, ATF);

	        this.options = _Options2['default'].getOptions();
	        this.sourceURL = [];
	        this.loadListener();
	        this.findSourceURL();
	    }

	    /**
	     * 主动监听img
	     */


	    ATF.prototype.loadListener = function loadListener() {
	        var _self = this;
	        document.addEventListener('load', function (e) {
	            if (e.path && e.path[0] && _self.isInATF(e.path[0]) && _self.sourceURL.indexOf(e.path[0].src) === -1) {
	                _self.sourceURL.push(e.path[0].src);
	            }
	        }, true);
	    };

	    /**
	     * 查找首屏元素
	     */


	    ATF.prototype.findSourceURL = function findSourceURL() {
	        var classLoad = this.options.loadtime.classLoad,
	            elems = document.querySelectorAll(classLoad);

	        for (var i = 0; i < elems.length; i++) {
	            var backgroundImage = window.getComputedStyle(elems[i], null).backgroundImage,
	                src = elems[i].src;

	            _Utils2['default'].log('获取到绑定的class backgroundImage: ' + backgroundImage);
	            _Utils2['default'].log('获取到绑定的class backgroundImage: ' + src);

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
	    };

	    ATF.prototype.isInATF = function isInATF(element) {
	        //需要判断是否为element 待加

	        var windowHeight = document.documentElement.clientHeight,
	            elemTop = _Utils2['default'].offset(element).top;

	        //Utils.log('offset情况'+JSON.stringify(Utils.offset(element)))
	        _Utils2['default'].log('elemTop: ' + elemTop + ' windowHeight: ' + windowHeight);
	        _Utils2['default'].log('资源是否在首屏' + (elemTop <= windowHeight));
	        if (elemTop <= windowHeight) {
	            return true;
	        } else {
	            return false;
	        }
	    };

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

	    return ATF;
	}();

	exports['default'] = ATF;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Utils = __webpack_require__(2);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _Options = __webpack_require__(3);

	var _Options2 = _interopRequireDefault(_Options);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Network = function () {
	    function Network() {
	        _classCallCheck(this, Network);

	        var _self = this;
	        this.resourceTimeOut = [];

	        window.addEventListener('beforeunload', function (e) {
	            if (_Utils2['default'].supportPerformance()) {
	                _self.performanceTimer();
	            }
	        });
	        //this.setTimer()
	    }

	    /*setTimer() {
	        let time = Options.getOptions('network').timer,
	            _self = this
	        time = time < 5000 ? 5000 : time
	        let timer = setInterval(function(){
	            if( Utils.supportPerformance() ) {
	                _self.performanceTimer()
	            }else {
	             }
	        },time)
	        return timer
	    }*/

	    Network.prototype.performanceTimer = function performanceTimer() {
	        var timeout = parseInt(_Options2['default'].getOptions('network').timeout),
	            enties = performance.getEntries(),
	            entriesLength = enties.length,
	            resourceStart = this.resourceStart || 0;

	        for (var i = resourceStart; i < entriesLength; i++) {
	            if (enties[i].duration > timeout) {
	                var timeoutObj = {
	                    'duration': enties[i].duration.toFixed(2),
	                    'url': enties[i].name,
	                    'referer': location.href
	                };
	                this.resourceTimeOut.push(timeoutObj);
	            }
	        }

	        this.resourceStart = entriesLength;
	    };

	    return Network;
	}();

	exports['default'] = Network;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Error_ = function () {
	    function Error_() {
	        _classCallCheck(this, Error_);

	        this.message = window._k_report_error ? this.resolverEvent(window._k_report_error) : [];

	        this.setOnError();
	    }

	    Error_.prototype.resolverEvent = function resolverEvent(error_array) {
	        var message_array = [],
	            e = void 0;

	        if (!(error_array instanceof Array)) error_array = [error_array];

	        for (var i = 0; i < error_array.length; i++) {
	            e = error_array[i];
	            try {
	                if (e.message === undefined) {
	                    //静态资源错误
	                    message_array.push({
	                        '_id': e.target.id || '',
	                        'class_name': e.target.className,
	                        'url': e.target.currentSrc || e.target.href,
	                        'referer': location.href

	                        //message: e.message || '' 
	                    });
	                } else {
	                    //JS错误
	                    message_array.push({
	                        'message': e.message,
	                        'url': e.filename,
	                        'line': e.lineno,
	                        'column': e.colno,
	                        'object': e.error && e.error.stack,
	                        'referer': location.href
	                        //message: e.message || '' 
	                    });
	                }
	            } catch (e) {
	                message_array.push('K-Report Error Listener Error');
	            }
	        }

	        return message_array;
	    };

	    Error_.prototype.setOnError = function setOnError() {
	        var //windowOnerror = window.onerror,
	        _self = this;
	        //静态资源
	        window.addEventListener('error', function (e) {
	            _self.message = _self.message.concat(_self.resolverEvent(e));
	            return true;
	        }, true);

	        //脚本错误
	        /*
	        window.onerror = function (msg, url, lineNo, columnNo, error) {
	            let string = msg.toLowerCase(),
	               substring = 'script error',
	               message = ''
	             if (windowOnerror !== null) windowOnerror(msg, url, lineNo, columnNo, error) 
	             if (string.indexOf(substring) > -1){
	                message = {
	                    'message': 'Script Error: See Browser Console for Detail'
	                }
	            } else {
	                message = {
	                    'message': msg,
	                    'url': url,
	                    'line': lineNo,
	                    'column': columnNo,
	                    'object': JSON.stringify(error),
	                    'referer': location.href
	                }
	                 _self.message.push(message)
	            }
	             return false
	        }*/
	    };

	    return Error_;
	}();

	exports['default'] = Error_;

/***/ }
/******/ ])
});
;