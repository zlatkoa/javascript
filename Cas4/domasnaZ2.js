//ZADACA 2
//Da se napravi funkcja koja sto kako parametar prima zbor. 
//Funkcijata treba da proveri dali zborot e palindrom (odnapred i odnazad se cita isto)


const word = "lubenica "

// vo funkcijata go cistam zborot od prazni mesta zatoa sto moze da bide palindrom 
//ama praznoto mesto pred ili posle zborot go zema vo predvid i go pravi da ne bide palindrom
function invertWord(a){
    const cleanword=a.toLowerCase().replace(' ','').split('').join('')
    const inverted=cleanword.toLowerCase().replace(' ','').split('').reverse().join('')
    if(cleanword===inverted){
        return `Zborot e palindrom ${cleanword} naopaku e ${inverted}`
    }else{
        return `Zborot ne e palindrom ${cleanword} naopaku e ${inverted}`
    }
}

const inverting = invertWord(word)
console.log(inverting)