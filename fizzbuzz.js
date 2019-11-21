
function fizzbuzz(i){
	let r
	if (i % 5 ==0 && i % 3 ==0){
		return "fizzbuzz";
	}
	 if (i % 5 == 0){
		return "buzz";
	}
	 if (i % 3 == 0){
		return "fizz";
	}

	return i;
	}
for(let i = 1; i< 101; i++){
	console.log(fizzbuzz(i));
}
