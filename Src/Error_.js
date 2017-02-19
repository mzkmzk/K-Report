 export default class Error_ {
    
    constructor() {
        
        this.message =  window._k_report_error ? this.resolverEvent( window._k_report_error ) : []

        this.setOnError()
    }

    resolverEvent(error_array) {
        let message_array = [],
            e

        if ( ! (error_array instanceof Array) ) error_array = [ error_array ]

        for (var i = 0; i < error_array.length; i++) {
            e = error_array[i]
            try {
                if (e.message === undefined) { //静态资源错误
                    message_array.push({
                        '_id': e.target.id || '',
                        'class_name': e.target.className,
                        'url': e.target.currentSrc || e.target.href,
                        'referer': location.href

                        //message: e.message || '' 
                    })
                }else { //JS错误
                    message_array.push({
                        'message': e.message,
                        'url': e.filename,
                        'line': e.lineno,
                        'column': e.colno,
                        'object': e.error && e.error.stack,
                        'referer': location.href
                        //message: e.message || '' 
                    })
                }
            }catch(e){
                message_array.push('K-Report Error Listener Error')
            }
        }
        
        return message_array;
    }

    setOnError() {
        let //windowOnerror = window.onerror,
            _self = this
        //静态资源
        window.addEventListener('error', function(e) {
            _self.message = _self.message.concat( _self.resolverEvent(e) )
            return true
        }, true)
        
        
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
    }
}

