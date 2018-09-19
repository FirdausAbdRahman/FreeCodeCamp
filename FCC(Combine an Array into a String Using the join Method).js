function sentensify(str) {
    // Add your code below this line
    var newArr = str.split(/\W+/);
    console.log(newArr);
    return newArr.join(" ");

    // Add your code above this line
}
sentensify("May-the-force-be-with-you");