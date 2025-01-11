function* fibonacci(n) {
    let i = 0;
    let prev = 0;
    let current = 1;

    yield prev; // First number in Fibonacci sequence
    if (n > 1) yield current; // Second number in Fibonacci sequence

    while (i < n - 2) {
        const next = prev + current;
        prev = current;
        current = next;
        i++;
        yield next;
    }
}

// Using the generator
let generateFib = fibonacci(2);

for (const value of generateFib) {
    console.log(value);
}