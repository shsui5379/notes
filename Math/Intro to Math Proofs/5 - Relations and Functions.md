# Relations
- $R \subseteq A \times B$
  - R contains relationships between A and B
- $(a,b) \in R$, which can be denoted as $aRb$
  - ex: in a relationship defined by $x>y$, $5>3$ is true, so $5R3$, given $5 \in A \land 3 \in B$
- Types of relationships in $A \times A$
  - reflexive: $\forall x \in A, xRx$
    - every element in A relates to itself
    - rules such as $=, |, \subseteq, \leq, \geq, \equiv$
  - symmetric: $\forall x, y \in A, xRy \implies yRx$
    - if one element relates to another element, that other element must also relate back to the first element
    - rules such as $=, \neq, \not\equiv, \equiv,$
  - transitive: $\forall x, y, z \in A, xRy \land yRz \implies xRz$
    - if x relates to y, and y relates to z, then x must also relate to z
    - rules such as $<, >, \leq, \geq, |, \nmid$
- Equivalence relation: a relationship that's reflexive, symmetrical, and transitive
- Given an equivalent relation R, $\{x \in A : xRa\}$ is a set of all elements that relate specifically to $a$
  - given a rule $x \equiv a (mod 3)$, when $a$ is 2, a set can be made for all x'es that when divided by 3, share the same remainder as 2 when divided by 3
  - That set can be denoted $[a]$
  - $mod 3$ can result in 3 possible remainders: 0, 1, 2, so its partitions are [0], [1], [2].
    - [3] is the same thing as [0], because 3 divided by 3 has the same remainder as 0 divided by 3, so multiple representatives are possible

# Functions
- $f : A \rightarrow B$ is a relationship $f \subseteq A \times B$
- $\forall a \in A, (a,b) \in f$
  - each input has an output
- $(a,b) \in f \land (a,c) \in f \implies b = c$
  - each input has only one corresponding output
- $A$ is the domain, or the set of inputs
- $B$ is the codomain, or the set of possible outputs
- The range is $\{b = f(a) : a \in A\}$, or the actual outputs values that are used
- Types of functions
  - injective (1 to 1): $\forall x, y \in A, f(x)=f(y) \implies x=y$
    - each output has only one corresponding input
  - surjective (onto): $\forall b \in B, \exists a \in A, f(a) = b$
    - every element of the codomain is in the range
  - bijective: both injective and surjective
  - inverse: a function takes an input and gives a output.  its inverse takes that output, and turns it back into the input.  requires the function to be bijective

# Pigeonhole principle
- given $f : A \rightarrow B$
- if $|A| > |B|$, f is not injective
- if $|A| < |B|$, f is not surjective