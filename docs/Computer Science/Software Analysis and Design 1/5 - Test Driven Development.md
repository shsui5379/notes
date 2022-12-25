# Logging
- Defining a logging tool
``` cpp
#ifdef LOGGING //if LOGGING is defined: define using the -DLOGGING cxx flag
#define LOG(x) std::cerr << x << "\n"; //cerr writes to stderr instead of stdout
#else
#define LOG(x) //otherwise, log does nothing
#endif
```

# Unit tests - doctest.h
- https://github.com/doctest/doctest
- For each file, create a corresponding testing file of it that tests its functions
- Download doctest.h, and include it in the testing file
- Add `#define DOCTEST_CONFIG_IMPLEMENT_WITH_MAIN` to tell doctest to implement its own testing main method
- For each function, make a test case
```cpp
TEST_CASE("Name the case")
{
   CHECK(/*condition to check if it's true*/);
   //have enough checks to cover all possible scenarios

   //REQUIRE makes things mandatory; CHECK only checks
   //doctest::Approx(float) to work around floating point imprecisions when comparing floats
   //there's also WHEN for conditions of when to CHECK

   //check the documentation for more
}
```