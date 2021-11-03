//  FIBONACCI NUMBER TOP DOWN

let simpan = []
let count = 0

function fibo(n) {
  count++

  if (simpan[n]){
    return simpan[n];
  }
  if (n <= 1) {
    simpan[n] = n;
  } else {
    simpan[n] = fibo(n-1) + fibo(n-2)
  }
  return simpan[n]
 
}
console.log(fibo(0))  // 0
console.log(fibo(1))  // 1
console.log(fibo(2))  // 1
console.log(fibo(3))  // 2
console.log(fibo(5))  // 5
console.log(fibo(6))  // 8
console.log(fibo(7))  // 13
console.log(fibo(9))  // 13
console.log(fibo(10)) // 55 