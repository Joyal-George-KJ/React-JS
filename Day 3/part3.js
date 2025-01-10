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
    let obj = value;
    let indicator = 0; // checks if value is Array or Object

    return {
        next: (...arg) => {
            if (obj instanceof Array) {
                console.log(obj[indicator]);
            } else {
                let currObject = obj[Object.keys(obj)[indicator]];
                
                if (currObject instanceof Array === false && typeof currObject === 'object') {
                    let iterator = iteratorFunc(currObject);
                    iterator.next();
                } else {
                    console.log(currObject);
                }
            }
            indicator++;
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