# Linked lists
- A dynamic form of an array
- Consecutive elements don't have to be adjacent in memory

## Typical implementation
- A linked list is made up of nodes (can be a struct or an object)
- A node stores a value, and a pointer to the next node in the list
	- Pointing to `nullptr` signifies the tail of the list
	- That would be a singly linked list
	- In a doubly linked list, a node would also store a pointer to the previous node in the list
		- Previous pointer pointing to `nullptr` signifies the head of a list

## Typical Methods
- Getting the first node
- Getting the last node
- Inserting a new node to the front
- Inserting a new node to the end
- Get whether the list is empty
- Inserting a new node to a given position
- Delete a node from a given position
- Reversing the list
- Getting the length of the list
- Emptying the list

## Noteworthy
- Reversing linked list in-place is a common interview question
- walker-trailer idiom
	- A `walker` variable that tracks the current node
	- Use `walker->next` to advance to the next node
	- In a `while` loop, this can iterate through the whole list until it hits `nullptr`
	- Optionally, there can be a `trailer` variable that holds on to what `walker` previously was

## C++ STL
- Include `list`
- `std::list<T>`
- Internally implemented as doubly linked list
- Documentation: https://www.geeksforgeeks.org/list-cpp-stl/