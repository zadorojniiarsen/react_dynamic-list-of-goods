(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n.n(r),o=n(8),c=n(1),s=n.n(c),u=n(2),i=n(6),f=n(7),d=n(10),p=n(9),l=n(3),j=n.n(l),h=n(0),b=function(t){var e=t.goods;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})},v=function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(u.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=5,t.next=3,v();case 3:return n=t.sent,t.abrupt("return",n.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,e));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(u.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(t){return"red"===t.color},t.next=3,v();case 3:return n=t.sent,t.abrupt("return",n.filter(e));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t.fetchGoods=function(){var e=Object(u.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:r=e.sent,t.setState({goods:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(f.a)(n,[{key:"render",value:function(){var t=this,e={"Load all goods":v,"Load 5 first goods":m,"Load red goods":O};return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object.entries(e).map((function(e){var n=Object(o.a)(e,2),r=n[0],a=n[1];return Object(h.jsx)("input",{type:"button",value:r,onClick:function(){return t.fetchGoods(a)}},r)})),Object(h.jsx)(b,{goods:this.state.goods})]})})}}]),n}(j.a.Component),x=g;a.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9e4687f2.chunk.js.map