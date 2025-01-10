function* fibonacci(n) {
    let i = 0;
    let prev = 0;
    let current = 1;

    yield prev;
    yield current;

    
    while (n - 2 > i) {
        let res = prev + current;
        prev = current;
        current = res;
        i++;
        console.log(i);
        
        yield res;
    }
}

let generateFib = fibonacci(10);

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach(element => {
    console.log(generateFib.next());
});