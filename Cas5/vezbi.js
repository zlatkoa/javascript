// const rectangle = {
//     width: 100,
//     height: 100,
// }

// let width=rectangle.width

// function area (shape){
//     return shape.width * shape.height
// }


// const areaOfRectangle = area(rectangle)

// console.log(areaOfRectangle)


// const teamstats = {
//     win: 10,
//     lost: 8,
//     draw: 5
// }

// function points (team){
//     return team.win*3+team.lost-team.draw
// }

// const tabela = points(teamstats)

// console.log(`Timot ima osvoeno ${tabela} poeni`)


// const farm =[ 
//     {type:'cow',legs:4},
//     {type:'chicken', legs:2},
//     {type:'sheep', legs:4},
//     {type:'fish',legs:0}
// ]

// const legCounter=(animals)=>{
//     const arr = animals.filter((animal)=>{
//         return animal.legs>=4
//     })
//     const animalNames= arr.map((animal)=>{
//      return   animal.type
//     })
//     return animalNames
// } 

// const legs= legCounter(farm)
// console.log(legs)

// const cakePieces = 8
// const people = 2

// function bratskadDelba (a,b){
//     if (a%b===0){
//         return `tortata moze da se podeli`
//     }else{
//         return `tortata nemoze da se podel`
//     }
// }

// const podelba = bratskadDelba(cakePieces,people)
// console.log(podelba)

// const missingMoney = 300

// function taxiForBuck (a){
//     return ((a-50)/20)+1
// }

// const costforride = taxiForBuck(missingMoney)
// console.log(`For ${missingMoney} denari izminati se ${costforride} kilometri`)




//clasi


class Rectangle {
    constructor(width, height){
        this.width=width
        this.height=height
    }
    calculateArea () {
        const area = this.width * this.height
        return area
    }
}

const Rect1 = new Rectangle (30,21)
const area1 = Rect1.calculateArea()
console.log(area1)


