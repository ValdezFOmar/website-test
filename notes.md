# Notes

> Firefox tricks
> - Color picker: `Menu > More Tools > Eyedropper`

## Locally hosted website

1. Find your local IP address:

Linux
```bash
ip a | grep "inet " | grep -v "127.0.0.1"
```

Windows
```ps1
ipconfig | grep "IPv4"
```

2. Go to the folder with your site files and run a simple python server:
```bash
# Port by default: 8000
python3 -m http.server "port-number"
```

3. In your device, open a browser and type the following in the address bar:
```plaintext
[ip_address]:[port]
```

## Javascript
- Forms

## CSS
- Finished

> Checkout 
> - [Normalize.css](https://necolas.github.io/normalize.css/)
> - [Organizing CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)

### Types of combinators:

#### Descendant combinator 

```css    
.parent .child
```

All the children **descendant** of the parent (even when there are other elements between the chain) have this rule apply.

#### Child Combinator

```css
.parent > .child
```

The style rule is only apply if the child is a **direct child** of the parent (there are no elements between them).


#### Adjacent sibling

```css
.sibling + .sibling
```

Applies the rules to the second sibling only when it's the **next sibling** of the first one.

#### General sibling

```css
.sibling ~ .sibling
```

Applies the rules to the second sibling when it comes **anywhere** after the first one.

### Values and units

    em

Relative value of the parent element. For fonts, it's the relative value of the parents font, the same applies to width.

    rem

Same as `em` but this time it's the value of the root element (highest in the hierarchy).

    n%

- where `n` is a number

Percentage relative to the parent value (ex. a width of `50%` is **half** the width of its parent width).


    vw and vh
- Viewport width and viewport height

Units relative to the size of the available viewport. `1vh` is `1%` of the viewport height. Sizing things according to the viewport can be useful in your designs. For example, if you want a full-page hero section to show before the rest of your content, making that part of your page 100vh high will push the rest of the content below the viewport, meaning that it will only appear once the document is scrolled.

### Functions

    calc()

Will make a simple calculation at runtime when it's not possible to determined it beforehand, ex.

```css
.box {
    width: calc(20% + 100px);
}
```

The 20% is calculated from the width of the parent container and so will change if that width changes.

### Tips and tricks
To find the appropriate `line-height` so the text inside an element (`h1`, `h2`, `p`, ...)
divide the height of the container by the font size, for example:
```css
.container {
    height: 3em;
}

.child p {
    font-size: 2em;
}
```  

So the line height is `3em` / `2em` = `1.5em`, resulting in:
```css
.container {
    height: 3em;
}

.child p {
    font-size: 2em;
    line-height: 1.5em;
}
```

### Flexbox

To make the items of container take as much space as possible without overflowing (dropping to
a new line instead), you could use the following CSS:

```css
/* For the container */
.container {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
}

/* For the children */
.child {
    flex: 1 auto;
    /* other rules... */
}
```

The `auto` keyword here is what is making the flex items expand as much as possible in the main cross direction