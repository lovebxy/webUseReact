/**
 * 防抖：如果有点击事情,就延迟进行处罚
 */
const debouce = (fn,delay) => {
    let t = null;
    return function(){
        if(t !== null){
            clearTimeout(t)
        }
    
        t = setTimeout(() => {
            fn()
        },delay)
    }
}

module.exports = {
    debouce
}

