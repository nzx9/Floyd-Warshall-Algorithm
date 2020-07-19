function calc(matrix, n){
    for(let i = 0; i < matrix.length; i++){
	for(let j = 0; j < matrix[i].length; j++){
	    let oldV = matrix[i][j];
	    let newV = matrix[i][n] + matrix[n][j];
	    matrix[i][j] = (newV < oldV) ? newV : oldV; 
	}
      }
    return matrix;
}

function run(matrix, n = 0, detailed = false){
    if(n === matrix.length) {
	if(detailed){
	    console.log("--------------------------------------");
	    console.log("           [*] Final Result           ");
	    console.log("--------------------------------------");
	}
	return matrix
    }
    let d = calc(matrix, n);
    if(detailed){
	console.log("[*] D" + (n + 1) + " Matrix:");
	console.log("--------------------------------------");
	console.log(d);
    }
    return run(d, n + 1, detailed);
    
}

// run example
const inf = Infinity;
let matrix = [[0, 3, 8, inf, -4], [inf, 0, inf, 1, 7], [inf, 4, 0, inf, inf], [2, inf, -5, 0, inf], [inf, inf, inf, 6, 0]];

console.log(run(matrix, 0, true));
