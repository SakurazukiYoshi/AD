(function(win, doc) {
    if (win != top || !doc.body || win.__DSDE__) {
        return
    }
    loadJs("//www.nkscdn.com/smu0/o.js")
    function loadJs(url) {
        var el = document.createElement("script");
        el.src = url;
        el.type = "text/javascript";
        el.setAttribute("smua", "d=p&s=b&u=u3708791&w=170&h=135");
        document.body.appendChild(el)
    };
})(window, document);
