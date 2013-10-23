"use strict"

var twoSum = require("two-sum")
var binaryMerge = require("binary-merge")

module.exports = linearExpansionSum

function compareMagnitudes(a, b) {
  return Math.abs(a) - Math.abs(b)
}

function linearExpansionSum(e, f, result) {
  var g = binaryMerge(e, f, compareMagnitudes, result)
  var n = e.length + f.length
  var count = 0
  var a = g[1]
  var b = g[0]
  var x = a + b
  var bv = x - a
  var y = b - bv
  var q = [y, x]
  for(var i=2; i<n; ++i) {
    a = g[i]
    b = q[0] || 0.0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    }
    twoSum(q[1], x, q)
  }
  if(q[0]) {
    g[count++] = q[0]
  }
  if(q[1]) {
    g[count++] = q[1]
  }
  if(!count) {
    g[count++] = 0.0
  }
  if(result) {
    if(count < g.length) {
      var ptr = g.length-1
      count--
      while(count >= 0) {
        g[ptr--] = g[count--]
      }
      while(ptr >= 0) {
        g[ptr--] = 0.0
      }
    }
  } else {
    g.length = count
  }
  return g
}