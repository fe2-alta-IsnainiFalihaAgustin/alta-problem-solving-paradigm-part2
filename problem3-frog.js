// FROG

function frog(jumps) {

  let result = 0

  for (let i = jumps.length - 1; i >= 0; i--) {
    if (i == 1) {
      let oke = Math.abs(jumps[i] - jumps[i - 1])
      result += oke
      break

    } else {
      let oke1 = Math.abs(jumps[i] - jumps[i - 1])
      let oke2 = Math.abs(jumps[i] - jumps[i - 2])
      if (oke1 < oke2) {
        result += oke1

      } else if(oke2 < oke1) {
        result += oke2
        i -= 1
      }
    }
  }  
  return result
}

console.log(frog([10, 30, 40, 20])) // 30
console.log(frog([30, 10, 60, 10, 60, 50])) // 40