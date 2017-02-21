import Options from './Options'
import Utils from './Utils'

export default class ATF {

    constructor() {
        this.options = Options.getOptions()
        this.sourceURL = []
        this.loadListener()
        this.findSourceURL()
    }

    /**
     * 主动监听img
     */ 
    loadListener() {
        let _self = this
        document.addEventListener('load',function(e){
            if (e.path && e.path[0] && _self.isInATF(e.path[0]) && _self.sourceURL.indexOf(e.path[0].src) === -1) {
                _self.sourceURL.push(e.path[0].src)
            }
        },true)
    }

    /**
     * 查找首屏元素
     */
    findSourceURL() {
        let classLoad = this.options.loadtime.classLoad,
            elems = document.querySelectorAll(classLoad)
        
        for (var i = 0; i < elems.length; i++) {
            let backgroundImage = window.getComputedStyle(elems[i], null).backgroundImage,
                src = elems[i].src
            
            Utils.log('获取到绑定的class backgroundImage: '+ backgroundImage)
            Utils.log('获取到绑定的class backgroundImage: '+ src)
            
            if(!this.isInATF(elems[i])) continue

            if (typeof backgroundImage === 'string' && backgroundImage !== 'none' ) { //backgroun-image
                let backgroundImageURL = backgroundImage.match(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g)
                if (backgroundImageURL !== null && this.sourceURL.indexOf(backgroundImageURL[0]) === -1) 
                    this.sourceURL.push(backgroundImageURL[0])
            } 

            if (src !== undefined && this.sourceURL.indexOf(src) === -1) {
                this.sourceURL.push(src)
            }
        }
        

    }

    isInATF(element) {
        //需要判断是否为element 待加

        let windowHeight = document.documentElement.clientHeight,
            elemTop = Utils.offset(element).top

        //Utils.log('offset情况'+JSON.stringify(Utils.offset(element)))
        Utils.log('elemTop: '+elemTop+ ' windowHeight: '+ windowHeight)
        Utils.log('资源是否在首屏' + (elemTop <= windowHeight))
        if (elemTop <= windowHeight) {
            return true
        }else {
            return false
        }
        
    }

    /*被动首屏探索,这个不太准确,先放放
    findImgTagURL() {
        let _self = this
        document.addEventListener('load',function(e){
            let target = e.target || window.target
            if (target && target.tagName === 'IMG')
            _self.imgTagURL
        },true)


    }
    */
    
}