"use strict"

var robustSum = require("../robust-sum.js")

require("tape")(function(t) {
	t.same(robustSum([1, 64], [-1e-64, 1e64]),  [-1e-64, 65, 1e64])
	t.same(robustSum([0], [0]), [0])
	t.same(robustSum([0], [1]), [1])
	t.same(robustSum([1, 1e64], [1e-64, 2]), [1e-64, 3, 1e64])
  
  t.same(robustSum([0], [1], [1,1,1]), [0,0,1])
  
  for(var i=-10; i<=10; ++i)
  for(var j=-10; j<=10; ++j) {
    t.same(robustSum([i], [j]), [i+j])
  }

  t.same(robustSum([0,Infinity], [0,Infinity]), [Infinity])


	t.end()
})