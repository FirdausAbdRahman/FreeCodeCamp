function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var skey = Object.keys(source);
    console.log(skey);
    return collection.filter(function(obj) {
        return skey.every(k => source[k] == obj[k])
    });



}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });