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
    arr = readLine().split(' ');
    arr = arr.map(Number);

    let negs = 0;
    let pos = 0;
    let zero = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            pos++;
        }
        else if (arr[i] < 0) {
            negs++;
        }
        else {
            zero++;
        }

    }
    console.log(pos / n);
    console.log(negs / n);
    console.log(zero / n);
    return;

}
