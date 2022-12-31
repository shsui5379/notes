# Recursion
- Functions calling themselves
- A problem solving technique where the solution is obtained by solving "easier" cases
- Classic example: factorial
	- Solving 4! is hard, but 3! is an easier problem to solve, so solve 3!, then multiply by 4
	- Solving 3! is hard, but 2! is an easier problem to solve, so solve 2!, then multiply by 3
	- Solving 2! is hard, but 1! is an easier problem to solve, so solve 1!, then multiply by 2
	- (now we hit the base case, aka the easiest possible problem to solve)
	- 1! = 1, now we can go back up the call stack and solve those harder problems

# Pitfalls of recursion
- A solution that requires a lot of recursive calls may be inefficient to solve
- Recursively calling a function so many times creates overhead for each function call, and also takes up memory in the callstack
- It's also possible for the algorithm to solve duplicated subproblems
		- Classic example: Fibonacci sequence
			- To calculate fib(99), the algorithm will be calculating fib(98) and fib(97)
			- To calculate fib(98), the algorithm will be calculating fib(97) and fib(96)
			- Now we ended up redundantly solving fib(97) twice, wasting time
			- And a lot of other duplications
			- If you draw out all the recursive calls into a tree, you'll see a lot of duplicated subtrees

## Remedies

### Tail recursion
- Any problem that can be solved recursively can be solved iteratively
- With iteration, instead of depending on subproblems, the algorithm uses variables to track and update a current state
- As a result, the algorithm won't be redundantly solving duplicated subproblems
- Tail recursion is basically a recursive implementation that preserves that feature of iteration
- The parameters of the tail recursive function would play the role of variables from iteration
- Each recursive call will update the values just like each iteration of a loop
- ex: if this is how you iteratively solve Fibonacci:
```cpp
// the nth number in the Fibonacci sequence
int fibonacci(int n) {
	if (n < 2) return 1;

	int prev = 1;
	int prevprev = 1;
	int current;

	while (n > 0) {
		current = prev + prevprev;
		prevprev = prev;
		prev = current;
		n--;
	}

	return current;
}
```
- Then with tail recursion:
```cpp
int fibonacci(int n, int prev, int prevprev, int current) {
	if (n == 0) return prevprev;
	return fibonacci(n - 1, current, prev, prev + prevprev);
}

int fibonacci(int n) {
	return fibonacci(n, 1, 1, 2);
}
```

### Memoization
- A dynamic programming technique
- Caching previously computed results, so they don't need to be recomputed
- Ex: to solve Fibonacci, there could be an array for cache
	- When solving fib(99), fib(98) and fib(97) need to be solved
	- Solving fib(98) requires fib(97) and fib(96)
	- When fib(97) is solved, its result should be stored in cacheArray\[97\]
	- So that other fib(97) calls will only need to look up the value of cacheArray\[97\], instead of having to go through all of fib(96), fib(95), and so on