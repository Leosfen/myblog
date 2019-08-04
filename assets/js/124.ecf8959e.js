(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{129:function(t,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h4",{attrs:{id:"题目：给定一个二叉搜索树-bst-，找到树中第-k-小的节点。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目：给定一个二叉搜索树-bst-，找到树中第-k-小的节点。","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("strong",[t._v("题目")]),t._v("：给定一个二叉搜索树(BST)，找到树中第 K 小的节点。")]),t._v(" "),n("h4",{attrs:{id:"出题人：阿里巴巴出题专家：文景／阿里云-cdn-资深技术专家"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#出题人：阿里巴巴出题专家：文景／阿里云-cdn-资深技术专家","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("strong",[t._v("出题人")]),t._v("：阿里巴巴出题专家：文景／阿里云 CDN 资深技术专家")]),t._v(" "),n("h4",{attrs:{id:"参考答案："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考答案：","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),n("h5",{attrs:{id:"考察点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#考察点","aria-hidden":"true"}},[t._v("#")]),t._v(" * 考察点")]),t._v(" "),n("ol",[n("li",[t._v("基础数据结构的理解和编码能力")]),t._v(" "),n("li",[t._v("递归使用")])]),t._v(" "),n("h5",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" * 示例")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("       5\n      / \\\n     3   6\n    / \\\n   2   4\n  /\n 1\n \n")])])]),n("p",[t._v("说明：保证输入的 K 满足 1<=K<=(节点数目）")]),t._v(" "),n("p",[t._v("树相关的题目，第一眼就想到递归求解，左右子树分别遍历。联想到二叉搜索树的性质，root 大于左子树，小于右子树，如果左子树的节点数目等于 K-1，那么 root 就是结果，否则如果左子树节点数目小于 K-1，那么结果必然在右子树，否则就在左子树。因此在搜索的时候同时返回节点数目，跟 K 做对比，就能得出结果了。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("/**\n * Definition for a binary tree node.\n **/\n\npublic class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode(int x) { val = x; }\n}\n\nclass Solution {\n    private class ResultType {\n    \n        boolean found;  // 是否找到\n        \n        int val;  // 节点数目\n        ResultType(boolean found, int val) {\n            this.found = found;\n            this.val = val;\n        }\n    }\n\n    public int kthSmallest(TreeNode root, int k) {\n        return kthSmallestHelper(root, k).val;\n    }\n\n    private ResultType kthSmallestHelper(TreeNode root, int k) {\n        if (root == null) {\n            return new ResultType(false, 0);\n        }\n\n        ResultType left = kthSmallestHelper(root.left, k);\n\n        // 左子树找到，直接返回\n        if (left.found) {\n            return new ResultType(true, left.val);\n        }\n\n        // 左子树的节点数目 = K-1，结果为 root 的值\n        if (k - left.val == 1) {\n            return new ResultType(true, root.val);\n        }\n\n        // 右子树寻找\n        ResultType right = kthSmallestHelper(root.right, k - left.val - 1);\n        if (right.found) {\n            return new ResultType(true, right.val);\n        }\n\n        // 没找到，返回节点总数\n        return new ResultType(false, left.val + 1 + right.val);\n    }\n}\n\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);