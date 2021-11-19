// const brojki =[89,12,55,4,12,89,0,7,12]
// let sortirana = brojki.sort()
// let duplikati=[]

// for (let i=0; i<sortirana.length; i++){
//     if (sortirana[i+1]===sortirana[i]){
//         console.log(`elementot ${sortirana[i]} e duplikat`)
//         duplikati.push(sortirana[i])
//             }
// }

// console.log(`Vo nizata ima ${duplikati.length} duplikat elementi`)
// console.log(duplikati)

//-------------------------------------------

// const brojki =[89,12,55,4,12,89,0,7]
// let duplikati=[]

// for (let i=0; i<brojki.length; i++){
//     for(let j=0; j<brojki.length; j++){
//         if(i!==j){
//             if (brojki[i]===brojki[j]){
//                 duplikati.push(brojki[j])
//             }
//         }

//     }
// }


// console.log(duplikati)


// const animals=['Dog', 'Parrot', 'Turtle']
// const food =['Meat', 'Seeds', 'Leaves']
// let result =[]

// if(animals.length===food.length){
// for (let i=0; i<animals.length; i++){
//     result.push(animals[i],food[i])
    
// }
// console.log(result)
// }else{
//     if(animals.lenght<food.length){
//         result.push(anumals[i])
//     }
// }

const temp = [12, 13, 20, 31, 41, 17, 25, 19]
let tavg=0
let tmax=0
let tmin=0

for (i=0; i<temp.length; i++){
    tavg=tavg+temp[i]
    
    if(tmax<temp[i]){
        tmax=temp[i]
    }
}

tmin=tmax

for (i=0; i<temp.length; i++){
   
    if(tmin>temp[i]){
        tmin=temp[i]
    }   
}

tavg=tavg/temp.length

console.log(`Vo izminatite ${temp.length} denovi, prosecnata temperatura iznesuvase ${tavg}, najniskata izmerena temperatura ${tmin}, najvisokata izmerena temperatura ${tmax}`)