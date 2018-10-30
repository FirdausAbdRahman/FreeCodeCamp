//Basic JavaScript: Record Collection

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

    //value is empty (""), delete the given prop property
    if (value == "") {
        delete collection[id][prop];

    }
    //prop isn't "tracks" and value isn't empty (""), update value
    else if (prop !== "tracks") {
        collection[id][prop] = value;
        //console.log("else")
    }
    //if prop is "tracks"
    else {
        //create an empty array 
        if (!collection[id].hasOwnProperty("tracks")) {
            //console.log(collection[5439].tracks);
            collection[id].tracks = [];

        }
        //push the value onto the end of the album's existing tracks array
        collection[id][prop].push(value);
    }
    console.log(collection);
    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
