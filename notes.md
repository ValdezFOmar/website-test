# CSS
- Building Blocks
    - Handling different text directions

# Javascript
- Building Blocks


# Types of combinators:

## Descendant combinator 

    parent child

All the children _descendant_ of the parent (even when there are other elements between the chain) have this rule apply.

## Child Combinator

    parent > child

The style rule is only apply if the child is a **direct child** of the parent (there are no elements between them).


## Adjacent sibling

    sibling + sibling

Applys the rules to the second sibling only when it's the **next sibling** of the first one.

## General sibling

    sibling ~ sibling

Applys the rules to the second sibling when it comes **anywhere** after the first one.

# Values and units

    em

Relative value of the parent element. For fonts it's the relative value of the parents font, the same applies to width.

    rem

Same as `em` but this time it's the value of the root element (highest in the hierarchy).

    n%

- where `n` is a number

Porcentage relative to the parent value (ex. a width of `50%` is **half** the width of its parent width).

# Functions

    calc()

Will make a simple calculation at runtime when its not posible to determined it beforehand, ex.

```css
.box {
    width: calc(20% + 100px);
}
```

The 20% is calculated from the width of the parent container and so will change if that width changes.