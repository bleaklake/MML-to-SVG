# mml-to-svg

This MathJax wrapper converts Mathematical Markup Language (MML) to Scalable Vector Graphics (SVG). This package doesn't use any webworkers, webviews ; so It can be used for your NodeJS, React and React Native projects.

**This project is still in its early development stages.**

For any bugs, typos, errors, feel free to open an issue on the associated Github repository.

## Installation

```cli
npm install mml-to-svg --save
```

## Examples

### JS (with the `options` parameter)

```js
const MMLToSVG = require("mml-to-svg");

const myMMLEquation = `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mi>x</mi> <mo>=</mo>
        <mrow>
          <mfrac>
            <mrow>
              <mo>&#x2212;</mo>
              <mi>b</mi>
              <mo>&#x00B1;</mo>
              <msqrt>
                <msup><mi>b</mi><mn>2</mn></msup>
                <mo>&#x2212;</mo>
                <mn>4</mn><mi>a</mi><mi>c</mi>
              </msqrt>
            </mrow>
            <mrow> <mn>2</mn><mi>a</mi> </mrow>
          </mfrac>
        </mrow>
        <mtext>.</mtext>
      </math>`;

const options = {
    width: 1280,
    ex: 8,
    em: 16
};

const SVGEquation = MMLToSVG(myMMLEquation, options); // returns <svg style="vertical-align: -1.575ex" xmlns="http://www.w3.org/2000/svg" width="21.319ex" height="5.291ex" role="img" focusable="false" viewBox="0 -1642.5 9423 2338.5" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path ...
```

### TS (without the `options` parameter)

```ts
import MMLToSVG from "mml-to-svg";

const myMMLEquation = `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mi>x</mi> <mo>=</mo>
        <mrow>
          <mfrac>
            <mrow>
              <mo>&#x2212;</mo>
              <mi>b</mi>
              <mo>&#x00B1;</mo>
              <msqrt>
                <msup><mi>b</mi><mn>2</mn></msup>
                <mo>&#x2212;</mo>
                <mn>4</mn><mi>a</mi><mi>c</mi>
              </msqrt>
            </mrow>
            <mrow> <mn>2</mn><mi>a</mi> </mrow>
          </mfrac>
        </mrow>
        <mtext>.</mtext>
      </math>`;

const options = {
    width: 1280,
    ex: 8,
    em: 16
};

const SVGEquation = MMLToSVG(myMMLEquation, options); // returns <svg style="vertical-align: -1.575ex" xmlns="http://www.w3.org/2000/svg" width="21.319ex" height="5.291ex" role="img" focusable="false" viewBox="0 -1642.5 9423 2338.5" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path ...
```

## Documentation

`MMLToSVG(equation, options)` : **string** _The returned Scalable Vector Graphics equation_

> `equation` : **string** _The Mathematical Markup Language equation_
>
> `options` ?: **object** _The options of the retuned Scalable Vector Graphics_
>
> > `width` ?: **number** _The width of container in pixels_
> >
> > `ex` ?: **number** _The ex-size in pixels_
> >
> > `em` ?: **number** _The em-size in pixels_

### Notation

?: = optional parameter

## Notes

### Useful links

This wrapper is inspired by this project : https://github.com/mathjax/MathJax-demos-node/tree/master/direct.

### Typescript

You **DON'T** have to install any types `@types/mml-to-svg`.
