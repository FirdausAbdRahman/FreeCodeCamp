function pairElement(str) {
    //pair lookup
    var pairs = {
            "A": "T",
            "T": "A",
            "C": "G",
            "G": "C"
        }
        //split string into arr
    let arr = str.split('');

    //map array
    console.log(arr.map(x => [x, pairs[x]]))
    return arr.map(x => [x, pairs[x]])
}

pairElement("GCG");