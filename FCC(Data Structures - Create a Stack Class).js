//Data Structures: Create a Stack Class

function Stack() {
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.push = function(val) {
        collection.push(val);
    };

    this.pop = function() {
        return collection.pop();

    };

    this.peek = function() {
        //console.log(collection.length);
        var nStack = collection.length - 1;
        return collection[nStack];

    };

    this.isEmpty = function() {
        if (collection.length == 0) {
            return true;
        } else {
            return false;
        }

    };

    this.clear = function() {
        collection = [];
        // return colleciton;
    };


    // Only change code above this line
}