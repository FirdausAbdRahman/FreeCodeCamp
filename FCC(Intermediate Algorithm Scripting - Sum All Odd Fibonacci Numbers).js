//Free Code Camp Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

function sumFibs(num) {
    //previous number
    var f0 = 1;
    //current number
    var f1 = 1;
    //next number
    var f2 = 2;
    //sum
    var sum = 2;


    while (f2 <= num) {
        f0 = f1;
        f1 = f2;
        f2 = f0 + f1;

        if (f1 % 2 !== 0) {
            sum += f1;
        }
    }
    return sum;
}

sumFibs(4);