(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{239:function(e,n,r){"use strict";r.r(n);var t=r(0),v=Object(t.a)({},function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h4",{attrs:{id:"题目：数据库优化的思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#题目：数据库优化的思路","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("题目")]),e._v("：数据库优化的思路")]),e._v(" "),r("h4",{attrs:{id:"参考答案："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考答案：","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("参考答案")]),e._v("：")]),e._v(" "),r("p",[e._v("这个我借鉴了慕课上关于数据库优化的课程。")]),e._v(" "),r("p",[e._v("1.SQL语句优化"),r("br"),e._v("\n1）应尽量避免在 where 子句中使用!=或<>操作符，否则将引擎放弃使用索引而进行全表扫描。"),r("br"),e._v("\n2）应尽量避免在 where 子句中对字段进行 null 值判断，否则将导致引擎放弃使用索引而进行全表扫描，如："),r("br"),e._v("\nselect id from t where num is null\n可以在num上设置默认值0，确保表中num列没有null值，然后这样查询："),r("br"),e._v("\nselect id from t where num=0\n========================= liueleven的评论 =================================\n不是非我杠精，关于null,isNull,isNotNull其实是要看成本的，是否回表等因素总和考虑，才会决定是要走索引还是走全表扫描")]),e._v(" "),r("p",[e._v("也给大家找了一个作者的博文（"),r("a",{attrs:{href:"https://mp.weixin.qq.com/s/CEJFsDBizdl0SvugGX7UmQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL中IS NULL、IS NOT NULL、!=不能用索引？胡扯！"),r("OutboundLink")],1),e._v("），仅供参考！！！")]),e._v(" "),r("p",[e._v("[zhiyong0804d的意见]\n之所以未把第二条删除还是考虑可能很多人都被误导了。那这样的组织能让大家兼听则明。")]),e._v(" "),r("p",[e._v("3）很多时候用 exists 代替 in 是一个好的选择"),r("br"),e._v("\n4）用Where子句替换HAVING 子句 因为HAVING 只会在检索出所有记录之后才对结果集进行过滤")]),e._v(" "),r("p",[e._v("2.索引优化\n看上文索引")]),e._v(" "),r("p",[e._v("3.数据库结构优化\n1）范式优化： 比如消除冗余（节省空间。。）"),r("br"),e._v("\n2）反范式优化：比如适当加冗余等（减少join）\n3）拆分表：   分区将数据在物理上分隔开，不同分区的数据可以制定保存在处于不同磁盘上的数据文件里。这样，当对这个表进行查询时，只需要在表分区中进行扫描，而不必进行全表扫描，明显缩短了查询时间，另外处于不同磁盘的分区也将对这个表的数据传输分散在不同的磁盘I/O，一个精心设置的分区可以将数据传输对磁盘I/O竞争均匀地分散开。对数据量大的时时表可采取此方法。可按月自动建表分区。"),r("br"),e._v("\n4）拆分其实又分垂直拆分和水平拆分：\n案例： 简单购物系统暂设涉及如下表：\n1.产品表（数据量10w，稳定）\n2.订单表（数据量200w，且有增长趋势）\n3.用户表 （数据量100w，且有增长趋势）\n以mysql为例讲述下水平拆分和垂直拆分，mysql能容忍的数量级在百万静态数据可以到千万 垂直拆分：解决问题：表与表之间的io竞争 不解决问题：单表中数据量增长出现的压力 方案： 把产品表和用户表放到一个server上 订单表单独放到一个server上 水平拆分： 解决问题：单表中数据量增长出现的压力 不解决问题：表与表之间的io争夺\n方案： 用户表通过性别拆分为男用户表和女用户表 订单表通过已完成和完成中拆分为已完成订单和未完成订单 产品表 未完成订单放一个server上 已完成订单表盒男用户表放一个server上 女用户表放一个server上(女的爱购物 哈哈)")]),e._v(" "),r("p",[e._v("4.服务器硬件优化"),r("br"),e._v("\n这个么多花钱咯！")])])},[],!1,null,null,null);n.default=v.exports}}]);