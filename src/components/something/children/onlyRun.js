console.log('run-only')

let fakeArr = [1, 9, 100]

// let result = fakeArr.every((i) => i === 100)
let result = fakeArr.findIndex((i) => i < 100)
console.log(result)

let fakeArrT = []
// let fakeArrT = Array.from(Array(10).keys())
// let fakeArrT = Array.from({ length: 10 }, (v, k) => k)
// let fakeArrT = Array(10)
//   .fill(undefined)
//   .map((i, v) => v)
// let fakeArrT = [...Array(10).keys()]
function getNum(base, len) {
  if (base < len) {
    fakeArrT.push(base)
    getNum(++base, len)
  }
}
getNum(0, 10)
console.log('fakeArrT', fakeArrT)
let fakeArrO = { name: 'sssss' }
console.log(Object.values(fakeArrO))

for (var i of fakeArrO) {
  console.log(i)
}
