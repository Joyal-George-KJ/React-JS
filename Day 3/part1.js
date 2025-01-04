const inp = document.querySelector('input');
const elmtDebounce = document.querySelector(".debounce");
const elmtthrottle = document.querySelector(".throttle");

// Debounce Assignment

function debounce(func, delay = 1000) {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() =>func(args), delay);
    };
}

const updateFunc = debounce((text) => (elmtDebounce.textContent = text));

inp.addEventListener("input", (e) => {
    updateFunc(e.target.value);
});

// Throttle Assignment

const throttle = (cbFunc, delay) => {
    let currTime = 0;

    return (...arg) => {
        let date = new Date().getTime();
        
        if (date - currTime >= delay) {
            currTime = date;
            cbFunc(arg);
        }
    }
}

const throttleDowned = throttle((element) => {console.log("Pressed", element)}, 1000);

elmtthrottle.addEventListener('click', (e) => {
    
    throttleDowned(e.target);
})