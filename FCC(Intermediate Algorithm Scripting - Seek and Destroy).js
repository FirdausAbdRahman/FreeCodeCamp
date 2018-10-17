function destroyer(arr) {
    // Remove all the values
    let arg = Array.from(arguments).slice(1);
    console.log(Array.from(arguments));
    return arr.filter(x => !arg.includes(x));

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);