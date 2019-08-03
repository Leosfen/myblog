(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{202:function(t,a,r){"use strict";r.r(a);var s=r(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h4",{attrs:{id:"题目：已知-sqrt-2-约等于-1-414，要求不用数学库，求-sqrt-2-精确到小数点后-10-位。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#题目：已知-sqrt-2-约等于-1-414，要求不用数学库，求-sqrt-2-精确到小数点后-10-位。","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("strong",[t._v("题目")]),t._v("：已知 sqrt (2)约等于 1.414，要求不用数学库，求 sqrt (2)精确到小数点后 10 位。")]),t._v(" "),r("h4",{attrs:{id:"出题人：——阿里巴巴出题专家：文景／阿里云-cdn-资深技术专家"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#出题人：——阿里巴巴出题专家：文景／阿里云-cdn-资深技术专家","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("strong",[t._v("出题人")]),t._v("：——阿里巴巴出题专家：文景／阿里云 CDN 资深技术专家")]),t._v(" "),r("h4",{attrs:{id:"参考答案："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考答案：","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("strong",[t._v("参考答案")]),t._v("：")]),t._v(" "),r("h4",{attrs:{id:"考察点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#考察点","aria-hidden":"true"}},[t._v("#")]),t._v(" * 考察点")]),t._v(" "),r("ol",[r("li",[t._v("基础算法的灵活应用能力（二分法学过数据结构的同学都知道，但不一定往这个方向考虑；如果学过数值计算的同学，应该还要能想到牛顿迭代法并解释清楚）")]),t._v(" "),r("li",[t._v("退出条件设计")])]),t._v(" "),r("h4",{attrs:{id:"解决办法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决办法","aria-hidden":"true"}},[t._v("#")]),t._v(" * 解决办法")]),t._v(" "),r("h5",{attrs:{id:"_1-已知-sqrt-2-约等于-1-414，那么就可以在-1-4-1-5-区间做二分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-已知-sqrt-2-约等于-1-414，那么就可以在-1-4-1-5-区间做二分","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 已知 sqrt(2)约等于 1.414，那么就可以在(1.4, 1.5)区间做二分")]),t._v(" "),r("p",[t._v("查找，如：\na) high=>1.5\nb) low=>1.4\nc) mid => (high+low)/2=1.45\nd) 1.45*1.45>2 ? high=>1.45 : low => 1.45\ne) 循环到 c)")]),t._v(" "),r("h5",{attrs:{id:"_2-退出条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-退出条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 退出条件")]),t._v(" "),r("p",[t._v("a) 前后两次的差值的绝对值<=0.0000000001, 则可退出")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("const double EPSINON = 0.0000000001;\n\ndouble sqrt2( ){\n    double low = 1.4, high = 1.5;\n    double mid = (low + high) / 2;\n    \n    while (high - low > EPSINON){\n        if (mid*mid > 2){\n            high = mid;\n        }\n        else{\n            low = mid;\n        }\n        mid = (high + low) / 2;\n    }\n    \n    return mid;\n}\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);