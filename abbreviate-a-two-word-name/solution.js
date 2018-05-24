let abbrevName = function(name) {
let thisSolutionIsALittleConvolutedOops = [];
let nameArr = name.split(' ')
for(i in nameArr) {
 thisSolutionIsALittleConvolutedOops.push(nameArr[i].charAt(0))
}
let initals = thisSolutionIsALittleConvolutedOops.join('.')
let caps = initals.toUpperCase()
return caps
}