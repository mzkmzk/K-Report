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

## DEMO

http://my.apache.com/K-Report/Example/loadtime/index.html

Try to send the report on the console to perform `KReport.sendMessage()` active packet

## Installation

```html
<script src="http://qiniu.404mzk.com/report-0.0.1index.bundle.js"></script>
```

And it's just as easy with [npm](http://npmjs.com):

```
npm i --save npm install K-Report 
```


## API

| key      | sub_key   | options | default                                                                | instructions                                                    |
|----------|-----------|---------|------------------------------------------------------------------------|-----------------------------------------------------------------|
| loadtime | url       | string  | http://k-inner-report.404mzk.com/v1/Creator_Loadtime_Controller/insert | The url of the data report                                      |
|          | classLoad | string  | .k-report-classLoad                                                    | Active statistical first screen class Settings                  |
|          | random    | number  | 0                                                                      | The number of random report 0 to send every time                |
| network  | url       | string  | http://k-inner-report.404mzk.com/v1/Creator_Network_Controller/insert  | The url of the data report                                      |
|          | timer     | number  | 5000                                                                   | Every how many seconds to check how many overtime resources(ms) |
|          | timeout   | number  | 1500                                                                   | Report of loading timeout(ms)                                   |
|          | random    | number  | 0                                                                      | The number of random report 0 to send every time                |
| error    | url       | string  | http://k-inner-report.404mzk.com/v1/Creator_Error_Controller/insert    | The url of the data report                                      |
|          | random    | number  | 0                                                                      | The number of random report 0 to send every time                |

## Report Data





