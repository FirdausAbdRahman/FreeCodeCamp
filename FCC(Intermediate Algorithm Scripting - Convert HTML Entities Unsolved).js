//Intermediate Algorithm Scripting: Convert HTML Entities
function convertHTML(str) {
    // break original str
    var arr = str.split('');
    //Loop to find special characters and replace it
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '&':
                arr[i] = "&amp;";
                break;
            case '<':
                arr[i] = "&lt;";
                break;
            case '>':
                arr[i] = "&gt;";
                break;
            case "'":
                arr[i] = "&apos;";
                break;
            case "\"":
                arr[i] = "&quot;";
                break;

        }

    }
    //put together
    str = arr.join('');
    console.log(str);
    return str;
}

convertHTML("Dolce & Gabbana");