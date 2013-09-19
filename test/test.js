"use strict"

var robustSum = require("../robust-sum.js")

require("tape")(function(t) {
	t.same(robustSum([1, 64], [-1e-64, 1e64]),  [-1e-64, 65, 1e64])
	t.same(robustSum([0], [0]), [0])
	t.same(robustSum([0], [1]), [1])
	t.same(robustSum([1, 1e64], [1e-64, 2]), [1e-64, 3, 1e64])
  
  t.same(robustSum([0], [1], [1,1,1]), [0,0,1])
	t.end()
})