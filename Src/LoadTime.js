import Utils from './Utils'

export default class LoadTime {
    constructor() {
        this.domContentLoadedTime = -1
        this.windowLoaded = -1

        //init
        this.setDOMContentLoaded()
        this.setWindowLoeded()
    }

    getTime() {
        return {
            unloadEventStart: this.unloadEventStart(),
            domContentLoaded: this.domContentLoadedTime,
            firstScreen: this.firstScreen(),
            windowLoaded: this.windowLoaded
        }
    }

    unloadEventStart() {
        if (Utils.supportPerformance()) {
            return performance.timing.unloadEventStart
        }else {
            return -1
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

    firstScreen() {
        return -1
    }

    setWindowLoeded() {
        let _self = this
        window.addEventListener('load',function(){
            _self.windowLoaded = Date.now()
        })
    }
}
