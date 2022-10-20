let num = [2, 3, 4, 5, 6]
num [5] = 9
num.push(1)
console.log(num)
/*
console.log(`O vetor tem ${num.length} posições`)
console.log(num.sort())
console.log(`O primeiro valor do vetor é ${num[0]}`)
for (let pos = 0; pos < num.length; pos ++) {

    console.log(`${pos} = ${num[pos]}`) 
}
*/
for (let pos in num) {
    console.log(`${pos} = ${num[pos]}`) 
}
let busca = 3
console.log(`O valor ${busca} se encontra na posição ${num.indexOf(busca)} do vetor`)