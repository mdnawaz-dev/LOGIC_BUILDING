function pipe(...fns) {
    return function (value) {
        let output = value;
        for (const fn of fns) {
            output = fn(output);
        }
        return output;
    }
}

const process = pipe (
    str => str.trim(),
    str => str.toLowerCase(),
    str => str.replaceAll("","-"),
    str => "post_" + str
);

const result = process("Hello World from Nawaz");
console.log(result);

// Output: post_-h-e-l-l-o- -w-o-r-l-d- -f-r-o-m- -n-a-w-a-z-
