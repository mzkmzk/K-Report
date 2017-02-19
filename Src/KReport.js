import LoadTime from './LoadTime'
import Network from './Network'
import Error_ from './Error_'
import Options from './Options'
import Utils from './Utils'

 class KReport {

    setOptions(options_) {
        let options = Options.setOptions(options_),
            _self = this
        
        //window.addEventListener('load',function(){
            //alert(1)
            if (options.loadtime !== undefined) {
                _self.loadtime = new LoadTime()
            }

            if (options.network !== undefined) {
                _self.network = new Network()
            }

            if (options.error !== undefined) {
                _self.error = new Error_()
            }
        //})
        
        
        window.addEventListener('beforeunload',function(e) {
            _self.sendMessage()
            //e.returnValue = "\o/"
        })
    }

    sendMessage() {
        let options =  Options.getOptions()

        if (this.loadtime !== undefined) {
            let max = options.loadtime.random,
                 img = new Image()

            if (max && Utils.getRandomInt(0,max) !== 0) return
            
            img.src = Utils.urlAppendData(options.loadtime.url,this.loadtime.getTime())
        }

        if (this.network !== undefined) {
            let img = new Image(),
                max = options.network.random,
                params = {
                    k_creator_entities: this.network.resourceTimeOut
                }

            if (max && Utils.getRandomInt(0,max) !== 0) return

            img.src = Utils.urlAppendData(options.network.url,params)
        }

        if (this.error !== undefined) {
            let img = new Image(),
                max = options.error.random,
                params = {
                    k_creator_entities: this.error.message
                }

            if (max && Utils.getRandomInt(0,max) !== 0) return
                
            img.src = Utils.urlAppendData(options.error.url,params)
        }
    }
}

let singple = new KReport()
window.KReport = singple //兼容之前
export default singple

