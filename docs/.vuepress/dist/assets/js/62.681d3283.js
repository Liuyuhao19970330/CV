(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{562:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Boxx"),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#oom分类"}},[t._v("OOM分类")])]),s("li",[s("a",{attrs:{href:"#cpu过高排查流程"}},[t._v("CPU过高排查流程")])]),s("li",[s("a",{attrs:{href:"#内存占用过高排查流程"}},[t._v("内存占用过高排查流程")])]),s("li",[s("a",{attrs:{href:"#示例"}},[t._v("示例")]),s("ul",[s("li",[s("a",{attrs:{href:"#使用-ps-命令查看进程"}},[t._v("使用 ps 命令查看进程")])]),s("li",[s("a",{attrs:{href:"#使用-top-命令"}},[t._v("使用 top 命令")])]),s("li",[s("a",{attrs:{href:"#使用-jmap-命令查看"}},[t._v("使用 jmap 命令查看")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"oom分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oom分类"}},[t._v("#")]),t._v(" OOM分类")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("java.lang.OutOfMemoryError: Java heap space")]),t._v(" "),s("p",[t._v("Java 堆溢出原因：\n无法在 Java 堆中分配对象\n应用程序保存了无法被GC回收的对象。\n应用程序过度使用 finalizer。")])]),t._v(" "),s("li",[s("p",[t._v("java.lang.OutOfMemoryError: unable to create new native thread")]),t._v(" "),s("p",[t._v("排查代码，确定是否显示使用死循环创建线程，或者隐式调用第三方接口创建线程")])]),t._v(" "),s("li",[s("p",[t._v("java.lang.OutOfMemoryError: Metaspace")]),t._v(" "),s("p",[t._v("方法区溢出：检查JVM元空间设置参数是否过小，检查对应代码,是否使用CGLib生成了大量的代理类")])]),t._v(" "),s("li",[s("p",[t._v("java.lang.OutOfMemoryError: Direct buffer memory")]),t._v(" "),s("p",[t._v("本机直接内存溢出：检查JVM参数-Xmx，-XX:MaxDirectMemorySize 是否合理。")])]),t._v(" "),s("li",[s("p",[t._v("java.lang.OutOfMemoryError: GC overhead limit exceeded")]),t._v(" "),s("p",[t._v("Sun 官方对此的定义：超过98%的时间用来做GC并且回收了不到2%的堆内存时会抛出此异常。")]),t._v(" "),s("p",[t._v("一般都是堆太小导致的：检查JVM参数-Xmx -Xms是否合理\ndump内存，检查是否存在内存泄露，如果没有，加大内存。")])])]),t._v(" "),s("h2",{attrs:{id:"cpu过高排查流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu过高排查流程"}},[t._v("#")]),t._v(" CPU过高排查流程")]),t._v(" "),s("ol",[s("li",[t._v("利用 top 命令可以查出占用 CPU 最高的进程pid，如果pid为 9876")]),t._v(" "),s("li",[t._v("然后查看该进程下占用最高的线程id【top -Hp 9876】")]),t._v(" "),s("li",[t._v("假设占用率最高的线程 ID 为6900，将其转换为 16 进制形式（因为 java native 线程以 16 进制形式输出）【printf '%x\\n' 6900】")]),t._v(" "),s("li",[t._v("利用jstack打印出 java 线程调用栈信息 【jstack 9876 | grep '0x1af4' -A 50 --color】，这样就可以更好的定位问题")])]),t._v(" "),s("p",[t._v("线上解决示例参考上一篇文章："),s("a",{attrs:{href:"/views/backend/ThreadTopCPU"}},[t._v("找出某个Java进程中最耗费CPU的Java线程")])]),t._v(" "),s("h2",{attrs:{id:"内存占用过高排查流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存占用过高排查流程"}},[t._v("#")]),t._v(" 内存占用过高排查流程")]),t._v(" "),s("ol",[s("li",[t._v("查找进程id：【top -d 2 -c】")]),t._v(" "),s("li",[t._v("查看 JVM 堆内存分配情况：jmap -head pid")]),t._v(" "),s("li",[t._v("查看占用内存比较多的对象：jamp -histo pid | head -n 100")]),t._v(" "),s("li",[t._v("查看占用内存比较多的存活对象：jmap -histo:live pid | head -n 100")])]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("下面是对常见的 "),s("code",[t._v("java.lang.OutOfMemoryError: Java heap space")]),t._v(" 排查：")]),t._v(" "),s("h3",{attrs:{id:"使用-ps-命令查看进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-ps-命令查看进程"}},[t._v("#")]),t._v(" 使用 ps 命令查看进程")]),t._v(" "),s("p",[t._v("ps -aux|grep java命令查看一下你的java进程，就可以找到你的java进程的进程id。")]),t._v(" "),s("h3",{attrs:{id:"使用-top-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-top-命令"}},[t._v("#")]),t._v(" 使用 top 命令")]),t._v(" "),s("p",[t._v("top命令显示的结果列表中，会看到%MEM这一列，这里可以看到你的进程可能对内存的使用率特别高。以查看正在运行的进程和系统负载信息，包括cpu负载、内存使用、各个进程所占系统资源等。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img2020.cnblogs.com/i-beta/785859/202003/785859-20200313211136187-1482421735.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"使用-jmap-命令查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-jmap-命令查看"}},[t._v("#")]),t._v(" 使用 jmap 命令查看")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("./jmap -heap PID  打印堆总结")])]),t._v(" "),s("li",[s("p",[t._v("./jmap -dump:file=/data/logs/jmap/auto.dump PID，dump内存分析日志")])])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@test bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./jmap -dump:file=/data/logs/jmap/auto.dump 13")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(": Unable to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" socket file: target process not responding or HotSpot VM not loaded\nThe "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-F")]),t._v(" option can be used when the target process is not responding\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@test bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./jmap -F -dump:file=/data/logs/jmap/auto.dump 13")]),t._v("\nAttaching to process ID "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(", please wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nError attaching to process: sun.jvm.hotspot.debugger.DebuggerException: cannot "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" binary "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\nsun.jvm.hotspot.debugger.DebuggerException: sun.jvm.hotspot.debugger.DebuggerException: cannot "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" binary "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LinuxDebuggerLocalWorkerThread")]),t._v(".execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinuxDebuggerLocal.java:163"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal.attach"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinuxDebuggerLocal.java:278"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.HotSpotAgent.attachDebugger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HotSpotAgent.java:671"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.HotSpotAgent.setupDebuggerLinux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HotSpotAgent.java:611"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.HotSpotAgent.setupDebugger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HotSpotAgent.java:337"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.HotSpotAgent.go"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HotSpotAgent.java:304"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.HotSpotAgent.attach"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HotSpotAgent.java:140"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.tools.Tool.start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Tool.java:185"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.tools.Tool.execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Tool.java:118"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.tools.HeapDumper.main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HeapDumper.java:83"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.reflect.NativeMethodAccessorImpl.invoke0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Native Method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.reflect.NativeMethodAccessorImpl.invoke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NativeMethodAccessorImpl.java:62"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.reflect.DelegatingMethodAccessorImpl.invoke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DelegatingMethodAccessorImpl.java:43"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at java.lang.reflect.Method.invoke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Method.java:498"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.tools.jmap.JMap.runTool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JMap.java:201"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.tools.jmap.JMap.main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JMap.java:130"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCaused by: sun.jvm.hotspot.debugger.DebuggerException: cannot "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" binary "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal.attach0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Native Method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal.access"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinuxDebuggerLocal.java:62"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1AttachTask")]),t._v(".doit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinuxDebuggerLocal.java:269"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        at sun.jvm.hotspot.debugger.linux.LinuxDebuggerLocal"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LinuxDebuggerLocalWorkerThread")]),t._v(".run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LinuxDebuggerLocal.java:138"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);