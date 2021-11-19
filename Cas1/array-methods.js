// let cena =[]
// let proizvod =[]
// const niza =['Orange', 'Apple', 'Banana',3,5,6,7]

// for (let i=0; i<niza.length; i++){
//     if(typeof niza[i]==="string"){
//         proizvod.push(niza[i])
//     }else if(typeof niza[i]==="number"){
//         cena.push(niza[i])
//     }
// }

// console.log(cena,proizvod)

let temp=[]
let zbirna=[]

let niza = [
    ['a', 'b'],
    ['c', 'd', 'e'],
    ['f', 'g'],
    ['h'],

]
for (let i=0; i<niza.length; i++){
    temp=[...niza[i]]
    zbirna.push(...temp)
    
}

console.log(zbirna)


