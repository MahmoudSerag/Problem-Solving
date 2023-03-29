/*
  Problem name: Maximum Depth of Binary Tree

  Difficulty level: Easy

  Problem description: 

    Given the root of a binary tree, return its maximum depth.
    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  Examples: {

    Example 1:
      Input: root = [3,9,20,null,null,15,7]
      Output: 3
    }

    Example 2: {
      Input: root = [1,null,2]
      Output: 2
    }
  }
*/

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const maxDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  let maxLeft = maxDepth(root.left);
  let maxRight = maxDepth(root.right);

  return Math.max(maxLeft, maxRight) + 1;
};

console.log(
  maxDepth(
    new TreeNode(
      3,
      { val: 9, left: null, right: null },
      {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
      }
    )
  )
);
