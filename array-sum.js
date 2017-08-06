
function simpleArraySum(n, ar) {
    let holder = 0;
    for(let i = 0; i < n; i++){
        holder += ar[i];
          }
    return holder;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = simpleArraySum(n, ar);
    process.stdout.write("" + result + "\n");

}