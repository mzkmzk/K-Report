# K-Report

![image](http://qiniu.404mzk.com/K-Report.png)

[![Build Status](https://travis-ci.org/mzkmzk/K-Report.png?style=flat)](https://travis-ci.org/mzkmzk/K-Report)
[![npm version](https://img.shields.io/npm/v/K-Report.svg?style=flat)](https://www.npmjs.com/package/K-Report)
[![Downloads](https://img.shields.io/npm/dt/K-Report.svg?style=flat)](https://www.npmjs.com/package/K-Report)
[![License](https://img.shields.io/npm/l/K-Report.svg?style=flat)](https://www.npmjs.com/package/K-Report)

Hope this is the best report you used library 

* **loadtime:** Report of the dom related time and ATF
* **network:** Report the resource requests timeout
* **error:** Record the request and error code

## Examples

```javascript
    KReport.setOptions({
            'loadtime': {
                'url': 'http://k-report.404mzk.com/loadtime',
            },
            'network': {
                'url': 'http://k-report.404mzk.com/network',
                'timer': 5000,
                'timeout': 2,
            },
            'error': {
                'url': 'http://k-report.404mzk.com/error',
            }
       }
    )
```

## Installation

```html
<script src="http://qiniu.404mzk.com/report-0.0.1index.bundle.js"></script>
```

And it's just as easy with [npm](http://npmjs.com):

```
npm i --save npm install K-Report 
```

