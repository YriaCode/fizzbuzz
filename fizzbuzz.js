
function fizzbuzz(i){
	let r
	 if (i % 5 == 0){
		r = "buzz";
	}
	 if (i % 3 == 0){
		r = "fizz";
	}
	if (i % 5 ==0 && i % 3 ==0){
		r = "fizzbuzz";
	}

	return i;
}
for(let i = 1; i< 101; i++){
	console.log(fizzbuzz(i));
}




