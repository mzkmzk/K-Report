import JavaScript_Utils , { firstName } from 'JavaScript_Utils';


console.log(firstName);
window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.log('触发到错误啦');
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1){
        console.log('Script Error: See Browser Console for Detail');
    } else {
        var message = [ 
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error)
        ].join(' - ');
        function getRomId(){
            if( localStorage.getItem('TRY_JS') == null) {
                localStorage.setItem('TRY_JS',uuid());
            }
            return localStorage.getItem('TRY_JS');
        }
        function uuid() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";
         
            var uuid = s.join("");
            return uuid;
        }
        JavaScript_Utils.Ajax.useImg('http://my.apache.com/Inner_Try_JS/public/v1/Creator_Error_Controller/insert',{
            'message': msg,
            'url': url,
            'line': lineNo,
            'column': columnNo,
            'error_object': JSON.stringify(error),
            'pv_id': getRomId(),
        });
        console.log(message +"");
    }

    return false;
};