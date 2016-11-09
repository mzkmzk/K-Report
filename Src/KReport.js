import LoadTime from './LoadTime'
import Network from './Network'
import Error_ from './Error_'
import Options from './Options'
import Utils from './Utils'

 class KReport {

    setOptions(options_) {
        let options = Options.setOptions(options_),
            _self = this
        
        if (options.loadtime !== undefined) {
            this.loadtime = new LoadTime()
        }

        if (options.network !== undefined) {
            this.network = new Network()
        }

        if (options.error !== undefined) {
            this.error = new Error_()
        }
        
        window.addEventListener('beforeunload',function(e) {
            _self.sendMessage()
            //e.returnValue = "\o/"
        })
    }

    sendMessage() {
        let options =  Options.getOptions()

        if (this.loadtime !== undefined) {
            let img = new Image()
            img.src = Utils.urlAppendData(options.loadtime.url,this.loadtime.getTime())
        }

        if (this.network !== undefined) {
            let img = new Image()
            img.src = Utils.urlAppendData(options.network.url,this.network.resourceTimeOut)
        }

        if (this.error !== undefined) {
            let img = new Image()
            img.src = Utils.urlAppendData(options.error.url,this.error.message)
        }
    }
}

export default new KReport()

