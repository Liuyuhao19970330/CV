(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{543:function(t,s,e){"use strict";e.r(s);var a={data:()=>({title01:{"margin-right":"10%"},content01:{"margin-right":"20%"},blockStyle:{background:"#eee",color:"red"},titleStyle:{"margin-right":"10%","font-size":"16px"},contentStyle:{"margin-right":"20%","font-size":"10px","margin-top":"1rem","margin-bottom":"0.4rem"}})},r=e(2),n=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticStyle:{height:"120px"}},[e("Boxx",{attrs:{changeTime:"1200"}})],1),t._v(" "),e("h2",{attrs:{id:"序言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#序言"}},[t._v("#")]),t._v(" 序言")]),t._v(" "),e("ul",[e("li",[t._v("由于在引入默认的VuePress Custom Containers太过笨重了，故闲来无事对其做一层封装简化使用")]),t._v(" "),e("li",[t._v("Github地址："),e("a",{attrs:{href:"https://github.com/zpj80231/vuepress-plugin-boxx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/zpj80231/vuepress-plugin-boxx"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("ul",[e("li",[t._v("在文件"),e("code",[t._v("package.json")]),t._v("中的"),e("code",[t._v("devDependencies")]),t._v("下加入"),e("code",[t._v('"vuepress-plugin-boxx": "0.0.7"')]),t._v("：")])]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuepress-plugin-boxx"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.7"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("ul",[e("li",[t._v("在 vuepress 的"),e("code",[t._v("config.js")]),t._v("中配置"),e("code",[t._v("plugins")]),t._v("：")])]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress-plugin-boxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("ul",[e("li",[t._v("在"),e("code",[t._v("package.json")]),t._v("目录下执行命令："),e("code",[t._v("npm install")])]),t._v(" "),e("li",[t._v("正常启动项目，接着如下使用即可")])]),t._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("ul",[e("li",[t._v("引入：只需在你想要插入的地方加入 "),e("code",[t._v("<Boxx/>")]),t._v(" 即可（如顶部所示）")]),t._v(" "),e("li",[t._v("内容：默认随机展示名人名句，支持自定义")]),t._v(" "),e("li",[t._v("样式：有三种样式，默认为 tip 样式，支持自定义")]),t._v(" "),e("li",[t._v("注意：除"),e("code",[t._v("<Boxx/>")]),t._v("这个标签是必须外，"),e("strong",[t._v("标签属性均为可选")]),t._v("，所有标签属性会在下文中详细介绍")])]),t._v(" "),e("h2",{attrs:{id:"默认样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#默认样式"}},[t._v("#")]),t._v(" 默认样式")]),t._v(" "),e("Boxx",{attrs:{type:"tip",title:"tip",content:"只需一行：<code> &#60;Boxx type='tip' title='自定义' content='自定义' /> </code> "}}),t._v(" "),e("Boxx",{attrs:{type:"warning",title:"warning",content:"只需一行：<code> &#60;Boxx type='warning' title='自定义' content='自定义' /> </code>"}}),t._v(" "),e("Boxx",{attrs:{type:"danger",title:"danger",content:"只需一行：<code> &#60;Boxx type='danger' title='自定义' content='自定义' /> </code>"}}),t._v(" "),e("h2",{attrs:{id:"自定义标题和内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义标题和内容"}},[t._v("#")]),t._v(" 自定义标题和内容")]),t._v(" "),e("ul",[e("li",[t._v("如果默认的名人名句不满足需求的话，自定义只需指定两个属性"),e("code",[t._v("title")]),t._v("和"),e("code",[t._v("content")]),t._v("的值")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("要展示的"),e("code",[t._v("title")]),t._v("的内容，支持html标签")])]),t._v(" "),e("tr",[e("td",[t._v("content")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("要展示的"),e("code",[t._v("content")]),t._v("的内容，支持html标签")])])])]),t._v(" "),e("ul",[e("li",[t._v("当然你也可以只输入"),e("code",[t._v("title")]),t._v("或"),e("code",[t._v("content")]),t._v("，如下：")])]),t._v(" "),e("Boxx",{attrs:{type:"warning",blockStyle:t.title01,title:"短短的 title：<code> &#60;Boxx type='warning' title='自定义' /> </code>"}}),t._v(" "),e("Boxx",{attrs:{type:"danger",blockStyle:t.content01,content:"更短短的 content：<code> &#60;Boxx type='danger' content='自定义' /> </code>"}}),t._v(" "),e("h2",{attrs:{id:"自定义样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义样式"}},[t._v("#")]),t._v(" 自定义样式")]),t._v(" "),e("marquee",[e("Boxx",{attrs:{blockStyle:t.blockStyle}}),t._v(" "),e("Boxx",{attrs:{type:"warning",blockStyle:t.titleStyle,titleStyle:t.titleStyle,changeTime:"1000",title:"我是一个大大的且变化的 title"}}),t._v(" "),e("Boxx",{attrs:{type:"danger",blockStyle:t.contentStyle,contentStyle:t.contentStyle,content:"我是一个小小的<br><marquee>content</marquee>"}})],1),t._v(" "),e("ul",[e("li",[t._v("可以通过以下几个属性实现")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("blockStyle")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[t._v("整体块元素的样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("titleStyle")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[t._v("只针对"),e("code",[t._v("title")]),t._v("的样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("contentStyle")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[t._v("只针对"),e("code",[t._v("content")]),t._v("的样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("changeTime")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("以毫秒值为单位的动态变化时间，顶部为例")])])])]),t._v(" "),e("p",[t._v("需要注意的是：属性值传输的对象只能通过"),e("code",[t._v("v-bind:")]),t._v("绑定来实现")]),t._v(" "),e("ul",[e("li",[t._v("以下是对如上样式的示例，在Markdown中这样书写即可：")])]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("marquee"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Boxx "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("blockStyle"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blockStyle"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Boxx type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warning"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("blockStyle"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"titleStyle"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("titleStyle"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"titleStyle"')]),t._v(" changeTime"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000"')]),t._v(" title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是一个大大的且变化的 title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Boxx type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"danger"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("blockStyle"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contentStyle"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("contentStyle"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contentStyle"')]),t._v(" content"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是一个小小的<br><marquee>content</marquee>"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("marquee"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("blockStyle")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'background'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#eee'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'color'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("titleStyle")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'margin-right'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'font-size'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'16px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("contentStyle")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'margin-right'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'font-size'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                               "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"margin-top"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1rem"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"margin-bottom"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.4rem"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);