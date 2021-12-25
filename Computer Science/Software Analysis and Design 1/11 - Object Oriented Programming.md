# Encapsulation
- To group all related things into one abstract unit (a class)
- Making states private, for their protection
- However, strictly sticking to OOP Encapsulation policy causes awkward fracturing of things, and creation of "fake" data types
  - For things that are purely logical, functional programming would be better.  Takes an input, perform an action, return an output

# Inheritance
- Deriving a subclass from a superclass, denoting that the subclass "is a" superclass
- The subclass inherits members from the superclass (but not constructors)
- To inherit, `class SubClass : accessModifier SuperClass`
  - a `public` access modifier gives SubClass the public properties and public methods of SuperClass
    - SuperClass' private members can only be accessed by SubClass through SuperClass' public accessor methods
  - a `private` access modifier means that only the subclass' members can access the superclass' members
- An inherited method can be overridden by defining a method that has the signature of the method to be overwritten
- The super-implementation of a method can be called through `SuperClass::method()`
- The super-constructors can be called through constructor delegation
  - should be done, to initialize the super-states
- Inheritance is considered brittle, since updates to one type would have implications to all the other types derived from it.  Using interfaces would be better, but a flaw with interfaces is that it makes the programmer speculate contexts that no one knows about