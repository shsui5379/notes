- Analysis may be used to compare an algorithm with another
- Or to see how an algorithm scales with input
# Runtime
- Judging how long an algorithm takes to run, in terms of a unit of time
- Informally, each operation takes one unit of time
# Space
- Judging how much memory or storage an algorithm takes to run, in terms of a unit
- Informally, one elementary piece of data could be considered a unit
# Types of growth
- Constant: `k`
	- As the input scales up, the runtime/space used remains constant
- Linear: 
	- As the input scales up, the runtime/space used increases along with it in a linear fashion
	- `n`
		- Ex: iterating through `n` items
	- `kn`
		- Ex: loop after loop
	- `n + k`
		- Ex: lines after loop
- Quadratic: `n^2`
	- As the input scales up, the runtime/space used increases in a quadratic fashion
	- Ex: nested loop
- Cubic: `n^3`
	- As the input scales up, the runtime/space used increases in a cubic fashion
	- Ex: triple nested loop
- Exponential: `k^n`
	- As the input scales up, the runtime/space used increases by a magnitude of `k`-fold
- Factorial: `n!`
	- As the input scales up, the runtime/space used increases in a factorial fashion

# Notations
- Generally, simplify to the leading term without coefficients
	- Ex: `4n^2 + 3n + 2` simplifies to just the order of `n^2`
- Big-O: `O()`
	- Worst-case scenario complexity
- Big-theta: `Θ()`
	- Average-case scenario complexity
- Big-omega: `Ω()`
	- Best-case scenario complexity
