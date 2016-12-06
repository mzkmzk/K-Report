import Utils from './Utils'
import Options from './Options'

export default class Network {
    constructor() {
        this.resourceTimeOut = []

        this.setTimer()
    }

    setTimer() {
        let time = Options.getOptions('network').timer,
            _self = this
        time = time < 5000 ? 5000 : time
        let timer = setInterval(function(){
            if( Utils.supportPerformance() ) {
                _self.performanceTimer()
            }else {

            }
        },time)
        return timer
    }

    performanceTimer() {
        let timeout = parseInt(Options.getOptions('network').timeout),
            enties = performance.getEntries(),
            entriesLength = enties.length ,
            resourceStart = this.resourceStart || 0

        for (var i = resourceStart; i < entriesLength; i++) {
            if (enties[i].duration > timeout) {
                let timeoutObj = {
                    'duration': enties[i].duration,
                    'url': enties[i].name,
                    'referer': location.href
                }
                this.resourceTimeOut.push(timeoutObj)
            }
        }

        this.resourceStart = entriesLength
    }
}
