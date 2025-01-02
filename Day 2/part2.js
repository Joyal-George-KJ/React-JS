// Asynchronous JavaScript

console.log("Start");

setTimeout(() => {
    console.log("Timeout finished");
}, 1000);

console.log("End");

// Promises
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

const fetchData = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) resolve("Data fetched!");
        else reject("Error fetching data.");
    }, 1000);
});

fetchData
    .then((data) => console.log(data)) // Logs: Data fetched!
    .catch((error) => console.error(error));

// async/await
// The async keyword allows a function to return a promise, and await pauses execution until the promise resolves.

async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getData();

// Asssignment - Event Loop Task

function helloWorld() {
    setTimeout(() => {
        console.log("Hello");
    }, 1000);
    setTimeout(() => {
        console.log("World");
    }, 2000);
    setTimeout(() => {
        console.log("!");
    }, 3000);
}

helloWorld();

// Asssignment - Promises Task

const fakeAPIRequest = (inp) => {
    const data = new Promise((resolve, reject) => {
        if (typeof inp === "string") {
            resolve("Data Return Successful!");
        } else {
            reject("Data Return Failed: Invalid Input!");
        }
    });

    return data;
};

const data = fakeAPIRequest("");
data.then((data) => console.log(data)).catch((err) => console.log(err));

// Asssignment - async/await Task

async function userDetails(url) {
    let data = await fetch(url);
    let res = await data.json();

    res.forEach((val, ind) => {
        console.log(`${ind+1}\nUser's Name: ${val.name}\nUser's Email: ${val.email}`);
        
    });
}

userDetails("https://jsonplaceholder.typicode.com/users");