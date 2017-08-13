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
    arr = readLine().split(' ');
    arr = arr.map(Number);


    let res = arr;
    let sumHolder = res[0];
    let sumCounter = 0;


    for (let i = 1; i < res.length; i++) {
        if (sumHolder < res[i]) {
            sumCounter += parseInt(res[i]);
        }
        else {
            sumCounter += parseInt(sumHolder);
            sumHolder = res[i];
        }

        // console.log(`sumholder: ${sumHolder} sumCounter: ${sumCounter}`)
    }

    let sumHolder2 = res[0];
    let sumCounter2 = 0;


    for (let qq = 1; qq < res.length; qq++) {
        if (sumHolder2 > res[qq]) {
            sumCounter2 += parseInt(res[qq]);
        }
        else {
            sumCounter2 += parseInt(sumHolder2);
            sumHolder2 = res[qq];

        }
        // console.log(`sumholder2: ${sumHolder2} sumCounter2: ${sumCounter2}`)


    }

    console.log(`${sumCounter2} ${sumCounter}`);







}
