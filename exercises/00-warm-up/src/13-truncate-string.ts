export {};

function truncateString(s:string, n:number){
    return s.slice(0, n);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
