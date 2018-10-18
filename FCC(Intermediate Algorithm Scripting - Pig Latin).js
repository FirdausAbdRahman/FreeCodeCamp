function translatePigLatin(str) {
    //console.log(str)
    //first letter is consonant
    if (!str.match(/[aeiou]/gi)) {
        //console.log(str.concat("ay"))
        return str.concat("ay")
    }
    //consonant cluster
    else if ("aeiou".indexOf(str[0]) === -1) {
        //console.log(str.replace(/([^aeiou]+)(\w*)/, "1$2$1"+"ay" ))
        return str.replace(/([^aeiou]+)(\w*)/, "$2$1" + "ay")

    }
    //first letter is vowel
    else {
        //console.log(str.concat("way"))
        return str.concat("way")
    }
    // return str;
}

translatePigLatin("consonant");