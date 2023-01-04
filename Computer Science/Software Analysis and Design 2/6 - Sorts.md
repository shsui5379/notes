# Bubble sort
- O(n^2)
	- worst case need to do a full sweep for each of the n elements
- Go from left to right, comparing adjacent elements, swapping when needed
- Keep looping until nothing's left to swap

# Selection sort
- O(n^2)
	- worst case for all n elements, need to search through all n elements to find the smallest
- Select the smallest element, and swap it with the first element
- Of the remaining unsorted elements, find the smallest elements, and swap it with the second element
- Of the remaining unsorted elements, find the smallest element, and swap it with the third element
- And so on, until everything's sorted

# Insertion sort
- O(n^2)
	- worst case all n elements need to be moved left n spaces
- For each element from left to right, keep swapping it with previous element until it's in the right place

# Mergesort
- Divide and conquer
- O(nlogn)
	- Merging n things logn times
- Base case: left half length = right half length = 1: merge them by making a new array of those 2 elements in order
- Recursion: divide the array in half, mergesort the left half, mergesort the right half, then merge the 2 halves to a new array where everything's sorted

# Quicksort
- Select a pivot value
	- Most ideal pivot value is the median of the first, middle, last values
- Quicksort the set of values lower than pivot
- Quicksort the set of values greater than pivot
- Reassemble lower|pivot|greater
- Worst case quadratic time
	- If pivot keeps on dividing it where lower set has 1 element, greater set has n-1 elements
- Average case nlogn, like mergesort

# Bucketsort
- Create n buckets dividing up the range of the data set
	- ex: 0.0-0.2, 0.2-0.4, 0.4-0.6, 0.6-0.8, 0.8-1.0
- Place each element in the correct bucket
- Sort each bucket
- Concatenate the buckets
- O(n)