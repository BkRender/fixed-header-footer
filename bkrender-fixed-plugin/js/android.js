function applyHeaderFooterFixedLayout(){
    var version = getDeviceOSVersion();
    var min_android_version = 236; //Android 2.3.6
    
    if (version >= min_android_version){
        
        var header = document.getElementById('bk-header');
        var footer = document.getElementById('bk-footer');
        var body = document.getElementById('bk-body');

        var headerHeight = header ? header.clientHeight + "px" : "0";
        var footerHeight = footer ? footer.clientHeight + "px" : "0";
        
        body.style.setProperty("padding-top", headerHeight);
        body.style.setProperty("padding-bottom", footerHeight);

        if (header) {
            header.setAttribute("style", "position: fixed; top: 0; width: 100%");
        }
        
        if (footer) {
            footer.setAttribute("style", "position: fixed; bottom: 0; width: 100%");
        }
        
    }
}  


/**
 * Returns Android device version.
 * For example, 234 for the following UserAgent : /Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; HTC Desire Build/GRJ22) 
 * AppleWebKit/533.1 (KHTML, like Gecko) //Version/4.0 Mobile Safari/533.1
 */ 
function getDeviceOSVersion(){
    var userAgent = navigator.userAgent.toLowerCase();
    var androidPattern = extractAndroidPattern(userAgent);
    var version = extractVersion(androidPattern);
    var os_version_length = 3;
    version = padWithZero(version, os_version_length);
    return version;
}

/**
 * Returns "Android x.y.z" for example
 */
function extractAndroidPattern(userAgent){
    var tokens = userAgent.split(";");
    for(var i = 0 ; i < tokens.length ; i++){
        if(tokens[i] && tokens[i].toLowerCase().search('android') != -1){
            return tokens[i];
        }
    }
    return "Android 1";
}

/**
 * @param androidPattern : "Android x.y.z" for example.
 */
function extractVersion(androidPattern){
    var reg=new RegExp("\\D", "g");
    var version = androidPattern.replace(reg, "");
    return version;
}

function padWithZero(version, length) {
    var str = '' + version;
    while (str.length < length) {
        str = str + '0';
    }
    return str;
}
