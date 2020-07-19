class FloydWarshallAlgorithm{
    calcOne(matrix, n){
	for(let i = 0; i < matrix.length; i++){
	    for(let j = 0; j < matrix[i].length; j++){
		let oldV = matrix[i][j];
		let newV = matrix[i][n] + matrix[n][j];
		matrix[i][j] = (newV < oldV) ? newV : oldV; 
	    }
	}
	return matrix;
    }

    run(matrix, args = {n : 0, detailed : false}){
	if(args.n === matrix.length - 1) {
	    if(args.detailed){
		console.log("--------------------------------------");
		console.log("[*] D" + (args.n + 1) + " Matrix: (final output)");
		console.log("--------------------------------------");
		console.log(matrix);
	    }
	    return matrix;
	}
	let d = this.calcOne(matrix, args.n);
	if(args.detailed){
	    console.log("[*] D" + (args.n + 1) + " Matrix:");
	    console.log("--------------------------------------");
	    console.log(d);
	}
	return this.run(d, {n : args.n + 1, detailed: args.detailed});   
    }
}


// Run example
// const inf = Infinity;
// let matrix = [[0, 3, 8, inf, -4], [inf, 0, inf, 1, 7], [inf, 4, 0, inf, inf], [2, inf, -5, 0, inf], [inf, inf, inf, 6, 0]];

// let fwa = new FloydWarshallAlgorithm;
// fwa.run(matrix, {n : 0, detailed : true});
