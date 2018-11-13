//Intermediate Algorithm Scripting: Everything Be True

function truthCheck(collection, pre) {
    // Is everyone being true?
    //check every collection obj is true
    return collection.every(obj => obj[pre]);

}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");