######################################## NEW QUESTION ########################################

**QUESTION**: Translate the following maths functions to λ-abstractions:

1. $f(x) = x + 1$
2. $f(x, y) = x^2 + y^2$
3. $f(x) = mx + c$

**ANSWER**:

1. $\lambda x.\ x + 1$
2. $\lambda x.\ \lambda y.\ x^2 + y^2$
3. $\lambda x.\ m * x + c$

**LEVEL**: 1
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: Evaluate the following:

1. $(\lambda x.\ x^2)\ 6$
2. $(\lambda x.\ \lambda y.\ x^3 + y^4)\ 3\ 4$

**ANSWER**:

1. $6^2 = 36$
2. $(\lambda x.\ \lambda y.\ x^3 + y^4)\ 3\ 4 = 3^3 + 4^4 = 283$

**LEVEL**: 2
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: Evaluate the following:

$((\lambda f.\ \lambda x.\ f\ (f\ x))\ (\lambda y.\ y + 3))\ 2$

**ANSWER**:

$= ((\lambda f.\ \lambda x.\ f\ (f\ x))\ (\lambda y.\ y + 3))\ 2$

$\to (\lambda x.\ (\lambda y.\ y + 3)\ ((\lambda y.\ y + 3)\ x))\ 2$

$\to (\lambda y.\ y + 3)\ ((\lambda y.\ y + 3)\ 2)$

$\to (\lambda y.\ y + 3)\ (2 + 3)$

$\to (\lambda y.\ y + 3)\ 5$

$\to 5 + 3$

$\to 8$

**LEVEL**: 2
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: Evaluate the following:

1. $(\lambda x.\ \lambda y.\ x)\ 5$
2. $(\lambda x.\ \lambda y.\ x)\ 5\ 19$

Explain your answers.

**ANSWER**:

1. $\lambda y.\ 5$
2. $5$

$(\lambda y.\ 5)$ is the function which takes input $y$ and returns $5$ regardless of the value of $y$. Note that this is not the same as the value $5$ itself. You need to call the function to get the value $5$.

**LEVEL**: 2
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: Evaluate the following step-by-step:

$((\lambda f.\ \lambda g.\ \lambda x.\ f\ (g\ x))\ (\lambda a.\ a * 2)\ (\lambda b.\ b + 5))\ 3$

**ANSWER**: $((\lambda f.\ \lambda g.\ \lambda x.\ f\ (g\ x))\ (\lambda a.\ a * 2)\ (\lambda b.\ b + 5))\ 3$

$\to ((\lambda g.\ \lambda x.\ (\lambda a.\ a * 2)\ (g\ x))\ (\lambda b.\ b + 5))\ 3$

$\to (\lambda x.\ (\lambda a.\ a * 2)\ ((\lambda b.\ b + 5)\ x))\ 3$

$\to (\lambda a.\ a * 2)\ ((\lambda b.\ b + 5)\ 3)$

$\to (\lambda a.\ a * 2)\ (3 + 5)$

$\to (\lambda a.\ a * 2)\ 8$

$\to 8 * 2$

$\to 16$

**LEVEL**: 2
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: What is a convenient shorthand way to simplify:

$\lambda x.\ \lambda y.\ x^2 + y^2$

**ANSWER**:

$\lambda xy.\ x^2 + y^2$

**LEVEL**: 2
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: What is an "expression"/"term" in mathematics and formal logic? Give some examples.

**ANSWER**: An expression (or term) is any valid sequence of symbols constructed according to the formal grammar rules of the system which denotes an object or a value. For example, considering basic arithmetic, the following is a valid expression: $5 * (5 + 4) - 2$ which happens to be equivalent to the expression $43$. However, note that this $5 * (5 + 4) - 2 = 43$ is NOT an expression, it is an equation (it's also a formula, a statement, or a proposition).

**LEVEL**: 1
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: Give the inductive definition of the term "λ-term/λ-term" in pure lambda calculus.

**ANSWER**: Given an infinite supply of variables $x, y, z, \dots$:

- **Variable**: any variable $x$ is a λ-term.
- **Abstraction**: if $x$ is a variable and $M$ is a λ-term, then $(\lambda x.\ M)$ is also a λ-term. In this context, $(\lambda x.\ M)$ is known as a λ-abstraction and $M$ is known as the "body" of the λ-abstraction.
- **Application**: if $M$ and $N$ are λ-terms, then $(M\ N)$ (the application of $M$ to $N$) is a λ-term.

Nothing else is a λ-term.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: In the λ-abstraction $\lambda x.\ M$, what is $M$ known as?

**ANSWER**: The body of the abstraction.

**LEVEL**: 1
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: What is the difference between pure and extended lambda calculus?

**ANSWER**: Pure lambda calculus has only three kinds of λ-terms: variables, abstractions and applications. Extended (or applied) lambda calculus adds constants such as $5$, $+$, $*$ and $TRUE$, as a fourth kind of λ-term, together with extra reduction rules (called δ-rules) saying how the constants compute, e.g. $5 + 3 \to 8$. Those δ-steps are not β-reductions.

**LEVEL**: 1
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: In the context of lambda calculus:

1. What does $\Lambda$ typically denote?
2. What letters are commonly used to denote the elements of $\Lambda$?
3. What does $V$ typically denote?
4. What letters are commonly used to denote the elements of $V$?

**ANSWER**:

1. $\Lambda$ is the set of all λ-terms.
2. $M, N, P, \dots$
3. $V$ is the set of all variables.
4. $x, y, z, \dots$

**LEVEL**: 1
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**:

1. What is a binding variable?
2. What is a bound variable?
3. What is a free variable?

**ANSWER**:

1. A variable written immediately after a $\lambda$. For example, the first $x$ in the λ-term $\lambda x.\ x + 1$.
2. A variable in the body of an abstraction that binds that variable. For example, the second $x$ in the λ-term $\lambda x.\ x + 1$.
3. A variable that isn't binding and isn't inside any abstraction that binds it. E.g. the $y$ in $\lambda x.\ x\ y$.

**LEVEL**: 1
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**:

1. What is a "closed λ-abstraction"?
2. Which of the following λ-abstractions are closed and which are open?

   a. $\lambda x.\ x + 1$

   b. $\lambda x.\ \lambda y.\ x\ y$

   c. $\lambda x.\ \lambda y.\ x\ y\ z$

   d. $\lambda x.\ \lambda y.\ x$

3. How does one denote the set of all closed λ-terms?

**ANSWER**:

1. A λ-abstraction which contains no free variables.
2.

   a. Closed

   b. Closed

   c. Open

   d. Closed

3. $\Lambda^{0}$

**LEVEL**: 1
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: Apply the substitution rule $[x := N]$ to the following λ-term:

$y\ x\ (\lambda x.\ x)$

I.e. What is $(y\ x\ (\lambda x.\ x))[x := N]$?

Explain your answer.

**ANSWER**: $(y\ x\ (\lambda x.\ x))[x := N]$

$\to y\ N\ (\lambda x.\ x)$

Note that the first time that $x$ appears in $y\ x\ (\lambda x.\ x) [x := N]$ is a free variable whereas the second time it is a binding variable and third time it is bound variable. Substitution only applies to free variables.

**LEVEL**: 2
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**:

1. Informally, what is β-reduction?
2. Consider the λ-term $(\lambda x.\ x + 1)\ 5$. Would we say that $(\lambda x.\ x + 1)$ is being applied to $5$ or would we say that $5$ is being applied to $(\lambda x.\ x + 1)$?
3. What is a "redex"?
4. Is β-reduction the same as substitution? Explain.

**ANSWER**:

1. β-reduction is just a fancy term for calling a function.

2. $(\lambda x.\ x + 1)$ is being applied to $5$.

3. A redex (reducible λ-term) is a λ-term of the form $(\lambda x.\ M)\ N$, i.e. a λ-abstraction immediately applied to an argument.

4. No. Substitution is one part of beta reduction. For example, consider the λ-term $x\ y\ x$ and the substitution $[x := N]$. Applying the substitution gives $N\ y\ N$. Now consider the redex $(\lambda x.\ x\ y\ x)\ N$. To perform beta reduction, we first remove the $\lambda x$, then apply the substitution $[x := N]$ to the body $x\ y\ x$, i.e. $(x\ y\ x)[x := N] = N\ y\ N$.

**LEVEL**: 1
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: What is "currying"? Use the mathematical function $f(x, y) = x + y$ as an example to explain.

**ANSWER**: Currying is the process of transforming a function that takes several arguments into a sequence of single-argument functions: a function that takes the first argument and returns a function that takes the next argument, and so on. Since every λ-abstraction has exactly one parameter, this is how multi-argument functions are represented in lambda calculus.

For example, $f(x, y) = x + y$ becomes $\lambda x.\ \lambda y.\ x + y$, which is shorthand for $\lambda x.\ (\lambda y.\ x + y)$:

- The outer function $\lambda x.\ (\lambda y.\ x + y)$ takes an argument, binds it to the parameter $x$, and returns the inner function.
- The inner function $\lambda y.\ x + y$ takes an argument, binds it to $y$, and returns $x + y$. Considered on its own, $x$ is free in the inner function, but in the full term it is bound by the outer $\lambda x$, so the full term is closed.

Applying it one argument at a time:

$(\lambda x.\ \lambda y.\ x + y)\ 3\ 4$
$\to (\lambda y.\ 3 + y)\ 4$
$\to 3 + 4$
$\to 7$

The intermediate result $\lambda y.\ 3 + y$ is itself a useful function (one that adds 3). Supplying only some of the arguments like this is called **partial application**.

**LEVEL**: 1
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**:

1. Informally, what does it mean for two λ-terms to be syntactically identical, denoted $\equiv$?
2. Informally, what does it mean for two λ-terms to be α-equivalent, denoted $=_{\alpha}$?
3. Informally, what does it mean for two λ-terms to be β-equivalent, denoted $=\beta$?
4. Replace the $???$ with $\equiv$, $=_{\alpha}$, $=\beta$ or $\neq$: in the following with the strongest notion of equivalence.

   a. $x\ y\ z ??? (x\ y)\ z$?

   b. $x\ y\ z ??? x\ (y\ z)$?

   c. $\lambda x.\ x ??? \lambda y.\ y$?

   d. $(\lambda x.\ x)\ z ??? z$?

**ANSWER**:

1. Two λ-terms are syntactically identical if they are structurally identical (have exactly the same parse tree) and have exactly the same variable names.
2. Two λ-terms are α-equivalent if they are identical up to renaming of bound variables. For example: $\lambda x.\ x =_{\alpha} \lambda y.\ y$
3. Two λ-terms are β-equivalent if they can be transformed into each other by a series of β-reductions and/or β-expansions. For example $(\lambda x.\ x)\ y =\beta y$
4.

   a. $x\ y\ z \equiv (x\ y)\ z$
   b. $x\ y\ z \neq x\ (y\ z)$
   c. $\lambda x.\ x =_{\alpha} \lambda y.\ y$
   d. $(\lambda x.\ x)\ z =\beta z$

**LEVEL**: 1
**DATE**: 2026-10-14

######################################## NEW QUESTION ########################################

**QUESTION**: Determine which of the following are valid α-conversions.

1. $(\lambda x.\ x\ (\lambda z.\ x\ y))\ z =_{\alpha} (\lambda y.\ y\ (\lambda z.\ y\ y))\ z$
2. $\lambda x\ y.\ x\ z\ y =_{\alpha} \lambda v\ u.\ v\ z\ u$
3. $(\lambda x.\ x\ (\lambda z.\ x\ y))\ z =_{\alpha} (\lambda x.\ x\ (\lambda z.\ x\ y))\ z$
4. $\lambda x\ y.\ x\ z\ y =_{\alpha} \lambda z\ y.\ z\ z\ y$
5. $(\lambda x.\ x\ (\lambda z.\ x\ y))\ z =_{\alpha} (\lambda z.\ z\ (\lambda x.\ z\ y))\ z$
6. $(\lambda x.\ x\ (\lambda z.\ x\ y))\ z =_{\alpha} (\lambda u.\ u\ (\lambda z.\ u\ y))\ v$
7. $\lambda x\ y.\ x\ z\ y =_{\alpha} \lambda y\ y.\ y\ z\ y$
8. $(\lambda x.\ x\ (\lambda z.\ x\ y))\ z =_{\alpha} (\lambda u.\ u\ (\lambda z.\ u\ y))\ z$
9. $\lambda x\ y.\ x\ z\ y =_{\alpha} \lambda v\ y.\ v\ z\ y$
10. $(\lambda x.\ x\ (\lambda z.\ x\ y))\ z =_{\alpha} (\lambda z.\ z\ (\lambda z.\ z\ y))\ z$

**ANSWER**:

1. Invalid
2. Valid
3. Valid
4. Invalid
5. Valid
6. Invalid (sneaky question, the $z$ turned into a $v$)
7. Invalid
8. Valid
9. Valid
10. Invalid

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Consider a λ-abstraction $\lambda x.\ M$. What does it mean to "rename" $x$ in this abstraction to another variable $y$? What notation is used to indicate this renamed λ-abstraction?

**ANSWER**: $M^{x \to y}$ denotes the renamed λ-abstraction. To obtain $M^{x \to y}$ from $M$, replace every free occurrence of $x$ in $M$ by $y$ provided that:

1. $y \notin FV(M)$ (where $FV(M)$ denotes the set of free variables in $M$)
2. $y$ is not already a binding variable in $M$.

We write:

$\lambda x.\ M =_{\alpha} \lambda y.\ M^{x \to y}$

And say that $x$ has been renamed to $y$.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Give the formal definition of α-conversion.

**ANSWER**: Consider a λ-abstraction, $M$. Moreover, suppose that $y \notin FV(M)$ and that $y$ is not already a binding variable in $M$. The following count as valid α-conversions:

1. **Renaming**: $\lambda x.\ M =_{\alpha} \lambda y.\ M^{x \to y}$
2. **Compatibility**: If $M =_{\alpha} N$, then $M\ L =_{\alpha} N\ L$, $L\ M =_{\alpha} L\ N$ and, for arbitrary $z$, $\lambda z.\ M =_{\alpha} \lambda z.\ N$.
3.a. **Reflexivity**: $M =_{\alpha} M$
3.b. **Symmetry**: If $M =_{\alpha} N$, then $N =_{\alpha} M$
3.c. **Transitivity**: If $L =_{\alpha} M$ and $M =_{\alpha} N$, then $L =_{\alpha} N$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: What is variable capture? Give an example.

**ANSWER**: Variable capture is when a substitution places a free variable underneath a λ that binds a variable of the same name, so that the variable accidentally becomes bound and its meaning changes. For example, consider the redex: $(\lambda x.\ \lambda y.\ x)\ y$.

This should give the function that ignores its input and returns the outside $y$. But naive substitution gives: $(\lambda y.\ x)[x := y]$ = $\lambda y.\ y$, which is the identity function. The free $y$ has been "captured" by $\lambda y$.

To avoid capture, first rename the bound variable to a fresh name ($\alpha$-conversion), which doesn't change the meaning since bound variable names don't matter: $(\lambda x.\ \lambda z.\ x)\ y \to \lambda z.\ y$

This is the correct result: the $y$ stays free. Substitution that renames bound variables in this way is called capture-avoiding substitution, and it's what β-reduction always uses.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Give a formal definition of the process of substitution (this formal definition will guarantee we avoid variable capture).

**ANSWER**:

1. $x[x := N] \equiv N$
2. $y[x := N] \equiv y$, if $x \not\equiv y$
3. $(P\ Q)[x := N] \equiv (P[x := N])(Q[x := N])$
4. $(\lambda y.\ P)[x := N] \equiv \lambda z.(P^{y\ \to z}[x := N])$ where $P^{y \to z}$ is an α-variant of $P$ such that $z \notin FV(N)$. Note that if $y \notin FV(N)$, then we do not need to do any α-conversion. Moreover, if $x \notin FV(P)$, then we also do not need to do any α-conversion.

GO ONTO THE NEXT QUESTION FOR PRACTICAL EXAMPLES.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Perform the following substitutions:

1. $(\lambda y.\ y\ x)[x := x\ y]$
2. $(\lambda x.\ y\ x)[x := x\ y]$
3. $(\lambda xy.\ z\ z\ x)[z := y]$

**ANSWER**:

1. $(\lambda y.\ y\ x)[x := x\ y]$

Since $y \in FV(x\ y)$, we need to perform α-conversion to avoid variable capture. Note that $z \notin FV(x\ y)$, therefore we can safely rename $y$ to $z$:

$\equiv (\lambda z.\ z\ x)[x := x\ y]$
$\equiv \lambda z.\ z\ (x\ y)$

2. $(\lambda x.\ y\ x)[x := x\ y]$

Since $x \in FV(x\ y)$, we need to perform α-conversion to avoid variable capture. Note that $z \notin FV(x\ y)$, therefore we can safely rename $x$ to $z$:

$\equiv (\lambda z.\ y\ z)[x := x\ y]$

Since there are no free variables $x$ in $(\lambda z.\ y\ z)$, the substitution does nothing.

$\equiv (\lambda z.\ y\ z)$

$=_{\alpha} (\lambda x.\ y\ x)$

3. $(\lambda xy.\ z\ z\ x)[z := y]$

$\equiv (\lambda x.\ (\lambda y.\ z\ z\ x))[z := y]$

Since $x \notin FV(y)$

$\equiv (\lambda x.\ (\lambda y.\ z\ z\ x)[z := y])$

Now $y \in FV(y)$, therefore we need to do an α-conversion.

$\equiv (\lambda x.\ (\lambda u.\ z\ z\ x)[z := y])$

$\equiv (\lambda x.\ (\lambda u.\ y\ y\ x))$

$\equiv \lambda xu.\ y\ y\ x$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Is it the case that $M[x := N][y := L] \equiv M[y := L][x := N]$? Justify your answer.

**ANSWER**: No. Consider $x[x := y][y := x] \equiv y[y := x] \equiv x$. However, $x[y := x][x := y] \equiv x[x := y] \equiv y$.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: State a lemma about $M[x := N][y := L]$.

**ANSWER**: $M[x := N][y := L] \equiv M[y := L][x := N[y := L]]$ if $x \not\equiv y$ and $x \notin FV(L)$.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: What is the difference between a set and a multiset?

**ANSWER**: A set must contain distinct elements whereas a multiset can contain the same element multiple times. For both a set and a multiset the order of elements does not matter.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**:

1. Let $Sub$ be the function with takes a λ-term $M$ and returns the multiset of all sub-terms of $M$. Define $Sub$ recursively.
2. What two lemmas are instantly apparent from the definition of $Sub$?

**ANSWER**:

1.

- $Sub(x) = {x}$ for all $x \in V$
- $Sub(M\ N) = Sub(M) \cup Sub(N) \cup {(M\ N)}$
- $Sub(\lambda x.\ M) = Sub(M) \cup {(\lambda x.\ M)}$

2.

- $M \in Sub(M)$ for all $M \in \Lambda$.
- If $L \in Sub(M)$ and $M \in Sub(N)$, then $L \in Sub(N)$.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Expand each of the following:

1. $Sub(x\ (y\ z))$
2. $Sub(x\ y\ z)$
3. $Sub(\lambda x.\ x\ y\ x)$
4. $Sub((\lambda x.\ x\ x)\ (\lambda x.\ x\ x))$
5. $Sub((\lambda x.\ \lambda y.\ x\ y)\ (\lambda z.\ z)\ w)$

**ANSWER**:

1. $Sub(x\ (y\ z)) = {x\ (y\ z), x, y\ z, y, z}$ (5 elements)

2. $Sub(x\ y\ z) = {x\ y\ z, x\ y, x, y, z}$ (5 elements)

Note that with full brackets, $x\ y\ z$ is $((x\ y)\ z)$, since application associates to the left.  Note that $y\ z$ is NOT a subterm.

3. $Sub(\lambda x.\ x\ y\ x) = {(\lambda x.\ x\ y\ x), (x\ y\ x), (x\ y), x, y, x}$ (6 elements)

4.

```
Sub((λx. x x) (λx. x x)) =
{
(λx. x x) (λx. x x),
   (λx. x x),
      x x
         x,
         x,


   (λx. x x),
      x x,
         x,
         x
}
```

(9 elements)

5.

```
Sub((λx. λy. x y) (λz. z) w) =
{
   (λx. λy. x y) (λz. z) w
      (λx. λy. x y) (λz. z)
         (λx. λy. x y)
            λy. x y
               x y
                  x
                  y
         (λz. z)
            z
      w
}
```

(10 elements)

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Consider a λ-term, $M$. What is a "proper subterm" of $M$?

**ANSWER**: $L$ is a "proper subterm" of $M$ if $L \in Sub(M)$, but $L \not\equiv M$.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: State the "Barendregt convention".

**ANSWER**: In all λ-terms, all binding variables are chosen to be distinct from each other and from all free variables in the term.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: According to the Barendregt convention, is the following valid $(\lambda xy.\ x\ z)(\lambda xz.\ z)$?

**ANSWER**: No because the whole thing is a λ-term and the binding variable $x$ is used in both $\lambda xy.\ x\ z$ and $\lambda xz.\ z$. Moreover, $z$ is a free variable in $\lambda xy.\ x\ z$ and a binding variable in $\lambda xz.\ z$. To obey the Barendregt convention, we can write:

$(\lambda xy.\ x\ z)(\lambda xz.\ z) \equiv (\lambda xy.\ x\ z)(\lambda uv.\ v)$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Give the formal definition of one-step β-reduction, denoted $\to \beta$.

**ANSWER**:

1. **Basis**: $(\lambda x.\ M)\ N \to \beta M[x := N]$
2. **Compatibility**: if $M \to \beta N$, then:

- $M\ L \to \beta N\ L$
- $L\ M \to \beta L\ N$
- $\lambda x.\ M \to \beta \lambda x.\ N$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Give the formal definition of one-step β-reduction, denoted $\twoheadrightarrow_{\beta}$.

**ANSWER**: $M \twoheadrightarrow_{\beta}\ N$ if there exists λ-terms $M_0 \dots M_n$ such that:

- $M_0 \equiv M$
- $M_i \rightarrow \beta M_{i + 1} \text{ } \text{ }\ 0 ≤ i < n$
- $M_n \equiv N$

For some $n \geq 0$.

I.e. There exists a chain of one-step β-reductions starting with $M$ and ending with $N$.

$M \equiv M_0 \to_{\beta}\ M_1 \to_{\beta} \dots \to_{\beta}\ M_{n-1} \to_{\beta}\ M_n \equiv N$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Is β-reduction transitive? What does this even mean?

**ANSWER**: Yes. β-reduction is transitive. This means that for any λ-terms $L$, $M$ and $N$, if $L \twoheadrightarrow_{\beta}\ M$ and $M \twoheadrightarrow_{\beta}\ N$ then it follows that $M \twoheadrightarrow_{\beta}\ N$.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**:

1. How are $TRUE$ and $FALSE$ represented in Church encoding?
2. How do you represent the λ-term: "if $b$ then $M$ else $N$" as an applied term?
3. Explain why your answer to question 2 works by evaluating your λ-term when $b$ is $TRUE$ and when $b$ is $FALSE$
4. How do you represent the standalone combinator $IF$ as a closed λ-abstraction?

**ANSWER**:

1. $TRUE \equiv \lambda x.\ \lambda y.\ x$, $FALSE \equiv \lambda x.\ \lambda y.\ y$
2. $b\ M\ N$
3. **Case 1**: $b$ is $TRUE$:

$b\ M\ N$
$= (\lambda x.\ \lambda y.\ x)\ M\ N$
$\to (\lambda y.\ M)\ N$
$\to M$

**Case 2**: $b$ is $FALSE$

$b\ M\ N$
$= (\lambda x.\ \lambda y.\ y)\ M\ N$
$\to (\lambda y.\ y)\ N$
$\to N$

4. $\lambda b.\ \lambda x.\ \lambda y.\ b\ x\ y$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Let $b$ be a Church boolean ($TRUE$ or $FALSE$).

1. How do you represent the applied λ-term $NOT\ b$?
2. How do you represent $NOT$ as a closed λ-abstraction?

**ANSWER**:

1. $b\ FALSE\ TRUE$
2. $\lambda b.\ b\ FALSE\ TRUE$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**:

1. How do you represent $AND$ as a closed λ-abstraction?
2. Explain your answer (you do not need to do a full derivation).

**ANSWER**:

1. $\lambda p.\ \lambda q.\ p\ q\ FALSE$
2. Recall the applied term for "if $b$ then $M$ else $N$" is $b\ M\ N$. Therefore $p\ q\ FALSE$ is the applied term for "if $p$ then $q$ else $FALSE$.

First consider the case when $p$ is $TRUE$. Whether $p\ AND\ q$ is $TRUE$ now depends entirely on whether $q$. If $q$ is $TRUE$, then $p\ AND\ q$ is $TRUE$. If $q$ is $FALSE$, then $p\ AND\ q$ is $FALSE$.

Now consider the case when $p$ is $FALSE$. Here $p\ AND\ q$ is definitely $FALSE$ regardless of the value of $q$.

**LEVEL**: 1
**DATE**: 2026-10-06

######################################## NEW QUESTION ########################################

**QUESTION**:

1. How do you represent $OR$ as a closed λ-abstraction?
2. Explain your answer (you do not need to do a full derivation).

**ANSWER**:

1. $\lambda p.\ \lambda q.\ p\ TRUE\ q$
2. Recall the applied term for "if $b$ then $M$ else $N$" is $b\ M\ N$. Therefore $p\ TRUE\ q$ is the applied term for "if $p$ then $TRUE$ else $q$.

First consider the case when $p$ is $TRUE$. $p\ OR\ q$ should immediately evaluate to $TRUE$.

Next consider the case when $p$ is $FALSE$. Here, $p\ OR\ q$ is now totally equivalent to the value of $q$.

**LEVEL**: 1
**DATE**: 2026-10-06

######################################## NEW QUESTION ########################################

**QUESTION**: In Church encoding, how are 2-tuples (pairs) represented?

1. Give the closed λ-abstraction for the constructor $PAIR$.
2. Give the closed λ-abstractions for the projections $FIRST$ and $SECOND$.
3. Expand $FIRST$ and $SECOND$ to pure lambda calculus syntax (without aliases).
4. Show step-by-step that $FIRST\ (PAIR\ A\ B)$ reduces to $A$.

**ANSWER**:

1. $PAIR \equiv \lambda x.\ \lambda y.\ \lambda f.\ f\ x\ y$
2. $FIRST \equiv \lambda p.\ p\ TRUE$, $SECOND \equiv \lambda p.\ p\ FALSE$
3. $FIRST \equiv \lambda p.\ p\ (\lambda x.\ \lambda y.\ x)$, $SECOND \equiv \lambda p.\ p\ (\lambda x.\ \lambda y.\ y)$
4. First, construct the pair:

$PAIR\ A\ B$
$= (\lambda x.\ \lambda y.\ \lambda f.\ f\ x\ y)\ A\ B$
$\to (\lambda y.\ \lambda f.\ f\ A\ y)\ B$
$\to \lambda f.\ f\ A\ B$

Now apply $FIRST$ to the resulting pair:

$FIRST\ (\lambda f.\ f\ A\ B)$
$= (\lambda p.\ p\ TRUE)\ (\lambda f.\ f\ A\ B)$
$\to (\lambda f.\ f\ A\ B)\ TRUE$
$\to TRUE\ A\ B$
$= (\lambda x.\ \lambda y.\ x)\ A\ B$
$\to (\lambda y.\ A)\ B$
$\to A$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Why do we define $PAIR \equiv \lambda x.\ \lambda y.\ \lambda f.\ f\ x\ y$ and not $PAIR \equiv \lambda f.\ \lambda x.\ \lambda y.\ f\ x\ y$?

**ANSWER**: When one instantiates a $PAIR$, one typically knows the values of the data but doesn't yet know which element they are going to access.

**LEVEL**: 1
**DATE**: 2026-10-06

######################################## NEW QUESTION ########################################

**QUESTION**:

1. What λ-abstraction is usually used to represent $NULL$/$NIL$ in lambda calculus?
2. What do you notice about this?

**ANSWER**:

1. $\lambda x.\ \lambda y.\ y$
2. This is identical to $FALSE$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**:

Using tagged Church pairs to represent dynamically-sized singly linked lists:

1. How is the empty list ($NIL$) defined?
2. What is the name given to the function used to add an element to the front of an existing list? What is the λ-abstraction of this function?
3. How is a list $L$ storing elements $A$, $B$, and $C$ constructed? And what is the final representation of this list?
4. How is the emptiness check function ($IS_NIL$) defined? Justify your answer.
5. How are the $HEAD$ and $TAIL$ accessor functions defined?
6. What would happen if one called $HEAD\ NIL$ or $TAIL\ NIL$?
7. How do you access the 1st through 5th elements of a 5-element list $L$?

**ANSWER**:

1. $NIL \equiv PAIR\ TRUE\ FALSE$
2. $CONS \equiv \lambda x.\ \lambda l.\ PAIR\ FALSE\ (PAIR\ x\ l)$ (this adds element $x$ to the front of the existing list $l$)
3. $L \equiv CONS\ A\ (CONS\ B\ (CONS\ C\ NIL)) = PAIR\ FALSE\ (PAIR\ A\ (PAIR\ FALSE\ (PAIR\ B\ (PAIR\ FALSE\ (PAIR\ C\ (PAIR\ TRUE\ FALSE))))))$
4. $IS_NIL \equiv FIRST$. Notice that: $FIRST\ NIL \to FIRST\ (PAIR\ TRUE\ FALSE) \to TRUE$, whereas $FIRST\ (PAIR\ FALSE\ (PAIR\ x\ l)) \to FALSE$.
5. $HEAD \equiv \lambda l.\ FIRST\ (SECOND\ l)$, $TAIL \equiv \lambda l.\ SECOND\ (SECOND\ l)$
6. Calling $HEAD\ NIL$ or $TAIL\ NIL$ is undefined behaviour.
7. 1st: $HEAD\ L$, 2nd: $HEAD\ (TAIL\ L)$, 3rd: $HEAD\ (TAIL\ (TAIL\ L))$, 4th: $HEAD\ (TAIL\ (TAIL\ (TAIL\ L)))$, 5th: $HEAD\ (TAIL\ (TAIL\ (TAIL\ (TAIL\ L))))$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: What is the λ-abstraction of the Church encodings of the numbers 0, 1, 2, 3 and 4?

**ANSWER**:

$0 \equiv \lambda f.\ \lambda x.\ x$
$1 \equiv \lambda f.\ \lambda x.\ f\ x$
$2 \equiv \lambda f.\ \lambda x.\ f\ (f\ x)$
$3 \equiv \lambda f.\ \lambda x.\ f\ (f\ (f\ x))$
$4 \equiv \lambda f.\ \lambda x.\ f\ (f\ (f\ (f\ x)))$

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**:

1. What is the λ-abstraction of the Church encoding of successor function?
2. Show that $SUCC\ 2 \to 3$

**ANSWER**:

1. $SUCC \equiv \lambda n.\ \lambda f.\ \lambda x.\ f\ (n\ f\ x)$
2. $SUCC\ 2$
   $= SUCC\ (\lambda f.\ \lambda x.\ f\ (f\ x))$
   $= (\lambda n.\ \lambda g.\ \lambda y.\ g\ (n\ g\ y))\ (\lambda f.\ \lambda x.\ f\ (f\ x))$
   $\to (\lambda g.\ \lambda y.\ g\ ((\lambda f.\ \lambda x.\ f\ (f\ x))\ g\ y))$
   $\to \lambda g.\ \lambda y.\ g\ (g\ (g\ y))$
   $\to 3$

**LEVEL**: 0
**DATE**: NA

