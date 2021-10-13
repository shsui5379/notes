# Strings
- `std::string`
- A sequence of characters
- Has a `length()` method that returns the length of the string
  - `size()` does the same
- String literals are enclosed in " "
- The nth character of a string can be retrieved using \[n\]
- Strings can be concatenated using `+`
- The `substr(start, length)` method returns a substring starting at character `start`, and has `length` characters
  - `length` can be omitted to return the rest of the string starting from `start`

# Character
- `char`
- A unicode character
- Character literals are in single quotes

# Integers
- `int`
- 32 bits

# Doubles
- `double`
- Can store decimal values
- 64 bits

# Casting
- If you do arithmetic operations, the resulting value uses the type of the two that uses the most memory
  - Ex: operation with an int and an int results in an int
  - Operation with an int and a double results in a double
- `(destination type) value` to cast `value` type to `destination type`
  - Newer way: `static_cast<destination type>(value)`

# Auto
- A variable declared with type auto gets its type based on initialization data

# Objects
- Contains properties and methods

# Constants
- A constant variable can't change its value after initialization
- To mark a variable as a constant, add the `const` keyword before the type
- Named using CAPITAL_LETTERS
