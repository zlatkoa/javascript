const temp = [12, 13, 20, 31, 41, 17, 25, 19, -3, 122]
let tavg=temp[0]
let tmax=temp[0]
let tmin=temp[0]
// initial values are set to 0 as starting reference values

for (i=0; i<temp.length; i++){
    tavg=tavg+temp[i] //here i calculate the summary of all temperatures
    
    if(tmax<temp[i]){ //i use the same loop to assign the value for the max temperature to make the code clean
        tmax=temp[i]
    }
}

tmin=tmax //i asign the maximum temperature as minimal temperature, since the inital value of 0 for temin is not the lowest number if the temperature is less than zero
tavg=tavg/temp.length //average temperature gets its final value 

for (i=0; i<temp.length; i++){ // i use new loop for the minimal temperature since the initial value is the final tmax from the prevuous loop
   
    if(tmin>temp[i]){
        tmin=temp[i]
    }   
}

console.log(`Vo izminatite ${temp.length} denovi, prosecnata temperatura iznesuvase ${tavg}, najniskata izmerena temperatura ${tmin}, najvisokata izmerena temperatura ${tmax}`)