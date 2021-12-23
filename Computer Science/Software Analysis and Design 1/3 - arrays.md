# Intro
- Collection of a set number elements of the same type
- Stored consecutively in memory
  - in an array of ints (4 bytes each), if element 0 is at address 200, then element 3 is at address 200+(4*3)
- zero-indexed

# Working with arrays
- To define an empty array of a set size
  - `type name[size];`
- To define an array with predefined elements
  - `type name[] = {list, of, elements};`
- The nth element can be referred to through
  - `arrayname[n];`
- To calculate how many elements are in the array, do `sizeof(arrayName) / sizeof(arrayName[0])`
- When passing an array as an argument, the array name itself passes the reference to the array, not the value
  - As such, the length of the array needs to be passed separately

# Memory addresses
- 14 digits
- the `0x` at the beginning indicates that it's a hexadecimal number
- Put `&` in front of a variable name to get the variable's memory address
- `&arrayname[i] == *(arrayname + i)`
- The array's name itself is a pointer to the first element of the array
- When an array is passed in as an argument into a function, technically, the pointer is being passed in
  - Size info is lost

# 2D arrays
- Arrays containing arrays
- To declare: `type arrName[numRows][numCols]`
- To access an index: `arrName[row][col]`