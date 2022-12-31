# Blind / Exhaustive search

- Blindly trying all possible spaces
- Depth first search
	- Exploring as far as possible in one direction before exploring another direction
	- ex: State-space search
- Breadth first search
	- A wide coverage
	- ex: one unit in all directions, then two units in all directions, then three units in all directions...

## Space-state search

- Can be done recursively
- The world exists as a set of states, and it's possible to transition between states

### Mazes
- The maze can be represented as a 2D array
- The recursive function should be passing around the maze array, row and column location
- On call, if location is the goal, maze won (base case).  Else, mark the location as visited.
- Then, recursively search in Direction 1
	- This is a transition between states, as now the state is a maze that contains one less unexplored space
		- Appropriate use of recursive problem-solving, as one less unexplored space means it's an "easier" maze
	- And should going to Direction 1 be a bad move, the algorithm will return up the call stack, which effectively transitions back to the previous state
- Should Direction 1 have been a bad choice, it'll return back to this call, so try Direction 2 next
- Should Direction 2 have been a bad choice, it'll return back to this call, so try Direction 3 next
- Should Direction 3 have been a bad choice, it'll return back to this call, so try Direction 4 next
- Should Direction 4 have been a bad choice, and say we ran out of all possible directions, then going to this location was a bad choice.  Mark this location as not part of the solution, and return up the call stack (this is how the previous call changes direction).