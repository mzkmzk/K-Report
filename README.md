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

## Instructions

Close it on the web, send a statistical package

## Examples

```javascript
    KReport.setOptions()
```

## DEMO

<http://k-report.404mzk.com/Example/loadtime/index.html>

Try to send the report on the console to perform `KReport.sendMessage()` active packet

## Installation

```html
<script src="http://publish.404mzk.com/1-0-0index.bundle.js"></script>
```

And it's just as easy with [npm](http://npmjs.com):

```
npm i --save npm install K-Report 
```

# Data Abnormal

## Loadtime

1. atf === -1 : 用户刷新过快,还没统计首屏时间
2. atf > window_loaded : 用户刷新过快,还没统计完首屏时间

## Report Data





