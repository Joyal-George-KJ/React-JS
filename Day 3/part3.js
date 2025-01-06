// Iterator Assignment

const iteratorFunc = (value) => {
    let indicator = 0; // checks if value is Array or Object
    // console.log(indicator);

    const nestedObjectIterate = (obj) => {};

    return {
        next: () => {
            if (value instanceof Array) {
                console.log(value[indicator]);
            } else {
                let currObject = value[Object.keys(value)[indicator]];
                let nestedObjectChecker =
                    currObject instanceof Array === false &&
                    typeof currObject === "object";

                nestedObjectChecker === true
                    ? iteratorFunc(currObject).next()
                    : console.log(currObject);
            }
            indicator++;
        },
    };
};

const iterator = iteratorFunc({
    arr: [1, 2, 3],
    name: "Joyal",
    nested: { nest: true, nextneseted: {age: 21} },
    ageed: "yes"
});

iterator.next();
iterator.next();
iterator.next();
iterator.next();
