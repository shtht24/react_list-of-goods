(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,o=s(4),r=s.n(o),c=s(5),i=s(6),a=s(9),l=s(7),u=s(8),h=s(2),b=s.n(h),d=(s(14),s(15),s(1)),p=s.n(d),j=s(0),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortType:n.NONE},t.sortGoodsByAlphabet=function(){t.setState({sortType:n.ALPABET})},t.sortGoodsByLength=function(){t.setState({sortType:n.LENGTH})},t.reverseGoods=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,o=function(t,e){var s=e.sortType,o=e.isReversed,r=Object(u.a)(t);return console.log(s,o),r.sort((function(t,e){switch(s){case n.LENGTH:return t.length-e.length;case n.ALPABET:return t.localeCompare(e);case n.NONE:default:return 0}})),o&&r.reverse(),r}(N,this.state),r=s||e!==n.NONE;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":e!==n.ALPABET}),onClick:this.sortGoodsByAlphabet,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":e!==n.LENGTH}),onClick:this.sortGoodsByLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!s}),onClick:this.reverseGoods,children:"Reverse"}),r&&Object(j.jsx)("button",{type:"button",className:p()("button is-danger",{"is-light":!0===s}),onClick:this.reset,children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:o.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(b.a.Component);r.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.58695477.chunk.js.map