// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    var lowerCase = title.toLowerCase();
    var newArr = lowerCase.trim().split(/\W+/);
    //console.log(newArr);
    console.log(newArr.join("-"));
    return newArr.join("-");


}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"