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

function timeConversion(s) {
    let amPm = s[8];
    let convert = 0;
    let holder = s.split(':');

    if (((amPm === 'P') && (parseInt(holder[0]) === 12))) {
        return `${holder[0]}:${holder[1]}:${holder[2].slice(0, 2)}`;
    }
    else if ((amPm === 'A') && (parseInt(holder[0]) === 12)) {
        return `00:${holder[1]}:${holder[2].slice(0, 2)}`;
    }
    else if (amPm === 'P') {
        convert = (parseInt(holder[0]) + 12);
        return `${convert}:${holder[1]}:${holder[2].slice(0, 2)}`;
    }
    else {
        return `${holder[0]}:${holder[1]}:${holder[2].slice(0, 2)}`;
    }

}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
