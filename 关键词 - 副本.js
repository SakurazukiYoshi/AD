;(function(win, doc) {
    if (win != top || !doc.body || win.__DSDE__) {
        return
    }
    win.__DSDE__ = true;
    var keys2 = [
        '星秀直播',
            '二次元直播',
            '颜值直播',
            '交友直播',
            '音乐直播',
            '颜值横屏直播',
            '星娱直播',
            '约会现场直播',
            '音乐电台直播',
            '\u4e8c\u6b21\u5143\u76f4\u64ad',
            '\u661f\u79c0\u76f4\u64ad',
            '\u989c\u503c\u76f4\u64ad',
            '\u4ea4\u53cb\u76f4\u64ad',
            '\u97f3\u4e50\u76f4\u64ad',
            '\u989c\u503c\u6a2a\u5c4f\u76f4\u64ad',
            '\u661f\u5a31\u76f4\u64ad',
            '\u7ea6\u4f1a\u73b0\u573a\u76f4\u64ad',
            '\u97f3\u4e50\u7535\u53f0\u76f4\u64ad',
        ],
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
        openWindow('https://www.9xiu.com/extension?jxiusr=t_148')
        setCookie('sndoAD','true',86400);
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
    function openWindow(url, id) {
        var a = document.createElement('a')
        a.setAttribute('href', url)
        a.setAttribute('target', '_blank')
        a.setAttribute('id', id)
        if (!document.getElementById(id)) document.body.appendChild(a)
        a.click()
    }
})(window, document);
