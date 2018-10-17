function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var str1 = str.split(/\s|_|(?=[A-Z])/).join('-');

    return str1.toLowerCase();
}

spinalCase('This Is Spinal Tap');