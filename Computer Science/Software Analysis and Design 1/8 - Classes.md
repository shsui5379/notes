# Declaring a class
- class ClassName would be declared in a header file ClassName.h
- cpp class names conventionally use CamelCase
```cpp
//ClassName.h
#pragma once
class ClassName
{
   public: //accessible outside of this class
      ClassName(type param1, type param2); //constructor, for initiating an instance.  no return type
      ClassName(); //overloading is possible, for methods too
      type publicMethodOne(type param1, type param2);
      type publicMethodTwo() const; //const means that this method won't modify any states.  compiler enforced
      type publicMethodThree() static; //static means that this method is not associated with any instance scope, and can only access the static scope
      ~ClassName(); //destructor, for tasks such as releasing dynamically allocated memory that this object used.  automatically called when an instance is no longer referencable

   private: //state is usually kept private, as a principle of encapsulation.  accessible only in this class
      type privateFieldOne;
      type privateFieldTwo static; //static means that this property is not associated with any specific instance; it's shared with the class
}; //note the semicolon
```

# Implementing a class
- The methods of a class would be implemented in ClassName.cpp
```cpp
//ClassName.cpp
#include "ClassName.h" //include the header

//signature is the same as what's found in the header, but with ClassName:: namespace
ClassName::ClassName(type param1, type param2)
{
   //implement the constructor
}

//constructor delegation: when there's constructor overloading, one constructor can call another constructor
ClassName::ClassName() : ClassName(value1, value2) {}

type ClassName::publicMethodOne(type param1, type param2)
{
   //implement method
}

type ClassName::publicMethodTwo() const {/*implement*/}
type ClassName::publicMethodThree() {/*implement*/} //note the omission of `static` keyword in implementation
ClassName::~ClassName() {/*implement*/}
```
- `this` is a pointer to this instance

# Instances/objects
- include the header in the files that need that class
- To initialize an instance
  - `ClassName instanceName` to use the default constructor
  - `ClassName instanceName(value1, value2)` to use a specific constructor
- To use an instance, public members can be accessed through the dot operator
- Passing big objects around to functions is inefficient.  Passing as a constant reference would be more efficient
  - `const type& paramName`
- public static methods can be accessed outside the class through `ClassName::staticMethod()`