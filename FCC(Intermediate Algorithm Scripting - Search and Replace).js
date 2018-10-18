function myReplace(str, before, after) {
    //console.log(before.charAt(0))
    //Check first letter of before is Capital
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        //match first letter of after match to before
        after = after.charAt(0).toUpperCase() + after.slice(1);

    } else {
        console.log(str.replace(before, after))
            // return str.replace(before, after)
    }

    return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");