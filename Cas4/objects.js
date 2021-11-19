// const books = [
//     {
//         isbn: 10, 
//         name: 'Miami Vice', 
//         author:'Don Johnson', 
//         year: '1998',
//         available: true
//     },
//     {
//         isbn: 20, 
//         name: 'Hercyl Poaro', 
//         author:'Agatha Christi', 
//         year: '1936',
//         available: false
//     },
//     {
//         isbn: 30, 
//         name: 'Scherlock Holmes', 
//         author:'Unknown', 
//         year: '1966',
//         available: true
//     },
//     {
//         isbn: 40, 
//         name: 'Biography of Steve Jobs', 
//         author:'Steve Jobs', 
//         year: '2008',
//         available: true
//     },
    
// ]

// //Momentalno na zaliha: ime na knga + avtor
// // ne se na zaliha: ime na avtor
// let booksAvailable =[]
// let boooksNotAvailabe =[]
// const { length }= books

// for (let i=0; i<length; i++){
//     let {isbn , name, author, year, available} = books[i]
//     if(available===true){
//         booksAvailable.push(books[i].name)
//         //console.log(books[i])
//     }else{
//         boooksNotAvailabe.push(books[i])
//     }
// }

// for (let i=0; booksAvailable.length; i++){
//     console.log(`Dostapni knigi se ${booksAvailable[i].['name']} - ${booksAvailable[i].author}`)
// }



// console.log(booksAvailable)
// console.log(boooksNotAvailabe)

// function sum (a,b,c){
//     let suma=a+b+c
//     return suma
// }


// let rezultat = sum ('a','b','c')

// console.log(rezultat)


//funkcija sto ke prima zborce i da presmeta kolku bukvi ima vo zborot





const today = new Date()

function datum(date){
    if(typeof date != 'object'){
     let formattedDate=`parametarot ne e data` 
    }else{
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    let formattedDate=`${day}/${month}/${year}`
    return formattedDate
    }
}

let rezultat = datum(toda)

console.log(rezultat)