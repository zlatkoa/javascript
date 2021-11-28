//ZADACA 3
//Da se napise funkcija koja sto kako parametar prima recenica. 
//Funkcijata treba da go najde i da go vrati najdolgiot zbor vo recenicata


const sentence = 'The quick brown fox jumps over the lazy dog in the forest where the trees are high extremly'


function longestWord (a){
	let wordarray=a.split(' ')
	let walentgth=wordarray.length
	let longword=[]
	for (let i=0; i<walentgth; i++){	
		if (wordarray[i].length > longword.length){
			longword=wordarray[i]		
		}
	}
	return `The longest word from the sentence is: "${longword}"`
}

const findLongestWord = longestWord(sentence)

console.log(findLongestWord)