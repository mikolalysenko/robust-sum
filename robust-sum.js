"use strict"

var twoSum = require("two-sum")
var binaryMerge = require("binary-merge")

module.exports = linearExpansionSum

function fastTwoSum(a, b, result) {
	var x = a + b
	var bv = x - a
	result[1] = x
	result[0] = b - bv
	return result
}

function compareMagnitudes(a, b) {
	return Math.abs(a) - Math.abs(b)
}

function linearExpansionSum(e, f, result) {
	var g = binaryMerge(e, f, compareMagnitudes, result)
	var q = [0.1, 0.1]
	var r = [0.1, 0.1]
	var n = e.length + f.length
	var count = 0
	fastTwoSum(g[1], g[0], q)
	for(var i=2; i<n; ++i) {
		fastTwoSum(g[i], q[0], r)
		if(r[0]) {
			g[count++] = r[0]
		}
		twoSum(q[1], r[1], q)
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
		for(; count<g.length; ++count) {
			g[count] = 0.0
		}
	} else {
		g.length = count
	}
	return g
}