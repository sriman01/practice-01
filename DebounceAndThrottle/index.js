const  debounced_= document.querySelector('#debounced')
const normal = document.querySelector('#normal')
const throttled_ = document.querySelector('#throttled')

const btn = document.querySelector('#btn')
let cnt = 0, cnt2 = 0, cnt3 = 0

const PressedControl = () => {
    normal.innerHTML = "Normal Count: " + (++cnt)
    // debounced();
    // throttled();
    betterThrottle();
    betterFunc();
}

btn.addEventListener('click', PressedControl)

const debounced = _.debounce(() => {
    debounced_.innerHTML = "Debounced Count: " + (++cnt2)
}, 800)

const throttled = _.throttle(() => {
    throttled_.innerHTML = "Throttled Count: " + (++cnt3)
}, 800)

/** polyfills */

let counter1 = 0, counter2 = 0;

function myDebounce(callback, duration) {
    let timer;
    return function(...args) {
        if(timer) clearTimeout(timer); 

        timer = setTimeout(() => {
            callback(...args); 
        }, duration);

        console.log(timer)
    };
}

function callback(...args) {
    debounced_.innerHTML = "Debounced Count: " + (++counter1);
}

let betterFunc = myDebounce(callback, 800)


/** throttling polyflill */


const myThrottle = (cb, d) => {
    let last = 0;
    return function(...args){
        let now = new Date().getTime()
        if(now - last < d) return;
        last = now;
        return cb(...args)
    }
}

function cb(){
    throttled_.innerHTML = "Throttled Count: " + (++counter2)
}

const betterThrottle = myThrottle(cb, 1000);