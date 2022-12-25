- Input processing should be as forgiving as possible
- Ex: if std::cin is sending a stream to an int, but a string was inputted, std::cin would be jammed
- Jammed systems provide an attack surface for denial-of-service attacks
- Strings are one of the most forgiving input types

```c++
//a forgiving int input system
try //if can't be converted to long double, abort and go to catch
{
   d = std::stold(i); //string to long double

   if (!(d == (int)d))
   {
      std::cout << "Not an int!!\n";
   }
   else
   {
      std::cout << d << std::endl;
   }
}
catch (std::exception e) //e contains details about the error
{
   std::cout << "Not an int!!\n";
}
```