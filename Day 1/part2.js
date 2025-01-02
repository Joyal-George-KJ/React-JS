// 1

const numberArray = [3, 4, 5, 6, 7];
let doubled = numberArray.map((val) => val + val);
let above10 = doubled.filter((val) => val > 10 && val);
let sumOfInitialArray = numberArray.reduce(
    (valPrev, valCurr) => valCurr + valPrev,
    0
);

console.log(doubled);
console.log(above10);
console.log(sumOfInitialArray);

// 2

const names = ["apple", "orange", "mango", "banana", "grape"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (const name of names) {
    console.log(name.toUpperCase());
}

// 3

let obj = {
    make: "business1",
    model: "2002i",
    year: 2012,
    isElectric: true,
};

obj.color = "Yellow";
delete obj.isElectric;

for (const key in obj) {
    obj && console.log(key, obj[key]);
}

// Project - Library Manager

let library = [
    { title: "Book A", author: "Author A", isAvailable: true },
    { title: "Book B", author: "Author B", isAvailable: false }
];

const listBooks = () => {
    library.map((val, ind) => {
        for (const key in val) {
            console.log(library[ind][key]);
        }
    })
        
};

const addBook = (title, author) => {
    library.push(...library, {title, author, isAvailable: true});
};

const borrowBook = (title) => {
    library.filter(val => val.title === title && (val.isAvailable = false));
};

const returnBook = (title) => {
    library.filter(val => val.title === title && (val.isAvailable = true));
};
