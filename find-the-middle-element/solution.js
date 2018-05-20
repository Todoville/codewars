var gimme = function (inputArray) {
  let copiedArr = [inputArray[0], inputArray[1], inputArray[2]];
  let sorted = copiedArr.sort(function(a, b){return a - b});
    sorted.value = sorted[1];
    for (let i = 0; i < inputArray.length; i++){
    if(inputArray[i] === sorted[1]) {
        return inputArray.indexOf(sorted[1])
      }
    }
}