//ZADACA 1
//Da se napisat dve funkcii koi sto ke konvertiraat temperatura od Farenhajtovi vo Celziusovi stepeni i obratno. 
//Originalnata temperatura se prima kako parametar i od funkcijata se vrakja konvertiranata temperatura. 
//Bonus: istoto da se napravi samo so edna funkcija



//declaration of the values which are needed for the functions
const ambientTemperature = 25
const unit = 'c'
const notValidNumber = "Input value is not a valid number. Please enter number to obtain result!\n"


// simple Farenheit to Celsius function with one input number
function convertCelsius (a){
    if(typeof a == 'number'){
        return `The value ${a} converted in Celsius degrees: ${(a*9/5)+32}\n`
    }
    return notValidNumber
}

//simple celsiums to Farenheit function with one input number
function convertFarehneit (a){
    if(typeof a == 'number'){
        return `The value ${a} converted in Farehneit degrees: ${(a-32)*5/9}\n`
    }
    return notValidNumber
}


//function which gets 2 parameters as input number and unit. 
//first input parameter must be number
//second input parameter must be letter for the unit. Letter is not case sensitive.
//Acceptable letters for the units are "C" for Celsiums and "F" for Farenheit
function convertCF (a, b){
	b=b.toLowerCase(b)
    if(typeof a == 'number'){
    	if(b=='c'||b=='f'){
    		switch(b){
    			case 'c':
    			return `The Farenheit temperature of ${ambientTemperature} converted in Celsius is:${(a-32)*5/9}`
    			break
    			case 'f':
    			return `The Celsius temperature of ${ambientTemperature} converted in Farenhei is:${(a*9/5)+32}`
    			break
    			default:
    			return `ima greska vo switch proveri sto vlaga kako input`
    		}    		
    	}else{return `The unit parameter should be C for Celsius or F for Farenheit`}        
    }else{return notValidNumber}    
}

//I am calling all functions here 
const temperaturaC = convertCelsius(ambientTemperature)
const temperaturaF = convertFarehneit(ambientTemperature)
const temperaturaCF = convertCF(ambientTemperature, unit)

//here I display the output from the third function which recieves 2 parameters
console.log(temperaturaCF)