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
