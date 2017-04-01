// Write an Efficient Function to Convert a Binary Tree into its Mirror Tree

const Tree = (function () {
  return function (data) {
    this.Node = function (data) {
      this.data = data;
      this.right = undefined;
      this.left = undefined;
    };

    this.root = data ? new this.Node(data) : undefined;

    this.mirror = function(root){
        if(root == undefined || root == null){
            return root;
        }
        var node = new this.Node(root.getData());
        //  console.log(node);
        node.left = this.mirror(root.right);
        node.right = this.mirror(root.left);
        // console.log(node);
        return node;
    }

    this.Node.prototype.getData = function () {
      //body
      return this.data;
    };

    this.Node.prototype.getRight = function () {
      // body...
      return this.right;
    };

    this.Node.prototype.getLeft = function () {
      // body...
      return this.left;
    };
  }
}());

//Creating the tree
var tree = new Tree(5);
tree.root.left = new tree.Node(3);
tree.root.right = new tree.Node(7);
tree.root.right.left = new tree.Node(6);
tree.root.left.left = new tree.Node(2);
tree.root.left.right = new tree.Node(4);
tree.root.left.left.left = new tree.Node(1); 
var mirrorTree = new Tree();

//test with preOrder traversal
function preOrderTraversal(root){
    if(root == undefined){
        return;
    }
   
    preOrderTraversal(root.left);
    process.stdout.write(root.getData().toString()+"\n");
    preOrderTraversal(root.right);
}


mirrorTree.root = mirrorTree.mirror(tree.root);
preOrderTraversal(mirrorTree.root);

