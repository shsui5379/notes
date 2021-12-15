# General notes
- ceiling function: $\lceil n \rceil$ means to round n up to the nearest whole number
- In delta-epsilon proofs, generally, you do scratchwork solve a possible value for values that are $\exists$.  Then, in the actual proof, you plug that in and do the backwards of the scratchwork to show that it follows all the rules to make the proof true
- For diverge, just negate the definition for converge
- $\epsilon$, $\delta$ are variables that refers to super tiny numbers
- $M$ is a variable that refers to a super large number
- Rough bound: $|x+y| \leq |x| + |y|$
- Reciprocal of inequalities: if both a and b have the same signs, then $a < b \implies \frac{1}{a} > \frac{1}{b}$

# Proving that a sequence $\{a_n\}$ converges to a limit $L$
- Definition: $\forall \epsilon > 0, \exists N \in Z^+, \forall n > N, |a_n - L| < \epsilon$
  - Meaning that if $L$ is indeed the limit of $\{a_n\}$, then there will be a certain element number $N$, where after the Nth element, the distance between the limit and the sequence will be infinitely small
- For scratchwork, solve $|a_n - L| < \epsilon$ for $n$, then use $n > N$ to get $N$, and take its ceiling (since $N \in Z^+$)
- For the real proof, establish $\forall \epsilon > 0, \exists N =\lceil \text{whatever} \rceil$, then use $n > N$ to prove $|a_n - L| < \epsilon$ is true
- For a divergent series, negate the definition.  The $\exists$ are now $\epsilon$ and $n$.  Take a look at the cases when the limit is positive vs negative.  Find epsilon and n values that satisfy both the definition's constraints and makes the whole definition true

# Proving that a sequence $\{a_n\}$ diverges to infinity
- Definition: $\forall M \in R^+, \exists N \in Z^+, \forall n > N, \{a_n\} > M$
  - Meaning that if $\{a_n\}$ actually diverges to infinity, then there will be a certain element number $N$, where after the Nth element, the sequence's value will be infinitely huge
- Scratchwork and proof is same as proving a convergent sequence

# Applications of proving a convergent sequence
- Proving convergence of a series: Prove that the series' sequence of partial sums is convergent
- Proving an integral: Prove that the Riemann sums limit exists

# Proving a limit $L$ at a point at $x=a$ on $f(x)$
- Definition: $\forall \epsilon > 0, \exists \delta > 0, \forall x \in R, 0 < |x-a| < \delta \implies |f(x)-L| < \epsilon$
  - Meaning that if $f(x)$ has a limit of $L$ at $x=a$, then as the distance between $x$ and $a$ gets tiny, then the distance between $f(x)$ and $L$ gets tiny too
- For scratchwork, 
  - Factor $|f(x)-L|$.  Note that $x-a$ is a factor if the limit exists, by factor theorem
  - Set a convenient (ex: 1) bound on $x-a$.  That becomes one value for $\delta$.  Find x.  Make sure that x is actually part of the function's domain.
  - Use x to find the rough bound of every factor.  (for factors in the denominator, treat them as $\frac{1}{\text{factor}}$, and remember the reciprocal of identities)  Solve for $x-a$.  This is a second value for $\delta$
  - For the actual proof, $\delta = min\{\text{the first value}, \text{the second value}\}$
- For the real proof
  - establish $\forall \epsilon > 0, \exists \delta = \text{whatever}, \forall x \in R$
  - show $0 < |x-a| < \delta \implies |f(x)-L| < \epsilon$ by doing the backwards of the scratchwork
- To show that the limit doesn't exist, negate the definition.  $\epsilon$ and $x$ becomes the $\exists$, so just pick values that makes all parts of the negated definition true