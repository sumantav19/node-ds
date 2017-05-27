// Connect nodes at same level using constant extra space

const Tree = (function () {
  return function (data) {
    this.Node = function (data) {
      this.data = data;
      this.right = undefined;
      this.left = undefined;
    };

    this.root = data ? new this.Node(data) : undefined;

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