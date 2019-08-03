(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{152:function(e,n,t){"use strict";t.r(n);var s=t(0),i=Object(s.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("题目")]),e._v("：LRU 缓存机制\n设计和实现一个 LRU（最近最少使用）缓存数据结构，使它应该支持一下操作：get 和 put。\nget(key) - 如果 key 存在于缓存中，则获取 key 的 value（总是正数），否则返回 -1。\nput(key,value) - 如果 key 不存在，请设置或插入 value。当缓存达到其容量时，它应该在插入新项目之前使最近最少使用的项目作废。")]),e._v(" "),t("p",[t("strong",[e._v("出题人")]),e._v("：文景／阿里云 CDN 资深技术专家")]),e._v(" "),t("p",[t("strong",[e._v("参考答案")]),e._v("：")]),e._v(" "),t("p",[e._v("python版本的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('class LRUCache(object):\n    def __init__(self, capacity):\n    """\n    :type capacity: int\n    """\n    self.cache = {}\n    self.keys = []\n    self.capacity = capacity\n    \n    def visit_key(self, key):\n        if key in self.keys:\n            self.keys.remove(key)\n        self.keys.append(key)\n    \n    def elim_key(self):\n        key = self.keys[0]\n        self.keys = self.keys[1:]\n        del self.cache[key]\n        \n    def get(self, key):\n        """\n        :type key: int\n        :rtype: int\n        """\n        if not key in self.cache:\n            return -1\n        self.visit_key(key)\n        return self.cache[key]\n    \n    def put(self, key, value):\n        """\n        :type key: int\n        :type value: int\n        :rtype: void\n        """\n        if not key in self.cache:\n        if len(self.keys) == self.capacity:\n        self.elim_key()\n        self.cache[key] = value\n        self.visit_key(key)\n\ndef main():\n    s =\n    [["put","put","get","put","get","put","get","get","get"],[[1,1],[2,2],[1],[3,3],[2],[\n    4,4],[1],[3],[4]]]\n    obj = LRUCache(2)\n    l=[]\n    for i,c in enumerate(s[0]):\n        if(c == "get"):\n            l.append(obj.get(s[1][i][0]))\n        else:\n            obj.put(s[1][i][0], s[1][i][1])\n    print(l)\n\nif __name__ == "__main__":\n    main()\n\n')])])]),t("p",[e._v("c++版本的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class LRUCache{\n    public:\n        LRUCache(int capacity) {\n            cap = capacity;\n        }\n        \n        int get(int key) {\n            auto it = m.find(key);\n            if (it == m.end()) return -1;\n            l.splice(l.begin(), l, it->second);\n            return it->second->second;\n        }\n        \n        void set(int key, int value) {\n            auto it = m.find(key);\n            if (it != m.end()) l.erase(it->second);\n            l.push_front(make_pair(key, value));\n            m[key] = l.begin();\n            if (m.size() > cap) {\n                int k = l.rbegin()->first;\n                l.pop_back();\n                m.erase(k);\n            }\n        }\n}\n\n")])])])])},[],!1,null,null,null);n.default=i.exports}}]);