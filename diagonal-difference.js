process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    for (a_i = 0; a_i < n; a_i++) {
        a[a_i] = readLine().split(' ');
        a[a_i] = a[a_i].map(Number);
    }



    let holder = 0;
    let holder2 = n - 1;
    let sum1 = 0;
    let sum2 = 0;

    a.forEach(element => {
        // console.log(element[holder])
        sum1 += element[holder];
        holder++;

    });

    //console.log(` sum1: ${sum1}`);



    a.forEach(elementz => {
        // console.log(elementz[holder2])
        sum2 += elementz[holder2];
        holder2--;

    });

    // console.log(` sum2: ${sum2}`);

    if ((sum1 - sum2) < 0) {
        console.log(((sum1 - sum2) * -1));
    }
    else {
        console.log((sum1 - sum2));
    }



}
