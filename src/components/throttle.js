

/**
 * 节流:对高频率的效应进行处理
 */
const throttle = (fn,delay) => {
    console.log(fn)
    let flag = true;
    return function(){
        if(flag){
            setTimeout(() => {
                fn();
                flag = true;
            },delay)
        }
        flag = false;
    }
}

module.exports = {
    throttle
}