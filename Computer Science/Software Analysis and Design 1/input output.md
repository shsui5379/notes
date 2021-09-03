# std::cin
- cin can write to multiple variables at once
- `cin >> first >> second >> third`
- The user would type in what they want to store in `first`, then a space, then what they want to store in `second`, then a space, then what they want to store in `third`

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
