(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{605:function(v,_,t){"use strict";t.r(_);var e=t(2),i=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("Boxx"),v._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul")]),t("p"),v._v(" "),t("p",[v._v("随着互联网用户规模扩大，应用系统数量增加，业务逻辑越来越复杂。传统的单机模式已不能满足需求，今天就从单机到分布式聊聊近些年系统架构的转变。")]),v._v(" "),t("ul",[t("li",[v._v("一个单机式系统需要的架构：")])]),v._v(" "),t("p",[v._v("环境：单台服务器 + 集中式系统")]),v._v(" "),t("p",[v._v("场景：常用在企业内网或用户量少的内管系统")]),v._v(" "),t("ul",[t("li",[v._v("一个分布式系统需要的架构：")])]),v._v(" "),t("p",[v._v("环境：多台服务器 + 分布式系统集群")]),v._v(" "),t("p",[v._v("场景：常用在用户量大或业务量繁杂的大型系统")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/backend/w670h390irtymmw8686038refernsinaim.jpg",alt:"分布式架构图"}})]),v._v(" "),t("p",[v._v("单机系统处理能力"),t("strong",[v._v("瓶颈")]),v._v("主要在CPU、内存、硬盘等，当业务量上来之后只能通过垂直拓展的方式来提升性能，而量级达到一定程度后，单机的稳定性和可用性将受到极大的挑战。")]),v._v(" "),t("p",[v._v("此外单机还存在系统程序级别问题，一旦程序中某段代码出现问题，将影响整个系统的稳定性。")]),v._v(" "),t("p",[v._v("由此，行业由集中式系统慢慢演变为分布式系统架构。")]),v._v(" "),t("p",[v._v("分布式系统常见解决方案主要有：配置中心、注册中心、分布式缓存、分布式唯一ID、分布式消息、分布式任务、分布式事务、链路追踪、监控告警、服务治理等等。")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("以阿波罗饭店的故事为例，上演分布式架构演变历程~")]),v._v(" "),t("p",[v._v("一个遥远的故事：阿波罗饭店的演变历程")]),v._v(" "),t("p",{attrs:{align:"center"}},[t("img",{staticStyle:{"border-radius":"30%","pointer-events":"none",transform:"scale(0.8)"},attrs:{src:v.$withBase("/img/backend/4e97afc27d1ed21b532a9782ba6eddc450da3ffd.gif"),width:"160"}})]),v._v(" "),t("p",[v._v("在远古时期，有一家名为阿波罗的饭店，当客户来的时候，点单、配菜、炒菜都是阿波罗一个人完成。"),t("strong",[v._v("（单机模式）")])]),v._v(" "),t("p",[v._v("起初还好，客户量少于个位数的时候阿波罗一个人就忙过来了。")]),v._v(" "),t("p",[v._v("就这样，又过了一年。")]),v._v(" "),t("p",[v._v("阿波罗口碑传开了，客户量直逼上百，好嘛，阿波罗心想：这可不行啊，这我哪忙的过来呀。")]),v._v(" "),t("p",[v._v("过了两天，憋出来一个办法：我一个人不行，我再多找两个跟我一样的，干一样的活。"),t("strong",[v._v("（于是集群模式就出现了）")])]),v._v(" "),t("p",[v._v("就这样，又过了一年。")]),v._v(" "),t("p",[v._v("阿波罗口碑太好了，人传人都传疯了，客户量直逼上千，好嘛，阿波罗心想：这可不行啊，这就我们三哪忙的过来呀。")]),v._v(" "),t("p",[v._v("过了两天，又憋出来一个办法：我把我们三个人的活分一下，A去点单，B去配菜，C去炒菜。然后A配10个人，B配10个人，C配10个人，这样哪怕其中一个人有事请假了，相同工作的其他人还能继续顶上。"),t("strong",[v._v("（于是分布式系统+集群模式就出现了）")])]),v._v(" "),t("p",{attrs:{align:"center"}},[t("img",{staticStyle:{"border-radius":"30%","pointer-events":"none",transform:"scale(0.8)"},attrs:{src:v.$withBase("/img/backend/f8aec0ef76094b365326a28ab4cc7cd98d109d21.gif"),width:"160"}})]),v._v(" "),t("p",[v._v("刚开始还好，饭店正常运行没啥问题。")]),v._v(" "),t("p",[v._v("突然有一天，饭店乱锅了。。")]),v._v(" "),t("p",[v._v("有一个客户急眼了说：为啥我点单了还没给我上菜呀😡！原来是A1和A8号点单员下单是同一个流水号，导致A8把A1的单覆盖了。（于是分布式序列唯一ID出现了）")]),v._v(" "),t("p",[v._v("另一个客户急眼了说：为啥我点个单这么慢呀😡！原来是点单员A2，A3，A4，A5没来，同时对于每天火爆的菜品也没个记录每次都得问炒菜员。（于是注册中心，分布式缓存出现了）")]),v._v(" "),t("p",[v._v("后来啊，饭店时不时出个问题，于是阿波罗找了一波专业团队从头到尾重新把饭店打造了一番。")]),v._v(" "),t("p",{attrs:{align:"center"}},[t("img",{staticStyle:{"border-radius":"30%","pointer-events":"none",transform:"scale(0.8)"},attrs:{src:v.$withBase("/img/backend/48c832dbb6fd5266b69d8573bc18972bd4073622.gif"),width:"160"}})]),v._v(" "),t("p",[v._v("于是就引出了：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("注册中心：所有人上班、请假都得来我这打卡、申请，防止A偷偷没来B偷偷溜走。")])]),v._v(" "),t("li",[t("p",[v._v("配置中心：所有人有啥事变动后，其他人都可以及时知道。比如配菜员B1说今天胡萝卜没了，然后B2~B10全都了解。")])]),v._v(" "),t("li",[t("p",[v._v("分布式序列：防止点单员A1~A10出现下单重复的情况，并且支持自定义指定规则的订单号。")])]),v._v(" "),t("li",[t("p",[v._v('服务治理：当炒菜员C1在炒一个菜还没出锅的时候，点单员A1、A4、A5一直在催催催，炒菜员就告诉他："正在出锅中，正在出锅中"，而不是告诉他：”老子不干了，老子不干了，老子不！干！了！“')])]),v._v(" "),t("li",[t("p",[v._v("分布式缓存：点单时，对一些常点菜的介绍、配方等，自己脑子里已经有个影响或者拿个本本记下来，不用每次再问炒菜员了；配菜时，对一些常用的菜，提前也能备好。")])]),v._v(" "),t("li",[t("p",[v._v("分布式事务：点单、配菜、炒菜三个步骤要成功都得成功，其中只要有一个步骤出错，那么回退这次单子。")])]),v._v(" "),t("li",[t("p",[v._v("链路追踪：点单、配菜、炒菜，我得知道这次流程到哪个环节了，或者在某个环节出问题了，出的什么问题我得知道。")])])]),v._v(" "),t("p",{attrs:{align:"center"}},[t("img",{staticStyle:{"border-radius":"30%","pointer-events":"none",transform:"scale(0.8)"},attrs:{src:v.$withBase("/img/backend/48c832dbb6fd5266b6c18573bc18972bd50736f6.gif"),width:"160"}})]),v._v(" "),t("p",[v._v("后来阿波罗又开发了美团团、饿了么么，接入了配送员：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("分布式消息：客户在美团团点单并付款后直接返回成功，不用等这阿波罗做完菜交给配送员送到客户手上后再显示成功。")])]),v._v(" "),t("li",[t("p",[v._v("分布式任务：客户在美团团下单后的指定时间内不一定付款，采用定时轮扫的方式将这些订单统统取消掉。")])]),v._v(" "),t("li",[t("p",[v._v("监控告警：对阿波罗的实时的点点滴滴了解的一清二楚，哪个炒菜员有风险，啥时候点单量最大，在任何时间点，当阿波罗出现任何问题的时候，我得知道。")])])]),v._v(" "),t("p",[v._v("OK，今天知道了分布式系统中各组件是干嘛的，下次有时间就来聊聊各组件用到的技术实现。")]),v._v(" "),t("Reward")],1)}),[],!1,null,null,null);_.default=i.exports}}]);