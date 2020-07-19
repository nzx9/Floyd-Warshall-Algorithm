# Floyd-Warshall-Algorithm
Calculate and demostrate the shortest distance between all pairs (Floyd-Warshall Algorithm). (All Pairs Shortest Paths).

## Example

const inf = Infinity;
let matrix = [[0, 3, 8, inf, -4], [inf, 0, inf, 1, 7], [inf, 4, 0, inf, inf], [2, inf, -5, 0, inf], [inf, inf, inf, 6, 0]];

let fwa = new FloydWarshallAlgorithm;

#### Detailed Mode On (Print the calculations in every matrix and return the calculated all pairs shortest path matrix))
fwa.run(matrix, {n : 0, detailed : true});

#### Detailed Mode Off (return the calculated all pairs shortest path matrix)
fwa.run(matrix);

