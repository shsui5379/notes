# Statements
- An assertion that is either true or false
- Open statements: statements whose truth value depends on a variable

# Logical Connectives
- Forms compound statements
- AND: $\land$
  - True only when both statements are true
  - In natural language, the word "but" usually means "and"
- OR: $\lor$
  - True as long as at least one statement is true
- NOT: $\lnot$
  - Inverts the truth value of a statement
- XOR (exclusive OR): $\oplus$
  - Only true when only one statement is true
  - $(P \lor Q) \land (P \not ={Q})$

# Truth table
- For a compound statement, list all the possible combinations of truth values, and the compound statement's corresponding truth value for each combination
- Use one column per statement in the compound statement
- Use $2^{x}$ rows, where $x$ is the number of non-compound statements
- Ex: $(P \land Q) \lor R$
  
| P   | Q   | R   | $P \land Q$ | $(P \land Q) \lor R$ |
| --- | --- | --- | ----------- | -------------------- |
| T   | T   | T   | T           | T                    |
| T   | T   | F   | T           | T                    |
| T   | F   | T   | F           | T                    |
| T   | F   | F   | F           | F                    |
| F   | T   | T   | F           | T                    |
| F   | T   | F   | F           | F                    |
| F   | F   | T   | F           | T                    |
| F   | F   | F   | F           | F                    |

# Conditions
- Implication
  - $P \implies Q$
  - If P is true, then Q is also true
  - $\lnot P \lor Q$
- The contrapositive of $P \implies Q$ is $\lnot Q \implies \lnot P$
  - The contrapositive is also true
- The converse of $P \implies Q$ is $Q \implies P$
- Biconditional
  - $(P \iff Q) \implies (P \implies Q \land Q \implies P)$
  - If and only if, iff

# Properties
- DeMorgan's Law
  - $\lnot (P \land Q) = \lnot P \lor \lnot Q$
  - To negate a compound statement, negate both statements, then invert the connective
- Distributive Law
  - $\color{red} P \lor (\color{blue} Q \color{green} \land \color{orange} R) = (\color{red} P \lor \color{blue} Q) \color{green} \land ( \color{red} P \lor \color{orange} R)$

# Logical Inferences
- This is an argument
- Valid argument != the conclusion is true
```
premise 1
premise 2
premise 3
----------
conclusion
```
- If the premises are all true, it can be inferred that the conclusion is true

# Quantifiers
- Universal: $\forall$
  - Means for all
  - $\forall (var), conditions$
  - For every possible values for `var`, `conditions` are true about it
- Existential: $\exists$
  - Means there exists at least one value
  - $\exists (var), conditions$
  - There exists at least one possibility value for `var`, where `conditions` would be true
  - Add $!$ after $\exists$ to indicate that there exists exactly only one value
- To negate a statement with a quantifier, the resulting negated statement would switch to the other quantifier, and the conditions would be negated