;(function () {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'http://1.mini.eastday.com/srftips/dsp/dsp2.html');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('width', '300px');
    iframe.setAttribute('height', '0');
    document.body.appendChild(iframe);
    function setIframeHeight(iframe) {
        if (iframe) {
            var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
            if (iframeWin.document.body) {
                iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
            }
        }
    };
    window.onload = function () {
        setIframeHeight(document.getElementById('external-frame'));
    };
})();
