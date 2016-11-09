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
}