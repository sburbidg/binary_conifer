//jshint node:true
'use strict';

var BST = require('../BST/functions');

var tree = new BST;
var items = tree.getItemsInOrder(tree.root);

var count = 0;
var lastItem = items[0];

for (var i = 0; i < items.length; i++){
  if (lastItem == items[i]){
    count += 1;
  } else {
    console.log(lastItem  + ": " + count);
    lastItem = items[i];
    count = 1;
  }
}
