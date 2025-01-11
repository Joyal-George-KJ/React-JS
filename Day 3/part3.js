const objectEx = {
    name: "sample",
    hobby: ["Music", "Exploring", "Coding"],
    father: { name: "father", occupation: "job1" },
    mother: { name: "mother", occupation: "job2" },
};

const treeTraverseIterator = (value) => {
    const tracker = []; // Stack to track objects/arrays to process
    const keys = []; // Flat list of all keys to iterate over
    let index = 0; // Current index in the keys array

    // Helper function to flatten object keys
    const flattenKeys = (obj, prefix = "") => {
        for (let key in obj) {
            const fullKey = prefix ? `${prefix}.${key}` : key;
            keys.push(fullKey); // Store the full key path
            if (typeof obj[key] === "object" && obj[key] !== null) {
                tracker.push({ parentKey: fullKey, data: obj[key] });
            }
        }
    };

    flattenKeys(value); // Start flattening the top-level object

    return {
        next: () => {
            if (index < keys.length) {
                const currentKey = keys[index++];
                const valuePath = currentKey.split(".").reduce((acc, key) => acc[key], value);
                return { key: currentKey, value: valuePath, done: false };
            }
            return { done: true }; // End of iteration
        },
    };
};

// Using the Iterator
const iterator = treeTraverseIterator(objectEx);

let result = iterator.next();
while (!result.done) {
    console.log(`Key: ${result.key}, Value: ${result.value}`);
    result = iterator.next();
}
