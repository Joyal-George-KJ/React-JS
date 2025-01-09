// Iterator Assignment

const nestedObjectIterate = (obj) => {
    let nestedObjectChecker =
        obj instanceof Array === false &&
        typeof obj === "object";

    Object.keys(obj).map((val) => {
        if ( nestedObjectChecker === true) {
            nestedObjectIterate(obj[val])
        }
        console.log(obj[val]);
    });
};

const iteratorFunc = (value) => {
    let indicator = 0; // checks if value is Array or Object

    return {
        next: () => {
            if (value instanceof Array) {
                console.log(value[indicator++]);
            } else {
                let currObject = value[Object.keys(value)[indicator++]];
                // console.log(currObject);
                nestedObjectIterate(currObject);
            }
        },
    };
};

const iterator = iteratorFunc({
    arr: [1, 2, 3],
    name: "Joyal",
    nested: { nest: true, nextneseted: { age: 21 } },
    ageed: "yes",
});

iterator.next();
iterator.next();
iterator.next();
iterator.next();