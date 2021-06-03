(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{526:function(s,e,a){"use strict";a.r(e);var n=a(4),r=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx",{attrs:{type:"tip"}}),s._v(" "),a("p",[s._v("Windows 安装很简单，这里不做赘述，下载地址如下：")]),s._v(" "),a("blockquote",[a("p",[s._v("链接：https://pan.baidu.com/s/1AX9WtPazap3CVBdu4QcixA")]),s._v(" "),a("p",[s._v("提取码："),a("code",[s._v("5266")])])]),s._v(" "),a("h3",{attrs:{id:"_1-yum安装-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-yum安装-redis"}},[s._v("#")]),s._v(" 1. yum安装 Redis")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum install http://rpms.famillecollet.com/enterprise/remi-release-7.rpm -y && \\\nyum --enablerepo=remi install redis -y && \\\nsystemctl enable redis && \\\nsystemctl start redis && \\\nrpm -ql redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://images2015.cnblogs.com/blog/946553/201702/946553-20170223161957320-1424572697.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_2-usr-bin-目录下有编译好的redis指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-usr-bin-目录下有编译好的redis指令"}},[s._v("#")]),s._v(" 2. "),a("code",[s._v("/usr/bin")]),s._v(" 目录下有编译好的redis指令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-benchmark     # 用于进行redis性能测试的工具\nredis-check-aof     # 用于修复出问题的AOF文件\nredis-rdb           # 用于修复出问题的rdb文件\nredis-check-dump    # 用于修复出问题的dump.rdb文件\nredis-cli           # redis的客户端\nredis-server        # redis的服务端\nredis-sentinel      # 用于集群管理\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_3-etc-redis-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-etc-redis-conf"}},[s._v("#")]),s._v(" 3. /etc/redis.conf")]),s._v(" "),a("p",[s._v("redis.conf 现在默认配置挺好的，如非必要，不用定制化修改。下面是简单的修改：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# bind 127.0.0.1 默认不注释，注释后，远程可以访问 redis\n#bind 127.0.0.1\n\n# requirepass foobared 默认注释，没有密码，后面的foobared为密码\nrequirepass 521666\n\n# 开启 AOF 持久化功能\nappendonly yes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_4-登录-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-登录-redis"}},[s._v("#")]),s._v(" 4. 登录 redis")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-cli\n# 或\nredis-cli -h 127.0.0.1 -p 6379\n\n# 输入密码\nauth 521666\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);