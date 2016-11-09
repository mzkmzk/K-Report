export default class Options {
    static defaultOptions() {
       return {
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

 