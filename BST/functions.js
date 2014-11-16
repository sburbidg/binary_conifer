//jshint node:true

'use strict';

var express = require('express');

function putstr(f){
    console.log(f);
  }


function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype = {

  show: function() {
    return this.data;

  }
};

function BinarySearch() {
  this.root = null;
}

BinarySearch.prototype = {


  add: function(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
      this.root = n;

    } else {
      var current = this.root;
      var parent;

      while (true) {
        parent = current;

        if (data < current.data){
          current = current.left;

          if (current === null) {
            parent.left = n;
            break;
          }

        } else {
          current = current.right;

          if (current === null){
            parent.right = n;
            break;
          }
        }
      }
    }
  },

  inOrder: function (node) {

    if (node !== null) {
      this.inOrder (node.left);
      putstr (node.show() + '');
      this.inOrder (node.right);
    }
  },

  preOrder: function (node) {

    if (node !== null) {
      putstr (node.show() + '');
      this.preOrder (node.right);
      this.preOrder (node.left);
    }
  },



  postOrder: function (node) {

    if (node !== null) {
      this.postOrder (node.left);
      this.postOrder (node.right);
      putstr (node.show() + '');
    }
  },

  getMin: function() {
    var current = this.root;

    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  },

  getMax: function () {
    var current = this.root;

    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  },

  find: function (data) {
    var current = this.root;
    while (current && current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  },

  findRemove: function(data) {
    this.root = this.removeNode(this.root, data);
  },

  removeNode: function(node, data) {
    if(node === null) {
      return null;
    }

    if(data == node.data) {
      //node has no childs
      if(node.left === null && node.right === null) {
        return null;
      }

      //no left child
      if(node.left === null) {
        return node.right;
      }
      //no right child
      if(node.right === null) {
        return node.left;
      }
      //two children
      var tempNode = getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
      }

    else if(data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;

    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  },

  totalNodes:  function(node) {
    var count = 0;
    if (node !== null) {
      count += 1;
      count += this.totalNodes (node.right);
      count += this.totalNodes (node.left);
    }
    return count;
  },

  totalEdges:  function(node) {
    var count = 0;
    if (node !== null) {
      count += this.totalNodes (node.right);
      count += this.totalNodes (node.left);
    }
    return count;
  },

  getItemsInOrder: function(node){

    var itemInOrder = [];

    if(node !== null){
      itemInOrder = itemInOrder.concat(this.getItemsInOrder (node.left));
      itemInOrder.push(node.data);
      itemInOrder = itemInOrder.concat(this.getItemsInOrder (node.right));
    }
    return itemInOrder;
  }
};

module.exports = BinarySearch;
















