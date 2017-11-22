let str=(num,end)=>{
	let a = [num];

	for (var i= +num-1;i> +end-1;i--){
		a.push(i);
		a.unshift(i);
	}

	return a.join('');
}

str(6,1);