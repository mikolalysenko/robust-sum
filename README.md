robust-sum
==========
Computes the sum of two increasing non-overlapping sequences of floats as an increasing non-overlapping sequence.  This can be used to perform exact arithmetic calculations on floating point values.

## Install

		npm install robust-sum

## Example

```javascript
var robustSum = require("robust-sum")

var seq = robustSum([1, 64], [1e-64, 1e64])
console.log("result = ", seq)
```

## API

### `require("robust-sum")(a, b[, result])`
Computes the sum of two non-overlapping increasing sequences of floats exactly as a non-overlapping increasing sequence of floats.

* `a` is a non-overlapping sequence of floats that is increasing in magnitude
* `b` is a non-overlapping sequence of floats that is increasing magnitude
* `result` is an array that gets the result of summing `a` and `b`

**Returns** A non-overlapping increasing sequence that encodes the result of `a+b`

## Credits
Based on JRS' robust geometric predicates for floating point arithmetic.

Implementation (c) 2013 Mikola Lysenko. MIT License