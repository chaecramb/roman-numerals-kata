## The problem

The program should take a number and return a string of the corresponding Roman numeral.

Roman numerals correspond to numbers as follows:

1: I
5: V
10: X
50: L
100: C
500: D
1000: M

Steps for the simplest case - [additive form Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals#Other_additive_forms)

- Identify the highest value Roman number that doesn't exceed the number
- Repeat the symbol a number of times equal to the integer quotient of division by the value of that symbol
- The above is then repeated for the remainder until there is none
- The resulting symbols are combined in order to create the Roman numeral

## Test cases, inputs and outputs

Simplest cases: values that produce a single Roman Numeral as an output
