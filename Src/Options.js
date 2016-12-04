export default class Options {
    static defaultOptions() {
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
       }
    }

    static setOptions(options) {
         if (options == undefined ) return Options.defaultOptions()

        let defaultOptions = Options.defaultOptions(), //前者为layer时只替换部分属性
            keys = Object.keys(defaultOptions)
        
        for (var i = keys.length - 1; i >= 0; i--) {
            if (options[keys[i]] === undefined) {
                options[keys[i]] = defaultOptions[keys[i]]
            }
        }
        
        Options.Options = options
        return options
    }

    static getOptions(key) {
        let options = Options.options || Options.defaultOptions()
        
        if (key == undefined) return options
        
        if (options[key] == undefined) return 

        return options[key]
    }


}

 