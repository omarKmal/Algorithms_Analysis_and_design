// ** Standrad Deviation

/* 
  i , sd , ave , n , a , b = 0 ; 
  x = [] ; 
*/

let sd = (ave = n = a = b = 0);
let x = [];

n = Number(prompt("n=?"));

for (let i = 0; i < n; i++) {
  x[i] = Number(prompt(`x[${i}]`));
  ave += x[i];
}

ave = ave / n;

for (let i = 0; i < n; i++) {
  a += (x[i] - ave) ^ 2;
}

b = a / n;

sd = Math.sqrt(b);

console.log(sd);
