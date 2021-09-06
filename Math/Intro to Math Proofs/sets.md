# Sets
- A collection of elements
- Noted by capital letters
- Ways to define a set
    - List
        - $S = \{1,2,3\}$
        - Just listing all the elements out
    - Set builder notation
        - $S = \{ x | x > 0\}$
        - $|$ and $:$ means "such that"
        - $\{ expression | condition \}$
    - Descriptive definition: using a sentence/paragraph to describe the elements of the set
    - Interval Notation
        - $[2, \infty)$
        - Parenthesis means exclusive at the endpoint
          - Infinity is always exclusive
        - Square brackets mean inclusive at the endpoint
        - $(start, end)$

## Important sets
- Natural numbers: $N = \{1, 2, 3, 4, ...\}$
  - counting numbers
- Integers: $Z = \{0, \pm 1, \pm 2, \pm 3, ... \}$
  - $Z^+$ are positive integers, while $Z^-$ are negative integers
  - $Z$ is closed under addition and multiplication, meaning adding or multiplying 2 integers together will not result in something that's not an integer
    - if $a,b \in Z$, then $a+b \in Z$ and $a*b \in Z$
      - $\in$ means that something is an element of a set
    - Even integers = $\{2x | x \in Z\}$
    - Odd integers = $\{ 2x + 1 | x \in Z\}$
- $\emptyset$: empty set
- Quotient of integers (rational numbers): $Q = \{\frac{p}{q} | p, q \in Z, q \not ={0}\}$
  - Repeating decimals are rational too
    - If the repeating part is x digits long, divide the repeating part by a number with x number of 9's
- Real numbers: $R$

## Cardinality
- The number of elements in a set
- $|S|$ means the cardinality of set $S$

## Subsets
- Equality: $A=B$
  - if $x \in A$, then $x \in B$
  - if $x \in B$, then $x \in A$
- Subset: $A \subset B$
  - Set $B$ contains everything that $A$ has, and possibly other things too
  - if $x \in A$, then $x \in B$
  - $\emptyset$ is a subset of every set
- Powerset
  - $P(A)$ is the powerset of $A$, which is a set containing all possible subsets of $A$
  - Theorem: $|P(S)| = 2^{|S|}$
    - Think binary, whether or not each individual element is part of a subset
