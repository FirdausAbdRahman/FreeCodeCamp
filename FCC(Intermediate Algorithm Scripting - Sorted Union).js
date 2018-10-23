function uniteUnique(arr) {
    var ori = Array.from(arguments); //get arguments as array
    var finalArr = []; //assgin final array as empty

    //loop to get number of arguments
    for (var i = 0; i < ori.length; i++) {
        //loop to get element of arguments
        for (var j = 0; j < ori[i].length; j++) {
            console.log(finalArr.indexOf(ori[i][j]))
                //check each elemnet match
            if (finalArr.indexOf(ori[i][j]) < 0) {
                finalArr.push(ori[i][j]);

                console.log(finalArr);
            }

        }
    }
    return finalArr;

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);