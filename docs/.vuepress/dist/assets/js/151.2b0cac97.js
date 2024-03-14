(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{650:function(a,s,e){"use strict";e.r(s);var t=e(2),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("Boxx"),a._v(" "),e("p",[a._v("查看java系统错误日志、gc日志都没有发现任何问题，服务器应用总是隔三岔五莫名其妙被停掉。。")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#问题排查"}},[a._v("问题排查")])]),e("li",[e("a",{attrs:{href:"#原因分析"}},[a._v("原因分析")])]),e("li",[e("a",{attrs:{href:"#解决方法"}},[a._v("解决方法")])])])]),e("p"),a._v(" "),e("p",[a._v("Linux内存使用量超过阈值，使得Java应用程序无可用内存，最终导致程序崩溃。即使在程序没有挂掉时把程序停掉，系统内存也不会被释放。")]),a._v(" "),e("h2",{attrs:{id:"问题排查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题排查"}},[a._v("#")]),a._v(" 问题排查")]),a._v(" "),e("p",[a._v("查看 Linux 的系统日志 /var/log/message 出现如下日志，说明 Linux 系统自身把 Java 进程杀掉了")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# grep 'Out of memory' messages*")]),a._v("\nDec "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(":21:59 ecs-web kernel: Out of memory: Kill process "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("17873")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" score "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("67")]),a._v(" or sacrifice child\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("当 Linux 系统内存不足时，系统会把当前系统占用系统内存过高的进程当做流氓进程，然后系统发出信号将这个流氓进程杀掉，最后导致 Java 应用服务不能使用")]),a._v(" "),e("h2",{attrs:{id:"原因分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原因分析"}},[a._v("#")]),a._v(" 原因分析")]),a._v(" "),e("p",[a._v("Linux 内核有个机制叫OOM killer(Out Of Memory killer)，该机制会监控那些占用内存过大，尤其是瞬间占用内存很快的进程，然后防止内存耗尽而自动把该进程杀掉。")]),a._v(" "),e("p",[a._v("内核检测到系统内存不足、挑选并杀掉某个进程的过程可以参考内核源代码linux/mm/oom_kill.c，当系统内存不足的时候，out_of_memory()被触发，然后调用select_bad_process()选择一个”bad”进程杀掉。")]),a._v(" "),e("p",[a._v("如何判断和选择一个”bad进程呢？linux选择”bad”进程是通过调用oom_badness()，挑选的算法和想法都很简单很朴实：最bad的那个进程就是那个最占用内存的进程。")]),a._v(" "),e("p",[a._v("Linux下这个选择策略也一直在不断的演化。作为用户，我们可以通过设置一些值来影响OOM killer做出决策。Linux下每个进程都有个OOM权重，在/proc//oom_adj里面，"),e("strong",[a._v("取值是-17到+15")]),a._v("，取值越高，越容易被干掉。")]),a._v(" "),e("p",[a._v("最终OOM killer是通过/proc//oom_score这个值来决定哪个进程被干掉的。这个值是系统综合进程的内存消耗量、CPU时间(utime + stime)、存活时间(uptime - start time)和oom_adj计算出的，消耗内存越多分越高，存活时间越长分越低。总之，总的策略是：损失最少的工作，释放最大的内存同时不伤及无辜的用了很大内存的进程，并且杀掉的进程数尽量少。")]),a._v(" "),e("h2",{attrs:{id:"解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[a._v("#")]),a._v(" 解决方法")]),a._v(" "),e("p",[a._v("方法1：通过调整 JVM 参数限制最大可使用内存")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-Xmx2g\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("方法2：启用 swap 分区 参考https://help.aliyun.com/knowledge_detail/42534.html")]),a._v(" "),e("p",[a._v("方法3：增加物理内存或增加机器")]),a._v(" "),e("p",[a._v("方法4：将应用分配到压力较小的服务器上")]),a._v(" "),e("Reward")],1)}),[],!1,null,null,null);s.default=r.exports}}]);