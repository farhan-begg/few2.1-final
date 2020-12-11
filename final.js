function goldenRatio(n) {
   
  return n * 1.61803398875
  }
  
  console.log(goldenRatio(10))


// Converts from degrees to radians.
function radians(degrees) {
  return degrees * Math.PI / 180;
};
 
// Converts from radians to degrees.
 function degrees(radians) {
  return radians * 180 / Math.PI;
};

// converts value to dollars
function toDollar(n){
  return "$" + (n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}
// get random int
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 1))
console.log(toDollar(1))
console.log(radians(90))
console.log(degrees(1.5707963267948966))


module.exports.goldenRatio = goldenRatio;
module.exports.radians= radians;
module.exports.degrees = degrees;
module.exports.toDollar = toDollar;
module.exports.getRandomInt = getRandomInt;
