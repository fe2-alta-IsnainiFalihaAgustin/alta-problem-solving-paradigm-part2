// Fibonacci Number Bottom-up

let count = ""

function fibo(n) {
  let simpan = []

  for (let i = 0; i <= n; i++){
    if (i <= 1) {
      simpan[i] = i

    } else {
      simpan[i] = simpan[i-1] + simpan[i-2];
    }
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