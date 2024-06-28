function calculateSum(num1, num2){
	let sum = num1+num2;
	return sum;
}


function isEven(num){
	let value = num%2;
	if(value == 0){
		return true;
	}else{
		return false;
	}
}



function findMax(...array){
	let maxNumber = Math.max(...array);
    return maxNumber;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}


function sumArray(...array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = array[i]+sum;
    }
    return sum;
}


function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}


function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
