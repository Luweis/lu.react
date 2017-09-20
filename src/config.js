((doc,win) => {
    const docuemntEle = doc.documentElement,
        eventType = 'orientationchange' in window ? 'orientationchange' : 'resize',
        callback = () => {
        let clientWidth = docuemntEle.clientWidth;
        docuemntEle.style.fontSize = 20*(clientWidth/320)+'px';
        }
    if(window.addEventListener){
        window.addEventListener(eventType,callback,false);
        win.addEventListener('DOMContentLoaded',callback,false);
    }
})(document,window);

const system = (() => {
    const u = navigator.userAgent;
    let system;
    let isAndroid = u.indexOf('Andorid')>-1||u.indexOf('Linux')>-1;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+MAC OS X/);
    if (isAndroid){
        system = "Android";
    }else if(isIOS){
        system = "IOS";
    }
    return system;
})();

export default system;


