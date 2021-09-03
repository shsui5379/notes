# Strings
- `std::string`
- Has a `length()` method that returns the length of the string
  - `size()` does the same
- String literals are enclosed in " "
- The nth character of a string can be retrieved using \[n\]
- Strings can be concatenated using `+`

# Integers
  - `int`

# Doubles
- `double`
- Can store decimal values

# Casting
- If you do arithmetic operations, the resulting value uses the type of the two that uses the most memory
  - Ex: operation with an int and an int results in an int
  - Operation with an int and a double results in a double
- `(destination type) value` to cast `value` type to `destination type`
  - Newer way: `static_cast<destination type>(value)`
