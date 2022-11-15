function equalTrees(firstTreeNode, secondTreeNode) {
  if (firstTreeNode === null && secondTreeNode === null) return true;
  if (firstTreeNode === null || secondTreeNode === null) return false;

  if (firstTreeNode.val !== secondTreeNode.val) return false;

  return (
    equalTrees(firstTreeNode.left, secondTreeNode.left) &&
    equalTrees(firstTreeNode.right, secondTreeNode.right)
  );
}

export default equalTrees;