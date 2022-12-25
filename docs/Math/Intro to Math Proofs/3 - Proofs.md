# Definitions
- Theorem: a statement proven to be true
- Proof: a written verification that a theorem is true
- Proposition: a theorem, but less significant
- Lemma: a theorem that is mainly used to prove another theorem
- Corollary: the immediate consequence of a theorem

# Methods
- Direct Proof
  - For proving conditionals
  - To prove $P \implies Q$
```
Suppose P.
//a bunch of statements leading up to conclusion.
Therefor Q.
```
- Proof by cases
  - Like direct proof, but testing multiple scenarios
  - Ex: testing when x is add, and when x is even
  - If multiple cases are nearly identical, you can just put down Without Loss of Generality
- Induction
  - For scenarios where proof by case would end up in needing an infinite number of cases
  - First, show that the statement is true in a base case
  - Then, suppose it is true for a case k
  - Finally, show that it is also true for any case k + 1
  - Basically shows that something is true for one scenario and the next scenario, implying that every "next" scenario is also true
- Contrapositive
  - Direct proof, but...
  - Sometimes, proving $P \implies Q$ is difficult, so prove its contrapositive instead
- Contradiction
  - Direct proof, but...
  - Sometimes, proving $P \implies Q$ is difficult, so attempt to prove (but fail) $\lnot P \implies Q$ OR $P \implies \lnot Q$
- Existence
  - If you just need to show that something exists, you can just provide an example of it existing
- Uniqueness
  - If you need to prove that there is only exactly only one of something
  - Show what happens if it wasn't unique
- Subset
  - Proving that one set A is a subset of set B
  - First, define what it means to be a part of set A
  - Then, show how elements of set A meets the requirements to also be part of set B
- Set equivalence
  - To show that set A equals set B, prove that set A is a subset of set B, and that set B is a subset of set A