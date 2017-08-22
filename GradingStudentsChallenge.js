Grading Students challenge

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

function solve(grades, n){
  let arr = [];
     
  for(let i = 0; i < (n); i++){
    if(grades[i] >= 38) {
      if(((grades[i] + 2) % 5) === 0) {
        arr.push((grades[i] + 2));
      }
      else if(((grades[i] + 1) % 5) === 0) {
        arr.push((grades[i] + 1));
      }
      else {
        arr.push(grades[i]);
      }
    }
    else {
      arr.push(grades[i]);
    }

  }
  
  return arr;
    
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades, n);
    console.log(result.join("\n"));
    


}
