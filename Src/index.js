import KReport from './KReport'

if ( typeof module != 'undefined' && module.exports ) {
    module.exports = KReport
} else if ( typeof define == 'function' && define.amd ) {
    define( function () { return KReport } )
} else {
    window.KReport = KReport
}
window.KReport = KReport
