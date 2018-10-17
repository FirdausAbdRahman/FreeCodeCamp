function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    //Solution with Plain JS
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i]);
        }
    }
    /* Solution with ES6
    newArr = arr1
              .filter(x => !arr2.includes(x))
              .concat(arr2.filter(x => !arr1.includes(x)));
    */

    console.log(arr1);
    console.log(arr2);
    console.log(newArr);
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);