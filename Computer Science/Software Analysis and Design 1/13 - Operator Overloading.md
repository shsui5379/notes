- Operators are things like `[]`, `>>`, `<<`, etc
```cpp
//we're inside a class implementation
template <class T>
T data[10];

//the [i] operator used on an instance of this class is to return data[i]
T overload[] (int i) 
{
   return data[i];
}

//now, if we use [2] on an instance of this class, we get data[2]

//lets say you want to be able to modify data[2].  you'll need the [] operator to have returned a reference.  To do that, prefix `operator` with `&`
```