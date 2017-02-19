import Utils from './Utils'
import ATF from './ATF'

export default class LoadTime {
    constructor() {
        
        this.domContentLoadedTime = -1
        this.atfed = -1
        this.windowLoaded = -1

        //init
        this.setDOMContentLoaded()
        this.setWindowLoeded()


        this.setAtfed()
    }

    getTime() {
        return {
            unload_event_start: this.unloadEventStart(),
            dom_content_loaded: this.domContentLoadedTime,
            atf: this.atfed,
            window_loaded: this.windowLoaded,
            referer: location.href
        }
    }

    unloadEventStart() {
        if (Utils.supportPerformance()) {
            return performance.timing.unloadEventStart || performance.timing.fetchStart
        }else {
            return Utils.now()
        }
    }

    setDOMContentLoaded() {
        let _self = this
        //if (Utils.supportPerformance()) {
            //LoadTime.domContentLoadedTime = performance.timing.domContentLoadedEventStart
            //return performance.timing.domContentLoadedEventStart
        //}else {
            function completed() {
                document.removeEventListener( 'DOMContentLoaded', completed )
                window.removeEventListener( 'load', completed )
                if (Utils.supportPerformance()) { 
                    _self.domContentLoadedTime = performance.timing.domContentLoadedEventStart
                }else {
                    _self.domContentLoadedTime = Utils.now()
                }
                
            }

            // Catch cases where $(document).ready() is called
            // after the browser event has already occurred.
            // Support: IE <=9 - 10 only
            // Older IE sometimes signals 'interactive' too soon
            if ( document.readyState === 'complete' ||
                ( document.readyState !== 'loading' && !document.documentElement.doScroll ) ) {

                // Handle it asynchronously to allow scripts the opportunity to delay ready
                if (Utils.supportPerformance()) { 
                    _self.domContentLoadedTime = performance.timing.domContentLoadedEventStart
                }else {
                    _self.domContentLoadedTime = Utils.now()
                }

            } else {

                // Use the handy event callback
                document.addEventListener( 'DOMContentLoaded', completed )

                // A fallback to window.onload, that will always work
                window.addEventListener( 'load', completed )
            }
        //}
        
        
    }
    
    setAtfed() {
        let atf = new ATF(),
            atfSourceURL = atf.sourceURL, //索引传递
            atfed = 0,
            resourceStart = 0,
            _self = this
        //思路 定时器(会丢掉秒关和 网速极慢下不准) window.onload(单页下不准)  关闭网页前(秒关情况下不准)



         window.addEventListener('load',function(e) {
            if (  _self.windowLoaded === -1) return ;//秒关情况下不算

            //if (atfSourceURL.length === 0 ) {
                //window.clearInterval(timer)
            //    return 
            //}

            let entriesLength = performance.getEntries(),
                entriesLength = enties.length

            for (let i = resourceStart; i < entriesLength; i++) {
                for (let j = atfSourceURL.length - 1; j >= 0; j--) {
                    if (enties[i].name === atfSourceURL[j] && enties[i].responseEnd >= _self.atfed) {
                        _self.atfed = enties[i].responseEnd.toFixed(2)
                        atfSourceURL.splice(j,1)
                    }
                }
            }

            resourceStart = entriesLength
        })

        //let timer = window.setTimeout(function(){

            
        //},3000)
    }

    setWindowLoeded() {
        let _self = this
        window.addEventListener('load',function(){
            _self.windowLoaded = Date.now()
        })
    }
}
