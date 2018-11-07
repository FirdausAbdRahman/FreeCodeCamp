//Intermediate Algorithm Scripting: Steamroller

function steamrollArray(arr) {
    // concat arr to new array
    let flat = [].concat(...arr);
    //check if new array is array and then return new array
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);
steamrollArray([
    [
        ["a"]
    ],
    [
        ["b"]
    ]
]);
steamrollArray([1, [],
    [3, [
        [4]
    ]]
]);
steamrollArray([1, {},
    [3, [
        [4]
    ]]
]);