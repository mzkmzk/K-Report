import Options from './Options'
export default class Utils {
    static supportPerformance() {
        if (
                'performance' in window && 
                'getEntriesByType' in window.performance &&
                window.performance.getEntriesByType('resource') instanceof Array
            ) {
            return true
        }else {
            return false
        }
    }

    static now() {
        if(Utils.supportPerformance()) {
            return window.performance.now()
        }else {
            return Date.now()
        }
    }

    static urlAppendData(url, data) {
        if (url.indexOf('?') === -1) {
            url += '?'
        }else {
            url += '&'
        }
        return url + Utils.encodeFormData(data)
    }

    static encodeFormData(data) {
        if (!data) return ''
        var pairs = []
        for(var name in data) {
            if(!data.hasOwnProperty(name)) continue
            if(typeof data[name] === 'function') continue
            var value = JSON.stringify(data[name])
            name = encodeURIComponent(name.replace('%20','+'))
            value = encodeURIComponent(value.replace('%20','+'))
            pairs.push(name + '=' + value)
        }
        return pairs.join('&')
    }

    static offset(elem) {
        let rect

        if ( !elem ) {
            return
        }
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error
        let a = elem.getClientRects()
        if ( !elem.getClientRects().length ) {
            return { top: 0, left: 0 }
        }

        rect = elem.getBoundingClientRect()

        // Make sure element is not hidden (display: none)
        if ( rect.width || rect.height ) {
            
            return {
                top: rect.top + window.pageYOffset - (document.documentElement.clientTop ),
                left: rect.left + window.pageXOffset - (document.documentElement.clientLeft )
            }
        }

        return rect
    }

    static log(info) {
        if (Options.getOptions('debug') === true)
        console.log(info)
    }

    static getRandomInt(min,max) {
        let _min = Math.ceil(min),
            _max = Math.floor(max)
        return Math.floor(Math.random() * (_max - _min + 1 )) + _min
    }

}