# C++ basics

## Essentials
- To build, run `g++ -o output source.cpp`, which results in an executable named `output`
    - if you don't define a output file name, the default name is `a.out`
- End lines with semicolons
- Single line comments start with `//`


## Functions
- To define a function:
```c++
returnType functionName(type parameter) {
    code;
}
```
- To call the function: `functionName(argument)`
- When an executable is run, the `int main()` method runs first
    - `main` typically returns a `0`, which is the return code for success
- By default, the parameter only receives the value of the argument.  If you want to be able to modify the variable passed in as argument, you need to pass in the reference to the variable.  To do so, add `&` to the end of the type for that parameter.  Also useful for "returning" multiple values.


## Variables
- `type name = value`


## Conditionals
```c++
if (condition) {
    //code to run if condition is true
} else if (condition2) {
    //code to run if condition2 is true
} else {

}

//this is a ternary
condition ? value to return if true : value to return if false;

//this is a switch
switch (int or char)
{
    case value1:
        //code to run if value1 matches the provided int or char
        break;
    case value2:
        //code to run if value2 matches the provided int or char
        break;
    case value3:
        //code to run if value3 matches the provided int or char
        break;
    default:
        //code to run if none of the above cases were run
        break;
}
```


## Loops
- While loop
```c++
while (condition) {
    //code to run while condition is true
}
```
- For i loop
```c++
for (int i = start; terminating condition; increment) {
    //code to run each iteration
}
```
- Do-while loop
  - runs the code once, then check the condition for whether it can run again
```c++
do {
    //code
} while (condition);
```
- enhanced for loop
```cpp
for (type name : collection)
{
   //use `name` here
}
```


## Libraries
- To import a library, at the start of the source file, add `#include libraryName`
    - Enclose `libraryName` in angle brackets if system library.  Quotes for your own library.
### iostream library
- `std::cout`: sends whatever gets streamed into it to console output
    - Ex: `std::cout << "Hello"`
- `std::endl`: represents an end line character (\\n)
    - `std::cout << "Hello World" << "!" << std::endl;`
- `std::cin`: streams out the input from console
    - `std::cin >> variable`
- `>>` and `<<` are stream insertion operators. They take a stream and pass it to whatever the angle is pointing to
