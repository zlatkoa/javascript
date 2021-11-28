/*
Da se napravi klasa Kafemat sto ke funkcionira kako mashina za pravenje kafe.
Ima tri parametri: voda, kafe, mleko (ovie bi bile vkupna tezina vo gramovi, 
znaci treba da se brojki). Koga ja instancirame klasata zadavame pocetna vrednost 
za sekoj od ovie paramatri - na primer 100g kafe, 100g mleko i 1000g voda.
Da se napravi metod koj sto ke pravi casa kafe i koga ke go povikate da ispise 
poraka deka kafeto e gotovo. Za edna casa se potrebni 7g kafe, 100g voda i 20g mleko.
Povikajte go metodot nekolku pati za da vidite dali sostojkite vi se troshat kako sto treba, 
slicno kako na chas sto vezbavme so avtomobilite.
Dokolku go povikate metodot za pravenje na kafe, a nemate dovolno od nekoja od 
sostojkite da se ispecati kolku grama i od koja sostojka falat. 
Za kraj, klasata da ima uste edno property, koe sto ke vi kazuva kolku kafinja vkupno ste napravile. 
Pocetnata vrednost mu e nula
*/



class coffeeMachine {
	constructor(coffee, milk, water){
		this.coffee = coffee
		this.milk = milk
		this.water = water
	}
	prepareBeverage(coffee, milk, water){
		if(this.coffee>=coffee & this.milk>=milk & this.water>=water){
			this.coffee-=coffee
			this.milk-=milk
			this.water-=water
			coffecounter+=1
			console.log(`\n Number of coffies prepared since last time machine is refilled  ${coffecounter}. \n Status \n  coffee=${this.coffee}g, \n  milk=${this.milk}g, \n  water=${this.water}g \n `)
		}else{
			const ingridientsCheck =[
				{name:'coffee',
				current:this.coffee,
				requested:coffee},
				{name:'milk',
				current:this.milk,
				requested:milk},
				{name:'water',
				current:this.water,
				requested:water}
			]
			for (let i=0;i<ingridientsCheck.length;i++){
				if (ingridientsCheck[i].current<ingridientsCheck[i].requested){
					console.log(`Ingridient ${ingridientsCheck[i].name} is missing ${ingridientsCheck[i].requested-ingridientsCheck[i].current} grams`)
				}else{
					console.log(`Ingridient ${ingridientsCheck[i].name} is OK. There are still ${ingridientsCheck[i].current} grams available`)
				}
			}
		}
	}
}

let coffecounter= 0

const ingridients = new coffeeMachine(100, 100, 1000)


ingridients.prepareBeverage(7,10,100)
ingridients.prepareBeverage(12,11,95)
ingridients.prepareBeverage(12,11,95)
ingridients.prepareBeverage(8,11,95)
ingridients.prepareBeverage(12,11,95)
ingridients.prepareBeverage(12,11,95)
ingridients.prepareBeverage(12,11,95)
ingridients.prepareBeverage(12,11,95)
ingridients.prepareBeverage(12,11,95)
ingridients.prepareBeverage(8,11,95)



