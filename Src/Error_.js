 export default class Error_ {
    
    constructor() {
        this.message = []

        this.setOnError()
    }

    setOnError() {
        let windowOnerror = window.onerror,
            _self = this

        window.addEventListener('error', function(e) {
            if (e.message !== undefined) return true //脚本错误的情况交给window.onerror
            _self.message.push({
                id: e.target.id,
                className: e.target.className,
                url: e.target.currentSrc || e.target.href,
                //message: e.message || '' 
            })
            return true
        }, true)
        
        
        
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
                    'object': JSON.stringify(error)
                }

                _self.message.push(message)
            }

            return false
        }
    }
}

