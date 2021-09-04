# Multiple functions
- If a function is used before it's defined, then the function should be prototyped before usage
- Prototyping looks like: `returnType functionName(paramType, paramType, paramType);`

# Multiple files
- To use a function from another file, those functions also have to be prototyped
- The prototyping can be placed in header files
  - Functions from file `functs.cpp` would be prototyped in `functs.h`
  - `#include "functs.h"` would be on top of `functs.cpp` and any file that uses functions defined in `functs.cpp`
- To compile
  - First, all the files involved would need to be compiled into object files (ex: `functs.cpp` --> `functs.o`)
    - `g++ -c functs.cpp main.cpp another.cpp`
  - Then, link them to produce an executable
    - `g++ -o programName functs.o main.o another.o`