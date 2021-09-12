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