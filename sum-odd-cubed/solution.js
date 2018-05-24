function cubeOdd(arr) {
for(let i in arr) {
if(isNaN(arr[i])) 
return undefined}

let cubed = arr.map(x => x*x*x).filter(x => x % 2 !== 0).reduce((a, b) => a+b, 0)
return cubed
}
