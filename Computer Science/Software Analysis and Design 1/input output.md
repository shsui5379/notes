# std::cin
- cin can write to multiple variables at once
- `cin >> first >> second >> third`
- The user would type in what they want to store in `first`, then a space, then what they want to store in `second`, then a space, then what they want to store in `third`

# Manipulator
- `#include <iomanip>`
- `fixed << setprecision(n)`: fix every double after that to have n decimal places
- `setw(n) << someItem`: Append as many spaces before `someItem` as needed to reach a minimum width of n characters
