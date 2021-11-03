// ROMAN NUMERALS

function romanNumerals(value) {

  let desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10 , 9, 5, 4, 1];
  let romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let hasil = '';

  for ( let i = 0; i < desimal.length; i++) {
    while(desimal[i] <= value) {
      hasil += romawi[i]
      value -= desimal[i]
    }
  }
  return hasil
}
   
console.log(romanNumerals(6))    // VI
console.log(romanNumerals(9))    // IX
console.log(romanNumerals(23))   // XXIII
console.log(romanNumerals(2021)) // MMXXI
console.log(romanNumerals(1646)) // MDCXLVI