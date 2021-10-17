# std::cin
- cin can write to multiple variables at once
- `cin >> first >> second >> third`
- The user would type in what they want to store in `first`, then a space, then what they want to store in `second`, then a space, then what they want to store in `third`
- When the input can't be stored into the variable (ex: wrong type), `std::cin fail()` would be true
  - To be able to receive stdin again, do `std::cin clear()`
- `std::cin << var` returns true if the value is successfully written to `var`

# Manipulator
- `#include <iomanip>`
- `fixed << setprecision(n)`: fix every double after that to have n decimal places
- `setw(n) << someItem`: Append as many spaces before `someItem` as needed to reach a minimum width of n characters

# Redirecting files into a program via stdin
- In Unix, `./program < file` runs `program` and feeds in the contents of `file` via stdin
- In C++, std::cin would then be reading from the contents of `file`
- To read a whole line, `getline(std::cin, variableToStoreLineTo)`
- To read word, `std::cin >> variableToStoreWordIn`
  - Tip: to iterate through file contents, that returns `true` as long as there's new content to read, helpful in a while loop
- The stdout of the program can also be redirected to a text file using `./program > file`
 
# Reading and writing to disk
- Using the fstream library
- Reading a file: `ifstream nameThisStream("path/to/file");`
  - Use `>>` to get content out of the stream
  - `nameThisStream.close()` to close the file
  - `nameThisStream.fail()` to check if there was an error opening the file
- For writing to a file, it's just like reading from a file, but
  - use `ofstream` instead of `ifstream`
  - and use `<<` to write to the stream