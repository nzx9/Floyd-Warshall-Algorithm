# Floyd-Warshall-Algorithm
Calculate and demostrate the shortest distance between all pairs (Floyd-Warshall Algorithm). (All Pairs Shortest Paths).

## Example
```
const inf = Infinity;
let matrix = [[0, 3, 8, inf, -4], [inf, 0, inf, 1, 7], [inf, 4, 0, inf, inf], [2, inf, -5, 0, inf], [inf, inf, inf, 6, 0]];
```
let fwa = new FloydWarshallAlgorithm;

#### Detailed Mode On (Print the calculations in every matrix and return the calculated all pairs shortest path matrix))
```
fwa.run(matrix, {n : 0, detailed : true});

/* Console (Print):
[*] D1 Matrix:
--------------------------------------
[ [ 0, 3, 8, Infinity, -4 ],
  [ Infinity, 0, Infinity, 1, 7 ],
  [ Infinity, 4, 0, Infinity, Infinity ],
  [ 2, 5, -5, 0, -2 ],
  [ Infinity, Infinity, Infinity, 6, 0 ] ]
[*] D2 Matrix:
--------------------------------------
[ [ 0, 3, 8, 4, -4 ],
  [ Infinity, 0, Infinity, 1, 7 ],
  [ Infinity, 4, 0, 5, 11 ],
  [ 2, 5, -5, 0, -2 ],
  [ Infinity, Infinity, Infinity, 6, 0 ] ]
[*] D3 Matrix:
--------------------------------------
[ [ 0, 3, 8, 4, -4 ],
  [ Infinity, 0, Infinity, 1, 7 ],
  [ Infinity, 4, 0, 5, 11 ],
  [ 2, -1, -5, 0, -2 ],
  [ Infinity, Infinity, Infinity, 6, 0 ] ]
[*] D4 Matrix:
--------------------------------------
[ [ 0, 3, -1, 4, -4 ],
  [ 3, 0, -4, 1, -1 ],
  [ 7, 4, 0, 5, 3 ],
  [ 2, -1, -5, 0, -2 ],
  [ 8, 5, 1, 6, 0 ] ]
--------------------------------------
[*] D5 Matrix: (final output)
--------------------------------------
[ [ 0, 3, -1, 4, -4 ],
  [ 3, 0, -4, 1, -1 ],
  [ 7, 4, 0, 5, 3 ],
  [ 2, -1, -5, 0, -2 ],
  [ 8, 5, 1, 6, 0 ] ]
*/

/* Output:
[ [ 0, 3, -1, 4, -4 ],
  [ 3, 0, -4, 1, -1 ],
  [ 7, 4, 0, 5, 3 ],
  [ 2, -1, -5, 0, -2 ],
  [ 8, 5, 1, 6, 0 ] ]
*/
```
#### Detailed Mode Off (return the calculated all pairs shortest path matrix)
```
fwa.run(matrix);

/* Output:
[ [ 0, 3, -1, 4, -4 ],
  [ 3, 0, -4, 1, -1 ],
  [ 7, 4, 0, 5, 3 ],
  [ 2, -1, -5, 0, -2 ],
  [ 8, 5, 1, 6, 0 ] ]
*/
```
