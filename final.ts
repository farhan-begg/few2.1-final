function goldenRatio(num) {
    return num * 1.61803398875;
}
  console.log(goldenRatio(1))


// Converts from degrees to radians.
function radians(degrees: number): number {
  return degrees * Math.PI / 180;
};
 
// Converts from radians to degrees.
 function degrees(radians: number): number {
  return radians * 180 / Math.PI;
};

// converts value to dollars
function toDollar(n: number): string{
  return "$" + (n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}
// get random int
function getRandomInt(min, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 6))
console.log(toDollar(1))
console.log(radians(90))
console.log(degrees(1.5707963267948966))
module.exports.goldenRatio = goldenRatio;
module.exports.radians= radians;
module.exports.degrees = degrees;
module.exports.toDollar = toDollar;
module.exports.getRandomInt = getRandomInt;
